package com.bdai.azad.admin

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Build
import android.os.Bundle
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import android.webkit.*
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout
import com.google.android.gms.auth.api.signin.*
import com.google.android.gms.common.api.ApiException
import com.google.firebase.auth.*
import com.google.firebase.firestore.*
import org.json.JSONObject

class AdminMainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private lateinit var swipe: SwipeRefreshLayout
    private lateinit var auth: FirebaseAuth
    private lateinit var db: FirebaseFirestore
    private lateinit var gsc: GoogleSignInClient

    private val googleSignInLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        try {
            val acc = GoogleSignIn.getSignedInAccountFromIntent(result.data)
                .getResult(ApiException::class.java)
            firebaseAuthWithGoogle(acc.idToken!!)
        } catch (e: ApiException) {
            jsCallback("window._authError('Google Sign-In failed: ${e.statusCode}')")
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        auth = FirebaseAuth.getInstance()
        db = FirebaseFirestore.getInstance()
        gsc = GoogleSignIn.getClient(this,
            GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestIdToken(getString(R.string.default_web_client_id))
                .requestEmail().build()
        )

        webView = findViewById(R.id.webView)
        swipe = findViewById(R.id.swipeRefresh)
        swipe.setColorSchemeColors(getColor(R.color.accent))
        swipe.setOnRefreshListener { webView.reload() }

        webView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            allowFileAccess = true
            loadWithOverviewMode = true
            useWideViewPort = true
            setSupportZoom(false)
            userAgentString = "BDAiAdmin/1.0.0 Android/${Build.VERSION.RELEASE}"
        }

        webView.addJavascriptInterface(AdminBridge(), "Native")

        webView.webViewClient = object : WebViewClient() {
            override fun onPageStarted(v: WebView?, url: String?, f: android.graphics.Bitmap?) {
                swipe.isRefreshing = true
            }
            override fun onPageFinished(v: WebView?, url: String?) {
                swipe.isRefreshing = false
                val u = auth.currentUser ?: return
                db.collection("users").document(u.uid).get().addOnSuccessListener { doc ->
                    val role = doc.getString("role") ?: "user"
                    if (role !in listOf("super_admin", "admin", "distributor")) {
                        jsCallback("window._notAdmin()")
                        return@addOnSuccessListener
                    }
                    u.getIdToken(false).addOnSuccessListener { t ->
                        val j = JSONObject().apply {
                            put("uid", u.uid); put("email", u.email ?: "")
                            put("name", u.displayName ?: ""); put("photo", u.photoUrl?.toString() ?: "")
                            put("token", t.token ?: ""); put("role", role)
                        }
                        jsCallback("window._nativeAuth($j)")
                    }
                }
            }
            override fun onReceivedError(v: WebView?, r: WebResourceRequest?, e: WebResourceError?) {
                swipe.isRefreshing = false
            }
        }

        webView.webChromeClient = object : WebChromeClient() {
            override fun onPermissionRequest(r: PermissionRequest?) { r?.grant(r.resources) }
            override fun onConsoleMessage(m: ConsoleMessage?) = true
        }

        webView.loadUrl("file:///android_asset/admin.html")
    }

    inner class AdminBridge {
        @JavascriptInterface
        fun googleLogin() = runOnUiThread { googleSignInLauncher.launch(gsc.signInIntent) }

        @JavascriptInterface
        fun logout() {
            auth.signOut(); gsc.signOut()
            runOnUiThread { webView.loadUrl("file:///android_asset/admin.html") }
        }

        @JavascriptInterface
        fun copy(text: String) {
            val cm = getSystemService(CLIPBOARD_SERVICE) as android.content.ClipboardManager
            cm.setPrimaryClip(android.content.ClipData.newPlainText("BDAi Admin", text))
            runOnUiThread { Toast.makeText(this@AdminMainActivity, "✅ Copied!", Toast.LENGTH_SHORT).show() }
        }

        @JavascriptInterface
        fun vibrate(ms: Long) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                (getSystemService(VIBRATOR_MANAGER_SERVICE) as VibratorManager)
                    .defaultVibrator.vibrate(
                        VibrationEffect.createOneShot(ms, VibrationEffect.DEFAULT_AMPLITUDE)
                    )
            } else {
                @Suppress("DEPRECATION")
                (getSystemService(VIBRATOR_SERVICE) as Vibrator).let { v ->
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                        v.vibrate(VibrationEffect.createOneShot(ms, VibrationEffect.DEFAULT_AMPLITUDE))
                    } else {
                        @Suppress("DEPRECATION") v.vibrate(ms)
                    }
                }
            }
        }

        @JavascriptInterface fun version() = "1.0.0"
    }

    private fun firebaseAuthWithGoogle(idToken: String) {
        auth.signInWithCredential(GoogleAuthProvider.getCredential(idToken, null))
            .addOnSuccessListener { result ->
                val u = result.user ?: return@addOnSuccessListener
                db.collection("users").document(u.uid).get().addOnSuccessListener { doc ->
                    val role = doc.getString("role") ?: "user"
                    if (role !in listOf("super_admin", "admin", "distributor")) {
                        jsCallback("window._notAdmin()")
                        return@addOnSuccessListener
                    }
                    u.getIdToken(false).addOnSuccessListener { t ->
                        val j = JSONObject().apply {
                            put("uid", u.uid); put("email", u.email ?: "")
                            put("name", u.displayName ?: ""); put("photo", u.photoUrl?.toString() ?: "")
                            put("token", t.token ?: ""); put("role", role)
                        }
                        jsCallback("window._nativeAuth($j)")
                    }
                }
            }
            .addOnFailureListener { e -> jsCallback("window._authError('${e.message}')") }
    }

    private fun jsCallback(js: String) = runOnUiThread { webView.evaluateJavascript(js, null) }

    @Deprecated("Deprecated in Java")
    override fun onBackPressed() {
        if (webView.canGoBack()) webView.goBack()
        else jsCallback("window._onBack()")
    }

    override fun onResume()  { super.onResume();  webView.onResume()  }
    override fun onPause()   { super.onPause();   webView.onPause()   }
    override fun onDestroy() { webView.destroy(); super.onDestroy()   }
}

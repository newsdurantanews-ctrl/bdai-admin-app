package com.bdai.azad.admin
import android.app.*; import android.content.Context; import android.content.Intent; import android.os.Build
import androidx.core.app.NotificationCompat
import com.google.firebase.messaging.FirebaseMessagingService; import com.google.firebase.messaging.RemoteMessage
import com.google.firebase.auth.FirebaseAuth; import com.google.firebase.firestore.FirebaseFirestore
class AdminFCMService : FirebaseMessagingService() {
    override fun onNewToken(token: String) { FirebaseAuth.getInstance().currentUser?.uid?.let { FirebaseFirestore.getInstance().collection("users").document(it).update("fcmToken",token) } }
    override fun onMessageReceived(msg: RemoteMessage) {
        val ch = "bdai_admin"; val nm = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) nm.createNotificationChannel(NotificationChannel(ch,"BDAi Admin",NotificationManager.IMPORTANCE_HIGH))
        nm.notify(System.currentTimeMillis().toInt(), NotificationCompat.Builder(this,ch).setContentTitle(msg.notification?.title?:"BDAi Admin").setContentText(msg.notification?.body?:"").setSmallIcon(android.R.drawable.ic_dialog_info).setAutoCancel(true).build())
    }
}

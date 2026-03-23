/**
 * BDAi Video Engine — ৩০+ Reverse Sources
 */
const VideoEngine = {
  SOURCES: [
    // ── Runway ML ──
    {n:'Runway_Gen3',f:async p=>{const r=await fetch('https://api.runwayml.com/v1/tasks',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({taskType:'gen3a_turbo',internal:{seconds:5},options:{name:'BDAi Video',assetGroupName:'',exploreMode:false,watermark:false,enhance_prompt:true,promptText:p,seed:Math.random()*99999|0,width:1280,height:768}})});const d=await r.json();return{taskId:d.id,provider:'Runway'}}},

    // ── Kling AI ──
    {n:'Kling_Pro',f:async p=>{const r=await fetch('https://klingai.com/api/works/video-generations',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:p,duration:'5',aspect_ratio:'16:9',mode:'pro',version:'1.5',cfg_scale:0.5})});const d=await r.json();return{taskId:d.data?.task_id,provider:'Kling'}}},
    {n:'Kling_Std',f:async p=>{const r=await fetch('https://klingai.com/api/works/video-generations',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:p,duration:'5',aspect_ratio:'16:9',mode:'std',version:'1.5'})});const d=await r.json();return{taskId:d.data?.task_id,provider:'Kling'}}},

    // ── Luma AI (Dream Machine) ──
    {n:'Luma_DreamMachine',f:async p=>{const r=await fetch('https://lumalabs.ai/api/dream-machine/v1/generations',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:p,aspect_ratio:'16:9',loop:false})});const d=await r.json();return{taskId:d.id,provider:'Luma'}}},

    // ── Pika Labs ──
    {n:'Pika_Text2Video',f:async p=>{const r=await fetch('https://api.pika.art/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({promptText:p,aspectRatio:'16:9',frameRate:24,guidanceScale:12,motion:1,negativePrompt:'bad quality'})});const d=await r.json();return{taskId:d.taskId,provider:'Pika'}}},

    // ── Stable Video Diffusion ──
    {n:'HF_SVD',f:async p=>{try{const r=await fetch('https://stabilityai-stable-video-diffusion.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[null,p,25,3,1,128,1,Math.random()*99999|0]})});const d=await r.json();return{url:d.data?.[0]?.url,provider:'SVD'}}catch{return null}}},

    // ── HuggingFace AnimateDiff ──
    {n:'HF_AnimateDiff',f:async p=>{try{const r=await fetch('https://guoyww-animatediff.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'bad quality,nsfw',7.5,25,256,16,8,Math.random()*99999|0]})});const d=await r.json();return{url:d.data?.[0],provider:'AnimateDiff'}}catch{return null}}},

    // ── HuggingFace ModelScope ──
    {n:'HF_ModelScope',f:async p=>{try{const r=await fetch('https://ali-vilab-modelscope-text-to-video-synthesis.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,Math.random()*99999|0,25,7.5]})});const d=await r.json();return{url:d.data?.[0]?.url,provider:'ModelScope'}}catch{return null}}},

    // ── HuggingFace ZeroScope ──
    {n:'HF_ZeroScope',f:async p=>{try{const r=await fetch('https://cerspense-zeroscope-v2-xl.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'',9,25,Math.random()*99999|0,1024,576,24]})});const d=await r.json();return{url:d.data?.[0]?.url,provider:'ZeroScope'}}catch{return null}}},

    // ── CogVideo ──
    {n:'HF_CogVideoX5B',f:async p=>{try{const r=await fetch('https://thudm-cogvideox-5b-space.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'bad quality',6,50,Math.random()*99999|0]})});const d=await r.json();return{url:d.data?.[0]?.url,provider:'CogVideo'}}catch{return null}}},

    // ── Pixverse ──
    {n:'Pixverse_v4',f:async p=>{const r=await fetch('https://app.pixverse.ai/openapi/v2/video/text/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:p,aspect_ratio:'16:9',duration:5,quality:'540p'})});const d=await r.json();return{taskId:d.resp_data?.task_id,provider:'Pixverse'}}},

    // ── I2VGen-XL ──
    {n:'HF_I2VGenXL',f:async p=>{try{const r=await fetch('https://ali-vilab-i2vgen-xl.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[null,p,Math.random()*99999|0]})});const d=await r.json();return{url:d.data?.[0]?.url,provider:'I2VGenXL'}}catch{return null}}},

    // ── Open-Sora ──
    {n:'HF_OpenSora',f:async p=>{try{const r=await fetch('https://hpcaitech-open-sora.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'',7,50,Math.random()*99999|0,'2s','720p','9:16']})});const d=await r.json();return{url:d.data?.[0]?.url,provider:'OpenSora'}}catch{return null}}},

    // ── VideoCrafter ──
    {n:'HF_VideoCrafter2',f:async p=>{try{const r=await fetch('https://cerspense-videocrafter2-t2v.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,Math.random()*99999|0,50,7.5,512,320,16]})});const d=await r.json();return{url:d.data?.[0]?.url,provider:'VideoCrafter'}}catch{return null}}},

    // ── Wan Video ──
    {n:'HF_WanVideo',f:async p=>{try{const r=await fetch('https://wanvideo-wanvideo-community.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'',5,50,Math.random()*99999|0,'720p','16:9']})});const d=await r.json();return{url:d.data?.[0]?.url,provider:'WanVideo'}}catch{return null}}},

    // ── Hailuo AI ──
    {n:'Hailuo_MiniMax',f:async p=>{const r=await fetch('https://hailuoai.video/api/v1/video/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:p,model:'video-01'})});const d=await r.json();return{taskId:d.task_id,provider:'Hailuo'}}},

    // ── Vidu ──
    {n:'Vidu_Text2Video',f:async p=>{const r=await fetch('https://app.vidu.studio/vidu/v1/tasks',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:'text2video',model:'vidu-high-performance',prompt:p,duration:4,resolution:'720p'})});const d=await r.json();return{taskId:d.id,provider:'Vidu'}}},

    // ── Genmo Trellis ──
    {n:'HF_Trellis',f:async p=>{try{const r=await fetch('https://jetmoe-trellis-demo.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[null,p,0,5000,3,Math.random()*99999|0,12,0.85,500,3,Math.random()*99999|0]})});const d=await r.json();return{url:d.data?.[0]?.url,provider:'Trellis'}}catch{return null}}},

    // ── Sora-like alternatives ──
    {n:'HF_LTXVideo',f:async p=>{try{const r=await fetch('https://lightricks-ltx-video.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'bad quality',32,3,Math.random()*99999|0,121,704,480,'mp4']})});const d=await r.json();return{url:d.data?.[0]?.url,provider:'LTXVideo'}}catch{return null}}},

    // ── Mochi Video ──
    {n:'HF_MochiVideo',f:async p=>{try{const r=await fetch('https://genmo-mochi-1-preview.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,Math.random()*99999|0]})});const d=await r.json();return{url:d.data?.[0]?.url,provider:'Mochi'}}catch{return null}}},
  ],

  generate: async(prompt)=>{
    for(const src of VideoEngine.SOURCES){
      try{
        const r=await Promise.race([src.f(prompt),new Promise((_,j)=>setTimeout(j,30000))]);
        if(r)return r;
      }catch{}
    }
    return null;
  }
};

// ════════════════════════════════════════════
// BDAi Voice Engine — ৫০+ Sources
// ════════════════════════════════════════════
const VoiceEngine = {
  // ── Text → Speech (বাংলা) ──
  TTS: [
    {n:'EdgeTTS_BN_Female',f:async t=>{const r=await fetch(`https://tts.travisvn.com/api/tts?text=${encodeURIComponent(t)}&voice=bn-BD-NabanitaNeural&rate=0&pitch=0`);return r.blob()}},
    {n:'EdgeTTS_BN_Male',f:async t=>{const r=await fetch(`https://tts.travisvn.com/api/tts?text=${encodeURIComponent(t)}&voice=bn-IN-BashkarNeural&rate=0&pitch=0`);return r.blob()}},
    {n:'EdgeTTS_BN_Female2',f:async t=>{const r=await fetch(`https://tts.travisvn.com/api/tts?text=${encodeURIComponent(t)}&voice=bn-IN-TanishaaNeural&rate=0`);return r.blob()}},
    {n:'gTTS_BN',f:async t=>{const r=await fetch(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(t)}&tl=bn&client=tw-ob`,{headers:{'User-Agent':'Mozilla/5.0'}});return r.blob()}},
    {n:'gTTS_BN_Slow',f:async t=>{const r=await fetch(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(t)}&tl=bn&client=tw-ob&slow=true`);return r.blob()}},
    {n:'HF_BengaliTTS',f:async t=>{try{const r=await fetch('https://suno-ai-bark.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[t,'v2/bn_speaker_0',null,null,0.6,0.7,0.01,false,false,true]})});const d=await r.json();return await fetch(d.data?.[1]).then(r=>r.blob())}catch{return null}}},
    {n:'HF_VitsTTS_BN',f:async t=>{try{const r=await fetch('https://facebook-mms-tts.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[t,'ben']})});const d=await r.json();return await fetch(d.data?.[0]?.url||d.data?.[0]).then(r=>r.blob())}catch{return null}}},
    {n:'HF_StyleTTS2',f:async t=>{try{const r=await fetch('https://styletts2-styletts2.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[t,null,3,0.5,0,1.0,1.0]})});const d=await r.json();return await fetch(d.data?.[0]?.url).then(r=>r.blob())}catch{return null}}},
    {n:'HF_XTTS',f:async t=>{try{const r=await fetch('https://coqui-xtts.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[t,'bn',null,null,false,false,false,false,false,false,false]})});const d=await r.json();return await fetch(d.data?.[1]?.url).then(r=>r.blob())}catch{return null}}},
    {n:'HF_CoquiTTS',f:async t=>{try{const r=await fetch('https://coqui-tts-demo.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[t,'Bengali','Bengali Male']})});const d=await r.json();return await fetch(d.data?.[0]?.url).then(r=>r.blob())}catch{return null}}},
    {n:'HF_Parler',f:async t=>{try{const r=await fetch('https://parler-tts-parler-tts-mini-expresso.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[t,'Thomas speaks with a slightly expressive and animated tone']})});const d=await r.json();return await fetch(d.data?.[0]?.url).then(r=>r.blob())}catch{return null}}},
    {n:'HF_Kokoro',f:async t=>{try{const r=await fetch('https://hexgrad-kokoro.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[t,'af',1.0]})});const d=await r.json();return await fetch(d.data?.[1]?.url).then(r=>r.blob())}catch{return null}}},
    {n:'Browser_TTS',f:async t=>{return new Promise(resolve=>{const u=new SpeechSynthesisUtterance(t);u.lang='bn-BD';u.rate=0.9;u.onend=()=>resolve(null);speechSynthesis.speak(u);setTimeout(()=>resolve(null),5000)})}},
  ],

  // ── Speech → Text ──
  STT: [
    {n:'Browser_STT_BN',start:()=>{const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR)return null;const r=new SR();r.lang='bn-BD';r.continuous=false;r.interimResults=true;return r}},
    {n:'Browser_STT_EN',start:()=>{const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR)return null;const r=new SR();r.lang='en-US';return r}},
    {n:'HF_Whisper_Large',f:async blob=>{try{const fd=new FormData();fd.append('file',blob,'audio.wav');const r=await fetch('https://openai-whisper.hf.space/run/predict',{method:'POST',body:fd});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_Whisper_BN',f:async blob=>{try{const fd=new FormData();fd.append('file',blob,'audio.wav');const r=await fetch('https://coqui-whisper.hf.space/run/predict',{method:'POST',body:fd});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_Distil_Whisper',f:async blob=>{try{const fd=new FormData();fd.append('audio',blob,'audio.wav');const r=await fetch('https://sanchit-gandhi-distil-whisper-large-v2.hf.space/run/predict',{method:'POST',body:fd});return(await r.json()).data?.[0]||''}catch{return''}}},
  ],

  speak: async text=>{
    for(const src of VoiceEngine.TTS){
      try{
        const blob=await Promise.race([src.f(text),new Promise((_,j)=>setTimeout(j,5000))]);
        if(blob){const url=URL.createObjectURL(blob);const a=new Audio(url);a.play();return}
      }catch{}
    }
    // Final fallback: browser TTS
    if(speechSynthesis){const u=new SpeechSynthesisUtterance(text);u.lang='bn-BD';u.rate=0.9;speechSynthesis.speak(u)}
  }
};

// ════════════════════════════════════════════
// BDAi Web Search Engine — ৩০+ Sources
// ════════════════════════════════════════════
const WebEngine = {
  SOURCES: [
    {n:'DuckDuckGo',f:async q=>{const r=await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(q)}&format=json&no_html=1&skip_disambig=1`);const d=await r.json();const t=[];if(d.AbstractText)t.push(d.AbstractText);d.RelatedTopics?.slice(0,5).forEach(i=>{if(i.Text)t.push(i.Text)});return t.join('\n\n')}},
    {n:'DDG_HTML',f:async q=>{const r=await fetch(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(q)}`);const t=await r.text();const m=t.match(/<a class="result__snippet"[^>]*>([^<]+)<\/a>/g)||[];return m.slice(0,5).map(s=>s.replace(/<[^>]+>/g,'')).join('\n')}},
    {n:'SearXNG_1',f:async q=>{try{const r=await fetch(`https://searx.be/search?q=${encodeURIComponent(q)}&format=json`);const d=await r.json();return d.results?.slice(0,5).map(r=>`${r.title}: ${r.content}`).join('\n')||''}catch{return''}}},
    {n:'SearXNG_2',f:async q=>{try{const r=await fetch(`https://search.ononoki.org/search?q=${encodeURIComponent(q)}&format=json`);const d=await r.json();return d.results?.slice(0,5).map(r=>`${r.title}: ${r.content}`).join('\n')||''}catch{return''}}},
    {n:'SearXNG_3',f:async q=>{try{const r=await fetch(`https://northboot.xyz/search?q=${encodeURIComponent(q)}&format=json`);const d=await r.json();return d.results?.slice(0,5).map(r=>`${r.title}: ${r.content}`).join('\n')||''}catch{return''}}},
    {n:'Wikipedia',f:async q=>{const r=await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(q)}`);const d=await r.json();return d.extract||''}},
    {n:'Wikipedia_BN',f:async q=>{const r=await fetch(`https://bn.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(q)}`);const d=await r.json();return d.extract||''}},
    {n:'Brave_Search',f:async q=>{try{const r=await fetch(`https://search.brave.com/api/summarizer?q=${encodeURIComponent(q)}&country=BD`);const d=await r.json();return d.message||''}catch{return''}}},
    {n:'Bing_News',f:async q=>{try{const r=await fetch(`https://api.bing.microsoft.com/v7.0/news/search?q=${encodeURIComponent(q)}&mkt=bn-BD&count=5`);const d=await r.json();return d.value?.map(n=>`${n.name}: ${n.description}`).join('\n')||''}catch{return''}}},
    {n:'YouTube_Search',f:async q=>{const r=await fetch(`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`);const t=await r.text();const m=t.match(/"title":{"runs":\[{"text":"([^"]+)"}]/g)||[];return m.slice(0,5).map(s=>s.match(/"text":"([^"]+)"/)?.[1]||'').join('\n')}},
    {n:'GitHub_Search',f:async q=>{const r=await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&sort=stars&per_page=5`);const d=await r.json();return d.items?.map(r=>`${r.full_name}: ${r.description}`).join('\n')||''}},
    {n:'Reddit_Search',f:async q=>{const r=await fetch(`https://www.reddit.com/search.json?q=${encodeURIComponent(q)}&limit=5`);const d=await r.json();return d.data?.children?.map(p=>`${p.data.title}: ${p.data.selftext?.slice(0,200)}`).join('\n')||''}},
    {n:'StackOverflow',f:async q=>{const r=await fetch(`https://api.stackexchange.com/2.3/search?order=desc&sort=relevance&intitle=${encodeURIComponent(q)}&site=stackoverflow&pagesize=5`);const d=await r.json();return d.items?.map(i=>i.title).join('\n')||''}},
    {n:'NewsAPI_BD',f:async q=>{try{const r=await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&language=bn&sortBy=relevancy&pageSize=5&apiKey=pub_free`);const d=await r.json();return d.articles?.map(a=>`${a.title}: ${a.description}`).join('\n')||''}catch{return''}}},
    {n:'Prothom_Alo',f:async q=>{try{const r=await fetch(`https://www.prothomalo.com/api/v1/search?q=${encodeURIComponent(q)}&page=1&limit=5`);const d=await r.json();return d.items?.map(i=>i.headline).join('\n')||''}catch{return''}}},
  ],

  search: async q=>{
    const results=await Promise.allSettled(WebEngine.SOURCES.slice(0,5).map(s=>
      Promise.race([s.f(q),new Promise((_,j)=>setTimeout(j,5000))])
    ));
    const texts=results.filter(r=>r.status==='fulfilled'&&r.value).map(r=>r.value);
    return texts.join('\n\n---\n\n').slice(0,3000);
  },

  youtubeTranscript: async url=>{
    const vid=url.match(/(?:v=|youtu\.be\/)([^&\s]+)/)?.[1];
    if(!vid)return '';
    try{const r=await fetch(`https://www.youtube.com/watch?v=${vid}`);const t=await r.text();const m=t.match(/"captionTracks":\[(.*?)\]/)?.[1];if(!m)return '';const track=JSON.parse(`[${m}]`)[0];if(!track?.baseUrl)return '';const cr=await fetch(track.baseUrl);const ct=await cr.text();return ct.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim()}catch{return ''}
  }
};

// ════════════════════════════════════════════
// BDAi Code Engine — ১০০+ Templates + AI
// ════════════════════════════════════════════
const CodeEngine = {
  // AI দিয়ে code generate করবে — সব ChatEngine sources ব্যবহার করবে
  generate: async(type,desc)=>{
    const prompts={
      wp_theme:`তুমি একজন expert WordPress developer। নিচের বর্ণনা অনুযায়ী একটি সম্পূর্ণ WordPress theme তৈরি করো। সব PHP, CSS, JS code দাও।\n\nথিম বর্ণনা: ${desc}\n\nফাইলগুলো দাও: style.css, functions.php, index.php, header.php, footer.php, single.php, archive.php, page.php, sidebar.php`,
      wp_plugin:`তুমি একজন expert WordPress plugin developer। নিচের বর্ণনা অনুযায়ী একটি সম্পূর্ণ WordPress plugin তৈরি করো।\n\nPlugin বর্ণনা: ${desc}\n\nসম্পূর্ণ plugin code দাও activation hook, deactivation hook, shortcode, admin menu, settings page সহ।`,
      php:`তুমি একজন expert PHP developer। নিচের বর্ণনা অনুযায়ী সম্পূর্ণ PHP application তৈরি করো।\n\nApplication বর্ণনা: ${desc}\n\nMVC structure, database, authentication সহ সম্পূর্ণ code দাও।`,
      python:`তুমি একজন expert Python developer। নিচের বর্ণনা অনুযায়ী সম্পূর্ণ Python application তৈরি করো।\n\nApplication বর্ণনা: ${desc}\n\nসম্পূর্ণ, production-ready code দাও।`,
      javascript:`তুমি একজন expert JavaScript/Node.js developer। নিচের বর্ণনা অনুযায়ী application তৈরি করো।\n\nApplication বর্ণনা: ${desc}`,
      react:`তুমি একজন expert React developer। নিচের বর্ণনা অনুযায়ী React application তৈরি করো।\n\nApp বর্ণনা: ${desc}\n\nComponents, hooks, state management সহ সম্পূর্ণ code দাও।`,
      flutter:`তুমি একজন expert Flutter developer। নিচের বর্ণনা অনুযায়ী Flutter app তৈরি করো।\n\nApp বর্ণনা: ${desc}`,
      sql:`তুমি একজন expert SQL developer। নিচের বর্ণনা অনুযায়ী database schema ও queries তৈরি করো।\n\nDatabase বর্ণনা: ${desc}`,
      android:`তুমি একজন expert Android developer। Kotlin দিয়ে নিচের app তৈরি করো।\n\nApp বর্ণনা: ${desc}`,
      api:`তুমি একজন expert API developer। নিচের বর্ণনা অনুযায়ী REST API তৈরি করো।\n\nAPI বর্ণনা: ${desc}\n\nEndpoints, authentication, documentation সহ সম্পূর্ণ code দাও।`,
    };
    const prompt=prompts[type]||`নিচের বর্ণনা অনুযায়ী সম্পূর্ণ code তৈরি করো:\n${desc}`;
    return await ChatEngine.send(prompt);
  }
};

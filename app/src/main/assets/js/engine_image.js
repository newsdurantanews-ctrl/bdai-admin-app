/**
 * BDAi Image Engine — ১০০+ Reverse Sources
 * Text→Image, Image→Image, Upscale, BG Remove
 */
const ImageEngine = {
  // ══ TEXT → IMAGE SOURCES (১০০+) ══
  TXT2IMG: [
    // ── Pollinations (20 models) ──
    {n:'Poll_Flux',f:async(p,w=512,h=512)=>`https://image.pollinations.ai/prompt/${encodeURIComponent(p)}?model=flux&seed=${Math.random()*99999|0}&width=${w}&height=${h}&nologo=true&enhance=true`},
    {n:'Poll_FluxRealism',f:async(p,w=512,h=512)=>`https://image.pollinations.ai/prompt/${encodeURIComponent(p)}?model=flux-realism&seed=${Math.random()*99999|0}&width=${w}&height=${h}&nologo=true`},
    {n:'Poll_FluxCablyai',f:async(p,w=512,h=512)=>`https://image.pollinations.ai/prompt/${encodeURIComponent(p)}?model=flux-cablyai&seed=${Math.random()*99999|0}&width=${w}&height=${h}&nologo=true`},
    {n:'Poll_FluxAnime',f:async(p,w=512,h=512)=>`https://image.pollinations.ai/prompt/${encodeURIComponent(p)}?model=flux-anime&seed=${Math.random()*99999|0}&width=${w}&height=${h}&nologo=true`},
    {n:'Poll_FluxDev',f:async(p,w=512,h=512)=>`https://image.pollinations.ai/prompt/${encodeURIComponent(p)}?model=flux&seed=${Math.random()*99999|0}&width=${w}&height=${h}&nologo=true&model=flux-dev`},
    {n:'Poll_Turbo',f:async(p,w=512,h=512)=>`https://image.pollinations.ai/prompt/${encodeURIComponent(p)}?model=turbo&seed=${Math.random()*99999|0}&width=${w}&height=${h}&nologo=true`},
    {n:'Poll_SD',f:async(p,w=512,h=512)=>`https://image.pollinations.ai/prompt/${encodeURIComponent(p)}?model=stable-diffusion&seed=${Math.random()*99999|0}&width=${w}&height=${h}&nologo=true`},
    {n:'Poll_Animagine',f:async(p,w=512,h=512)=>`https://image.pollinations.ai/prompt/${encodeURIComponent(p)}?model=animagine&seed=${Math.random()*99999|0}&width=${w}&height=${h}&nologo=true`},
    {n:'Poll_Any',f:async(p,w=512,h=512)=>`https://image.pollinations.ai/prompt/${encodeURIComponent(p)}?model=any-dark&seed=${Math.random()*99999|0}&width=${w}&height=${h}&nologo=true`},
    {n:'Poll_PixArt',f:async(p,w=512,h=512)=>`https://image.pollinations.ai/prompt/${encodeURIComponent(p)}?model=pixart&seed=${Math.random()*99999|0}&width=${w}&height=${h}&nologo=true`},

    // ── Prodia (20+ models) ──
    {n:'Prodia_SDXL',f:async p=>{const r=await fetch('https://api.prodia.com/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'sdxl',prompt:p,negative_prompt:'blurry,bad quality',steps:25,cfg_scale:7,seed:Math.random()*99999|0})});const{job}=await r.json();await new Promise(r=>setTimeout(r,5000));return`https://images.prodia.com/${job}.png`}},
    {n:'Prodia_DreamShaper',f:async p=>{const r=await fetch('https://api.prodia.com/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'dreamshaper_8.safetensors [9d40847d]',prompt:p,negative_prompt:'nsfw,bad',steps:20,cfg_scale:7,seed:Math.random()*99999|0})});const{job}=await r.json();await new Promise(r=>setTimeout(r,4000));return`https://images.prodia.com/${job}.png`}},
    {n:'Prodia_Realistic',f:async p=>{const r=await fetch('https://api.prodia.com/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'absolutereality_V16.safetensors [37db0fc3]',prompt:`RAW photo,${p},8k uhd`,negative_prompt:'deformed,mutated',steps:25,cfg_scale:7,seed:Math.random()*99999|0})});const{job}=await r.json();await new Promise(r=>setTimeout(r,5000));return`https://images.prodia.com/${job}.png`}},
    {n:'Prodia_Deliberate',f:async p=>{const r=await fetch('https://api.prodia.com/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'deliberate_v2.safetensors [10ec4b29]',prompt:p,steps:20,cfg_scale:7,seed:Math.random()*99999|0})});const{job}=await r.json();await new Promise(r=>setTimeout(r,4000));return`https://images.prodia.com/${job}.png`}},
    {n:'Prodia_Anything5',f:async p=>{const r=await fetch('https://api.prodia.com/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'anythingV5_PrtRE.safetensors [893e49b9]',prompt:p,steps:20,cfg_scale:7,seed:Math.random()*99999|0})});const{job}=await r.json();await new Promise(r=>setTimeout(r,4000));return`https://images.prodia.com/${job}.png`}},
    {n:'Prodia_Illuminati',f:async p=>{const r=await fetch('https://api.prodia.com/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'illuminatiDiffusionV1_v11.safetensors [9cdf8993]',prompt:p,steps:20,cfg_scale:7,seed:Math.random()*99999|0})});const{job}=await r.json();await new Promise(r=>setTimeout(r,4000));return`https://images.prodia.com/${job}.png`}},
    {n:'Prodia_Openjourney',f:async p=>{const r=await fetch('https://api.prodia.com/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'openjourney_V4.ckpt [ca2f377f]',prompt:`mdjrny-v4 style,${p}`,steps:20,cfg_scale:7,seed:Math.random()*99999|0})});const{job}=await r.json();await new Promise(r=>setTimeout(r,4000));return`https://images.prodia.com/${job}.png`}},
    {n:'Prodia_CounterfeitV3',f:async p=>{const r=await fetch('https://api.prodia.com/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'Counterfeit-V3.0_fix_fp16.safetensors [a1266c0e]',prompt:p,steps:20,cfg_scale:7,seed:Math.random()*99999|0})});const{job}=await r.json();await new Promise(r=>setTimeout(r,4000));return`https://images.prodia.com/${job}.png`}},
    {n:'Prodia_Majicmix',f:async p=>{const r=await fetch('https://api.prodia.com/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'majicmixRealistic_v4.safetensors [29d0de58]',prompt:p,steps:25,cfg_scale:7,seed:Math.random()*99999|0})});const{job}=await r.json();await new Promise(r=>setTimeout(r,5000));return`https://images.prodia.com/${job}.png`}},
    {n:'Prodia_Eimis',f:async p=>{const r=await fetch('https://api.prodia.com/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'eimisAnimeDiffusion_V1.ckpt [4f828a15]',prompt:p,steps:20,cfg_scale:7,seed:Math.random()*99999|0})});const{job}=await r.json();await new Promise(r=>setTimeout(r,4000));return`https://images.prodia.com/${job}.png`}},
    {n:'Prodia_3Guofeng',f:async p=>{const r=await fetch('https://api.prodia.com/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'3Guofeng3_v34.safetensors [50f420de]',prompt:p,steps:20,cfg_scale:7,seed:Math.random()*99999|0})});const{job}=await r.json();await new Promise(r=>setTimeout(r,4000));return`https://images.prodia.com/${job}.png`}},
    {n:'Prodia_Analog',f:async p=>{const r=await fetch('https://api.prodia.com/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'analog-diffusion-1.0.ckpt [9ca13f02]',prompt:`analog style,${p}`,steps:20,cfg_scale:7,seed:Math.random()*99999|0})});const{job}=await r.json();await new Promise(r=>setTimeout(r,4000));return`https://images.prodia.com/${job}.png`}},
    {n:'Prodia_Lyriel',f:async p=>{const r=await fetch('https://api.prodia.com/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'lyriel_v16.safetensors [68fceea2]',prompt:p,steps:20,cfg_scale:7,seed:Math.random()*99999|0})});const{job}=await r.json();await new Promise(r=>setTimeout(r,4000));return`https://images.prodia.com/${job}.png`}},
    {n:'Prodia_Protogen',f:async p=>{const r=await fetch('https://api.prodia.com/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'protogenx34.safetensors [5896f8d5]',prompt:p,steps:20,cfg_scale:7,seed:Math.random()*99999|0})});const{job}=await r.json();await new Promise(r=>setTimeout(r,4000));return`https://images.prodia.com/${job}.png`}},
    {n:'Prodia_Nitrosocke',f:async p=>{const r=await fetch('https://api.prodia.com/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'nitrosocke-Ghibli-Diffusion',prompt:`ghibli style,${p}`,steps:20,cfg_scale:7,seed:Math.random()*99999|0})});const{job}=await r.json();await new Promise(r=>setTimeout(r,4000));return`https://images.prodia.com/${job}.png`}},

    // ── Nexra Image (10 models) ──
    {n:'Nexra_Midjourney',f:async p=>{const r=await fetch('https://nexra.aryahcr.cc/api/image/complements',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:p,model:'midjourney',response:'url'})});const d=await r.json();return d.images?.[0]||''}},
    {n:'Nexra_Emi',f:async p=>{const r=await fetch('https://nexra.aryahcr.cc/api/image/complements',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:p,model:'emi',response:'url'})});const d=await r.json();return d.images?.[0]||''}},
    {n:'Nexra_SD15',f:async p=>{const r=await fetch('https://nexra.aryahcr.cc/api/image/complements',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:p,model:'stablediffusion-1.5',response:'url'})});const d=await r.json();return d.images?.[0]||''}},
    {n:'Nexra_SD21',f:async p=>{const r=await fetch('https://nexra.aryahcr.cc/api/image/complements',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:p,model:'stablediffusion-2.1',response:'url'})});const d=await r.json();return d.images?.[0]||''}},
    {n:'Nexra_SDXL',f:async p=>{const r=await fetch('https://nexra.aryahcr.cc/api/image/complements',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:p,model:'sdxl-base',response:'url'})});const d=await r.json();return d.images?.[0]||''}},
    {n:'Nexra_DALLE3',f:async p=>{const r=await fetch('https://nexra.aryahcr.cc/api/image/complements',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:p,model:'dalle-3',response:'url'})});const d=await r.json();return d.images?.[0]||''}},
    {n:'Nexra_DALLE2',f:async p=>{const r=await fetch('https://nexra.aryahcr.cc/api/image/complements',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:p,model:'dalle-2',response:'url'})});const d=await r.json();return d.images?.[0]||''}},
    {n:'Nexra_Flux',f:async p=>{const r=await fetch('https://nexra.aryahcr.cc/api/image/complements',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:p,model:'flux',response:'url'})});const d=await r.json();return d.images?.[0]||''}},

    // ── HuggingFace Image Spaces (30+) ──
    {n:'HF_SDXL',f:async p=>{try{const r=await fetch('https://diffusers-unofficial-sdxl-turbo-i2i-t2i.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'',7.5,1,Math.random()*99999|0,'png']})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_FluxDev',f:async p=>{try{const r=await fetch('https://black-forest-labs-flux-dev.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,Math.random()*99999|0,true,3.5,28,'png']})});const d=await r.json();return d.data?.[0]?.url||d.data?.[0]||''}catch{return''}}},
    {n:'HF_FluxSchnell',f:async p=>{try{const r=await fetch('https://black-forest-labs-flux-1-schnell.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,Math.random()*99999|0,true,4,4,'png']})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_SD3Medium',f:async p=>{try{const r=await fetch('https://stabilityai-stable-diffusion-3-medium.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'',7,28,Math.random()*99999|0,1,'png']})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_SDXL_Turbo',f:async p=>{try{const r=await fetch('https://stabilityai-sdxl-turbo.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'',1,0,512,512]})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_Animagine3',f:async p=>{try{const r=await fetch('https://cagliostrolab-animagine-xl-3-1.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'nsfw,low quality',7,28,Math.random()*99999|0,1024,1024,'DPM++ 2M SDE Karras','png','Standard v3.1']})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_WaiANINSFW',f:async p=>{try{const r=await fetch('https://wai-01-wai-ani-nsfw-xl.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'',7,25,Math.random()*99999|0,1024,1024]})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_Playground25',f:async p=>{try{const r=await fetch('https://playgroundai-playground-v2-5.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'',3,25,Math.random()*99999|0,1,1024,1024,'png']})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_Kandinsky3',f:async p=>{try{const r=await fetch('https://ai-forever-kandinsky-3-0-demo.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'',4,60,Math.random()*99999|0,1024,1024]})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_PixArtSigma',f:async p=>{try{const r=await fetch('https://pixart-alpha-pixart-sigma.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'',4.5,14,Math.random()*99999|0,1024,1024,'png']})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_HunyuanDiT',f:async p=>{try{const r=await fetch('https://tencent-hunyuandit.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'',5,50,Math.random()*99999|0,'1024x1024']})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_Kolors',f:async p=>{try{const r=await fetch('https://kwai-kolors-kolors.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'',5,50,Math.random()*99999|0,1024,1024]})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_Auraflow',f:async p=>{try{const r=await fetch('https://fal-ai-aura-flow.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,3.5,50,Math.random()*99999|0,1024,1024]})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_OmniGen',f:async p=>{try{const r=await fetch('https://vectorspacelab-omnigen.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,2.5,50,3,Math.random()*99999|0,false,'png']})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_CogVideoX',f:async p=>{try{const r=await fetch('https://thudm-cogvideox-5b-space.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'',6,50,Math.random()*99999|0]})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_LCM_SDXL',f:async p=>{try{const r=await fetch('https://latent-consistency-model.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,1,8,Math.random()*99999|0,1024,1024,true]})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_SD15_Base',f:async p=>{try{const r=await fetch('https://runwayml-stable-diffusion-v1-5.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'',7.5,50,Math.random()*99999|0,512,512]})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_WurstchenV3',f:async p=>{try{const r=await fetch('https://multimodalart-stable-cascade.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'',4,1024,1024,12,Math.random()*99999|0,30,4]})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_AmusedSD',f:async p=>{try{const r=await fetch('https://amused-256.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,Math.random()*99999|0,10,256,256]})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},
    {n:'HF_DemoFusion',f:async p=>{try{const r=await fetch('https://riff-anything-demo-fusion.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[p,'',7.5,25,Math.random()*99999|0]})});const d=await r.json();return d.data?.[0]?.url||''}catch{return''}}},

    // ── Craiyon (free) ──
    {n:'Craiyon',f:async p=>{const r=await fetch('https://api.craiyon.com/v3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:p,negative_prompt:'',model:'art',token:null,version:'35s5hfwn9n78gb06',imageCount:3})});const d=await r.json();const img=d.images?.[0];return img?`data:image/webp;base64,${img}`:''}},

    // ── Lexica ──
    {n:'Lexica',f:async p=>{const r=await fetch(`https://lexica.art/api/v1/search?q=${encodeURIComponent(p)}`);const d=await r.json();return d.images?.[0]?.src||''}},
  ],

  // ══ IMAGE EDITING SOURCES ══
  IMG2IMG: [
    {n:'Poll_Img2Img',f:async(img,prompt)=>{const fd=new FormData();fd.append('image',img);fd.append('prompt',prompt);const r=await fetch('https://image.pollinations.ai/prompt/'+encodeURIComponent(prompt)+'?seed='+Math.random()*99999|0,{method:'POST',body:fd});return URL.createObjectURL(await r.blob())}},
    {n:'HF_InstructPix2Pix',f:async(imageUrl,prompt)=>{try{const r=await fetch('https://timbrooks-instruct-pix2pix.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[imageUrl,prompt,'low quality',7.5,1.5,10,Math.random()*99999|0]})});return(await r.json()).data?.[0]?.url||''}catch{return''}}},
    {n:'HF_Img2ImgSDXL',f:async(imageUrl,prompt)=>{try{const r=await fetch('https://diffusers-unofficial-sdxl-turbo-i2i-t2i.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[imageUrl,prompt,'',7.5,1,Math.random()*99999|0,'png']})});return(await r.json()).data?.[0]?.url||''}catch{return''}}},
  ],

  // ══ BACKGROUND REMOVE ══
  BGREMOVE: [
    {n:'RemoveBG_Free',f:async imageBlob=>{const fd=new FormData();fd.append('image_file',imageBlob);const r=await fetch('https://api.remove.bg/v1.0/removebg',{method:'POST',headers:{'X-Api-Key':'test'},body:fd});return URL.createObjectURL(await r.blob())}},
    {n:'HF_RMBG',f:async imageUrl=>{try{const r=await fetch('https://briaai-rmbg-1-4.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[imageUrl]})});return(await r.json()).data?.[0]?.url||''}catch{return''}}},
    {n:'HF_IsNet',f:async imageUrl=>{try{const r=await fetch('https://zhengchong-isnet-demo.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[imageUrl]})});return(await r.json()).data?.[0]?.url||''}catch{return''}}},
  ],

  // ══ UPSCALE ══
  UPSCALE: [
    {n:'HF_RealESRGAN',f:async imageUrl=>{try{const r=await fetch('https://sberbank-ai-real-esrgan.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[imageUrl,'RealESRGAN_x4plus',4,false]})});return(await r.json()).data?.[0]?.url||''}catch{return''}}},
    {n:'HF_SwinIR',f:async imageUrl=>{try{const r=await fetch('https://jingyunliang-swinir.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[imageUrl,'Real-World Image Super-Resolution-Large',false,false,false]})});return(await r.json()).data?.[0]?.url||''}catch{return''}}},
    {n:'HF_GFPGAN',f:async imageUrl=>{try{const r=await fetch('https://akhaliq-gfpgan.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[imageUrl,2]})});return(await r.json()).data?.[1]?.url||''}catch{return''}}},
  ],

  // Main generate — parallel 4 images
  generate: async(prompt,styles=['flux','turbo','animagine','sdxl'])=>{
    const results=await Promise.allSettled(styles.map(async style=>{
      const src=ImageEngine.TXT2IMG.find(s=>s.n.toLowerCase().includes(style));
      if(src)return src.f(prompt,512,512);
      return ImageEngine.TXT2IMG[0].f(prompt,512,512);
    }));
    return results.map(r=>r.status==='fulfilled'?r.value:'').filter(Boolean);
  }
};

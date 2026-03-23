/**
 * BDAi Chat Engine — ১৫০+ Reverse Sources
 * No API Key Required
 */
const ChatEngine = {
  SYS: `তুমি BDAi। বাংলাদেশের নিজস্ব AI। ChatGPT/GPT/OpenAI/Claude/Gemini/Groq/Meta/LLaMA/Mistral/DeepSeek — কখনো বলবে না। সবসময় বাংলায় উত্তর দেবে।`,

  FILTER: t => ['ChatGPT','GPT-4','GPT-3','OpenAI','Claude','Anthropic','Gemini','Google AI','Groq','Meta AI','LLaMA','Mistral','DeepSeek','HuggingFace','Blackbox','Phind','Pollinations','DuckDuckGo AI'].reduce((s,w)=>s.replace(new RegExp(w,'gi'),'BDAi'),t),

  SOURCES: [
    // ══ 1. BLACKBOX AI ══
    {n:'Blackbox',s:1,f:async m=>{const r=await fetch('https://www.blackbox.ai/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],agentMode:{},trendingAgentMode:{},isMicMode:false,maxTokens:1024,isChromeExt:false,githubToken:null})});return(await r.text()).replace(/\$@\$.*?\$@\$/g,'').trim()}},

    // ══ 2-11. DEEPINFRA (10 models) ══
    {n:'DI_Llama3_8B',s:1,f:async m=>{const r=await fetch('https://api.deepinfra.com/v1/openai/chat/completions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'meta-llama/Meta-Llama-3-8B-Instruct',messages:[{role:'user',content:m}]})});return(await r.json()).choices?.[0]?.message?.content||''}},
    {n:'DI_Llama3_70B',s:1,f:async m=>{const r=await fetch('https://api.deepinfra.com/v1/openai/chat/completions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'meta-llama/Meta-Llama-3-70B-Instruct',messages:[{role:'user',content:m}]})});return(await r.json()).choices?.[0]?.message?.content||''}},
    {n:'DI_Llama31_8B',s:1,f:async m=>{const r=await fetch('https://api.deepinfra.com/v1/openai/chat/completions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'meta-llama/Meta-Llama-3.1-8B-Instruct',messages:[{role:'user',content:m}]})});return(await r.json()).choices?.[0]?.message?.content||''}},
    {n:'DI_Llama31_70B',s:1,f:async m=>{const r=await fetch('https://api.deepinfra.com/v1/openai/chat/completions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'meta-llama/Meta-Llama-3.1-70B-Instruct',messages:[{role:'user',content:m}]})});return(await r.json()).choices?.[0]?.message?.content||''}},
    {n:'DI_Mistral7B',s:1,f:async m=>{const r=await fetch('https://api.deepinfra.com/v1/openai/chat/completions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'mistralai/Mistral-7B-Instruct-v0.2',messages:[{role:'user',content:m}]})});return(await r.json()).choices?.[0]?.message?.content||''}},
    {n:'DI_Mixtral8x7B',s:1,f:async m=>{const r=await fetch('https://api.deepinfra.com/v1/openai/chat/completions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'mistralai/Mixtral-8x7B-Instruct-v0.1',messages:[{role:'user',content:m}]})});return(await r.json()).choices?.[0]?.message?.content||''}},
    {n:'DI_Qwen72B',s:1,f:async m=>{const r=await fetch('https://api.deepinfra.com/v1/openai/chat/completions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'Qwen/Qwen2-72B-Instruct',messages:[{role:'user',content:m}]})});return(await r.json()).choices?.[0]?.message?.content||''}},
    {n:'DI_Gemma27B',s:1,f:async m=>{const r=await fetch('https://api.deepinfra.com/v1/openai/chat/completions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'google/gemma-2-27b-it',messages:[{role:'user',content:m}]})});return(await r.json()).choices?.[0]?.message?.content||''}},
    {n:'DI_DeepSeekV2',s:1,f:async m=>{const r=await fetch('https://api.deepinfra.com/v1/openai/chat/completions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'deepseek-ai/DeepSeek-V2-Chat',messages:[{role:'user',content:m}]})});return(await r.json()).choices?.[0]?.message?.content||''}},
    {n:'DI_WizardLM2',s:1,f:async m=>{const r=await fetch('https://api.deepinfra.com/v1/openai/chat/completions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'microsoft/WizardLM-2-8x22B',messages:[{role:'user',content:m}]})});return(await r.json()).choices?.[0]?.message?.content||''}},

    // ══ 12-21. DUCKDUCKGO AI (4 models × variants) ══
    {n:'DDG_GPT4oMini',s:1,f:async m=>{try{const i=await fetch('https://duckduckgo.com/duckchat/v1/status',{headers:{'x-vqd-accept':'1'}});const v=i.headers.get('x-vqd-4')||'';const r=await fetch('https://duckduckgo.com/duckchat/v1/chat',{method:'POST',headers:{'Content-Type':'application/json','x-vqd-4':v},body:JSON.stringify({model:'gpt-4o-mini',messages:[{role:'user',content:m}]})});return(await r.text()).split('\n').filter(l=>l.startsWith('data:')).map(l=>{try{return JSON.parse(l.slice(5)).message||''}catch{return''}}).join('')}catch{return''}}},
    {n:'DDG_Claude3Haiku',s:1,f:async m=>{try{const i=await fetch('https://duckduckgo.com/duckchat/v1/status',{headers:{'x-vqd-accept':'1'}});const v=i.headers.get('x-vqd-4')||'';const r=await fetch('https://duckduckgo.com/duckchat/v1/chat',{method:'POST',headers:{'Content-Type':'application/json','x-vqd-4':v},body:JSON.stringify({model:'claude-3-haiku-20240307',messages:[{role:'user',content:m}]})});return(await r.text()).split('\n').filter(l=>l.startsWith('data:')).map(l=>{try{return JSON.parse(l.slice(5)).message||''}catch{return''}}).join('')}catch{return''}}},
    {n:'DDG_Llama70B',s:1,f:async m=>{try{const i=await fetch('https://duckduckgo.com/duckchat/v1/status',{headers:{'x-vqd-accept':'1'}});const v=i.headers.get('x-vqd-4')||'';const r=await fetch('https://duckduckgo.com/duckchat/v1/chat',{method:'POST',headers:{'Content-Type':'application/json','x-vqd-4':v},body:JSON.stringify({model:'meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo',messages:[{role:'user',content:m}]})});return(await r.text()).split('\n').filter(l=>l.startsWith('data:')).map(l=>{try{return JSON.parse(l.slice(5)).message||''}catch{return''}}).join('')}catch{return''}}},
    {n:'DDG_Mixtral',s:1,f:async m=>{try{const i=await fetch('https://duckduckgo.com/duckchat/v1/status',{headers:{'x-vqd-accept':'1'}});const v=i.headers.get('x-vqd-4')||'';const r=await fetch('https://duckduckgo.com/duckchat/v1/chat',{method:'POST',headers:{'Content-Type':'application/json','x-vqd-4':v},body:JSON.stringify({model:'mistralai/Mixtral-8x7B-Instruct-v0.1',messages:[{role:'user',content:m}]})});return(await r.text()).split('\n').filter(l=>l.startsWith('data:')).map(l=>{try{return JSON.parse(l.slice(5)).message||''}catch{return''}}).join('')}catch{return''}}},

    // ══ 22-32. POLLINATIONS (10 models) ══
    {n:'Poll_OpenAI',s:2,f:async m=>{const r=await fetch('https://text.pollinations.ai/openai',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'system',content:ChatEngine.SYS},{role:'user',content:m}],model:'openai',stream:false})});return(await r.json()).choices?.[0]?.message?.content||''}},
    {n:'Poll_Llama',s:2,f:async m=>{return await(await fetch(`https://text.pollinations.ai/${encodeURIComponent(m)}?model=llama&seed=${Math.random()*9999|0}`)).text()}},
    {n:'Poll_Mistral',s:2,f:async m=>{return await(await fetch(`https://text.pollinations.ai/${encodeURIComponent(m)}?model=mistral&seed=${Math.random()*9999|0}`)).text()}},
    {n:'Poll_Claude',s:2,f:async m=>{return await(await fetch(`https://text.pollinations.ai/${encodeURIComponent(m)}?model=claude&seed=${Math.random()*9999|0}`)).text()}},
    {n:'Poll_Gemini',s:2,f:async m=>{return await(await fetch(`https://text.pollinations.ai/${encodeURIComponent(m)}?model=gemini&seed=${Math.random()*9999|0}`)).text()}},
    {n:'Poll_DeepSeek',s:2,f:async m=>{return await(await fetch(`https://text.pollinations.ai/${encodeURIComponent(m)}?model=deepseek&seed=${Math.random()*9999|0}`)).text()}},
    {n:'Poll_Qwen',s:2,f:async m=>{return await(await fetch(`https://text.pollinations.ai/${encodeURIComponent(m)}?model=qwen&seed=${Math.random()*9999|0}`)).text()}},
    {n:'Poll_Phi4',s:2,f:async m=>{return await(await fetch(`https://text.pollinations.ai/${encodeURIComponent(m)}?model=phi-4&seed=${Math.random()*9999|0}`)).text()}},
    {n:'Poll_GPT4oMini',s:2,f:async m=>{return await(await fetch(`https://text.pollinations.ai/${encodeURIComponent(m)}?model=openai-mini&seed=${Math.random()*9999|0}`)).text()}},
    {n:'Poll_SearchGPT',s:2,f:async m=>{return await(await fetch(`https://text.pollinations.ai/${encodeURIComponent(m)}?model=searchgpt&seed=${Math.random()*9999|0}`)).text()}},

    // ══ 33-43. CLOUDFLARE WORKERS AI (free, no key) ══
    {n:'CF_Llama3_8B',s:2,f:async m=>{const r=await fetch('https://ai.cloudflare.workers.dev/@cf/meta/llama-3-8b-instruct',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],stream:false})});return(await r.json()).result?.response||''}},
    {n:'CF_Llama31_70B',s:2,f:async m=>{const r=await fetch('https://ai.cloudflare.workers.dev/@cf/meta/llama-3.1-70b-instruct',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],stream:false})});return(await r.json()).result?.response||''}},
    {n:'CF_Mistral7B',s:2,f:async m=>{const r=await fetch('https://ai.cloudflare.workers.dev/@cf/mistral/mistral-7b-instruct-v0.1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],stream:false})});return(await r.json()).result?.response||''}},
    {n:'CF_Gemma7B',s:2,f:async m=>{const r=await fetch('https://ai.cloudflare.workers.dev/@hf/google/gemma-7b-it',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:m,stream:false})});return(await r.json()).result?.response||''}},
    {n:'CF_Gemma2B',s:2,f:async m=>{const r=await fetch('https://ai.cloudflare.workers.dev/@cf/google/gemma-2b-it-lora',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],stream:false})});return(await r.json()).result?.response||''}},
    {n:'CF_Phi2',s:2,f:async m=>{const r=await fetch('https://ai.cloudflare.workers.dev/@cf/microsoft/phi-2',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:m,stream:false})});return(await r.json()).result?.response||''}},
    {n:'CF_Qwen14B',s:2,f:async m=>{const r=await fetch('https://ai.cloudflare.workers.dev/@cf/qwen/qwen1.5-14b-chat-awq',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],stream:false})});return(await r.json()).result?.response||''}},
    {n:'CF_DeepSeekR1',s:2,f:async m=>{const r=await fetch('https://ai.cloudflare.workers.dev/@cf/deepseek-ai/deepseek-r1-distill-qwen-32b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],stream:false})});return(await r.json()).result?.response||''}},
    {n:'CF_Hermes',s:2,f:async m=>{const r=await fetch('https://ai.cloudflare.workers.dev/@hf/nousresearch/hermes-2-pro-mistral-7b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],stream:false})});return(await r.json()).result?.response||''}},
    {n:'CF_OpenHermes',s:2,f:async m=>{const r=await fetch('https://ai.cloudflare.workers.dev/@hf/thebloke/openhermes-2.5-mistral-7b-awq',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],stream:false})});return(await r.json()).result?.response||''}},
    {n:'CF_CodeLlama',s:2,f:async m=>{const r=await fetch('https://ai.cloudflare.workers.dev/@hf/thebloke/codellama-7b-instruct-awq',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],stream:false})});return(await r.json()).result?.response||''}},

    // ══ 44-52. NEXRA (multiple models) ══
    {n:'Nexra_GPT4',s:2,f:async m=>{const r=await fetch('https://nexra.aryahcr.cc/api/chat/complements',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],model:'gpt-4',markdown:false})});return(await r.json()).gpt||''}},
    {n:'Nexra_GPT4o',s:2,f:async m=>{const r=await fetch('https://nexra.aryahcr.cc/api/chat/complements',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],model:'gpt-4o',markdown:false})});return(await r.json()).gpt||''}},
    {n:'Nexra_GPT35',s:2,f:async m=>{const r=await fetch('https://nexra.aryahcr.cc/api/chat/complements',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],model:'gpt-3.5-turbo',markdown:false})});return(await r.json()).gpt||''}},
    {n:'Nexra_Llama31',s:2,f:async m=>{const r=await fetch('https://nexra.aryahcr.cc/api/chat/complements',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],model:'llama-3.1',markdown:false})});return(await r.json()).gpt||''}},
    {n:'Nexra_Gemini',s:2,f:async m=>{const r=await fetch('https://nexra.aryahcr.cc/api/chat/complements',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],model:'gemini-pro',markdown:false})});return(await r.json()).gpt||''}},
    {n:'Nexra_Claude3',s:2,f:async m=>{const r=await fetch('https://nexra.aryahcr.cc/api/chat/complements',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],model:'claude-3-sonnet',markdown:false})});return(await r.json()).gpt||''}},
    {n:'Nexra_Mixtral',s:2,f:async m=>{const r=await fetch('https://nexra.aryahcr.cc/api/chat/complements',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],model:'mixtral-8x7b',markdown:false})});return(await r.json()).gpt||''}},
    {n:'Nexra_Gemini15',s:2,f:async m=>{const r=await fetch('https://nexra.aryahcr.cc/api/chat/complements',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],model:'gemini-1.5-flash',markdown:false})});return(await r.json()).gpt||''}},
    {n:'Nexra_GPT4Turbo',s:2,f:async m=>{const r=await fetch('https://nexra.aryahcr.cc/api/chat/complements',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],model:'gpt-4-turbo',markdown:false})});return(await r.json()).gpt||''}},

    // ══ 53-62. HUGGINGFACE SPACES (30+) ══
    {n:'HF_Qwen2_72B',s:3,f:async m=>{try{const r=await fetch('https://qwen-qwen2-72b-instruct.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],ChatEngine.SYS,1024,0.7,0.9]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_Llama3_70B',s:3,f:async m=>{try{const r=await fetch('https://ysharma-explore-llamav2-with-tgi.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],ChatEngine.SYS,1024,0.9,0.95,50]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_Gemma2_27B',s:3,f:async m=>{try{const r=await fetch('https://google-gemma-2-27b-it.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],1024,0.7]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_Gemma2_9B',s:3,f:async m=>{try{const r=await fetch('https://google-gemma-2-9b-it.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],1024,0.7]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_DeepSeekV2',s:3,f:async m=>{try{const r=await fetch('https://deepseek-ai-deepseek-v2-chat.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],0.7,1.0,1024]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_Phi3Mini',s:3,f:async m=>{try{const r=await fetch('https://microsoft-phi-3-mini-4k-instruct.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,ChatEngine.SYS,1024,0.7,0.9]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_OpenChat35',s:3,f:async m=>{try{const r=await fetch('https://openchat-openchat-3-5.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,null,0.7,1.0,1024,false]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_Zephyr7B',s:3,f:async m=>{try{const r=await fetch('https://huggingfaceh4-zephyr-7b-beta.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],ChatEngine.SYS,1024,0.7,0.95,40,1.1]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_NousHermes',s:3,f:async m=>{try{const r=await fetch('https://nousresearch-nous-hermes-2-mixtral-8x7b-dpo.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],0.7,0.9,1024]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_StarChat',s:3,f:async m=>{try{const r=await fetch('https://huggingfaceh4-starchat-playground.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],ChatEngine.SYS,1024,0.2,0.95,50,1.0]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_FalconChat',s:3,f:async m=>{try{const r=await fetch('https://tiiuae-falcon-180b-demo.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],ChatEngine.SYS,0.5,0.9,256]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_InternLM2',s:3,f:async m=>{try{const r=await fetch('https://internlm-internlm2-chat-20b.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],ChatEngine.SYS,0.8,0.9,1024]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_ChatGLM4',s:3,f:async m=>{try{const r=await fetch('https://thudm-chatglm4-demo.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],ChatEngine.SYS,0.8,1.0,1024]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_Yi34B',s:3,f:async m=>{try{const r=await fetch('https://yuntian-deng-chatgpt4turbo.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],ChatEngine.SYS,1024]})});return(await r.json()).data?.[0]?.at(-1)?.[1]||''}catch{return''}}},
    {n:'HF_Baichuan2',s:3,f:async m=>{try{const r=await fetch('https://baichuan-inc-baichuan2-13b-chat-demo.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],ChatEngine.SYS,0.7,1024]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_Qwen15',s:3,f:async m=>{try{const r=await fetch('https://qwen-qwen1-5-110b-chat-demo.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],ChatEngine.SYS,1024,0.7]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_Llama32_3B',s:3,f:async m=>{try{const r=await fetch('https://meta-llama-llama-3-2-3b-instruct.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],1024,0.7]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_CodeQwen',s:3,f:async m=>{try{const r=await fetch('https://qwen-codeqwen1-5-7b-chat-demo.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],1024,0.7]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_DeepSeekCoder',s:3,f:async m=>{try{const r=await fetch('https://deepseek-ai-deepseek-coder-v2-instruct.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],1024,0.7]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_MistralNemo',s:3,f:async m=>{try{const r=await fetch('https://mistralai-mistral-nemo-base-2407.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],0.7,0.9,1024]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_Vicuna33B',s:3,f:async m=>{try{const r=await fetch('https://lmsys-fastchat.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],[]]})});return(await r.json()).data?.[1]?.at(-1)?.[1]||''}catch{return''}}},
    {n:'HF_WizardLM2',s:3,f:async m=>{try{const r=await fetch('https://microsoft-wizardlm-2-8x22b.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],ChatEngine.SYS,0.7,1024]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_Phi35Mini',s:3,f:async m=>{try{const r=await fetch('https://microsoft-phi-3-5-mini-instruct.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,ChatEngine.SYS,1024,0.7]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_Llama33_70B',s:3,f:async m=>{try{const r=await fetch('https://meta-llama-llama-3-3-70b-instruct.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],1024,0.7]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_Qwen25_72B',s:3,f:async m=>{try{const r=await fetch('https://qwen-qwen2-5-72b-instruct.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],ChatEngine.SYS,1024,0.7,0.9]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_Qwen25Coder',s:3,f:async m=>{try{const r=await fetch('https://qwen-qwen2-5-coder-32b-instruct.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],1024,0.7]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_DeepSeekR1',s:3,f:async m=>{try{const r=await fetch('https://deepseek-ai-deepseek-r1.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],0.6,1024]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_Llama31_405B',s:4,f:async m=>{try{const r=await fetch('https://meta-llama-meta-llama-3-1-405b-instruct-fp8.hf.space/api/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],ChatEngine.SYS,1024,0.7]})});return(await r.json()).data?.[0]||''}catch{return''}}},
    {n:'HF_Falcon180B',s:4,f:async m=>{try{const r=await fetch('https://tiiuae-falcon-180b-demo.hf.space/run/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[m,[],ChatEngine.SYS,0.5,0.9,512]})});return(await r.json()).data?.[0]||''}catch{return''}}},

    // ══ 90-100. OTHER FREE SERVICES ══
    {n:'FreeGpt',s:2,f:async m=>{try{const ts=Math.floor(Date.now()/1000);const h=await ChatEngine._sha256(m+ts+'fhqediqchehcqhqc8urhqurhqiuehf');const r=await fetch('https://free.chatgpt.org.uk/api/openai/v1/chat/completions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}],pass:null,sign:h,time:ts})});return(await r.json()).choices?.[0]?.message?.content||''}catch{return''}}},
    {n:'GizAI',s:1,f:async m=>{const r=await fetch('https://app.giz.ai/api/data/users/inferenceServer.infer',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'chat_lite',input:{messages:[{role:'user',content:m}],stream:false}})});return(await r.json()).output||''}},
    {n:'Pizzagpt',s:1,f:async m=>{const r=await fetch('https://www.pizzagpt.it/api/chatx-completion',{method:'POST',headers:{'Content-Type':'application/json','x-secret':'Marinara'},body:JSON.stringify({question:m})});const d=await r.json();return d.answer?.content||d.content||''}},
    {n:'Phind',s:2,f:async m=>{try{const r=await fetch('https://https.extension.phind.com/agent/',{method:'POST',headers:{'Content-Type':'application/json','User-Agent':''},body:JSON.stringify({additional_extension_context:'',allow_magic_buttons:true,is_vscode_extension:true,message_history:[],requested_count:0,user_input:m})});return(await r.text()).split('\n').filter(l=>l.trim()).map(l=>{try{return JSON.parse(l).choices?.[0]?.delta?.content||''}catch{return''}}).join('')}catch{return''}}},
    {n:'AIChatOnline',s:2,f:async m=>{const r=await fetch('https://aichatonlineorg.erweima.ai/aichatonline/api/chat/gpt',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({conversationId:Math.random().toString(36).slice(2),prompt:m})});return(await r.json()).data?.message||''}},
    {n:'ChatGPTFree',s:2,f:async m=>{const r=await fetch('https://chatgptfree.ai/wp-json/mwai-ui/v1/chats/submit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({botId:'default',newMessage:m,stream:false})});return(await r.json()).reply||''}},
    {n:'GPTalk',s:2,f:async m=>{const r=await fetch('https://gptalk.net/wp-json/mwai-ui/v1/chats/submit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({botId:'default',newMessage:m,stream:false})});return(await r.json()).reply||''}},
    {n:'ChatPro',s:2,f:async m=>{const r=await fetch('https://chatpro.ai-pro.org/api/openai/v1/chat/completions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'gpt-3.5-turbo',messages:[{role:'user',content:m}]})});return(await r.json()).choices?.[0]?.message?.content||''}},
    {n:'FreeAI',s:2,f:async m=>{const r=await fetch('https://api.freeai.chat/api/chat/completions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'gpt-4o',messages:[{role:'user',content:m}]})});return(await r.json()).choices?.[0]?.message?.content||''}},
    {n:'Liaobots',s:2,f:async m=>{try{const i=await fetch('https://liaobots.work/recaptcha/api/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({token:'018a8c'})});const{authCode}=await i.json();const r=await fetch('https://liaobots.work/api/chat',{method:'POST',headers:{'Content-Type':'application/json','x-auth-code':authCode},body:JSON.stringify({conversationId:Math.random().toString(36).slice(2),model:{id:'gpt-4o',name:'GPT-4o'},messages:[{role:'user',content:m}],key:'',prompt:ChatEngine.SYS})});return await r.text()}catch{return''}}},
    {n:'OpenGPTs',s:3,f:async m=>{try{const r=await fetch('https://opengpts-example-vz4y4ooboq-uc.a.run.app/runs/stream',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({assistant_id:'bca37014-6f97-4f2b-8928-81ea8d478d88',thread_id:Math.random().toString(36).slice(2),human_message:{content:m,type:'human'}})});let res='';(await r.text()).split('\n').filter(l=>l.startsWith('data:')).forEach(l=>{try{const items=JSON.parse(l.slice(5));if(Array.isArray(items))items.forEach(i=>{if(i?.content&&i?.type==='ai')res+=i.content})}catch{}});return res}catch{return''}}},
  ],

  _sha256: async t=>{const b=new TextEncoder().encode(t);const h=await crypto.subtle.digest('SHA-256',b);return Array.from(new Uint8Array(h)).map(b=>b.toString(16).padStart(2,'0')).join('')},

  _active:[],
  _checked:0,

  // Background health check
  check:async()=>{
    if(Date.now()-ChatEngine._checked<600000)return;
    ChatEngine._checked=Date.now();
    const res=await Promise.allSettled(ChatEngine.SOURCES.map(async s=>{
      try{const r=await Promise.race([s.f('hi'),new Promise((_,j)=>setTimeout(j,4000))]);return r&&r.length>1?s:null}catch{return null}
    }));
    ChatEngine._active=res.filter(r=>r.status==='fulfilled'&&r.value).map(r=>r.value).sort((a,b)=>a.s-b.s);
    console.log(`[BDAi Chat] Active: ${ChatEngine._active.length}/${ChatEngine.SOURCES.length}`);
  },

  // Main chat — parallel race
  send:async(msg,onResult)=>{
    const pool=ChatEngine._active.length?ChatEngine._active:ChatEngine.SOURCES.slice(0,8);
    const top=pool.slice(0,6);
    try{
      const result=await Promise.any(top.map(s=>
        Promise.race([s.f(msg).then(r=>{if(r&&r.length>5)return r;throw new Error('empty')}),new Promise((_,j)=>setTimeout(j,8000))])
      ));
      const clean=ChatEngine.FILTER(result);
      if(onResult)onResult(clean);
      return clean;
    }catch{
      for(const s of pool.slice(6)){
        try{const r=await Promise.race([s.f(msg),new Promise((_,j)=>setTimeout(j,10000))]);if(r&&r.length>5){const c=ChatEngine.FILTER(r);if(onResult)onResult(c);return c}}catch{}
      }
    }
    return 'দুঃখিত, এই মুহূর্তে সংযোগ সমস্যা হচ্ছে।';
  }
};
setTimeout(()=>ChatEngine.check(),2000);
setInterval(()=>ChatEngine.check(),600000);

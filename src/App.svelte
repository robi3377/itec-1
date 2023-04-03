<script>
  import { text, validate_each_argument } from 'svelte/internal';

    let user, verses=" ", temperature, max_tokens, value, imageUrl, i;
    function handleSubmit(event) {
      if(user === undefined){
        event.preventDefault();     
        return;
      }
      else{
        event.preventDefault();
        const formData = new FormData();
        formData.append('promptInput', user);
        value = value.toString();
        fetch('http://127.0.0.1:8000/'+value, {
        method: 'POST',
        body: formData
        })
        .then(response => response.json())
        .then(data => {
            verses=data.poem;
            imageUrl=data.img;
            console.log(verses);
        });
        console.log(temperature);
        document.querySelector("main").style.maxHeight = "none";
        document.documentElement.scrollTop = 1000;
      }
    }  
  let on = true, more = "More";

  function moreOptions(){
    let options = document.querySelector("#Options");
    if( on === true ){ 
      on = false;
      // @ts-ignore
      options.style.opacity = 100;
      // @ts-ignore
      options.style.transform = "translateY(0px)";
      more = "Less";
    }
    else if( on === false ){
     
      // @ts-ignore
      options.style.opacity = 0;
      // @ts-ignore
      options.style.transform = "translateY(20px)";
      on = true;
      more = "More" 
    }
  }

  function readText(){
    let generatedText = document.querySelector("#generatedText").innerHTML;
    // @ts-ignore
    responsiveVoice.speak(generatedText, "UK English Male", {onerror: function(){console.log("Error!")}});
  }

  function submit(param){
    if(param === 0)
    document.querySelector("input").placeholder = "write a poem based on your first verse";
    if(param === 1)
    document.querySelector("input").placeholder = "write a poem based on a theme";
    if(param === 2)
    document.querySelector("input").placeholder = "write a poem for the AI to mirror";
    value = param;
    document.getElementById(param).style.backgroundColor = "#FE8300";
    for( let i = 0 ; i < 3 ; i++)
      // @ts-ignore
      if(i != param)document.getElementById(i).style.backgroundColor = "#1D263B";
      document.getElementById(i).style.backgroundColor;
  }

</script>

<main class="max-h-[100vh] w-[100vw]">
  <div class="h-[100vh] w-[100vw] bg-cover bg-center bg-no-repeat shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-[#0A5C71] flex flex-col justify-center items-center" style="background-image: url(./src/assets/background_waves.png);">
      <div class="rounded-t-full rounded-b-2xl flex flex-col items-center max-[766px]:rounded-[60px]">
          <h1 class="text-transparent bg-gradient-to-r from-[#FF0000] to-[#FE8300] font-Montserrat lg:text-[14em] md:text-[10em] text-[4em] mb-10" style="-webkit-background-clip: text;">Poetique</h1>
          <div class="flex justify-between  items-center">
              <form on:submit={handleSubmit} action="" id="contact-form" method="POST">
                  <input bind:value={user} placeholder="write a poem based on your first verse" class="w-[50vw] placeholder:opacity-0 bg-[#1D263B] text-[#DAE3E5] rounded-l-[30px] p-3 text-xl font-Montserrat outline-none max-[766px]:w-[60vw] text-center sm:min-w-[25em] sm:placeholder:opacity-100" type="text">
              </form>
              <button on:click={handleSubmit}>
                  <svg class="w-10 h-[52px] bg-[#1D263B] rounded-r-[30px] hover:bg-slate-500 duration-300" xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" stroke-width="1.5" stroke="white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
          </div>
          <button on:click={moreOptions} class="text-[#DAA107] flex justify-center hover:text-black ease-in-out duration-300">{more} options</button>

          <div id="Options" class="bg-[#1D263B] text-[#DAE3E5] mb-6  min-h-[4em] w-[52vw] rounded-[30px] opacity-0 translate-y-20 transition ease-in-out duration-500">
            <div class="h-[100%] grid lg:grid-cols-3 grid-cols-1">
              <button on:click={() => submit(0)} id="0" class="flex items-center justify-center rounded-t-[30px] hover:bg-[#293553] duration-500 md:flex-row lg:rounded-l-[30px]">
                <p class="py-[10px]">completion</p>
              </button>  
              <button on:click={() => submit(1)} id="1" class="flex items-center justify-center hover:bg-[#293553] duration-500  md:flex-row">
                <p class="py-[10px]">theme</p>
              </button> 
              <button on:click={() => submit(2)} id="2" class="flex items-center justify-center rounded-b-[30px] hover:bg-[#293553] duration-500 md:flex-row lg:rounded-r-[30px]">
                <p class="py-[10px]">mirror</p>
              </button> 
            </div>
          </div>
      </div>
  </div>

  <div class="min-h-[100vh] w-[100vw] text-[#DAE3E5] font-Montserrat flex flex-col justify-center items-center lg:gap-[6em] lg:flex-row">
      <div class="relative bg-slate-600 min-h-[10px] w-[100vw] p-10  mt-10 flex flex-col justify-center items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-[#0A5C71] md:max-w-[30em] md:rounded-3xl">      
          <div id="generatedText" class="max-w-[30em] text-[#DAE3E5]">{verses}</div>
          <div id="loadingGif">
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_Wh2iKs.json"  background="transparent"  speed="1.2"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player>  
          </div>
              <button on:click={readText} class=" absolute right-2 bottom-2 p-1 hover:bg-slate-500 rounded-full duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
          </button>
      </div>
      <div id="output-image" class="z-10 bg-cover bg-center bg-no-repeat bg-slate-600 h-[100vw] w-[100vw] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-[#0A5C71] md:h-[60vh] md:w-[60vh] md:rounded-3xl" style="background-image: url({imageUrl});">
      </div>
  </div> 

  <script src="https://code.responsivevoice.org/responsivevoice.js?key=3uuX8akb"></script>
</main>
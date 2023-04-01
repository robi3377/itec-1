<script>
  import Counter from './lib/Counter.svelte'

  function readText(){
    let generatedText = document.querySelector("#generatedText").innerHTML;
    // @ts-ignore
    responsiveVoice.speak(generatedText, "UK English Male", {onerror: function(){console.log("Error!")}});
  }

    let user, verses, temperature, max_tokens;
    function handleSubmit(event) {
      
      if(user === undefined){
        event.preventDefault();
        return;
      }
      else{
        if( temperature === undefined) temperature = 3;
        if( max_tokens === undefined) max_tokens = 2;
        event.preventDefault();
        const formData = new FormData();
        formData.append('promptInput', user);

        fetch('http://127.0.0.1:8000/', {
        method: 'POST',
        body: formData
        })
        .then(response => response.json())
        .then(data => {
            verses=data.poem;
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
      options.style.opacity = 100;
      options.style.transform = "translateY(0px)";
      more = "Less";
    }
    else if( on === false ){
     
      options.style.opacity = 0;
      options.style.transform = "translateY(20px)";
      on = true;
      more = "More" 
    }
  }

</script>

<main class="max-h-[100vh] w-[100vw] overflow-y-hidden">
  <div class="h-[100vh] w-[100vw] bg-cover bg-center bg-no-repeat shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-[#0A5C71] flex flex-col justify-center items-center" style="background-image: url(./src/assets/background_waves.png);">
      <div class="rounded-t-full rounded-b-2xl flex flex-col items-center max-[766px]:rounded-[60px]">
          <h1 class="text-transparent bg-gradient-to-r from-[#FF0000] to-[#FE8300] font-Montserrat lg:text-[14em] md:text-[10em] text-[4em] mb-10" style="-webkit-background-clip: text;">Poetique</h1>
          <div class="flex justify-between  items-center">
              <form action="" id="contact-form" method="POST" on:submit={handleSubmit}>
                  <input placeholder="input your prompt to create a poem" class="w-[50vw] bg-[#1D263B] text-[#DAE3E5] rounded-l-[30px] p-3 text-xl font-Montserrat outline-none max-[766px]:w-[60vw]" type="text" bind:value={user}>
              </form>
              <button on:click={handleSubmit}>
                  <svg class="w-10 h-[52px] bg-[#1D263B] border-[#1D263B] rounded-r-[30px] hover:bg-slate-300 hover:border-[2px] hover:stroke-[#1D263B] duration-300" xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" stroke-width="1.5" stroke="white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
          </div>
          <button on:click={moreOptions} class="text-[#DAA107] flex justify-center hover:text-black ease-in-out duration-300">{more} options</button>

          <div id="Options" class="bg-[#1D263B] text-[#DAE3E5] mb-6 p-4 min-h-[4em] w-[52vw] rounded-[30px] opacity-0 translate-y-20 transition ease-in-out duration-500">
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-center justify-center">
                <p class=" mr-3">temperature:</p>
                <form class="border-3px border-slate-500 rounded-sm" action="" id="contact-form" method="POST">
                  <input class="h-[25px] w-[10em] text-black outline-none" type="number" min="1" max="5" bind:value={temperature}>
                </form>
              </div>  
              <div class="flex items-center justify-center">
                <p class=" mr-3">max tokens:</p>
                <form action="" id="contact-form" method="POST">
                  <input class="h-[25px] w-[10em] text-black outline-none" type="number" id="quantity" name="quantity"  min="1" max="5" bind:value={max_tokens}>
                </form>
              </div> 
            </div>
          </div>
      </div>
  </div>

  <div class="min-h-[100vh] w-[100vw] text-[#DAE3E5] font-Montserrat flex flex-col items-center">
      <div class="relative bg-slate-600 min-h-[10px] p-10 rounded-3xl mt-10">      
          <div id="generatedText" class="text-[#DAE3E5]">{verses}</div>
          <button class=" absolute right-2 bottom-2 p-1 hover:bg-slate-500 rounded-full duration-300" on:click={readText}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
          </button>
      </div>
  </div> 

  <script src="https://code.responsivevoice.org/responsivevoice.js?key=3uuX8akb"></script> 
</main>
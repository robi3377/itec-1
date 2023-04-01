<script>
  import Api from './lib/Api.svelte';
  import Counter from './lib/Counter.svelte'

  function readText(){
    let generatedText = document.querySelector("#generatedText").innerHTML;
    // @ts-ignore
    responsiveVoice.speak(generatedText, "Romanian Female", {onerror: function(){console.log("Error!")}});
  }

  function downScroll(){
      document.querySelector("main").style.maxHeight = "none";
      document.documentElement.scrollTop = 1000;
  }
  // document.getElementById("contact-form").onsubmit();
</script>

<main class="max-h-[100vh] w-[100vw] overflow-y-hidden">
  <div class="h-[100vh] w-[100vw] bg-cover bg-center bg-no-repeat shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-[#0A5C71] flex flex-col justify-center items-center" style="background-image: url(./src/assets/background_wave.png);">
      <div class="bg-[#FFFFB3] rounded-t-full flex flex-col items-center max-[766px]:rounded-[60px]">
          <h1 class="text-transparent bg-gradient-to-r from-[#FF0000] to-[#FE8300] font-Montserrat lg:text-[14em] md:text-[10em] text-[4em]" style="-webkit-background-clip: text;">Poetique</h1>
          <div class="flex justify-between  items-center">
              <form action="" id="contact-form">
                  <input class="w-[50vw] my-10 bg-[#1D263B] text-[#DAE3E5] rounded-l-[30px] p-3 text-xl font-Montserrat outline-none max-[766px]:w-[60vw]" type="text">
              </form>
              <button on:click={downScroll}>
                  <svg class="w-10 h-[52px] bg-[#1D263B] border-[#1D263B] rounded-r-[30px] hover:bg-[#FFFFB3] hover:border-[2px] hover:stroke-[#1D263B] duration-300" xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" stroke-width="1.5" stroke="white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
          </div>
          <div class="text-red-500"></div>
      </div>
  </div>

  <div id="response" class="min-h-[100vh] w-[100vw] text-[#DAE3E5] font-Montserrat flex flex-col items-center">
      <div class="relative bg-slate-600 min-h-[10px] p-10 rounded-3xl mt-10">      
          <div id="generatedText" class="text-[#DAE3E5]"></div>
          <button class=" absolute right-2 bottom-2 p-1 hover:bg-slate-500 rounded-full duration-300" on:click={readText}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
          </button>
      </div>
  </div> 

  <script src="https://code.responsivevoice.org/responsivevoice.js?key=3uuX8akb"></script> 
</main>


<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'

  let generatedText
  function readText(){
    generatedText = document.querySelector("#generatedText").innerHTML;
    console.log(generatedText);
    responsiveVoice.speak(generatedText, "Romanian Female", {onerror: function(){console.log("Error!")}});
  }
</script>

<main class="min-h-[100vh] w-[100vw] flex flex-col">
  <div class="h-[100vh] w-[100vw]  flex flex-col justify-center items-center" style="background-image: url(./src/assets/background_wave.png);">
    <div class="bg-[#FFFFB3] rounded-t-full flex flex-col items-center max-[766px]:rounded-[60px]" style="background-image: url(./assets/background_wave.png);">
      <h1 class="text-transparent bg-gradient-to-r from-[#FF0000] to-[#FE8300] font-Montserrat lg:text-[14em] md:text-[10em] text-[4em]" style="-webkit-background-clip: text;">Poetique</h1>
      <input class="w-[50vw] m-10 bg-[#1D263B] text-[#DAE3E5] rounded-[30px] p-3 text-xl font-Montserrat outline-none max-[766px]:w-[60vw]" type="text">
    </div>
  </div>
  <div class="min-h-[60vh] w-[100vw] text-[#DAE3E5] font-Montserrat flex flex-col items-center">
    <div id="generatedText" class="min-w-0 min-h-0 text-[#DAE3E5] bg-slate-600 p-4 rounded-3xl font-Montserrat mt-10"></div>
    <button on:click={readText}>read</button>
  </div> 
  <script src="https://code.responsivevoice.org/responsivevoice.js?key=3uuX8akb"></script> 
</main>


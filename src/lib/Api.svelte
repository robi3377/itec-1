<script>
    async function getData(){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await response.json();
        console.log(data);
    }
    getData();
</script>

<h1>hello</h1>
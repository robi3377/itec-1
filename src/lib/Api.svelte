<script>
    const formData = new FormData();
    formData.append('promptInput', 'A red rose on my windowsill, with a fragrance that gives me a thrill.');

    fetch('/api/generate_poem/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.poem);
    });
</script>



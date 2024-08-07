async function fetchData() {
    try {
        let response = await fetch("https://www.postermywall.com/index.php/posters/search?s=cricket+test&safe_content=safe")
        let data = await response.json();
        console.log(data)
    } catch (error) {
        console.error("Error fetching error", Error)
        
    }
    
}

fetchData()
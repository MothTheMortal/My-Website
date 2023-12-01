function searchYoutube() {
    const inputText = document.getElementById("search-input").value;
    const link = `https://www.youtube.com/results?search_query=${inputText}`;
    console.log(link);
    window.open(link, "_self")
}

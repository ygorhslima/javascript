const toggleButton = document.getElementById("toggleButton")

toggleButton.addEventListener("click",()=>{
    const paragrafo = document.getElementById("myParagraph")
    paragrafo.classList.toggle("hidden")
})
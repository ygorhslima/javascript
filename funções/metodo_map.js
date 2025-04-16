// const cursos=["html","css", "JavaScript", "php", "React"]
// cursos.map((el,i)=>{
//    console.log(`curso ${el} - posição do curso ${i}`) 
// })

let elementos = [...document.getElementsByTagName('div')]
elementos.map((element, indice)=>{
     element.innerHTML = "CURSOS CANCELADOS"
     console.log(element)
})
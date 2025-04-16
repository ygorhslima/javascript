// const divTodas = [...document.getElementsByTagName('div')]
// const cursoTodos = [...document.getElementsByClassName("curso")]
// const cursosC1 = [...document.getElementsByClassName("c1")]
// const cursosC2 = [...document.getElementsByClassName("c2")]
// const cursoespecial = document.getElementById("c1")

//const query_divTodos = [...document.querySelectorAll("div[class]")]
const query_divTodos = [...document.querySelectorAll("div > p")]
const query_cursoTodas = [...document.querySelectorAll('div.curso')]
const query_cursosC1 = [...document.querySelectorAll("div.c1")]
const query_cursosC2 = [...document.querySelectorAll("div.c2")]
const query_cursoEspecial = document.querySelectorAll("#c1")[0]

console.log(query_divTodos)
console.log(divTodas)
console.log(cursoTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoespecial)

cursosC1.map((el)=>{
    el.classList.add("destaque")
})
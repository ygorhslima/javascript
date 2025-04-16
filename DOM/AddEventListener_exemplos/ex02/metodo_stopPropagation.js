const caixa01 = document.querySelector('#caixa1')

const cursos = [...document.querySelectorAll('.curso')]

caixa01.addEventListener('click', (evento)=>{
    console.log(evento)
    console.log('clicou')
})

cursos.map((el)=>{
    el.addEventListener('click', (evento)=>{
        evento.stopPropagation()
    })
})

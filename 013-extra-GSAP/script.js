// primeiro parâmetro: o que vou manipular
// segundo parâmetro: manipulação (objeto)
gsap.to(".quadrado", {
    x:200,
    duration:3,
    backgroundColor:"blue",

});

// 1°parâmetro: a Classe CSS, 2°parâmetro: from, 3°parâmetro:to
gsap.fromTo(".quadrado",
    {
        x:-200,
        duration:3,
        y:100
    },{
        x:100,
        y:-200,
        backgroundColor:"green"
    }
)
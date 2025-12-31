import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

import gsap from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// CRIANDO CENÁRIO
const cena = new THREE.Scene();


// CAMERA
// PARÂMETROS:
// fov: ponto de vista do usuário em relação ao objeto
// aspecto: aspecto da tela do usuário seria o tamanho da tela do usuário
// near: o que está próximo
// fear: o que está longe
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);

// RENDERIZADOR
const renderizador = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderizador.setClearColor(0x000000, 0); // O segundo parâmetro é a opacidade (0 = transparente)
renderizador.setSize(window.innerWidth, window.innerHeight);
// transformando o projetor em um elemento html
document.querySelector(".abelha").appendChild(renderizador.domElement);

// iluminação
const luzAmbiente = new THREE.AmbientLight("#fff",1)
const luzDirecionada = new THREE.DirectionalLight("white",1);
luzDirecionada.position.x = -3;
luzDirecionada.position.z = 3;
cena.add(luzAmbiente,luzDirecionada)

// importar abelha

let abelha;
let mixer;

const loader = new GLTFLoader();
// qual elemento 3d você quer carregar
// o que você quer fazer com o elemento
loader.load('./assets/bee.glb',(abelhaObjeto)=>{
    abelha = abelhaObjeto.scene;
    cena.add(abelha);
    abelha.position.z = -20;
    abelha.position.x= 4;
    abelha.rotation.y = 2.6
    abelha.rotation.x = -.5


    const abelhaAnimacao = abelhaObjeto.animations[0];
    //mixer -> Controlador de reprodução
    mixer = new THREE.AnimationMixer(abelha);
    mixer.clipAction(abelhaAnimacao).play();
    rotacionar()

});

//criando uma função de animação
function animate(){
    if(mixer) mixer.update(0.01)
    requestAnimationFrame(animate);
    renderizador.render(cena,camera);
}

function rotacionar(){
    gsap.to(abelha.position,{
        x:6,
        ScrollTrigger:{
            trigger: ".sec1",
            start: "0% 0%",
            end:"0% 50%",
            scrub: true
        }

    })
}

animate()
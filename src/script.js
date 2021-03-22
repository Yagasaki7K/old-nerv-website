const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})


function ptbr() {
    document.getElementById('about').innerHTML = 'Sobre nós'
    document.getElementById('title').innerHTML = 'Você conhece a NERV Open Source?'
    document.getElementById('subject').innerHTML = 'A ideia do projeto é muito simples para ajudar tudo e todos - inclusive em todos os níveis. <br> <br> Você tem uma ideia para o projeto? Então, parabéns, você será o novo líder dele, agora chame para os membros que estão disponíveis para participar do seu projeto Open Source e faça acontecer. <br> <br> A ideia é que todos possam se conhecer e participar em vários projetos que reúnem a comunidade de muitas maneiras diferentes. <br> <br> Conheça nosso fundador, <a href="https://yagasaki.netlify.com" target="_blank"> Anderson "Yagasaki" Marlon </a>'
}

function enus() {
    document.getElementById('about').innerHTML = 'About us'
    document.getElementById('title').innerHTML = 'Do you know NERV Open Source?'
    document.getElementById('subject').innerHTML = 'The idea of ​​the project is very straightforward to help everyone and everything - including at all levels.<br><br>Do you have a project idea? So, congratulations, you will be his new leader, now call the members who are available to participate in your Open Source project and make it happen.<br><br> The idea is that everyone can get to know each other and can participate in several projects that bring the community together in many different ways.<br><br>Know our founder, <a href="https://yagasaki.netlify.com" target="_blank">Anderson "Yagasaki" Marlon</a>'
}
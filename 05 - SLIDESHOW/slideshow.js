'use strict'; // evita erros explicitos no codigo, deixando o JS mais restrito quanto a algumas praticas comuns.

const images = [
    {'id': '1', 'url': 'img/chrono.jpg', 'description': 'Conta a história de Rosette Christopher, uma jovem freira que definitivamente não age como tal. Há quatro anos, Rosette vivia em um orfanato com seu irmão mais novo Joshua, que era um dos apóstolos(sete humanos foram abençoados com poderes divinos), porém ele é sequestrado por um demônio chamado Aion.', 'title': 'Chrono'},
    {'id': '2', 'url': 'img/inuyasha.jpg', 'description': 'Baseada no mangá de mesmo nome, Inuyasha narra a história de Kagome Higurashi, uma jovem de 15 anos que vive com a família nas terras de um santuário xintoísta. Um dia, enquanto procurava pelo gato de estimação, um monstro a puxa para dentro de um poço, fazendo com que ela acabe parando no período Sengoku do Japão.', 'title': 'Inu Yasha'},
    {'id': '3', 'url': 'img/tenchi.jpg', 'description': 'mostra um garoto que “cresceu ouvindo histórias de como seus ancestrais conseguiram selar um demônio em uma caverna. Tomado pela curiosidade, Tenchi entra na caverna e, ao remover a espada, acaba libertando sem querer o demônio - uma pirata especial chamada Ryouko Hakubi. Furiosa, ela ataca Tenchi, que a repele com sua espada e desperta seu poder interior, chamando a atenção da pirata, que decide morar na casa dele. Uma coisa leva a outra, e outras cinco mulheres alienígenas passam a morar com Tenchi, levando-o a conhecer mais sobre seu passado, seus novos poderes e uma ameaça iminente nos céus”.', 'title': 'Tenchi'},
    {'id': '4', 'url': 'img/tenjhotenge.jpg', 'description': 'Nagi e Bob são dois amigos que estão acostumados a tocar o terror nas escolas onde passam. A dupla só pensa em uma coisa: achar os alunos mais fortes de cada colégio e desafiá-los para uma boa briga. Dessa maneira eles literalmente conquistam cada escola em que se matriculam.', 'title': 'Tenjho Tenge'},
    {'id': '5', 'url': 'img/yuyuhakusho.jpg', 'description': 'Baseado no mangá de Yoshihiro Togashi, o anime Yu Yu Hakusho apresenta a história de Yusuke, um jovem delinquente que, em uma atitude altruísta, salva a vida de um garotinho. Evitando que a criança seja atropelada por um carro, Yusuke acaba falecendo no acidente, sendo enviado diretamente para o submundo, onde encontra os chefes do local. Pegando até mesmo o submundo de surpresa, eles informam que ainda não havia um lugar feito para ele, seja no céu ou no inferno, oferecendo a Yusuke uma chance de retornar ao seu corpo através de uma série de testes. Com a ajuda de seus amigos Keiko Yukimura e Kazuma Kuwabara, Yusuke tem êxito em suas tarefas e é enviado de volta para sua dimensão e para seu corpo, mas agora com uma missão: ser um Detetive do Submundo, onde precisa investigar aparições de demônios e qualquer tipo de atividade paranormal no mundo humano.', 'title': 'Yuyu Hakusho'},
    {'id': '6', 'url': 'img/ippo.png', 'description': 'Baseado no mangá homônimo do autor George Morikawa, a animação oriental conta a história de Ippo Makunouchi, ou simplesmente Ippo, um estudante tímido do ensino médio. Retraído e com poucos amigos, o jovem é alvo de bullying de alguns colegas de classe.', 'title': 'Ippo'},
];

const containerItems = document.querySelector('#container-items');
const descriptionElement = document.querySelector('#container-description');
const titleElement = document.querySelector('#container-title');


const loadImages = (images, container) =>{
    images.forEach(image => {
        container.innerHTML += `
            <div class='item' data-description='${image.description}' data-title='${image.title}'>
                <img src='${image.url}' alt='${image.description}'>
            </div>`;
    });
}

loadImages( images, containerItems);

let items = document.querySelectorAll('.item');

const updateDescriptionAndTitle = () => {
    const firstItem = items[1]; // aqui eu preciso que ele use o segundo item como base, pois o primeiro foi movido para o ultimo para ter o efeito de carrosel.
    const description = firstItem.getAttribute('data-description');
    const title = firstItem.getAttribute('data-title');
    descriptionElement.textContent = description;
    titleElement.textContent = title;
};

const previous = () => {
    containerItems.insertBefore(items[items.length - 1], items[0]);
    items = document.querySelectorAll('.item');
    updateDescriptionAndTitle();
};

const next = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
    updateDescriptionAndTitle();
};

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);

// Automatizar o slideshow
const startAutoSlide = () => {
    setInterval(next, 5000); // 5 segundos
};

updateDescriptionAndTitle();
startAutoSlide();
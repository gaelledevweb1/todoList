let body= document.querySelector(".body");
let titre = document.querySelector("h1");

let card = document.createElement("div");
body.appendChild(card);
 card.style.width ='400px';
 card.style.height ='400px';
 card.style.border ='1px solid black';
 card.style.boxshadow ='1px 2Px 40px grey';
 card.style.margin ='20px';
 
 let listeDeCourse = document.createElement('h2');
 card.appendChild(listeDeCourse);
 listeDeCourse.textContent ='Liste de course :';
 listeDeCourse.style.textAlign ='center';
 let conteneurListe = document.createElement('ul');
 card.appendChild(conteneurListe);
 conteneurListe.style.listStyle ='none';
 
 
 let button = document.createElement('button');
 button.textContent ='ajouter';
 card.appendChild(button);
 button.addEventListener('click',()=>{
    let ElemListe1 = document.createElement('li');
    conteneurListe.appendChild(ElemListe1);
    ElemListe1.textContent = 'oeuf';
    let ElemListe2 = document.createElement('li');
    conteneurListe.appendChild(ElemListe2);
    ElemListe2.textContent = 'Pommes';
    let ElemListe3 = document.createElement('li');
    conteneurListe.appendChild(ElemListe3);
    ElemListe3.textContent = 'betterave';
    let ElemListe4 = document.createElement('li');
    conteneurListe.appendChild(ElemListe4);
    ElemListe4.textContent = 'soja';
    let ElemListe5 = document.createElement('li');
    conteneurListe.appendChild(ElemListe5);
    ElemListe5.textContent = 'cêpes';
 });
 





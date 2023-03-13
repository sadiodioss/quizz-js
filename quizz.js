let quizz = [
   {
      question : "Quelle est ma couleur préférée?",
      a : "blanc",
      b : "rose",
      c : "rouge",
      d : "bleu",
      correct : "b"
  },
   {
      question : "Quelle est la capitale du Sénégal?",
      a : "dakar",
      b : "thiès",
      c : "kolda",
      d : "louga",
      correct : "a"
  },
   {
      question : "Quel est le meilleur langage de programmation?",
      a : "java",
      b : "html",
      c : "php",
      d : "javascript",
      correct : "d"
  },

   {
      question : "Comment dit-on salut en anglais?",
      a : "salut",
      b : "hi",
      c : "bye",
      d : "bonjour",
      correct : "b"
  },

  {
   question : "Comment dit-on au revoir en anglais?",
   a : "salut",
   b : "hi",
   c : "bye",
   d : "bonjour",
   correct : "c"
}

];
let score = 0;
let answer = 0;
container = document.getElementById('container');
bouton = document.getElementById('suivant');
// console.log(quizz[answer].question);

function passeQuestion() {
   container.innerHTML='';

   const div = document.createElement('div');
    div.innerHTML = `  <h2>${quizz[answer].question}</h2>
       <ul>
       
       <li>
       <input type="radio" id="rep" name="reponse" value="a">
       <label for="repA">${quizz[answer].a}</label>
       </li>
       
       <li>
       <input type="radio" id="rep" name="reponse" value="b">
       <label for="repB">${quizz[answer].b}</label>
       </li>
       
       <li>
       <input type="radio" id="rep" name="reponse" value="c">
       <label for="repC">${quizz[answer].c}</label>
       </li>
       <li>
       <input type="radio" id="rep" name="reponse" value="d">
       <label for="repD">${quizz[answer].d}</label>
       </li>
       
       </ul>`
       
       
       container.appendChild(div);
       

}


passeQuestion();


bouton.addEventListener('click',function () {
   const reponse = document.querySelector('input[type=radio]:checked');
   // console.log(reponse);
   if (reponse.value == quizz[answer].correct) {
       score++
      // console.log(score);
   }

   answer++
   if (answer < quizz.length) {
      
       passeQuestion();
   }else{
       container.innerHTML = '';
       const divR = document.createElement('div');
       divR.innerHTML= `
       <div>Vous avez trouvé ${score} / ${quizz.length}</div>
       <button onclick = 'reload()'>REJOUER</button>
       `
       container.appendChild(divR) ;  
       bouton.setAttribute('hidden','hidden')
   }

       // reponse.forEach(element => {
       //     element.addEventListener('click',()=>{
       //             if (element.value == quizz[answer].correct) {
       //                 score++
       //                 console.log(score);
       //             }
       //             answer++
       //             if (answer < quizz.length) {
                       
       //                 passeQuestion()
       //             }
       //         })
               
       //     })
       });

function reload() {
   location.reload();
   
}
       

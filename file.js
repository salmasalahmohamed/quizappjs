

const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
let arr=['javascript','Cascading Style Sheets','Hypertext Markup Language','1995'];
let question=document.getElementById('question');
let a=document.getElementById('a_text');
let b=document.getElementById('b_text');
let c=document.getElementById('c_text');
let d=document.getElementById('d_text');
let submit=document.getElementById('submit');
let quiz=document.getElementById('quiz');

const answerEls = document.querySelectorAll('.answer')
let score=0;
let i=0;

function show(){
    if(i===4){
        quiz.innerHTML=`
        <h1> your score is ${score}</h1>
        <button onclick="location.reload()"> onlod</button
        `
    }else{

        question.innerHTML=quizData[i].question;
        a.innerHTML=quizData[i].a;
        b.innerHTML=quizData[i].b
        c.innerHTML=quizData[i].c;
        d.innerHTML=quizData[i].d;
     
     i++;
    }
}
show();
submit.onclick=function(){
checked();
    show();
    deschecked();


}
function deschecked(){
    answerEls.forEach( function(answer){
        answer.checked=false;
    })
}
let p=0;
function checked(){

    answerEls.forEach( function(answer){
   if(answer.checked){
    if(answer.id==quizData[p].correct){
      
        score++;

    };

          p++;
   }

    })
  
}

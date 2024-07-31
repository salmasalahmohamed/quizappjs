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
let question=document.getElementById('question');
let a=document.getElementById('a_text');
let b=document.getElementById('b_text');
let c=document.getElementById('c_text');
let d=document.getElementById('d_text');
let a1=document.getElementById('a');
let b1=document.getElementById('b');
let c1=document.getElementById('c');
let d1=document.getElementById('d');
let submit=document.getElementById('submit');
let quiz=document.getElementById('quiz');

const answerEls = document.querySelectorAll('.answer')
let i=0;
let score=0;

function show(){
    question.innerHTML=quizData[0].question;
    a.innerHTML=quizData[0].a;
    b.innerHTML=quizData[0].b
    c.innerHTML=quizData[0].c;
    d.innerHTML=quizData[0].d;
}
show()
    

    
    function deselectAnswers() {
        answerEls.forEach(answerEl => answerEl.checked = false)
    }
    function getSelected() {
        let answer
        answerEls.forEach(answerEl => {
            if(answerEl.checked) {
                answer = answerEl.id
            }
        })
        return answer
    }
submit.onclick=function(){
const answer=getSelected();

if(answer==quizData[i].correct){

    
    score++
}

deselectAnswers();
    i++
    if(i===4){
        quiz.innerHTML=`
        <h1> your score is ${score}</h1>
        <button onclick="location.reload()"> onlod</button
        `
        
       


    }else{
        question.innerHTML=quizData[0+i].question;
        a.innerHTML=quizData[0+i].a;
        b.innerHTML=quizData[0+i].b
        c.innerHTML=quizData[0+i].c;
        d.innerHTML=quizData[0+i].d;
    }
   


}

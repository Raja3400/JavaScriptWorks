const questions=[
    {
        'que': 'Which of the following is markup lanfguuage',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JS',
        'd': 'PHP',
        'correct': 'a'

    },
    {
        'que': 'What year was JavaScript Launched',
        'a': '1995',
        'b': '1996',
        'c': '1994',
        'd': '2000',
        'correct': 'b'
    },
    {
        'que': 'What does CSS stands for',
        'a': 'HyperText Markup Language',
        'b': 'Jason Object Notation',
        'c': 'Cascading Style Sheets',
        'd': 'None of these',
        'correct': 'c'
    }
]
let index=0;
const queBox=document.getElementById("queBox");
const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
const option4=document.getElementById("option4");
const loadQuestion=()=>
{
    if(index===total)
    {
        return endQuiz();
    }
    else{
    reset();
    const data=questions[index];
     queBox.innerText=`${index+1}. ${data.que}`;
     option1.nextElementSibling.innerText=data.a;
     option2.nextElementSibling.innerText=data.b;
     option3.nextElementSibling.innerText=data.c;
     option4.nextElementSibling.innerText=data.d;
    }
}
const endQuiz=()=>
{
    document.getElementById("box").innerHTML=`<h3> Thanks for attempting Quiz </h3>
    <h2> ${right} is  your score out of ${total} </h2>`
}
let total=questions.length;
let right=0,wrong=0;

const getAnswer=()=>
{
    if(option1.checked)
     return option1.value;
    
     if(option2.checked)
     return option2.value;
    
     if(option3.checked)
     return option3.value;
    
     if(option4.checked)
     return option4.value;
    
}
const submitQuiz=()=>
{
    const data=questions[index];
const ans=getAnswer();
if(ans===data.correct)
right++;
else
wrong++;
index++;

loadQuestion();
return;
} 
const reset=()=>
{
    option1.checked=false;
    option2.checked=false;
    option3.checked=false;
    option4.checked=false;
}

loadQuestion();
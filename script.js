const quizData = [
    {
        question:"Complete the series 1,6,13,22,33,..",
        a:"46",
        b:"48",
        c:"49",
        d:"51",
        correct:"46",
    },
    {
        question:"In the following number series a wrong number is given. Find out the wrong number 150, 450, 750, 1060, 1350, 1650, 1950",
        a:"1050",
        b:"1950",
        c:"450",
        d:"1350",
        correct:"1050",
    },    {
        question:"Sunday, Monday, Wednesday, Saturday, Wednesday, Monday, .....",
        a:"sunday,sunday",
        b:"sunday,monday",
        c:"sunday,wednesday",
        d:"sunday,saturday",
        correct:"sunday,sunday",
    },    
    {
        question:"Which of the following will come in place of the question mark (?) in the following sequence? PRODUCTIVITY, RODUCTIVIT, ODUCTIVI, ",
        a:"DUCTIV",
        b:"DUCTLY",
        c:"UCTIV",
        d:"DUCTI",
        correct:"DUCTIV",
   
    },    
    {
        question:"In the following number series a wrong number is given. Find out the wrong number. 1, 3, 10, 21, 64, 129, 356, 777",
        a:"945",
        b:"568",
        c:"819",
        d:"356",
        correct:"356",
    },  {
        question:"Devesh can cover a certain distance in 1 hour 24 minutes by covering two-third of the distance at 6 km/hour and the rest at 7 km/hr. Calculate total distance.",
        a:"8km",
        b:"9km",
        c:"6km",
        d:"7.5km",
        correct:"6km",
   
    },    {
        question:"Find the H.C.F, if the numbers are in the ratio of 4 : 5 : 6 and their L.C.M. is 2400.",
        a:"35",
        b:"20",
        c:"40",
        d:"60",
        correct:"20",
   
    },    {
        question:"The rate at which a sum becomes four times of itself in 25 years at S.I.,will be:",
        a:"30%",
        b:"25%",
        c:"12%",
        d:"29%",
        correct:"12%",
   
    },    {
        question:"In a certain code FIRE is coded as DGPC. What will be the last letter of the coded word for SHOT.",
        a:"Q",
        b:"R",
        c:"S",
        d:"T",
        correct:"R",
   
    },    {
        question:"If TOUR is written in a certain code as 1234, CLEAR as 56784 and SPARE as 90847, what will be the 5thdigit for SCULPTURE in the same code ?",
        a:"3",
        b:"4",
        c:"6",
        d:"0",
        correct:"6",
    
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

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


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})

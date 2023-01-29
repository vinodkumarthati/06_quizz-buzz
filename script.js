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
    }
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
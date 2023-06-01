var quesArray = [
    {
        num: 1,
        question: "HTML stand for",
        option: {
            a: "Hyper text markup Language",
            b: "Hyper text programming Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",

        },
        answer: "Hyper text markup Language"
    },
    {
        num: 2,
        question: "Which type of JavaScript Languages is",
        option: {
            a: "Object-Oriented ",
            b: "Object-Base",
            c: "Assembly Languages",
            d: "high Level",

        },
        answer: "Object-Base"
    },
    {
        num: 3,
        question: "The 'function' and  'var' are known as:",
        option: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes",

        },
        answer: "Declaration statements"
    }
    ,
    {
        num: 4,
        question: "who is the present president of pakistan",
        option: {
            a: "Arif Alvi",
            b: "Imran Khan",
            c: "Nawaz Sharif",
            d: "Zardari",

        },
        answer: "Arif Alvi"
    }
    ,
    {
        num: 5,
        question: "How many prayers in a day:",
        option: {
            a: "6",
            b: "5",
            c: "3",
            d: "none",

        },
        answer: "5"
    },
    {
        num: 6,
        question: "How many total surah in quran",
        option: {
            a: "113",
            b: "114",
            c: "112",
            d: "111",

        },
        answer: "114"
    },
    {
        num: 7,
        question: "The correct sequence of HTML tags for starting a webpage is",
        option: {
            a: "Head, Title, HTML, body",
            b: "HTML, Body, Title, Head",
            c: "HTML, Head, Title, Body",
            d: "HTML, Title , Head,  Body",

        },
        answer: "HTML, Head, Title, Body"
    }
]




var startButton = document.querySelector('.startButtonWrapper');
var quizWrapper = document.querySelector('.quizWrapper');
var quizQues = document.querySelector('#quizQues');
var quizOption = document.querySelector('#quizOption').children;
var nextBtn = document.querySelector('#nextBtn');

// reslt    ==============
// var totalQuestion = document.querySelector('.totalQuestion')
var totalQuesElement = document.getElementById("totalQuesElement")
var correctAnsElement = document.getElementById("correctAnsElement")
var wrongAnsElement = document.getElementById("wrongAnsElement")
var totalScoreElement = document.getElementById("totalScoreElement")
var percentage = document.querySelector('.hun');
var resultWrapper = document.querySelector('.resultWrapper')


for (var li of quizOption) {
    li.setAttribute('onclick', 'selectOption(this)')
    console.log(li)
}


// counters
var counter = 0
var correctAnsCounter = 0
var wrongAnsCounter = 0
var totalScore = 0


function formHandler() {
    var formWrapper = document.querySelector('.formRapper');
    var inputField = formWrapper.querySelectorAll('input')

    
    // for(var input of inputField){
    //     console.log(input.value)
    //     if(!input.value){
    //         // alert('enter required field')
    //         swal("SORRY!", "please fill requird field!", "error");  
    //         return
    //     }
    // }

    formWrapper.style.display = 'none'
    startButton.style.display = 'flex'
}
function quizStart() {
    
    
    nextBtn.style.display = "none"
    startButton.style.display = 'none'
    quizWrapper.style.display = 'block'

    quizQues.innerHTML = quesArray[counter].question
    quizOption[0].innerHTML = quesArray[counter].option.a
    quizOption[1].innerHTML = quesArray[counter].option.b
    quizOption[2].innerHTML = quesArray[counter].option.c
    quizOption[3].innerHTML = quesArray[counter].option.d

}
function nextQues() {
    if (counter < quesArray.length - 1) {
        counter++;
        quizQues.innerHTML = quesArray[counter].question
        quizOption[0].innerHTML = quesArray[counter].option.a
        quizOption[1].innerHTML = quesArray[counter].option.b
        quizOption[2].innerHTML = quesArray[counter].option.c
        quizOption[3].innerHTML = quesArray[counter].option.d

    } else {
        
        quizWrapper.style.display = "none"
        resultWrapper.style.display = "block"
               //set result values
               totalQuesElement.innerHTML = quesArray.length
               correctAnsElement.innerHTML = correctAnsCounter
               wrongAnsElement.innerHTML = wrongAnsCounter
               totalScoreElement.innerHTML = totalScore
               percentage.innerHTML = Math.round((totalScore /14 ) * 100) + '%'
    }

    for (var li of quizOption) {
        li.classList.remove("disableLi")
        li.classList.remove("wrongAns")
        li.classList.remove("correctAns")
    }
    nextBtn.style.display = "none"
}
function selectOption(element) {
    if (element.innerHTML === quesArray[counter].answer) {
        element.className = 'correctAns'
     totalScore += 2
        correctAnsCounter++
    } else {
        element.className = 'wrongAns'
        console.log('answer false')
        wrongAnsCounter++

        for (var li of quizOption) {
            console.log(li.innerHTML)
            if (li.innerHTML === quesArray[counter].answer) {
                li.classList.add("correctAns")
                break
            }

        }
    }



    for (var li of quizOption) {
        li.classList.add("disableLi")
    }
    nextBtn.style.display = 'block'

    
}

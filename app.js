
var startButton = document.querySelector('.startButtonWrapper');
var quizWrapper = document.querySelector('.quizWrapper')
function formHandler(){
    var formWrapper = document.querySelector('.formRapper');
    var inputField = formWrapper.querySelectorAll('input')


for(var input of inputField){
    console.log(input.value)
    if(!input.value){
        alert('enter required field')
        return
    }
}

formWrapper.style.display = 'none'
startButton.style.display = 'flex'
}
function quizStart(){
    startButton.style.display = 'none';
    quizStart.style.display ='flex'
}
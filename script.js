
document.getElementById("greeting-text-input").onchange = function() {changeGreetingText()}
function changeGreetingText() {
    let greetingTextInput = document.getElementById("greeting-text-input");
    let newGreetingText = document.getElementById("greeting");
    newGreetingText.innerHTML = greetingTextInput.value;
}

document.getElementById("signoff-input").onchange = function() {changeSignoff()}
function changeSignoff() {
    let signoffTextInput = document.getElementById("signoff-input");
    let signoffText = document.getElementById("signoff");
    signoff.innerHTML = signoffTextInput.value;
}

document.getElementsByName("color").onchange = function() {changeColor()}
function changeColor() {
    let colorChoice = document.querySelector('input[name="color"]:checked')?.value;
    let newColor = document.getElementById("design");
    newColor.style.backgroundColor = colorChoice;
}
// FAQ
function toggleAnswer(index) {
    var answer = document.getElementById('answer-' + index);
    var heading = answer.previousElementSibling;
    var plusMinus = heading.querySelector('.plus-minus');
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        plusMinus.textContent = "−";  
        heading.classList.add('open');
    } else {
        answer.style.display = "none";
        plusMinus.textContent = "+";
        heading.classList.remove('open');
    }
}




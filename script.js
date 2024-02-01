document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.querySelector('.start_btn button');
    const infoBox = document.querySelector('.info_box');
    const exitBtn = infoBox.querySelector('.buttons .quit');
    const continueBtn = infoBox.querySelector('.buttons .restart');
    const quizBox = document.querySelector('.quiz_box');
    const nextBtn = document.querySelector('.next_btn');
    const resultBox = document.querySelector('.result_box');
    const replayBtn = resultBox.querySelector('.buttons .restart');
    const quitBtn = resultBox.querySelector('.buttons .quit');




    // Start Quiz button click event
    startBtn.addEventListener('click', function () {
        infoBox.style.opacity = '1';
        infoBox.style.pointerEvents = 'auto';
        quizBox.style.opacity = '0';
        quizBox.style.pointerEvents = 'none';
    });

    // Exit Quiz button click event
    exitBtn.addEventListener('click', function () {
        infoBox.style.opacity = '0';
        infoBox.style.pointerEvents = 'none';
        quizBox.style.opacity = '0';
        quizBox.style.pointerEvents = 'none';
        resultBox.style.opacity = '0';
        resultBox.style.pointerEvents = 'none';
    });

    // Continue button click event
    continueBtn.addEventListener('click', function () {
        infoBox.style.opacity = '0';
        infoBox.style.pointerEvents = 'none';
        quizBox.style.opacity = '1';
        quizBox.style.pointerEvents = 'auto';
        startTimer();
    });

});

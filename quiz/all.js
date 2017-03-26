 /* quiz */
(function (document) {
    "use strict";
    /*jslint plusplus: true, browser: true*/


    Array.prototype.sum = function () {
        var total = 0,
            i = this.length;

        while (i--) {
            total += parseInt(this[i], 10);
        }
        return total;
    };
    function loop($els, cb) {
        var i = $els.length;

        while (i > 0) {
            i -= 1;
            cb($els[i]);
        }
    }


    var $formRadios = document.querySelectorAll('.quiz-form-radios'),
        $formUser = document.querySelector('#quiz-form-user'),
        $quizForm = document.querySelectorAll('.quiz-form'),
        $quizLastForm = document.querySelector('#quiz-form-last'),
        $quizQuestions = document.querySelectorAll('.quiz-question-item'),
        $quizPagers = document.querySelectorAll('.quiz-pager-item'),

        $answerProduct = document.querySelectorAll('.quiz-answer-product'),
        $answer1 = document.querySelector('#quiz-answer-1'),
        $answer2 = document.querySelector('#quiz-answer-2'),
        $answer3 = document.querySelector('#quiz-answer-3'),
        $answer4 = document.querySelector('#quiz-answer-4'),
        $linkAgain = document.querySelector('.link-again'),

        $name = $formUser.querySelector("input[name='name']"),
        $email = $formUser.querySelector("input[name='email']"),
        answers = {};


    $formUser.addEventListener("submit", function () {
        answers.user = [];

        if ($name.value !== '' && $email.value !== '') {
            this.setAttribute('data-answer', 'answered');
        }
    });


    loop($formRadios, function ($form) {
        $form.addEventListener("submit", function () {
            var $radio = $form.querySelector('input[type="radio"]:checked');

            if ($radio) {
                answers.user.push($radio.value);
                this.setAttribute('data-answer', 'answered');
            }

        });
    });



    loop($quizForm, function ($form) {
        $form.addEventListener("submit", function (e) {
            e.preventDefault();

            var $parent = this.parentNode,
                next = Array.prototype.slice.call($quizForm).indexOf(this) + 1;

            if (this.getAttribute('data-answer') === 'answered') {
                loop($quizPagers, function ($pager) {
                    $pager.classList.remove('is-active');
                });


                $quizPagers[next].classList.add('is-active');
                $quizQuestions[next].classList.add('is-active');
                $parent.classList.remove('is-active');
            } else {
                this.classList.add('quiz-form-error');
            }

        });
    });


    $quizLastForm.addEventListener("submit", function () {
        var answer = answers.user.sum();

        loop($answerProduct, function ($answer) {
            $answer.classList.add('is-hidden');
        });


        if (answer === 18) {
            $answer1.classList.remove('is-hidden');
            return;
        }
        if (answer >= 13) {
            $answer2.classList.remove('is-hidden');
            return;
        }
        if (answer >= 10) {
            $answer3.classList.remove('is-hidden');
            return;
        }

        $answer4.classList.remove('is-hidden');
    });
    $quizLastForm.addEventListener("submit", function () {
        var xmlhttp = new XMLHttpRequest(),
            data = "";


        data = 'data={ "name": "' + $name.value + '", "email": "' + $email.value + '", "answers": "' + answers.user.sum() + '" }';
        xmlhttp.open("POST", "process.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(data);

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                console.log("cadastrado no banco");
            }
        };
    });
    $linkAgain.addEventListener("click", function (e) {
        e.preventDefault();

        loop($quizPagers, function ($pager) {
            $pager.classList.remove('is-active');
        });
        $quizPagers[0].classList.add('is-active');
    });

    $linkAgain.addEventListener("click", function (e) {
        loop($quizQuestions, function ($question) {
            $question.classList.remove('is-active');
        });
        $quizQuestions[0].classList.add('is-active');
    });


}(document));

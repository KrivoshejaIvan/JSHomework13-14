'use strict';
$(function () {
    var $html = $('html');
    var $body = $('body');
    var $answerLabel = $('.answerLabel');
    var question1 = {
        question:'Что такое JavaScript',
        answer: [
            'Страна в Африке',
            'Известный Певец',
            'Язык програмирования'

        ]
    };
    var question2 = {
        question:'С помощью какого тега моно подключить файлы к HTML',
        answer: [
            'File',
            'Link',
            'Upload'
        ]
    };
    localStorage.setItem('obj1',JSON.stringify(question1));
    localStorage.setItem('obj2',JSON.stringify(question2));


    var obj1 = localStorage.getItem('obj1');
    obj1 = JSON.parse(obj1);
    var obj2 = localStorage.getItem('obj2');
    obj2 = JSON.parse(obj2);

    var resultAnswer1 = [obj1];
    var resultAnswer2 = [obj2];

    var html = $('#test').html();

    var content =tmpl(html,{
        data: resultAnswer1,
        dataSecond: resultAnswer2
    });

    $('body').append(content);

    var check1;
    var check2;

    $('#check1_3').on('click', function () {
        check1 = true
    });
    $('#check2_2').on('click', function () {
        check2 = true
    });

    $('input[type=checkbox]').change(function(){
        $(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');
    });
    $('.answerButton').on('click', function (e) {
        e.preventDefault();
        if (check1 && check2 == true) {
            alert('И это правильный ответ');
            location.reload();
        } else {
            alert('Вы слабое звено');
            location.reload();
        }
    });
});

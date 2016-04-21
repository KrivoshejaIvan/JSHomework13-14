'use strict';

 var QBase = {
    question:  [
        {
            q:'Что такое JavaScript',
                answer: [
                    {text:'Страна в Африке'},
                    {text:'Известный Певец'},
                    {text:'Язык програмирования'}
                        ]
        },
        {
            q:'С помощью какого тега моно подключить файлы к HTML',
                answer: [
                    {text:'File'},
                    {text:'Link'},
                    {text:'Upload'}
                ]
        }
    ]
};

localStorage.setItem('QBase',JSON.stringify(QBase));

var QBase = localStorage.getItem('QBase');
QBase = JSON.parse(QBase);


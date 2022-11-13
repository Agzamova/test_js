'use strict';
let test = document.querySelector('.test')
let btn = document.querySelector('button')
let questions = [
    {
        text: 'Энтомология — это наука, которая изучает:',
        right: 1,
        variants: [
            'преступность',
            'насекомых',
            'культуры',
            'общество',
        ],
        image: '1.jpg'
    },
    {
        text: 'Эритрея — это страна в:',
        right: 2,
        variants: [
            'Америках',
            'Европе',
            'Африке',
            'Азии',
        ]
    },
    {
        text: 'Выберите лишнее:',
        right: 2,
        variants: [
            'персик',
            'апельсин',
            'морковь',
            'банан',
            'вишня',
        ],
        image: '2.jpg'
    },
    {
        text: 'Вторая мировая война длилась с 1939 по 1945 годы.',
        right: 0,
        variants: [
            'правда',
            'ложь',
        ]
    },
    {
        text: 'Международный женский день отмечается в:',
        right: 0,
        variants: [
            'марте',
            'апреле',
            'мае',
            'июне',
            'феврале',
        ]
    },
    {
        text: 'Индуизм основан на учениях Будды.',
        right: 1,
        variants: [
            'правда',
            'ложь',
        ]
    },
    {
        text: 'Пабло Пикассо был:',
        right: 0,
        variants: [
            'испанцем',
            'бразильцем',
            'мексиканцем',
        ],
        image: '3.jpg'
    },
    {
        text: 'Лошадь живёт _____ лет.',
        right: 1,
        variants: [
            '15-20',
            '25-30',
            '30-35',
            '35-40',
        ]
    },
    {
        text: 'Кто был первым человеком на Луне?',
        right: 0,
        variants: [
            'Нил Армстронг',
            'Джон Гленн',
        ],
        image: '4.jpg'
    },
    {
        text: 'Первая мировая война закончилась в:',
        right: 1,
        variants: [
            '1914 г.',
            '1918 г.',
        ]
    },
]
let count

window.addEventListener('load', function() {
    let ul = document.createElement('ul')
    ul.classList.add('questions')
        for (let i = 0; i < questions.length; i++) {
            let li = document.createElement('li')
            let div = document.createElement('div')
            let p = document.createElement('p')
            let h2 = document.createElement('h2')
            li.classList.add('question-item')
            li.classList.add('item')
            div.classList.add('item-header')
            p.classList.add('item-num')
            h2.classList.add('item-text')
            let ul2 = document.createElement('ul')
            ul2.classList.add('item-answers')
            ul2.classList.add('answers')
            
            for (let k = 0; k < questions[i].variants.length; k++) {
                let li2 = document.createElement('li')
                let label = document.createElement('label')
                let input = document.createElement('input')
                label.innerHTML = ` ${questions[i].variants[k]}`
                input.setAttribute('type', 'radio')
                input.setAttribute('name', [i + 1])
                li2.classList.add('answers-item')
                li2.classList.add('answer')
                label.classList.add('answer-label')
                input.classList.add('answer-input')
                label.prepend(input)
                li2.append(label)
                ul2.append(li2)
            }
            p.textContent = `ВОПРОС ${i + 1} ИЗ ${questions.length}`
            h2.textContent = questions[i].text
            div.append(p)
            div.append(h2)
            li.append(div)
            if (questions[i].image) {
                let img = document.createElement('img')
                img.src = questions[i].image
                img.classList.add('item-img')
                li.append(img)
            }
            li.append(ul2)
            ul.append(li)
        }
    test.append(ul)
})

btn.addEventListener('click', function() {
    count = 0
    let lis = document.querySelectorAll('.answers-item')
    for (let el of lis) {
        el.classList.remove('right')
        el.classList.remove('wrong')
        el.classList.add('answer')
    }
    
    let uls = document.querySelectorAll('.test ul li ul')
    for (let i = 0; i < uls.length; i++) {
        let radios = uls[i].querySelectorAll('input[type="radio"]')
        for (let k = 0; k < radios.length; k++) {
            if (radios[k].checked) {
                let answer = radios[k].parentElement.parentElement
                answer.classList.remove('answer')
                for (let j = 0; j < questions.length; j++) {
                    if (k == questions[i].right) {
                        answer.classList.add('right')
                    } else {
                        answer.classList.add('wrong')
                    }
                }
            }
        }
    }

    let answers = document.querySelectorAll('.answers-item')
    for (let j = 0; j < answers.length; j++) {
        if (answers[j].classList.contains('right')) {
            console.log(answers[j]);
            count++
        }
    }
    let result = document.querySelector('.result')
    result.classList.remove('hidden')
    result.textContent = `Вы ответили правильно на ${count} из 10 вопросов`
})
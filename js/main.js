// ========================== Все Элементы ======================
const getInput = document.querySelector('.input-todo')
const getAdd = document.querySelector('.get-todo')
const wrapper = document.querySelector('.wrapper-info')

// ========================== Массив в который пушиться данные ======================
const todoList = []

// ======= Функция которая проверяет длинну массива, если больше 10 то кнопка скрывается если меньше снова показывает ======
const lengthCheck = setInterval(() => {
        if (wrapper.children.length <= 9) {
            getAdd.style.display = "block"
        } else if (wrapper.children.length > 9) {
            getAdd.style.display = "none"
        }
}, 100)


// ========================== Фукнция которая добавляет элементы ======================
getAdd.addEventListener('click', () => {
    if (getInput.value) {
        lengthCheck
            const date = new Date()
            const time = date.getHours() + ':' + date.getMinutes()
            const cardObj = {}
            cardObj.title = getInput.value
            cardObj.time = time;
            const box = document.createElement('div')
            box.classList.add('col')
            box.innerHTML = `<div class="box box-parentNode">
                       <div class="info-box">
                           <p class="card-name">Что нужно сделать:</p>
                           <p class="card-name-value">${cardObj.title}</p>
                       </div>
                        <div class="inner-box">
                            <div class="inner-buttons">  
                                <button class="card-redact-button"><i class="fa-solid fa-pen"></i></button>
                                <button class="card-delete-button"><i class="fa-solid fa-trash"></i></button>
                            </div>
                            <div class="inner-time">
                                <p class="card-time">${cardObj.time}</p>
                            </div>
                        </div>
                    </div>`
            todoList.push(cardObj)
            wrapper.append(box)
            getInput.value = ''
            deleteFunction()
            redactorFunction()
    } else {
        lengthCheck
        alert('Введите информацию!')
    }
})

// ========================== Функция которая редактирует значение ======================
const redactorFunction = () => {
    document.querySelectorAll('.card-redact-button').forEach(re => {
        const infoObj = {}
        re.addEventListener('click', () => {
            const inp = document.createElement('input')
            inp.classList.add('.change-value')
            infoObj.value = re.parentElement.parentElement.previousElementSibling.children[1].innerHTML
            console.log(infoObj)
            const hidden = re.parentElement.parentElement.previousElementSibling.children[1]
            hidden.style.display = "none"
            const infobox = re.parentElement.parentElement.previousElementSibling
            inp.value = infoObj.value
            infobox.append(inp)
            const buttonBox = re.parentElement
            const acceptButton = document.createElement('button')
            acceptButton.classList.add('card-accept-button')
            acceptButton.innerHTML = `<i class="fa-solid fa-check"></i>`
            buttonBox.prepend(acceptButton)
            buttonBox.children[1].remove()
            acceptFunction()
        })
    })
}


// ========================== Фукнция которая принимает новое значение и пушиться в DOM ======================
const acceptFunction = () => {
    document.querySelectorAll('.card-accept-button').forEach(accept => {
        accept.addEventListener('click', () => {
            const acceptObj = {}
            const acceptedValue = accept.parentElement.parentElement.previousElementSibling.children[2].value
            acceptObj.value = acceptedValue
            const infoBox = accept.parentElement.parentElement.previousElementSibling.children[1]
            infoBox.style.display = "block"
            infoBox.innerHTML = acceptedValue
            const redactBtn = document.createElement('button')
            redactBtn.classList.add('card-redact-button')
            redactBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
            accept.parentElement.prepend(redactBtn)
            accept.parentElement.parentElement.previousElementSibling.children[2].remove()
            accept.parentElement.children[1].remove()
            redactorFunction()
        })
    })
}


// ========================== Функция которая удаляет выбранный блок ======================
const deleteFunction = () => {
    document.querySelectorAll('.card-delete-button').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.parentElement.parentElement.parentElement.style.animation = 'hiddenEffect 0.5s ease-in-out'
            setTimeout(() => {
                btn.parentElement.parentElement.parentElement.parentElement.remove()
            }, 300)
        })
    })
}

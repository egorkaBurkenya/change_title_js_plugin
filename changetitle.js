let timer;
let wating = 2000 // время ожидания до переключения

// Заголовок и иконка странички по умолчанию
const defult = {
    title: 'Perfect website',
    ico: './images/favicon.ico'
}

// Заголовок и иконка странички, которые нужно вывести если человек долго не заходит
const changes = {
    title: 'where are u going ?',
    ico: './images/circle.ico'
}

function changeTitle(title, ico) {
    document.querySelector('title').innerHTML = title
    document.querySelector('link[rel="shortcut icon"]').setAttribute('href', ico)
}

window.onblur = () => {
    timer = setTimeout(() => changeTitle(changes.title, changes.ico), wating)
}

window.onfocus = () => {
    clearTimeout(timer)
    changeTitle(defult.title, defult.ico)
}


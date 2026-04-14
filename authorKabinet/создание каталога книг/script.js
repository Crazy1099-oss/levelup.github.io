function renderAuthorInfo(autorsDate, autorsSystemDate, bookDate) {
    //Нарисовать данные самого пользователя
    console.log("Полученные данные 1", autorsDate)
    console.log("Полученные данные 2", autorsSystemDate)

    //ДЗ сделать боок соавторы / соавторы
    //ДЗ преобразовать дату в формат дд.мм.гг

    const display = document.getElementById('display')

    display.innerHTML = ''

    display.innerHTML += `
        <div id="root">
            <div class="info-auther">
                <img class="auter-iamge" src="image/auther/06af85d60d4446ff6227735e47085624.jpg" alt="auther">
                <h3>Добро пожаловать <span class="auther">${autorsSystemDate.userName}</span></h3>
                <button onclick="myFunction()" class="btn-exit">Выйти</button>
            </div>

            <div class="info-book">
                <p>Количество отзывов: <span id="pageCount">${bookDate.pageCount}</span></p>
                <p>Общий рейтинг: <span id="rating">88.91</span></p>
            </div>

            <div class="all-info">
                <h2>ID Книги: ${bookDate.id}</h2>
                <div class="all-info-book">
                    <p>Название книги: <span>${bookDate.title}</span></p>
                    <p>Количество страниц: <span>${bookDate.pageCount}</span></p>
                    <p>Дата: <span>${bookDate.publishDate}</span></p>
                    <p>Описание: <span>${bookDate.description}</span></p>
                    <p>Отрывок: <span>${bookDate.excerpt}</span></p>
                </div>
            </div>
        </div>
                
        <div class="auther-info">
            <h2>Ваша информация</h2>
            <p>Ваше имя: <span>${autorsDate.firstName}</span></p>
            <p>Ваша фамилия: <span>${autorsDate.lastName}</span></p>
            <p>Ваш логин: ${autorsSystemDate.userName}</p>
            <p>Ваш пароль: <input id='inputPassword' disabled type="password" value="${autorsSystemDate.password}"></p>
            <p><button onclick="showPassword()">Показать пароль</button></p>
        </div>
    `
}

function showPassword() {
    document.querySelector('#inputPassword').setAttribute('type', 'text')
}

async function auth(value) {
    console.log('value',value)
    //Получить данные о авторе
    const autorsDate = await fetch(`https://fakerestapi.azurewebsites.net/api/v1/Authors/${value.id}`).then(function (finalDate) {
        return finalDate.json()
    });
    console.log('autorsDate', autorsDate);

    //Получить данные о его книге (дз)
    const bookDate = await fetch(`https://fakerestapi.azurewebsites.net/api/v1/Books/${autorsDate.idBook}`).then(function (finalDate) {
        return finalDate.json()
    });
     console.log('bookDate', bookDate);

    // Меняется экран
    document.querySelector('#login').classList.add('hidden')
    document.querySelector('#display').classList.remove('hidden')

    // Рендер страницы
    renderAuthorInfo(autorsDate, value, bookDate)
}

// ДЗ Преобразовать функциюю в универсальную, те если вызываем и ошибка есть, то мы ее прячем, если нету - показываем (switchErrorAuth)
function showErrorAuth() {
    document.querySelector('.error-block').classList.add('visible')
    document.querySelector('#error-auth').innerText = 'Не верный логин или пароль'
}

document.querySelector('.form-user form').addEventListener('submit', async function (event) { // async делает функцию асинхоронной
    event.preventDefault();

    // Получаем данные введенные пользователем


    // получаем форму через данные
    const form = event.target;
    console.log('event', event.target);

    // Получим логин формы по простому
    const login = form.querySelector('input[name="username"]').value;
    console.log('login', login);

    // Получим логин формы по простому
    const formData = new FormData(form);
    console.log('formData', formData);

    const password = formData.get('password');
    console.log('password', password);

// ТК на сервере не предусмотренно получение польлзователей по логину и паролю, получаем всех пользователей сразу

    const result = await fetch('https://fakerestapi.azurewebsites.net/api/v1/Users').then(function (finalDate) {
        return finalDate.json()
    });

    console.log('пользователи', result)
    // Находим пользавателей в общем массиве
    /*result.forEach(function (value, index) {
        if (value.password == password && value.userName == login) {
            console.log('Условние прошло', value);
            auth(value);
        }
    })*/
   const authUser = result.find(function (value, index) {
        if (value.password == password && value.userName == login) {
            return value;
        }
   })
   console.log('authUser',authUser)
   authUser ?  auth(authUser) : showErrorAuth()
})


//Выход из личного кабинета
function myFunction() {
    display.innerHTML = ''

    // Меняется экран
    document.querySelector('#login').classList.remove('hidden')
    document.querySelector('#display').classList.add('hidden')
}

introduction = `
        <div id="card" class="card introduction show">
            <h1>ИИ в образовании</h1>

            <div>
                <h1>Введение</h1>
                <p>
                    <span class="ai">ИИ</span> стремительно меняет сферу образования, помогая сделать обучение более<br>
                    персонализированным и эффективным. Современные технологии позволяют адаптировать учебные<br>
                    программы под индивидуальные потребности учащихся, автоматизировать рутинные задачи<br>
                    преподавателей и повышать доступность знаний.
                </p>
            </div>

            <div>
                <h2>Что же всё-таки такое <span class="ai">ИИ</span>?</h2>
                <p>
                    Искусственный интеллект (<span class="ai">ИИ</span>) — это область компьютерных наук,
                    направленная<br>
                    на создание систем, способных выполнять задачи, которые обычно требуют человеческого интеллекта.
                </p>
            </div>

            <a class="hf nextbtn" onclick="toAdva()">
                <img src="images/ra-icon.png" alt="" height="32" width="32">
            </a>
        </div>
`

advantages = `
        <div id="card" class="card advantages show">
            <h1>Какие же <span style="color: green;">преимущества</span>?</h1>

            <ul>
                <li>
                    <h4><span style="color: orangered;">1.</span> Персонализированное обучение</h4>
                    <p>
                        <span class="ai">ИИ</span> адаптирует материалы<br> под уровень знаний каждого ученика.
                    </p>
                </li>

                <li>
                    <h4><span style="color: orangered;">2.</span> Автоматизированная проверка заданий</h4>
                    <p>
                        Ускорение процесса оценки<br> и снижение нагрузки на преподавателей.
                    </p>
                </li>

                <li>
                    <h4><span style="color: orangered;">3.</span> Доступность образования</h4>
                    <p>
                        Онлайн-курсы и образовательные платформы<br> дают возможность учиться из любой точки мира.
                    </p>
                </li>

                <li>
                    <h4><span style="color: orangered;">4.</span> Интерактивные технологии</h4>
                    <p>
                        Виртуальные репетиторы и чат-боты<br> помогают получать мгновенные ответы на вопросы.
                    </p>
                </li>
            </ul>

            <a class="hf backbtn" onclick="toIntro()">
                <img src="images/la-icon.png" alt="" height="32" width="32">
            </a>

            <a class="hf nextbtn" onclick="toUse()">
                <img src="images/ra-icon.png" alt="" height="32" width="32">
            </a>
        </div>
`

use = `
        <div id="card" class="card use show">
            <div>
                <h1>Применение <span class="ai">ИИ</span></h1>
                <p>
                    <span class="ai">ИИ</span> уже активно используется в образовании. Адаптивные учебные системы<br>
                    анализируют успехи учеников и предлагают персонализированные задания. Виртуальные репетиторы
                    обучают<br>
                    в режиме реального времени, а голосовые помощники помогают быстро находить нужную информацию.
                    Кроме<br>
                    того, <span class="ai">ИИ</span> анализирует пробелы в знаниях студентов и предлагает
                    индивидуальные<br>
                    рекомендации.
                </p>
            </div>

            <div>
                <h2>Примеры</h2>
                Создавать презентации можно с помощью <a href="https://gamma.app" target="_blank">gamma.app</a>, <a
                    href="https://miro.com" target="_blank">miro.com</a>.<br>
                Для текстовых запросов стоит использовать <a href="https://ya.ru/ai/gpt" target="_blank">YandexGPT</a>,
                <a href="https://www.perplexity.ai" target="_blank">perplexity.ai</a>, <a href="https://chatgpt.com"
                    target="_blank">chatgpt.com</a>.<br>
                Для генерация видео и картинок: <a href="https://shedevrum.ai" target="_blank">shedevrum.ai</a>, <a
                    href="https://www.sberbank.com/promo/kandinsky/" target="_blank">kandinsky</a>, <a
                    href="https://klingai.com" target="_blank">klingai.com</a>.<br>
                Виртуальные учителя: <a href="https://getparla.com/" target="_blank">Parla</a>, <a
                    href="https://buddy.ai/ru/" target="_blank">buddy.ai</a>, <a href="https://ru.khanacademy.org/"
                    target="_blank">Khan Academy</a>
            </div>

            <a class="hf backbtn" onclick="toAdva()">
                <img src="images/la-icon.png" alt="" height="32" width="32">
            </a>

            <a class="hf nextbtn" onclick="toImpact()">
                <img src="images/ra-icon.png" alt="" height="32" width="32">
            </a>
        </div>
`

impact = `
        <div id="card" class="card impact show">
            <h1>Влияние <span class="ai">ИИ</span> на образование</h1>
            <p>
                Благодаря <span class="ai">ИИ</span> образовательные процессы становятся более гибкими и доступными.<br>
                Технологии позволяют внедрять дистанционное обучение, автоматизировать управление учебным процессом<br>
                и повышать его эффективность. Студенты могут учиться в удобное время, а преподаватели получают новые<br>
                инструменты для работы.
            </p>

            <a class="hf backbtn" onclick="toUse()">
                <img src="images/la-icon.png" alt="" height="32" width="32">
            </a>

            <a class="hf nextbtn" onclick="toDisadva()">
                <img src="images/ra-icon.png" alt="" height="32" width="32">
            </a>
        </div>
`

disadvantages = `
        <div id="card" class="card disadvantages show">
            <h1>Какие же <span style="color: red;">проблемы</span>?</h1>

            <ul>
                <li>
                    <h4><span style="color: orangered;">1.</span> Зависимость от технологий</h4>
                    <p>
                        Учащиеся могут меньше развивать<br> самостоятельное критическое мышление.
                    </p>
                </li>

                <li>
                    <h4><span style="color: orangered;">2.</span> Конфиденциальность данных</h4>
                    <p>
                        Сбор информации о студентах<br> требует строгих мер защиты.
                    </p>
                </li>

                <li>
                    <h4><span style="color: orangered;">3.</span> Неравный доступ</h4>
                    <p>
                        Не у всех есть возможность пользоваться<br> современными технологиями и интернетом.
                    </p>
                </li>

                <li>
                    <h4><span style="color: orangered;">4.</span> Снижение живого общения</h4>
                    <p>
                        Важно сохранять баланс между<br> онлайн и офлайн образованием.
                    </p>
                </li>
            </ul>

            <a class="hf backbtn" onclick="toImpact()">
                <img src="images/la-icon.png" alt="" height="32" width="32">
            </a>

            <a class="hf nextbtn" onclick="toConcl()">
                <img src="images/ra-icon.png" alt="" height="32" width="32">
            </a>
        </div>
`

conclusion = `
        <div id="card" class="card conclusion show">
            <div>
                <h1>Заключение</h1>
                <p>
                    <span class="ai">ИИ</span> играет всё более значимую роль в образовании, улучшая доступ к знаниям и
                    повышая их качество. Однако<br>
                    для эффективного внедрения технологий важно учитывать как их преимущества, так и возможные
                    риски,<br>
                    сохраняя баланс между цифровыми инструментами и традиционными методами обучения.
                </p>
            </div>

            <div>
                <img style="border-radius: 16px;" src="images/kling.png" alt="" width="256" height="256">
                <p>Изображение сгенерированное с помощью <a href="https://klingai.com" target="_blank">klingai.com</a>.</p>
            </div>

            <a class="hf backbtn" onclick="toDisadva()">
                <img src="images/la-icon.png" alt="" height="32" width="32">
            </a>
        </div>
`

function update_content() {
    let content = document.getElementById('content')
    let card = document.getElementById('card')
    let ng = document.querySelector('input[name="nav-group"]:checked')

    // проверка на null
    if (ng) {
        val = ng.value

        card.classList.add('hide')

        setTimeout(() => {
            switch (val) {
                case 'intro': {
                    content.innerHTML = introduction
                    break
                }

                case 'adva': {
                    content.innerHTML = advantages
                    break
                }

                case 'use': {
                    content.innerHTML = use
                    break
                }

                case 'impact': {
                    content.innerHTML = impact
                    break
                }

                case 'disadva': {
                    content.innerHTML = disadvantages
                    break
                }

                case 'concl': {
                    content.innerHTML = conclusion
                    break
                }
            }
        }, 250)
    }
}

function toIntro() {
    document.getElementById('introduction').click()
}

function toAdva() {
    document.getElementById('advantages').click()
}

function toUse() {
    document.getElementById('use').click()
}

function toImpact() {
    document.getElementById('impact').click()
}

function toDisadva() {
    document.getElementById('disadvantages').click()
}

function toConcl() {
    document.getElementById('conclusion').click()
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('content').innerHTML = introduction
})
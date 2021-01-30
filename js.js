window.addEventListener('DOMContentLoaded', function() {

    let box = document.querySelector('.box');
    let input = document.querySelector('input');
    let a = document.querySelectorAll('a');
    let btn = document.querySelector('.btn');
    let one = document.querySelectorAll('.one');
    let showInput = document.querySelector('.popup');


    if (localStorage.getItem('p')) {
        box.innerHTML = localStorage.getItem('p')
    }


    box.addEventListener('click', function(event) {

        let target = event.target;
        if (target && target.classList.contains('one')) {
            one.forEach((item, i) => {
               //После перезагрузки страницы  не работает условие( if (target == item)) !!!!
               //Функция работает: инфо в console.log выводит
                if (target == item) {
                    showInput.classList.remove('hide');
                    showInput.classList.add('show');
                    return bl = i;
                    local()
                }
            })
        }
    })


    btn.addEventListener('click', function() {
        console.log(bl);
        a.forEach((item, i) => {
            if (bl == i) {
                item.href = input.value;
                input.value = ' ';
                showInput.classList.remove('show');
                showInput.classList.add('hide');
                local()
            }

        })
    })

    function local() {
        localStorage.setItem('p', box.innerHTML)
    }
})
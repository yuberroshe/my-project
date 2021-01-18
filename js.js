window.addEventListener('DOMContentLoaded', function() {

    let box = document.querySelector('.box');
    let input = document.querySelector('input');
    let a = document.querySelectorAll('a');
    // let block = document.querySelectorAll('.block')
    let btn = document.querySelector('.btn');
    let one = document.querySelectorAll('.one');
    let popup = document.querySelector('.popup');
    let t = [];

    if (localStorage.getItem('arr')) {
        let rtr = JSON.parse(localStorage.getItem('arr'))
        console.log(rtr);
     // ??????????? 

    }


    box.addEventListener('click', function(event) {

        let target = event.target;
        if (target && target.classList.contains('one')) {

            one.forEach((item, i) => {
                if (target == item) {
                    popup.classList.remove('hide');
                    popup.classList.add('show');
                    return bl = i;
                }
            })
        }
    })


    btn.addEventListener('click', function() {
        a.forEach((item, i) => {
            if (bl == i) {
                item.href = input.value;
                t.push(item.href)
                input.value = ' ';
                popup.classList.remove('show');
                popup.classList.add('hide');
                localStorage.setItem('arr', JSON.stringify(t))
            }

        })
    })

})

window.addEventListener('DOMContentLoaded', function() {

    let box = document.querySelector('.box');

    let btn2 = document.querySelector('.btn2');
    let box2 = document.querySelector('.box2');
    let btn = document.querySelector('.btn');
    let inpStart = document.querySelector('.inpstart ');
    let inp1 = inpStart.querySelector('.input1 ');
    let inpStart2 = document.querySelector('.inpstart2 ');
    let inp2 = inpStart2.querySelector('.input2 ');



    btn2.onclick = function() {
        inpStart2.classList.remove('hide')
        inpStart2.classList.add('show')
        inpStart.classList.remove('hide')
        inpStart.classList.add('show')
        this.classList.add('hide')
    }

    if (localStorage.getItem('page')) {

        box.innerHTML = localStorage.getItem('page')

    }


    function local() {

        localStorage.setItem('page', box.innerHTML)
    }


    btn.addEventListener('click', f1)

    function f1() {

        div1 = document.createElement('div')
        div1.classList.add("block");
        div1.style.background = randColor();

        let link = document.createElement('a')
        link.href = inp1.value
        link.target = '_blank'
        inp1.value = ''

        let p = document.createElement('p')
        p.innerHTML = inp2.value

        let one = document.createElement('div')
        one.classList.add('one')
        one.innerHTML = '*'
        inp2.value = ''

        link.appendChild(p)
        div1.appendChild(link)
        div1.appendChild(one)

        box.appendChild(div1)


        inpStart.classList.remove('show')
        inpStart.classList.add('hide')

        inpStart2.classList.remove('show')
        inpStart2.classList.add('hide')

        btn2.classList.remove('hide')
        btn2.classList.add('show')


        local()
    }

    document.querySelectorAll('.block').forEach(item => {
        item.addEventListener('click', function(event) {
            let target = event.target
            if (target && target.classList.contains('one')) {


                item.classList.add('delete')
            }

            local()

        })

    })

    function randColor() {
        var r = Math.floor(Math.random() * (256)),
            g = Math.floor(Math.random() * (256)),
            b = Math.floor(Math.random() * (256));
        return '#' + r.toString(16) + g.toString(16) + b.toString(16);

    }



})
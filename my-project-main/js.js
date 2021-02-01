window.addEventListener('DOMContentLoaded', function() {
 let box = document.querySelector('.box')
  let block = box.querySelectorAll('.block')
  let input = document.querySelector('input')
  let btn = document.querySelector('.btn')
  let popup = document.querySelector('.popup')
  let activeIndex

  block.forEach((item, index) => {
    item.addEventListener('click', ({ target }) => {
      if (target.classList.contains('one')) {
        activeIndex = index
        popup.classList.remove('hide')
      }
    })

    const value = localStorage.getItem(index)
    if (value) block[index].querySelector('a').href = value
  })

  btn.addEventListener('click', () => {
    const { value}  = input
    localStorage.setItem(activeIndex, value)
    block[activeIndex].querySelector('a').href = value
    input.value = ''
    popup.classList.add('hide')
  })
})
   
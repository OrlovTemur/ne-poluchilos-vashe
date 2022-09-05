let btnOne = document.querySelector('.btn-1')
let btnTwo = document.querySelector('.btn-2')
let imgOne = document.querySelector('.img-1')
let imgTwo = document.querySelector('.img-2')
let text = document.querySelector('.text-2')


btnTwo.onclick = () => {
    text.innerHTML = 'Space Gray'
    imgTwo.classList.add('img-2')
    imgTwo.classList.remove('img-1')
}

btnOne.onclick = () => {
    text.innerHTML = 'White'
    imgOne.classList.add('img-1')
    imgOne.classList.remove('img-2')   
}
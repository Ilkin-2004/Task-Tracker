let number = 0;
let a = 0;
let b = 0;
const addButton = document.querySelector('.add')
const plusButton = document.querySelector('.plus')
const input = document.querySelector('input')
const ul = document.querySelector('ul')
const mainLi = document.querySelector('.fli')
addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (b == 0) {
        if (number === 0) {
            const myButton = document.createElement('button')
            myButton.textContent = 'x'
            myButton.setAttribute('class', 'rmvButton')
            const myLi = document.createElement('li');
            myLi.textContent = input.value;
            ul.append(myLi)
            myLi.append(myButton)
            mainLi.remove();
            myButton.addEventListener('click', () => {
                myLi.remove()

            })
        }
        else {
            const myButton = document.createElement('button')
            myButton.innerText = 'x'
            myButton.setAttribute('class', 'rmvButton')
            const myLi = document.createElement('li');
            myLi.textContent = input.value;
            ul.append(myLi)
            myLi.append(myButton)
            const li = document.querySelector('.fli')
            li.remove();
            number = 0;
            myButton.addEventListener('click', () => {
                myLi.remove()

            })
            b++;
        }
        a = 0;
    } else {
        alert("add etmek ucun evvelce +a basaraq melumati daxil edin")
    }
})
plusButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (a == 0) {
        const myLi = document.createElement('li')
        myLi.setAttribute('class', 'fli')
        ul.append(myLi)
        let myInputli = document.createElement('input')
        input.setAttribute('class', 'input')
        myInputli.textContent = ""
        myLi.append(input)
        a++;
        number++;
    } else {
        alert("add etmeden olmaz")
    }
    b = 0;
})








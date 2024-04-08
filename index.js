let stopPluss = 0;
let stopAddBUtton=0;
const addButton = document.querySelector('.add');
const sortButton = document.querySelector('.down_arrow')
const ul = document.querySelector('ul')
const plusButton = document.querySelector('.plus');
let myArrayList = [];
const deleteButtons = document.getElementsByClassName('rmvButton');
addButton.addEventListener('click', () => {
    if(stopAddBUtton===0){
    const input = document.querySelector('input')
    if (input.value === '') {
        alert('bos melumat daxil edin')
    }
    else {
        let li = document.querySelector('.myInputLi')
        let myLi = document.createElement('li');
        let myRmvBut = document.createElement('button');
        myRmvBut.addEventListener('click',(e)=>{
            console.log( e.target.previousElementSibling.innerText)
            myArrayList=myArrayList.filter(item=>item!==e.target.previousElementSibling.innerText)
            e.target.parentElement.remove()
           
           })
        let myText=document.createElement('p')
        myText.setAttribute('class','input')
        myRmvBut.setAttribute('class', 'rmvButton')
        myRmvBut.innerText = 'x';
        myLi.setAttribute('class', 'inputLi')
        myLi.append(myText)
        myLi.append(myRmvBut)
        myText.innerText = input.value.trim();
        ul.append(myLi)
        li.remove();
        myArrayList.push(myText.innerText)
        stopPluss = 0;
        stopAddBUtton++;
    }
    
    }
    else{
        alert("+ duymesini basin")
    }
})

plusButton.addEventListener('click', (e) => {
    e.stopPropagation();
    if (stopPluss !== 0) {
        alert("add etmemis olmaz")
    } else {
        let newLi = document.createElement('li')
        let input = document.createElement('input')
        let newRmvButton = document.createElement('button');
        newRmvButton.setAttribute('class', 'rmvButton')
        newRmvButton.textContent = 'x';
       
        input.setAttribute('class', 'input');
        newLi.setAttribute('class','myInputLi');
        newLi.appendChild(input);
        newLi.appendChild(newRmvButton);
        ul.append(newLi);
        stopPluss++;
        stopAddBUtton=0;
    }
})
sortButton.addEventListener('click',() => {
    if (sortButton.getAttribute('src') === 'Group 34.png') {
        const liList=document.querySelectorAll("li p")
        myArrayList.sort();
        myArrayList.forEach((item,index)=>{
            liList[index].innerText=myArrayList[index]
        })
        sortButton.setAttribute('src','Group 91 (1).png')
    }
    else{
        const liList=document.querySelectorAll("li p")
        myArrayList.sort().reverse();
      
        
        myArrayList.forEach((item,index)=>{
            liList[index].innerText=myArrayList[index]
        })
        sortButton.setAttribute('src','Group 34.png')
    }
})
// delete
// deleteButtons.addEventListener((e)=>{
// deleteButtons.forEach((button,index)=>{
   
// })
// })


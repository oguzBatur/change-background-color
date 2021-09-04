const colors = ['red','blue','yellow','green','lightgreen','lightyellow','darkred','lightblue'];
const body = document.getElementsByTagName('body')[0];
const btn = document.getElementById('btn');


body.style.backgroundColor = 'lightyellow'

btn.addEventListener('click', () => {


    let rndNumber = Math.floor(Math.random() * (colors.length - 1));

    body.style.backgroundColor = colors[rndNumber];
    console.log(rndNumber)
})
// const big=document.querySelector('.big');
// const little=document.querySelector('.little');
// const middle=document.querySelector('.middle');

// little.addEventListener('click', (e)=>{
//     e.target.style.textDecoration='line-through';
//     e.stopPropagation();
//     console.log(e.target);
// });


// little.addEventListener('click', (e)=>{
//     e.target.style.border='1px solid black';
// });
// big.addEventListener('click', (e)=>{
//     e.target.style.fontSize='20px';
//     console.log(e.target);
// }, {capture: true})

// middle.addEventListener('click', (e)=>{
//     e.stopPropagation();
// })

// document.addEventListener('click', e=>{
//     console.log(e.target);
// })

//Popup code//

const form=document.querySelector('form');
const submit=document.querySelector('submit');
const pattern=/^[a-zA-Z]{6,12}$/;
const feedback=document.querySelector('.feedback');
const username=document.querySelector('#username');


username.addEventListener('keyup', (e)=>{
    // console.log(e.target.value);
    console.log(pattern.test(username.value))

    if(!pattern.test(username.value)){
        // username.setAttribute('class', 'success')
        console.log(e.target.value);
        username.setAttribute('class', 'error')

    }
        else{
            // username.setAttribute('class', 'error')
    }
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(pattern.test(username.value)){
        feedback.textContent='Nice :)';
    }else{feedback.textContent='Too Sad :('}
})
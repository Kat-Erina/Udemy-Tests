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

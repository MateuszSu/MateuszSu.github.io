let script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

const elem = document.createElement(`depends-on-time`);
let subBtn = document.getElementById('check-btn');



subBtn.addEventListener('click', e=>
{
    num = document.getElementById('time-input').value;
    console.log(num)
    elem.id = `text-click`;
    const nested = elem.appendChild(document.createElement(`text-click`));
    nested.classList.add(`text-click`);
    if(num<0){
        nested.textContent = `I sincerely doubt that`;
        document.body.appendChild(elem);
    }
    if(num>=0 && num<10){
        nested.textContent = `That's a great you should start in oplympics`;
        document.body.appendChild(elem);
    }
    if(num>=10 && num<30){
        nested.textContent = `That's a great, train a little bit more and you will be a really fast climber`;
        document.body.appendChild(elem);
        
    }
    if(num>=30){
        nested.textContent = `Tou have to train a little bit more :)))`;
        document.body.appendChild(elem);
        
    }
    
})


let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');
let togglebtn = document.querySelector('.togglebtn');
let body = document.querySelector('body');

for(let i=0; i<btn.length; i++)
{
    btn[i].addEventListener("click", function(){

        if(this.innerHTML == "="){
            value.innerHTML = eval(value.innerHTML);
        }

        else if(this.innerHTML == "AC")
        {
            value.innerHTML = "";
        }

        else if(this.innerHTML == "DEL")
        {
            value.innerHTML = value.innerHTML.slice(0, -1);
        }

        else
        {
            value.innerHTML += this.innerHTML;
        }
    })
}

togglebtn.onclick = function(){
    body.classList.toggle('dark');
}


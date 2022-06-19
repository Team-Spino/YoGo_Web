console.log(window.screen.width+"x"+window.screen.height); // screen dimension
console.log(window.screen.availWidth+"x"+window.screen.availHeight); //exclude os taskbar
console.log(window.outerWidth+"x"+window.outerHeight); // browser size
console.log(window.innerWidth+"x"+window.innerHeight); // viewport size


const container = document.querySelectorAll('.container');

console.log(container[0].innerHTML);
const container0 = container[0].innerHTML;
const container1 = container[1].innerHTML;
const container2 = container[2].innerHTML;
const container3 = container[3].innerHTML;

function checkSize(){
    if(window.innerWidth <= 1200 && window.innerWidth >= 597){
        for(let i = 0; i < container.length; i++){
            container[i].innerHTML = '화면을 확대해주세요!😅';
        }
    }
    else {
        container[0].innerHTML = container0;
        container[1].innerHTML = container1;
        container[2].innerHTML = container2;
        container[3].innerHTML = container3;
    }
}

setInterval(checkSize, 500);

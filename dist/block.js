// const containerList = document.querySelectorAll('.section');
// const block = document.createElement('div');
// block.classList.add('block');
// const blockMarkUp = `<h1></h1>`;
// block.innerHTML = blockMarkUp;
// document.appendChild(block);


const block = document.querySelector('.block');
function checkSize(){
    
    if(window.innerWidth <= 1200 && window.innerWidth >= 597){

        block.style.display = 'flex'
        
   ;
        
    }
    else {
        
            // containerList[i].querySelector('.block')?.remove();
            block.style.display ='none';
    }
}

window.addEventListener('load', checkSize);
window.addEventListener('resize', checkSize);
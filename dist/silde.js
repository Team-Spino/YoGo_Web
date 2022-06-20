const rightBtn = document.querySelector('.button-right');
const leftBtn = document.querySelector('.button-left');
const img = document.querySelector('.phone > img');
// const explanationLi = document.querySelectorAll('.explanation-content');
const explanationContent = document.querySelector('.explanation-content');
const explanationElTitle = document.querySelector('.explanation-el-title');
const phone = document.querySelector('.phone');

// console.log(rightBtn.innerHTML);

const explanationTemplate1 = 
`
    <p>일정 리스트 화면입니다.</p>
                                
    <p>플러스 버튼을 통해 일정을 추가할 수 있고 추가한 일정들을 확인할 수 있습니다. </p>
                                
    <p>상단의 캘린더를 통해 날짜 별로 일정을 확인할 수도 있고, 등록할 때 지정한 컬러 태그만 따로 확인할 수도 있습니다.</p>

`
const explanationTemplate2 = 
`
    <p>일정 등록 화면입니다.</p>
                                
    <p>상대 도시와 상대 도시의 날짜를 선택하면 그에 맞추어 일정이 등록됩니다.</p>
                                
    

`
const explanationTemplate3 = 
`
    <p>사용자가 궁금해하는 도시의 시간대를 확인할 수 있는 화면입니다.</p>
                                
    <p>플러스 버튼을 통해 사용자가 원하는 도시를 추가하여 시간을 확인할 수 있습니다.</p>
                                
    <p>돋보기 버튼을 통해 다른 도시의 현재 시간이 아닌 궁금한 시간을 확인할 수 있습니다.</p>

`
const explanationTemplate4 = 
`
    <p>돋보기 버튼을 누르면 나오는 화면입니다.</p>
                                
    <p>궁금한 도시의 시간을 입력하면 그 시간에 다른 도시의 시간을 확인할 수 있습니다.</p>
                                
   

`
// const buttonLeftDiv = `<button class="button-left"><img src="./images/arrow-left.svg"></button>`;
// const buttonRightDiv = `<button class="button-right"><img src="./images/arrow-right.svg"></button>`;
const explanationArr = {
    title : ['일정 리스트 화면', '일정 등록 화면','현재 도시 시간 및 원하는 시간 확인', '다른 도시의 시간 확인 기능'],
    contents : [explanationTemplate1, explanationTemplate2, explanationTemplate3, explanationTemplate4],
    imgSrc : ['../images/phone1.png', '../images/phone2.png', '../images/phone3.png', '../images/phone4.png']
}

let count = 0;
let contentsCount = explanationArr.contents.length - 1; // 이미지 배열의 길이 - 1

// console.log(explanationArr.title[1]);

explanationElTitle.innerHTML = `<h3>${explanationArr.title[count]}</h3>`;
explanationContent.innerHTML = explanationArr.contents[count];


rightBtn.addEventListener('click', () => {
    // console.log("test1111");
    
    explanationElTitle.innerHTML = `<h3>${explanationArr.title[count]}</h3>`;
    explanationContent.innerHTML = explanationArr.contents[count];

    img.src = explanationArr.imgSrc[count];
    count++;
    if(count > contentsCount){
        count = 0;
    }
})

leftBtn.addEventListener('click', () => {
    // console.log("test222");
    explanationElTitle.innerHTML = `<h3>${explanationArr.title[count]}</h3>`;
    explanationContent.innerHTML = explanationArr.contents[count];

    img.src = explanationArr.imgSrc[count];
    count--;
    if(count < 0){
        count = contentsCount;
    }
})

const container = document.querySelectorAll('.container');

// console.log(container[0].innerHTML);
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

window.addEventListener('resize', checkSize);
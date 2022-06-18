const rightBtn = document.querySelector('.button-right');
const leftBtn = document.querySelector('.button-left');
const img = document.querySelector('.phone > img');
// const explanationLi = document.querySelectorAll('.explanation-content');
const explanationContent = document.querySelector('.explanation-content');
const explanationElTitle = document.querySelector('.explanation-el-title');
const phone = document.querySelector('.phone');

const explanationTemplate1 = 
`


    <p>컬러 태그로 관련된 일정들을 지정해 보세요.111</p>
                                
    <p>시차를 알고싶은 도시와 시간을 설정해 알람을 설정해보세요.1111</p>
                                
    <p>알람이 울릴 요일을 선택해 일정을 관리하세요.111</p>


`
const explanationTemplate2 = 
`


    <p>컬러 태그로 관련된 일정들을 지정해 보세요.222</p>
                                
    <p>시차를 알고싶은 도시와 시간을 설정해 알람을 설정해보세요.222</p>
                                
    <p>알람이 울릴 요일을 선택해 일정을 관리하세요.222</p>


`
const explanationTemplate3 = 
`


    <p>컬러 태그로 관련된 일정들을 지정해 보세요.333</p>
                                
    <p>시차를 알고싶은 도시와 시간을 설정해 알람을 설정해보세요.333</p>
                                
    <p>알람이 울릴 요일을 선택해 일정을 관리하세요.333</p>


`

const buttonLeftDiv = `<button class="button-left"> < </button>`;
const buttonRightDiv = `<button class="button-right"> > </button>`;
const explanationArr = {
    title : ['일정 만들기1', '일정 만들기2','3333333'],
    contents : [explanationTemplate1, explanationTemplate2, explanationTemplate3],
    imgSrc : ['../images/phone-1-edit.png', '../images/phone-2-edit.png', '../images/phone-3-edit.png']
}

let count = 0;
let contentsCount = 2; // 3개이므로 2로 설정

console.log(explanationArr.title[1]);


rightBtn.addEventListener('click', () => {
    console.log("test1111");
    
    explanationElTitle.innerHTML = `<h3>${explanationArr.title[count]}</h3>`;
    explanationContent.innerHTML = explanationArr.contents[count];

    img.src = explanationArr.imgSrc[count];
    count++;
    if(count > contentsCount){
        count = 0;
    }
})

leftBtn.addEventListener('click', () => {
    console.log("test222");
    explanationElTitle.innerHTML = `<h3>${explanationArr.title[count]}</h3>`;
    explanationContent.innerHTML = explanationArr.contents[count];

    img.src = explanationArr.imgSrc[count];
    count--;
    if(count < 0){
        count = contentsCount;
    }
})


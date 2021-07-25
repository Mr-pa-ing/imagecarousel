// UI
const imgcarousel = document.getElementById('imgcarousel');
const imgs = document.querySelectorAll('#imgcarousel img');
// console.log(imgs);
const leftbtn = document.getElementById('left'),
    rightbtn = document.getElementById('right');

let idx = 0;
right.addEventListener('click',()=>{
    idx++;
    // console.log(idx);
    changeimage();
    restartinterval();
});
left.addEventListener('click',()=>{
    idx--;
    // console.log(idx);
    changeimage();
    restartinterval();
});

function changeimage(){
    if(idx > imgs.length - 1){
        idx = 0;
    }else if(idx < 0){
        idx = imgs.length - 1;
    }
    // console.log(idx);

    imgcarousel.style.transform = `translate(${-idx * 500}px)`;
}

let interval = setInterval(imgrun,2000);
function imgrun(){
    idx++;
    changeimage();
}

function restartinterval(){
    clearInterval(interval);
    interval = setInterval(imgrun,2000);
}
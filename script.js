import {drawArr, figArr, realArr} from './api.js'; 

const body = document.body;
const btnplace = document.querySelector('.buttons');
const container = document.querySelector('.container');
let data;
let random;

data = document.createElement('img');

function comDrawFun(){
random = Math.trunc((Math.random()*1)*50);    
container.appendChild(data);
}

function draw(){
const drawImg = drawArr.map((value, index)=>[index, value]);
const draw = Object.fromEntries(drawImg);
comDrawFun();
if(!data.src){
    data.src = `${draw[random]}`;
} else if(data.src){
    data.remove();
    // location.reload();
    comDrawFun();
 data.src = `${draw[random]}`;

} 
};

function comFigFun(){
    random = Math.trunc((Math.random()*1)*30);    
    container.appendChild(data);
    }
    
function fig(){
const figImg = figArr.map((value, index)=>[index, value]);
const fig = Object.fromEntries(figImg);
comFigFun();
if(!data.src){
    data.src = `${fig[random]}`;
} else if(data.src){
    data.remove();
    // location.reload();
    comFigFun();
 data.src = `${fig[random]}`;

} 
};

function comRealFun(){
    random = Math.trunc((Math.random()*1)*16);    
    container.appendChild(data);
    }
function real(){
const realImg = realArr.map((value, index)=>[index, value]);
const real = Object.fromEntries(realImg);
comRealFun();
if(!data.src){
    data.src = `${real[random]}`;
} else if(data.src){
    data.remove();
    // location.reload();
    comRealFun();
 data.src = `${real[random]}`;

} 
}

const func = ['draw()', 'fig()', 'real()'];
const btnArr = ['Drawing', 'Figure', 'Real'];
for(let i=0; i<btnArr.length; i++){
    const btns = document.createElement('button');
    btns.innerHTML = btnArr[i];
    btns.className = 'btnArr';
    btnplace.appendChild(btns);
    btns.addEventListener('click', ()=>{
       eval(func[i]);
    })
    
}

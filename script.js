
let rowNumbers = 40;
let columnsNumbers = 100;
let emptySymbhol = ' ';
let fullSymbhol = ['*', '+', '.'];
let fps = 50;
let arr = [];
let snow = [];
let pre = document.createElement("pre");
let div = document.querySelector('div');
let rndColumn = Math.floor(Math.random() * columnsNumbers);
let n = 0;
let plus = 0;
let stars = 0;
let dot = 0;

for (let i = 0; i < rowNumbers; i++){
    let string = [];
    for (let i = 0; i < columnsNumbers; i++){
        string.push(emptySymbhol)
    }
    snow.push(string);
}
for (let i = 0; i < rowNumbers; i++){
    arr.push(document.createElement("p"));
    arr[i].textContent = snow[i].join('');
    arr[i].id = i;
    
    div.appendChild(pre);
    pre.appendChild(arr[i]);
}
function restart(){
    n = 0;
    rndColumn = Math.floor(Math.random() * columnsNumbers);
    snow[n][rndColumn] = fullSymbhol[Math.floor(Math.random() * fullSymbhol.length)];
    arr[n].textContent = snow[n].join('');   
    if (snow[n][rndColumn] == '*'){
        stars++;
    }
    if (snow[n][rndColumn] == '+'){
        plus++;
    }
    if (snow[n][rndColumn] == '.'){
        dot++;
    }
    console.log('stars = '+ stars + ' plus = '+ plus + ' dot = ' + dot);
}

function mainLoop(){        
    if (n < rowNumbers-1){
        if (snow[n+1][rndColumn] == emptySymbhol){
            snow[n+1][rndColumn] = snow[n][rndColumn];
            snow[n][rndColumn] = emptySymbhol;
            arr[n+1].textContent = snow[n+1].join(''); 
            arr[n].textContent = snow[n].join('');   
            n++;            
        }else{
            restart() 
        }
    }else {
        restart()
    }
}
const back = new Audio('back.it')
function mySound(){back.play()};


setInterval(mainLoop, fps);




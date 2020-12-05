
let rowNumbers = 60;
let columnsNumbers = 100;
let emptySymbhol = ' ';
let fullSymbhol = '*';
let fps = 5;
let arr = [];
let snow = [];
let pre = document.createElement("pre");
let div = document.querySelector('div');
let rnd = Math.floor(Math.random() * columnsNumbers);
let n = 0;

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

function mainLoop(){        
    if (n < rowNumbers-1){
        if (snow[n+1][rnd] == emptySymbhol){
            snow[n+1][rnd] = fullSymbhol;
            snow[n][rnd] = emptySymbhol;
            arr[n+1].textContent = snow[n+1].join(''); 
            arr[n].textContent = snow[n].join('');   
            n++;
            console.log(n);
        }else{
            n = 0;
            rnd = Math.floor(Math.random() * columnsNumbers);
            snow[n][rnd] = fullSymbhol;
            arr[n].textContent = snow[n].join('');   
        }
    }else {
        n = 0;
        rnd = Math.floor(Math.random() * columnsNumbers);
        snow[n][rnd] = fullSymbhol;
        arr[n].textContent = snow[n].join('');   
    }
}


setInterval(mainLoop, fps);



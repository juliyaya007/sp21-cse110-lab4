let time = 0;
setInterval(myCallback, 1000, time);

function myCallback(t){
    let d = new Date();
    let newtime = d.toLocaleTimeString();
    console.log(newtime);
}

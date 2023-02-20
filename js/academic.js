var counter1 = document.getElementsByClassName("counter")[0];
var counter2 = document.getElementsByClassName("counter")[1];

var range1 = counter1.textContent;
var range2 = counter2.textContent;

var countStart1 = 1;
var countStart2 = 1;


let start = setInterval(() => {
    counter1.textContent = countStart1;
    counter2.textContent = countStart2;

    if(range1 > countStart1){
        countStart1++;
    }

    if(range2 > countStart2){
        countStart2++;
    }

    if(countStart1 > range1 && countStart2 > range2){
        stop();
    }
}, 40);

function stop(){
    clearInterval(start);
}

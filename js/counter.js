var counter1 = document.getElementsByTagName("strong")[0];
var counter2 = document.getElementsByTagName("strong")[1];

var range1 = counter1.textContent;
var range2 = counter2.textContent;

var countStart1 = 1;
var countStart2 = 1;

window.onscroll = () => {
    if(window.scrollY > 105){
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
        }, 500);
    
        function stop(){
            clearInterval(start);
        }
    }
}

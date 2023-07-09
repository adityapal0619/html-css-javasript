const hourEl=document.getElementById("hour")
const MinutesEl=document.getElementById('Minutes')
const secountEl=document.getElementById('Secounds')
const ampmEl=document.getElementById('ampm')

function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM"
    if(h > 12){
        h=h-12
        ampm="PM"
    }
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    hourEl.innerHTML=h;
    MinutesEl.innerHTML=m;
    secountEl.innerHTML=s;
    ampmEl.innerHTML=ampm
    setTimeout(()=>{
        updateClock()

    },1000)
}
updateClock()
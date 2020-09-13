let counter = document.querySelector('.counter');
const addCount = document.querySelector('.addbtn')
const lowerCount = document.querySelector('.lowerbtn')
const reset = document.querySelector('.reset')

let count=0;

addCount.addEventListener('click',incrementcounter);
lowerCount.addEventListener('click',decrementcounter);
reset.addEventListener('click',resetcall);

 function incrementcounter (){
     count++;
     counter.innerHTML = count;
     if(counter.innerHTML >'0'){
         counter.style.color ='#63F700';
     }
     else if(counter.innerHTML ==='0'){
         counter.style.color='white';
     }
     counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'})
 } 

 
 function decrementcounter (){
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML <'0'){
     counter.style.color='red';
    }
     else if(counter.innerHTML ==='0'){
        counter.style.color='white';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'})

}
 function resetcall (){
       counter.innerHTML = '0';
       counter.style.color = 'white';
       count='0';
    }

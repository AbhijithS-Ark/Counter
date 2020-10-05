let counter = document.querySelector('.counter');
const addCount = document.querySelector('.addbtn')
const lowerCount = document.querySelector('.lowerbtn')
const reset = document.querySelector('.reset')
const frominput = document.querySelector("#from");
const toinput = document.querySelector("#to");
const generate = document.querySelector("#generate");
let randomvalue = 0;
let count;
count = randomvalue;
let mini = null, maxi = null;

addCount.addEventListener('click', incrementcounter);
lowerCount.addEventListener('click', decrementcounter);
reset.addEventListener('click', resetcall);

function incrementcounter() {
    if (maxi) {

        if (count !== maxi) {
            count++;
        }
    }

    if (frominput.value === "" || toinput.value === ""){
        count++;
  

    }

    counter.innerHTML = count;
    if (counter.innerHTML > '0') {
        counter.style.color = '#63F700';
    }
    else if (counter.innerHTML === '0') {
        counter.style.color = 'white';
    }
    counter.animate([{ opacity: '0.2' }, { opacity: '1.0' }], { duration: 500, fill: 'forwards' })
}


function decrementcounter() {


    if (mini) {

        if (count !== mini) {
            count--;
        }
    }
    
    if (frominput.value === "" || toinput.value === ""){
        count--;
  

    }

    counter.innerHTML = count;
    if (counter.innerHTML < '0') {
        counter.style.color = 'red';
    }
    else if (counter.innerHTML === '0') {
        counter.style.color = 'white';
    }
    counter.animate([{ opacity: '0.2' }, { opacity: '1.0' }], { duration: 500, fill: 'forwards' })

}
function resetcall() {
    counter.innerHTML = '0';
    counter.style.color = 'white';
    count = '0';
}

generate.addEventListener("click", (e) => {

    if (frominput.value && toinput.value) {


        if (!isNaN(frominput.value) && !isNaN(toinput.value)) {
            if (Number(frominput.value) <= Number(toinput.value)) {

                e.preventDefault();
                let basevalue = frominput.value;
                let limitvalue = toinput.value;

                randomvalue = randomNumber(basevalue, limitvalue)
                counter.innerHTML = String(randomvalue);
                if (counter.innerHTML < '0') {
                    counter.style.color = 'red';
                }
                else if (counter.innerHTML === '0') {
                    counter.style.color = 'white';
                }
                else {

                    counter.style.color = '#63F700';
                }

                count = randomvalue;

            }
            else {
                alert("minimum value should be less than maximium")
            }
        }
        else {
            alert("enter valid inputs")

        }

    }


    function randomNumber(min, max) {
        mini = Number(min);
        maxi = Number(max)


        return res = Math.floor(Math.random() * (maxi - mini + 1) + mini);
    }



})

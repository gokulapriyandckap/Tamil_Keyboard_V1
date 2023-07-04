const allBtns = document.querySelectorAll('button');
const textArea = document.querySelector('textarea');
const firstLetters = document.querySelectorAll('#first_letter');
const Shift = document.querySelector('#Shift');

let count = 0;
let letter = [];
let shiftLetter =[];
let shiftBtn = 0;
let numbers = document.querySelectorAll(".number")

for (let j = 0; j < allBtns.length; j++) {
    allBtns[j].addEventListener('click',(e)=>{
        if (allBtns[j].innerText !== "Backspace" && allBtns[j].innerText !== "Delete" && allBtns[j].innerText !== "Enter" && allBtns[j].innerText !== "Shift" && allBtns[j].innerText !== "ெ"  && allBtns[j].innerText !== "ே" && allBtns[j].innerText !== "ை"&& allBtns[j].innerText !== "Space" ) {
            let oupu = shiftBtn ? "key" : "number";
            if(count == 1){
                letter.push(allBtns[j].innerText);
                textArea.value += letter[1]+letter[0];
                letter.length = 0;
                count = 0;
            }else{
                if(e.target.parentElement.classList.contains("buttonStyle")){
                    let targetElement = e.target.parentElement.children
                    for(let i =0;i<targetElement.length;i++){
                        if(targetElement[i].classList.contains(oupu)){
                            textArea.value += targetElement[i].innerText;
                        }
                    }
                }else{
                    textArea.value += allBtns[j].innerText
                }
            }
        }
        else if (allBtns[j].innerText == "Space") {
            textArea.value += ' ';         
        }
        else if (allBtns[j].innerText == "ெ"  || allBtns[j].innerText == "ே" || allBtns[j].innerText == "ை") {
            count = 1;
            letter.push(allBtns[j].innerText);
        }
        else if (allBtns[j].innerText == "Backspace") {
            textArea.value = textArea.value.slice(0,-1);
        }
        else if (allBtns[j].innerText == "Enter") {
            textArea.value += "\n";
        }
        else if (allBtns[j].innerText == "Delete") {
            textArea.value = '';
        }
        else if(allBtns[j].innerText == "Shift"){
            allBtns[j].classList.toggle("active")
            if(allBtns[j].classList.contains("active")){
                shiftBtn = 1
            }
            else{
                shiftBtn = 0
            }
        }
    })
}

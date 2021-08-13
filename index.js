const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
//const nextButton = document.querySelector("#next-btn");


const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

//nextButton.addEventListener("click", () => {
  //  hideMessage();
    //if
//})
checkButton.addEventListener("click", function validateCashAndBillAmount(){
    hideMessage();
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
           const balanceAmount = cashGiven.value - billAmount.value;
           calculateChange(balanceAmount); 
          


        }else{
            showMessage("We don't give credit. Pay up!");

        }


    }else{

        showMessage("Please enter valid bill amount");

    }
});

function hideMessage(){
    message.style.display= "none";
}

function calculateChange(balanceAmount){
    for (let i=0; i< availableNotes.length; i++){
        const numberOfNotes = Math.trunc(balanceAmount/availableNotes[i]);
        balanceAmount %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;


    }
 
}

function showMessage(msg){
    message.style.display ="block";
    message.innerText = msg;
}
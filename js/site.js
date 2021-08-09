//get the value from the interface 
//controller function
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //validate input
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //call generate numbers
    let numbers = generateNumbers(startValue, endValue);

    //call displayNumbers
}

//generate numbers from the start value to the end value
//logic function(s)
function generateNumbers(startValue, endValue) {
    
    let numbers = [];
    
    for(let i = startValue; i <= endValue; i++) {
        numbers.push(i);
    }

    return numbers;
}

//display numbers and mark the even ones bold
//display or view function
function displayNumbers() {
    
}
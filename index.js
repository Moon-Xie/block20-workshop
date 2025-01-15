// TODO: this file! :)

//declare the main variables 
//The numbers in the bank, odd category, and even category are stored in state
const state = {
    numberBank: [],
    oddsNumber: [],
    evensNumber: []
};
const form = document.querySelector('form');
const sortOne = document.getElementById('sortOne');
const sortAll = document.getElementById('sortAll')

//call render function
render();



//Render Number Bank. The number bank displays all the numbers the user has entered
function renderNumberBank() {
    /*
    Add input numbers into the number Bank array
    When  the user clicks the "Add Number" button, the number they entered 
    into the input field is added to the number bank.
    */
    form.addEventListener('submit', (event) => {
        event.preventDefault();//prevent the refreshing
        const input = event.target.number.value; //input number as a string;
        const addNumber = parseInt(input, 10); // to get the input number as number
        //console.log(typeof addNumber)
        //console.log(input.length)
        if(typeof addNumber === 'number' && input.length !== 0) {
            state.numberBank.push(addNumber);
            event.target.number.value = '';
        } else {
            alert('Invlid input! Please insert a number!'); //The number bank is not changed if the user enters a non-numeric value.
        }
        console.log('the number bank is ',state.numberBank);
        //document.querySelector('output').append(addNumber);
        document.querySelector('#numberBank > output').innerHTML = [...state.numberBank]
        //console.log(document.querySelector('output'))
        renderOdds();
        renderEvens();
    })
}

/*
sortOne 'click' event. 
When the "Sort 1" button is clicked, the first number in the number bank is removed 
and placed into either the odd or even category.
*/
sortOne.addEventListener('click',(event) => {
    let number = state.numberBank.shift();
    if(number % 2 === 0 && number.value !== 0) {
        state.evensNumber.push(number);
    } else if (number % 2 !== 0 && number.value !== 0) {
        state.oddsNumber.push(number);
    }
    document.querySelector('#numberBank > output').innerHTML = [...state.numberBank]
    renderEvens();
    renderOdds();
})

/*
sortAll 'click' event.
When the "Sort All" button is clicked, all the numbers 
in the number bank are moved into either the odd or even category.
*/
sortAll.addEventListener('click', (event) => {
    event.preventDefault();//prevent the refreshing
   while(state.numberBank.length > 0) {
    let number = state.numberBank.shift(); //Remove the first number in number bank
    if(number % 2 === 0) {
        state.evensNumber.push(number); //Add to evens if even
    } else {
        state.oddsNumber.push(number) //Add to odds if odd
    };
    document.querySelector('#numberBank > output').innerHTML = [...state.numberBank]
        //console.log('the odds number are ', state.oddsNumber)
        //console.log('the evens number are ', state.evensNumber)
        renderEvens();
        renderOdds(); 
    };
})

//function to render the evens
function renderEvens() {
    let evens = document.querySelector('#evens > output');
    evens.replaceChildren([...state.evensNumber])
}

//function to render the odds
function renderOdds() {
    let odds = document.querySelector('#odds > output');
    odds.replaceChildren([...state.oddsNumber])
}

//render
function render() {
    renderNumberBank();
    renderOdds();
    renderEvens();
};
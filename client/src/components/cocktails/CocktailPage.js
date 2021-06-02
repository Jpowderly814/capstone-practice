import React from 'react';
import "./CocktailTile.css";

const CocktailPage = (props) => {

    console.log(props);

    console.log(props.cocktailIngredients);

    //const [enteredTitle, setEnteredTitle] = useState("");
    //const [enteredAmount, setEnteredAmount] = useState("");
    //const [enteredDate, setEnteredDate] = useState("");

    //const [userInput, setUserInput] = useState({
    //    enteredTitle: " ",
    //    enteredAmount: " ",
    //    enteredDate: " ",
    //});

    //const titleChangeHandler = (event) => {
   //     setEnteredTitle(event.target.value);
        //setUserInput({
        //...userInput,
        //enteredTitle:event.target.value,
        //})
   // };

    //const amountChangeHandler = (event) => {
   //     setEnteredAmount(event.target.value);

        //OR

        //setUserInput({
        //    ...userInput,
        //    enteredAmount:event.target.value,
        //    });

        //OR

        //setUserInput((prevState) => {
        //    return {...prevState, enteredTitle: event.target.value};
        //});  //use this way when new state relies on the old value (counter)
    //};

    //const dateChangeHandler = (event) => {
   //     setEnteredDate(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredDate:event.target.value,
        //    });
   // };

    /*const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };

        props.onSaveExpenseData(expenseData); //passing expenseData as props to NewExpense
        setEnteredTitle("");//This will clear the data after entered by user to display empty form again
        setEnteredAmount("");
        setEnteredDate("");
    };
*/
    
    return (
   
        <div className="new-expense__controls">
            
            <p>Ingredients</p>
            
            <p>{props.cocktailIngredients}</p>
            <p>{props.instructions}</p>
           
      
        
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            
        </div>
        </div>
   
    );
};

export default CocktailPage;
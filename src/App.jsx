import './App.css' ;

import React, {useState} from 'react';
export default function App() {

  const[Input,setInput]=useState('');
  const[PrevInput,setPrevInput]=useState('');
  const[Operator,setOperator]=useState('');

  
function handleNumberClick(value){
  
  setInput(Input+value);
}

function handleOperatorClick(value){
  setOperator(value);
  setPrevInput(Input);
  setInput('');
}

function handleEqualClick(){
  let result;
  switch(Operator){
    case '+': result= parseFloat(PrevInput)+parseFloat(Input);
      break;
    case '-': result= parseFloat(PrevInput)-parseFloat(Input);
      break;
    case '*': result= parseFloat(PrevInput)*parseFloat(Input);
      break;
    case '/': result= parseFloat(PrevInput)/parseFloat(Input);
      break;
    default: 
      return;
  }
  setInput(result.toString());
  setPreviousInput('');
  setOperator('');
}

function handleClearClick(){
  setInput('');
  setPrevInput('');
  setOperator('');
}
  
  return (
    <main>
      <div className='App'>
        <h2>Calculator</h2>
      </div>
      <div className='calculator'>
      <div className='display'>{Input}</div>
      <div className='buttons'>

        <button onClick={function(){handleNumberClick('7')}}>7</button>
        
        <button onClick={function(){handleNumberClick('8')}}>8</button>
        
          <button onClick={function(){handleNumberClick('9')}}>9</button>
        
          <button onClick={function(){handleOperatorClick('/')}}>/</button>
       
          <button onClick={function(){handleNumberClick('4')}}>4</button>
       
          <button onClick={function(){handleNumberClick('5')}}>5</button>
       
            <button onClick={function(){handleNumberClick('6')}}>6</button>
        
              <button onClick={function(){handleOperatorClick('*')}}>*</button>
        
              <button onClick={function(){handleNumberClick('1')}}>1</button>
        
                <button onClick={function(){handleNumberClick('2')}}>2</button>
       
                  <button onClick={function(){handleNumberClick('3')}}>3</button>
        
                    <button onClick={function(){handleOperatorClick('-')}}>-</button>
       
                    <button onClick={function(){handleNumberClick('0')}}>0</button>
       
          <button onClick={function(){handleNumberClick('.')}}>.</button>
       
          <button onClick={handleEqualClick}>=</button>
        
          <button onClick={function(){handleOperatorClick('+')}}>+</button>
       
          <button  onClick={handleClearClick}>Clear</button>
      
      </div>
      </div>
      
      
      
    </main>
  )
}

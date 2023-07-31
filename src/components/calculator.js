import React, {useState} from 'react';
import {evaluate} from 'mathjs';

export default Calculator;
function Calculator() {
    const[expression, setExpression]=useState('');

    const input = value =>{
        let newExpression =expression + value;
      setExpression(newExpression);
    }

    const blank = ()=> {
      setExpression('');
    }
   
    const backspace = () =>{
      setExpression(expression.slice(0, expression.length -1));
    }
   

    const calculate = () => {
       /*setExpression(eval(expression));*/
        let result = evaluate(expression);
        let newExpression =expression + '=' +result;
        setExpression(newExpression);
    }
    
  return(
    <>
   <div className="calculator">
   <h1 className="cal">Calculator</h1>
    <form className="text">
      <input type="text" value={expression}/>
      </form>
   <div className="keypad">
    <button className="hightlight" onClick={blank} id="blank">AC</button>
    <button className="hightlight" onClick={backspace} id="backspace">C</button>
    <button onClick={()=>input('/')}>/</button>
    <button onClick={()=>input('7')}>7</button>
    <button onClick={()=>input('8')}>8</button>
    <button onClick={()=>input('9')}>9</button>
    <button onClick={()=>input('*')}>*</button>
    <button onClick={()=>input('4')}>4</button>
    <button onClick={()=>input('5')}>5</button>
    <button onClick={()=>input('6')}>6</button>
    <button onClick={()=>input('-')}>-</button>
    <button onClick={()=>input('1')}>1</button>
    <button onClick={()=>input('2')}>2</button>
    <button onClick={()=>input('3')}>3</button>
    <button onClick={()=>input('+')}>+</button>
    <button onClick={()=>input('0')}>0</button>
    <button onClick={()=>input('.')}>.</button>
    <button onClick={()=>input('%')}>%</button>
    <button className="hightlight" onClick={(calculate)} id="calculate">=</button>
    </div>
   </div>
   
</>
) 
} 
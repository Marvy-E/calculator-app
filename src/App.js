import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const displayNum = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = (e) => {
    setResult("");
  };

  const del = (e) => {
    setResult(result.slice(0, -1));
  };

  const equal = (e) => {
    if (result.charAt(0) === "/" || "*") {
      setResult("Error");
    }
    setResult(eval(result).toString());
  };

  return (
    <div className="container">
      <form>
        <input type="text" value={result} id="output-screen" />
      </form>

      <div className="calculator">
        <button name="" onClick={clear} id="clear" className="delete">
          Cl
        </button>
        <button name="" onClick={del} className="delete">
          Del
        </button>
        <button name="/" onClick={displayNum} className="operators">
          /
        </button>
        <button name="7" onClick={displayNum} className="number">
          7
        </button>
        <button name="8" onClick={displayNum} className="number">
          8
        </button>
        <button name="9" onClick={displayNum} className="number">
          9
        </button>
        <button name="*" onClick={displayNum} className="operators">
          &times;
        </button>
        <button name="4" onClick={displayNum} className="number">
          4
        </button>
        <button name="5" onClick={displayNum} className="number">
          5
        </button>
        <button name="6" onClick={displayNum} className="number">
          6
        </button>
        <button name="-" onClick={displayNum} className="operators">
          -
        </button>
        <button name="1" onClick={displayNum} className="number">
          1
        </button>
        <button name="2" onClick={displayNum} className="number">
          2
        </button>
        <button name="3" onClick={displayNum} className="number">
          3
        </button>
        <button name="+" onClick={displayNum} className="operators">
          +
        </button>
        <button name="." onClick={displayNum} className="number">
          .
        </button>
        <button name="0" onClick={displayNum} className="number">
          0
        </button>
        <button name="" onClick={equal} class="equal">
          =
        </button>
      </div>
    </div>
  );
};

export default App;

import { useState } from "react";
import "./App.css";
import Data from "./Data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;0
    }
    if (count > 5) {
      amount = 5;
    }
    setText(Data.slice(0, amount));
  };
  return (
    <>
      <div className="w-[600px]">
        <h4 className="text-3xl p-8">build Lorem</h4>
        <form className="" onSubmit={handelSubmit}>
          <label htmlFor="total">Paragraph</label>
          <input
            name="total"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            type="number"
            className="border-2  border-black p-2.5 rounded-2xl"
          />
          <button
            className="border-none bg-red-700 mr-5 w-[100px] cursor-pointer p-1.5 ml-2 rounded-4xl text-white"
            type="submit"
          >
            build
          </button>
        </form>
        <article className="">
          <p className="mt-[50px]">
            {text.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </p>
        </article>
      </div>
    </>
  );
}

export default App;

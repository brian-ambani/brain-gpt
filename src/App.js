import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch("/api/ask", options);
      const data = await response.json();
      console.log(data);
      setMessage(data.choices[0].message);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(message);

  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>history one</li>
          <li>history two</li>
          <li>history three</li>
        </ul>
        <nav>
          <p>Made by Brain</p>
        </nav>
      </section>
      <section className="main">
        <h1>BrainGPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <div id="submit" onClick={getMessages}>
              ➢
            </div>
          </div>
          <p className="infor">
            Brain GPT version 1.0.0. Free to use. Our goal is to make the best
            AI chatbot in the world. Your feedback will help us to improve it.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;

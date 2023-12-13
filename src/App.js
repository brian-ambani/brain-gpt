import "./App.css";

function App() {
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
            <input />
            <div id="submit">➢</div>
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

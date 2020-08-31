import React from "react";
import "./App.css";

function App() {
  return (
    <main className="App">
        <header>
          <h1 className="dark">Dividend Calculator Wireframe</h1>
        </header>
        <div className="grid">
          <nav className="light window unselected">
            <h2 className="dark">Nav / Summary</h2>
            <div className="light window">
              <h3>WelcomeL Guest!</h3>

              <form className="login">
                <label htmlFor="name">User:</label>
                <input type="text" id="name" name="name" />
                <br />
                <br />
                <label htmlFor="Type:">PW:</label>
                <input type="text" id="Type:" name="Type:" />
                <br />
                <br />
              </form>
            </div>
            <div className="dark window">Strategy Philosophy Overview</div>
            <div className="light window">Total Projected 1yr</div>
            <div className="light window">Total Projected 5yr</div>
            <div className="graph dark window">
              <h2 className="dark">Expected Earnings</h2>
              <img
                src="https://ak.picdn.net/shutterstock/videos/15215122/thumb/7.jpg"
                alt="fakegraph"
                width="80%"
              />
            </div>
          </nav>

          <div className="light window strategies main">
            <h2 className="dark">Strategies</h2>
            <div className="light window strategy">
              <h3 className="light window">Strategy 1</h3>
            </div>
            <div className="light window strategy">
              <h3 className="dark window">Strategy 2</h3>
              <div className="blue window stock">
                <h4>MSFT - 10 Shares</h4>
              </div>
              <div className="blue window stock">
                <h4>Add New Stock:</h4>
                <form className="open window light">
                  <label htmlFor="name">Stock Ticker:</label>
                  <input type="text" id="name" name="name" />
                  <br />
                  <br />
                  <label htmlFor="Type:">Type of stock:</label>
                  <input type="text" id="Type:" name="Type:" />
                  <br />
                  <br />
                  <label htmlFor="shares"># of shares:</label>
                  <input type="text" id="shares" name="shares" />
                  <br />
                  <br />
                  <label htmlFor="Type:">Target price:</label>
                  <input type="text" id="Type:" name="Type:" />
                  <br />
                  <br />
                  <label htmlFor="Type:">Dividend Yield:</label>
                  <input type="text" id="Type:" name="Type:" />
                  <br />
                  <br />
                  <label htmlFor="Type:">EPS 1yr:</label>
                  <input type="text" id="Type:" name="Type:" />
                  <br />
                  <br />
                  <label htmlFor="Type:">EPS 5yr:</label>
                  <input type="text" id="Type:" name="Type:" />
                  <br />
                  <br />
                  <button>Cancel</button>
                  <button>Add Stock</button>
                </form>
              </div>
              <div className="blue window stock">
                <h4>MMM - 10 Shares</h4>
              </div>
              <div className="blue window stock">
                <h4>KO - 10 Shares</h4>
              </div>
              <div className="blue window stock">
                <h4>AWR - 10 Shares</h4>
              </div>
            </div>
            <div className="light window strategy">Strategy 3</div>
            <div className="light window strategy">Strategy 4</div>
          </div>

          <aside className="light window summary unselected">
            <h2 className="dark">Summary</h2>

            <div className="light window">
              <p>MSFT</p>
              <p>10 Shares @ $213.02</p>
              <p>Proposed Equity: $2130.20</p>
              <p>Dividend Yield: 5.37%</p>
              <p>EPS 1/5: 5.76 / 0.15</p>
            </div>
            <div className="yellow window">
              <h4>Dividend Yield: 0.96%</h4>
            </div>
            <div className="green window">
              <h4>EPS 1-yr: 5.76</h4>
              <p>Description with more information when clicked</p>
            </div>
            <div className="green window">
              <h4>EPS 5-yr: 0.15</h4>
            </div>
            <div className="light window">
              <h4>PE: 36.98</h4>
            </div>
            <div className="red window">
              <h4>Time to Recoup: 75mo</h4>
            </div>
          </aside>
          <footer>Copyright ⓒ 2020 drbretto</footer>
        </div>
    </main>
  );
}

export default App;

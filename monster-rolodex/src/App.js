import { Component } from "react";
import "./App.scss";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {
        firstName: "Mohamed",
        lastName: "Ramadan",
      },
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            Hi {this.state.name.firstName} {this.state.name.lastName}
            <button
              onClick={() => {
                console.log(this.state);
                this.setState({
                  name: { firstName: "Ahmed", lastName: "Mohamed" },
                });
              }}
            >
              Change Name
            </button>
          </header>
        </div>
      </div>
    );
  }
}

export default App;

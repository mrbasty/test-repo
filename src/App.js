import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./component/Card";
import clipboard from "clipboard-copy";
import Header from "./component/Header";
import Footer from "./component/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ColorPalettes: []
    };
  }

  componentDidMount() {
    fetch(
      "https://v2-api.sheety.co/69072a59b5982e9dd27aaa5bf290e8c6/colorsnt/data"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          ColorPalettes: data.data
        });
      });
  }

  render() {
    var datapalette = this.state.ColorPalettes;

    const AllCards = datapalette.map(item => (
      <Card
        key={item.id}
        name={item.name}
        firstColor={item.firstColor}
        secondColor={item.secondColor}
        thirdColor={item.thirdColor}
        fourthColor={item.fourthColor}
      />
    ));

    return (
      <div>
        <Header />
        <div class="card-container">{AllCards}</div>
        <Footer />
      </div>
    );
  }
}

export default App;

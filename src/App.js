import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      shoecolor: [],
      manufacturer: [],
      type: [],
    };
  }
  //.then((data) => this.setState({ shoes: data }))
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/shoe/")
      .then((res) => res.json())
      .then((data) => this.setState({ shoes: data }));
    fetch("http://127.0.0.1:8000/api/shoecolor/")
      .then((res) => res.json())
      .then((data) => this.setState({ shoecolor: data }));
    fetch("http://127.0.0.1:8000/api/manufacturer/")
      .then((res) => res.json())
      .then((data) => this.setState({ manufacturer: data }));
    fetch("http://127.0.0.1:8000/api/shoetype/")
      .then((res) => res.json())
      .then((data) => this.setState({ type: data }));
  }
  render() {
    return (
      <div>
        <ul>
          <br />
          {this.state.shoes.map((s, index) => (
            <ul>
              <br />
              <li>product_id: {s.id}</li>
              <li>Brand: {s.brand_name}</li>
              <li>
                Make:{" "}
                {this.state.manufacturer[parseInt(s.manufacturer) - 1]?.name ??
                  "None"}
              </li>
              <li>
                color:{" "}
                {this.state.shoecolor[parseInt(s.color - 10)]?.color ?? "None"}
              </li>
              <li>size: {s.size}</li>
              <li>material: {s.material}</li>
              <li>
                type:{" "}
                {this.state.type[parseInt(s.shoe_type) - 1]?.style ?? "none"}{" "}
              </li>
              <li>fasten style {s.fasten_type}</li>
              <br />
            </ul>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

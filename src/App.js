import "./styles.css";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
    address: "",
    color: "",
    city: "",
    state: "",
    zip: 0,
    checkMe: false
  });

  const handleChange = (evt) => {
    evt.preventDefault();
    const name = evt.target.name;
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;

    setState({
      ...state,
      [name]: value
    });

    console.log(state);
  };

  return (
    <>
      <form>
        <label>Full name</label>
        <input
          type="text"
          name="fullName"
          value={state.fullName}
          onChange={handleChange}
        />
        <br />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <br />

        <label>color select</label>
        <input
          type="color"
          name="color"
          value={state.color}
          onChange={handleChange}
        />
        <br />
        <label>option select color</label>
        <select name="state" onChange={handleChange} value={state.state}>
          <option>select color</option>
          <option>red</option>
          <option>blue</option>
        </select>
        <br />

        <label>remember</label>
        <input
          type="checkbox"
          name="checkMe"
          checked={state.checkMe}
          onChange={handleChange}
        />
        <br />

        <button type="sumbit">sumbit</button>
      </form>
    </>
  );
}

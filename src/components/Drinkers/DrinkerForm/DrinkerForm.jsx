import { useState } from "react";
import "./DrinkerForm.css";
const DrinkerForm = ({ addHandler }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [preferences, setPreferences] = useState("");

  const newElem = (evt) => {
    evt.preventDefault();

    const newData = {
      id: new Date().getTime().toString(32),
      name: name,
      age: age,
      preferences: preferences
    };
    addHandler(newData);
  };

  return (
    <form className="form">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      ></input>
      <br></br>
      <label htmlFor="age">Age:</label>
      <input
        type="text"
        id="age"
        value={age}
        onChange={(evt) => setAge(evt.target.value)}
      ></input>
      <br></br>
      <label htmlFor="preferences">Likes:</label>
      <input
        type="text"
        id="preferences"
        value={preferences}
        onChange={(evt) => setPreferences(evt.target.value)}
      ></input>
      <br></br>
      <button onClick={newElem}>add</button>
    </form>
  );
};

export default DrinkerForm;

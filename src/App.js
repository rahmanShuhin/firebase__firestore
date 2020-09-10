import React, { useState, useEffect } from "react";
import "./App.css";
import firebase from "firebase";
import db from "./Component/FirebaseConfig";
import ShowData from "./Component/ShowData";
function App() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [search, setSearch] = useState("");
  const addMe = (e) => {
    e.preventDefault();
    db.collection("user").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      name: name,
      age: age,
    });
    setName("");
    setAge("");
  };
  useEffect(() => {
    db.collection("user")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setUser(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  const searchName = () => {
    db.collection("user")
      .where("name", "==", search)
      .onSnapshot((snapshot) =>
        setUser(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  };
  console.log(name, age);
  return (
    <div className="App">
      <form onSubmit={addMe}>
        <input
          value={name}
          type="text"
          placeholder="UserName"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={age}
          type="text"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" disabled={name.length === 0 || age.length === 0} />
      </form>
      <ul>
        {user.map((x, index) => (
          <ShowData id={x.id} data={x.data} index={index}></ShowData>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button onClick={searchName}>Search</button>
    </div>
  );
}

export default App;

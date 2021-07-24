import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Getrepos from "./components/Getrepos";

function App() {
  const [data, getData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://api.github.com/users/coryhouse?client_id=757e310c1b402287bab5&client_secret=43619d7e29ca00fd0800178405fd4fdae183b169&sort=created"
      )
      .then((result) => getData(result.data));
  }, []);

  return (
    <div className="App">
      <header>
        <img
          className="log-img"
          src="https://www.groupetma.com/wp-content/uploads/2014/09/github_logo_600px.jpg"
        />
      </header>
      <hr />
      <div className="container">
        <img className="avatar-img" src={data.avatar_url} />
        <ol>
          <li>
            <strong>Fullname:</strong>
            {data.name}
          </li>
          <li>
            <strong>Username:</strong>
            {data.login}
          </li>
          <li>
            <strong>Location:</strong>
            {data.location}
          </li>
          <li>
            <strong>Email Adders:</strong>
            {data.email}
          </li>
        </ol>
      </div>
      <hr />
      <Getrepos />
    </div>
  );
}

export default App;


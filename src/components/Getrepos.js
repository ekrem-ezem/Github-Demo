import React, { useState, useEffect } from "react";
import axios from "axios";
import { data } from "browserslist";

export default function Getrepos() {
  const [useList, setUseList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://api.github.com/users/coryhouse/repos?client_id=757e310c1b402287bab5&client_secret=43619d7e29ca00fd0800178405fd4fdae183b169&sort=created"
      )
      .then((response) => {
        setUseList(response.data.edge);
        console.log(response.data);
      });
  }, []);
  return (
    <div>
      <h1>User Repositoris</h1>
      <ul className="user-repos">
        <li>
          <span>reactapp:</span>
          {data.react}
        </li>
        <li>
          <span>testing-react:</span>
          {data.name}
        </li>
        <li>
          <span>hallmark:</span>
        </li>
        <li>
          <span>react-testing-libray:</span>
        </li>
        <li>
          <span>auth0-recat-samples:</span>
        </li>
      </ul>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";

function Getrepos() {
  const [userList, setUseList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://api.github.com/users/coryhouse/repos?client_id=757e310c1b402287bab5&client_secret=43619d7e29ca00fd0800178405fd4fdae183b169&sort=created"
      )
      .then((res) => {
        setUseList(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div className="Reposterie-use">
      <h1>User Repositoris</h1>
      <ul className="List-name">
        {userList &&
          userList.map((x) => (
            <li>
              <a href={x.html_url}>{x.name}:</a>
              {x.description}
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Getrepos;

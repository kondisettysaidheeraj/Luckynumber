import { useState } from "react";
import "./styles.css";
import githubicon from "./Github.svg";
import instaicon from "./Insta.svg";
import likedInIcon from "./Linkdin.svg";

function Birthday() {
  const [msg, setMsg] = useState(" ");
  function show() {
    var a = document.getElementById("111").value;
    var num = document.getElementById("222").value;
    a = a.replaceAll("-", "");
    a = parseInt(a);

    var j,
      sum = 0;
    while (a >= 1) {
      j = Math.trunc(a % 10);

      sum = sum + j;

      a = a / 10;
    }
    if (sum % num === 0) {
      setMsg("yes it is lucky number  🥳🥳🥳🥳🥳🥳🥳!");
    } else {
      setMsg("it is not a lucky number ");
    }
  }
  return (
    <div id="aaa">
      <h1>
        Is Your Birthday Lucky ? <span>🤔</span>
      </h1>
      <label>Date Of Birth: </label>
      <input id="111" type="date"></input>
      <br />
      <br />
      <label>Lucky Number : </label>
      <input id="222" type="number" placeholder="Enter your number " />

      <br />
      <br />
      <button onClick={show}>click Me</button>
      <br />
      <br />
      {msg}

      <footer>
        <ul style={{ marginTop: "300px" }}>
          <a class="links" href="https://github.com/kondisettysaidheeraj">
            <img src={githubicon} alt="github" />
          </a>

          <a
            class="links"
            href="https://www.linkedin.com/in/dheeraj-kondisetty-a75667214/"
          >
            <img src={likedInIcon} alt="LinkedIn" />
          </a>

          <a class="links" href="https://www.instagram.com/dheeraj.dps/">
            <img src={instaicon} alt="Insta" />
          </a>
        </ul>
      </footer>
    </div>
  );
}

export default Birthday;

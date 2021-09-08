import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "../style.css"

const AddExperience = () => {
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("");
  const [duration, setDuration] = useState("");

  const addExperience = () => {
    Axios.post("http://localhost:3001/insert", {
      organization: organization,
      role: role,
      duration: duration,
    });
  };

  let history = useHistory();

  const redirect = () => {
    history.push("/about");
  };

  return (
    <div className="Addexpform">
      <div id="experience-form">
        <h1>Your Experience</h1>

        <form class="contact-form">
          <label for="">Organization</label>
          <input
            class="inputBox"
            onChange={(event) => {
              setOrganization(event.target.value);
            }}
            name="ArticleOrganization"
            type="text"
            placeholder="Enter Organization's Name"
            required
          />
          <br />
          <label for="">Role</label>
          <textarea
            class="inputBox"
            name="ArticleRole"
            onChange={(event) => {
              setRole(event.target.value);
            }}
            id=""
            cols="22"
            rows="5"
            placeholder="Enter your role"
          ></textarea>
          <br />
          <label for="">Duration</label>
          <input
            id="inputBox1"
            name="Duration"
            onChange={(event) => {
              setDuration(event.target.value);
            }}
            type="text"
            placeholder="Enter the duration"
            required
          />
          <br />
          <a onClick={redirect}>
            <button onClick={addExperience}>Add experience</button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default AddExperience;

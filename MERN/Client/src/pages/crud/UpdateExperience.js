import Axios from "axios";
import React, { useEffect, useState } from "react";
import "../style.css";
import { useHistory } from "react-router-dom";

const UpdateExperience = () => {
    let history = useHistory();

  const redirect = () => {
    history.push("/about");
  };

  const [experienceList, setExperienceList] = useState([]);
  const [newOrganization, setNewOrganization] = useState("");
  const [newRole, setNewRole] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setExperienceList(response.data);
    });
  });

  const updateExperience = (id) => {
    Axios.put("http://localhost:3001/update", { id: id, newOrganization: newOrganization, newRole: newRole });
  };

  const deleteExperience = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };

  return (
    <div>
      <div className="update-expform">
        {experienceList.map((val, key) => {
          return (
            <div>
              <main className="disart contact-form">
                <h1>{val.organization}</h1>
                <p>{val.role}</p>
                <div className="author-date">
                  <p>{val.duration}</p>
                </div>
                <input
                  type="text"
                  placeholder="New Organization"
                  onChange={(event) => {
                    setNewOrganization(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="New Role"
                  onChange={(event) => {
                    setNewRole(event.target.value);
                  }}
                />
                <a
                  className="reload"
                  onClick={() => window.location.reload(false)}
                >
                  <button id="up"
                    onClick={() => {
                      updateExperience(val._id);
                    }}
                  >
                    {" "}
                    Update
                  </button>
                </a>
                <a
                  onClick={redirect}
                >
                  <button id="del"
                    onClick={() => {
                      deleteExperience(val._id);
                    }}
                  >
                    Delete
                  </button>
                </a>
              </main>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpdateExperience;

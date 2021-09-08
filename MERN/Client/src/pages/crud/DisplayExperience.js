import Axios from "axios";
import React, { useEffect, useState } from "react";
import "../style.css"


const DisplayExperience = () => {
  const [experienceList, setExperienceList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setExperienceList(response.data);
    });
  });
  return (
    <div>
      <div class="flood-page">
        <div className="flood">
          {experienceList.map((val, key) => {
            return (
              <div>
                <main className="disart">
                  <h2>{val.organization}</h2>
                  <p>{val.role}</p>
                  <div className="author-date">
                    <p>{val.duration}</p>
                  </div>
                </main>
              </div>
            );
          })}
        </div>
      </div>
     
    </div>
  );
};

export default DisplayExperience;

import React from "react";
import { BrowserRouter as Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ userObj }) => {
  const hitory = useHistory();
  return (
    <nav>
      <ul style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <li>
          <div
            style={{ paddingBottom: "15px", cursor: "pointer" }}
            onClick={() => {
              hitory.push("/");
            }}
          >
            <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="2x" />
          </div>
        </li>
      </ul>
      <ul className="users">
        <li>
          <div
            onClick={() => {
              hitory.push("/profile");
            }}
            style={{
              marginLeft: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x" />
            <span style={{ marginTop: 10, cursor: "pointer" }}>
              {userObj.displayName
                ? `${userObj.displayName}의 Profile`
                : "Profile"}
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

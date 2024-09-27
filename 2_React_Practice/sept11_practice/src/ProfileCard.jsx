import React from "react";
import PropTypes from 'prop-types';
export default function ProfileCard(props) {
  // const name = props.name;
  // const bio=props.bio;
  return (
    <>
      <div>
        <p>ProfileCard</p>
            <div
              key={props.index}
              className="col-md-4"
              style={{
                backgroundColor: "white",
                display: "inline-block",
                justifyContent: "space-evenly",
                margin: "10px",
                boxShadow: "0px 0px 2px 2px",
                border: "2px solid black",
                borderRadius: "20px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
              <h2>{props.name}</h2>
              <p>{props.bio}</p>
            </div>
      </div>
    </>
  );
}
ProfileCard.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string
}
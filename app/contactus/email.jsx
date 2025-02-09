import * as React from "react";

export function Email(props) {
  const { message, name, email } = props;

  return (
    <div
      style={{
        padding: "1.2rem",
        backgroundColor: "#f8f8f8",

        borderRadius: "1rem",
        boxShadow: "0 0 1rem rgba(0,0,0,.7)",
        color: "#000",
        border: "1px solid #555",
      }}
    >
      <p>
        From: <strong> {email}</strong>
      </p>
      <p
        style={{
          fontSize: ".8rem",
        }}
      >
        Name: {name}.
      </p>
      <p
        style={{
          fontSize: "1rem",
        }}
      >
        {message}
      </p>
    </div>
  );
}

import React from "react";
import { useTheme } from "../../../contexts/ThemeContext";
import Image from "next/image";

export default function OrderItem(props) {
  const { theme } = useTheme();

  return (
    <div
      className="card mb-3"
      style={{
        backgroundColor: theme === "dark" ? "#101010" : "white",
        color: theme === "dark" ? "white" : "#101010",
        borderColor: theme === "dark" ? "white" : "",
      }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.image}
            alt={props.name}
            className="img-fluid rounded-start"
            style={{ width: "200px", height: "150px" }}
            loading="lazy"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-name">{props.name}</h5>
            <p className="card-text">Price: ${props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      Quickly use below links to navigate through all pages.
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/home1" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Home1
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/create" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Create
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/receive" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Receive
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/copy" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Copy
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/qr" style={{ color: "#87CEFA", textDecoration: "none" }}>
            QR
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

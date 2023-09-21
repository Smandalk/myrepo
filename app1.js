//jsx
import React, { useState } from "react";
import axios from "axios";
//import "./App.css";
import { Link } from "react-router-dom";

const TPSCheck = () => {
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [txncnt, settxncnt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let i = 0; i < txncnt; i++) {
      try {
        const body = {
          fromWalletAddress: fromAccount,
          toWalletAddress: toAccount,
          amount: amount
        };
        const response = await axios.post(
          "http://ec2-13-235-239-42.ap-south-1.compute.amazonaws.com:20231/api/v1/transfer",
          body
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ padding: "10px 20px", textAlign: "center", color: "blue" }}>
        Verify TPS for transfers
      </h1>
      <form className="m-4" onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "right"
          }}
        >
          <label style={{ padding: "10px 20px", textAlign: "right" }}>
            From:
            <input
              type="text"
              value={fromAccount}
              onChange={(e) => setFromAccount(e.target.value)}
            />
          </label>
          <label style={{ padding: "10px 20px", textAlign: "right" }}>
            To:
            <input
              type="text"
              value={toAccount}
              onChange={(e) => setToAccount(e.target.value)}
            />
          </label>
          <label style={{ padding: "10px 20px", textAlign: "right" }}>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <label style={{ padding: "10px 20px", textAlign: "right" }}>
            Volume:
            <input
              type="number"
              value={txncnt}
              onChange={(e) => settxncnt(e.target.value)}
            />
          </label>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "right"
          }}
        >
          <button
            style={{ padding: "10px 20px", textAlign: "right" }}
            type="submit"
          >
            Initiate Processing
          </button>
        </div>
        <Link
          style={{ textAlign: "center" }}
          to="https://www.https://grafana.com/docs/grafana/latest/dashboards/"
        >
          View TPS on Grafana Dashboard
        </Link>
      </form>
    </div>
  );
};

export default TPSCheck;

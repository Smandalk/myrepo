//jsx
import React, { useState } from 'react';
import axios from 'axios';

const TPSCheck = () => {
 const [fromAccount, setFromAccount] = useState('');
 const [toAccount, setToAccount] = useState('');
 const [amount, setAmount] = useState('');
 const [txncnt, settxncnt] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();


    for (let i = 0; i < txncnt; i++) {
    try {
      const body = "{\n    \"fromWalletAddress\" : \"" + fromAccount + "\",\n    \"toWalletAddress\" : \"" + toAccount +"\",\n    \"amount\" : \"1\"\n}";
      const response = await axios.post('http://ec2-13-235-239-42.ap-south-1.compute.amazonaws.com:20231/api/v1/transfer', body);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
 };

 return (
    <div>
      <h1>Verify TPS for transfers</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label>
          From Account:
          <input type="text" value={fromAccount} onChange={(e) => setFromAccount(e.target.value)} />
        </label>
        </div>
        <div>
        <label>
          To Account:
          <input type="text" value={toAccount} onChange={(e) => setToAccount(e.target.value)} />
        </label>
        </div>
        <div>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        </div>
        <div>
        <label>
          Number of transactions:
          <input type="number" value={txncnt} onChange={(e) => settxncnt(e.target.value)} />
        </label>
        </div>
        <button type="submit">Initiate Processing</button>
      </form>
    </div>
 );
};

export default TPSCheck;
const express = require('express');
const Web3 = require('web3');
const app = express();

app.get('/create-wallet', (req, res) => {
    const web3 = new Web3();
    const wallet = web3.eth.accounts.create();
    res.json(wallet);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});



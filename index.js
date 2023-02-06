import express from 'express';
import Web3 from 'web3';
const app = express();

const port = 9000;

app.get('/create-wallet', (req, res) => {
    const web3 = new Web3();
    const wallet = web3.eth.accounts.create();
    res.json(wallet);
});

app.listen(9000,()=>{
    console.log("Started");
})
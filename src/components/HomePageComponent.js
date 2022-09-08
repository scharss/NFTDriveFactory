import { ethers } from "ethers"
import nftDriveT from "../img/nftDriveT.png"
//bootstrap
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles.css'
import React, { useState } from "react";
//import {TesterComponent, TesterFactor, StoreFile} from "../components/TesterComponent"

//<Container>
//      <Row>
//		< Col sm={12} md={12} lg={12} xl={12}>

//				<Button variant="primary">Primary</Button>{' '}

//      </Col>
//      </Row>
//</Container>
//bootstrap

export function HomePageImg(){
    return(<div className="home">
        
        <img className="nftDriveImgHome" src={nftDriveT} alt="nftDriveT" />
    </div>)
}

let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer
var cuenta = " "
export function Connectmetamask() {
	
	
	return (<div className="MetamaskBtn">
	
	<Button variant="primary"
	onClick={async ()=>{   // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    signer = await provider.getSigner();
	cuenta = await signer.getAddress();
	document.getElementById("demo").innerHTML= "User: " + cuenta;
    console.log("Account address:", await signer.getAddress());}}
	
	
	>Connect Metamask</Button>{' '}
	<br />
	
	
	<p id="demo"></p>
	
	
	
	
	</div>
	
	)
} 
{/*    0x99f5Cb4853e485582F05Ea06c2672120D96EF1cc   0x4C12c7f1845b482f34fB6789e5818e0335D6111B 
0x631f07912534704AF10BD50B8f6Abb9391024798
*/}

var address = "0x5C78550D63008Ec3b516659a31066CBdE7099E94"
const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"create","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceNFTDrive","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawMoney","outputs":[],"stateMutability":"nonpayable","type":"function"}];

export function BuyBtn(){
	return(<>
	<Button variant="primary"
	onClick={async ()=>{
		const buyBtn = new ethers.Contract(address, abi, signer);
	const x=	await buyBtn.create(cuenta, {
        value:6900000000000000,
      });
	console.log(x)
		console.log("Transaction: "+"https://rinkeby.etherscan.io/tx/"+ x.hash)
		document.getElementById("txHash").innerHTML = "Transaction: "+"https://rinkeby.etherscan.io/tx/"+ x.hash
	}}
	>Buy now</Button>
	
	<p id="txHash" className="MetamaskBtn"></p>
	</>)
}
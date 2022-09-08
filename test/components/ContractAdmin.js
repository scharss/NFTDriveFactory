import { ethers } from "ethers"
//bootstrap
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles.css'

//<Container>
//      <Row>
//		< Col sm={12} md={12} lg={12} xl={12}>

//				<Button variant="primary">Primary</Button>{' '}

//      </Col>
//      </Row>
//</Container>
//bootstrap


let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer
export function ContractManager() {
	
	
	return (<div>
	
	<Button variant="primary"
	onClick={async ()=>{   // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    signer = await provider.getSigner();
	var cuenta = await signer.getAddress();
	document.getElementById("demo").innerHTML= "Cuenta: " + cuenta;
    console.log("Account address s:", await signer.getAddress());}}
	
	
	>Conectar</Button>{' '}
	<br />
	
	
	<p id="demo">Cuenta:</p>
	
	
	
	
	</div>
	
	)
} 
{/*  
	     0xBEFcA8Cd9EAe06C0b6Da44CF0b877fc7813e0915      */}
		 
		 var address =0

export function Direccion(){
	return (<div>
	<p>Contracto No: <input id="add2" onChange={function(e){
		 address = e.target.value
		console.log(address)}}/></p>
	</div>)
	
}
	 
{/*const address = "0xBEFcA8Cd9EAe06C0b6Da44CF0b877fc7813e0915"  */}
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "url",
				"type": "string"
			}
		],
		"name": "storex",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "urlNFT",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export function ReadContract(){
	 
	
	 
	return (<div>
	
	<Button variant="primary"
	onClick={async ()=>{
		const contracto = new ethers.Contract(address, abi, provider);
	
	const asunto = await contracto.urlNFT();
	document.getElementById("demo2").innerHTML= "Mensaje: " + asunto;
	
	}}
	
	
	
	
	>Leer Contracto</Button>{' '}
	
	 <p id="demo2">Mensaje:</p>
		    </div>)
	
	
}







export function WriteContract()

{return(<div>

	{/*Formulario y botón*/}

	<p>Escribir: <input id="furl" onChange={function(e){
		var caja = e.target.value
		console.log(caja)}}/></p>



<Button variant="primary"
onClick={async ()=>{
	
	const storingx = new ethers.Contract(address, abi, signer);
	
	var x = document.getElementById('furl').value;
	
	
	await storingx.storex(x);
    
    document.getElementById('furl').value = " ";
}}




>Escribir Contracto</Button>{' '}



</div>)}
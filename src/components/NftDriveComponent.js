import { ethers } from "ethers"
import { NFTStorage, File, Blob } from 'nft.storage'
import {useState} from 'react';
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

//**********************************CONTRACT CONNECT***********************************
const NFT_STORAGE_TOKEN = process.env.REACT_APP_STORAGE
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer

var cid = 0 // storage

export function Connectmetamask() {
	
	
	return (<div className="MetamaskBtn">
	
	<Button variant="primary"
	onClick={async ()=>{   // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    signer = await provider.getSigner();
	var cuenta = await signer.getAddress();
	document.getElementById("demo").innerHTML= "User: " + cuenta;
    console.log("Account address:", await signer.getAddress());}}
	
	
	>Connect Metamask</Button>{' '}
	<br />
	
	
	<p id="demo"></p>
	
	
	
	
	</div>
	
	)
} 
{/*  
	     0x8d5AFE31ec4E66C485b53eeE8598709B73fbF2c9      */}
		 
		 var address =0

export function ContractInput(){
	return (<div className="MetamaskBtn">
	<p>Contract: <input id="add2" onChange={function(e){
		 address = e.target.value
		console.log(address)}}/></p>
	</div>)
	
}

const abi = [{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"burnBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getdata","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"removeData","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saveData","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"data","type":"string"}],"name":"upData","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}];

	 


var textNameDescription = " ";
export function InputNameDescrip(){
	return(<>
	
	<p>Name/Description:</p>
	<p> <input id="furl" className="inputScript" onChange={function(e){
		textNameDescription = e.target.value
		
		console.log(textNameDescription)}}/></p>
		
	</>)
}

var myFile= [];
export function ChooseFile(){
	
	
	
	return(<>
	
			<h5>Upload file </h5>
			{/*<input id="fileItem" type="file" className="MyInputFile" name="My File"/>*/}
			<p><input id="fileItem" type="file" className="MyInputFile" name="My File" onChange={function(){
		const file = document.getElementById('fileItem').files[0];
		myFile.push(file);}}/></p>
			
						
	
	</>)
}


export function WriteContract()

{return(<div>

	{/*Formulario y botón
	<p>Name/Description:</p>
	<p> <input id="furl" className="inputScript" onChange={function(e){
		textNameDescription = e.target.value
		
		console.log(textNameDescription)}}/></p>
*/}


<Button variant="primary"
onClick={async ()=>{
	
	const storingx = new ethers.Contract(address, abi, signer);
	{/*var x = cid
	var x = document.getElementById('furl').value;*/} 

cid = await client.storeDirectory([
	new File([myFile[0]], myFile[0].name),
	new File([JSON.stringify({'from': 'incognito'}, null, 2)], 'metadata.json')
])
	
	console.log(cid)


	const d = new Date()
	
	var z = "Description: " + textNameDescription + ", " + "File: " + "https://ipfs.io/ipfs/"+ cid+"/"+myFile[0].name + " Date: " +d;
	console.log(z)
	
	await storingx.upData(z);
	
	
    
    document.getElementById('furl').value = " ";
	myFile.shift();
}}




>Up !</Button>{' '}

<Button variant="primary"
onClick={async ()=>{
	const storingx = new ethers.Contract(address, abi, signer);
	await storingx.saveData()
}}
>Save</Button>

</div>)}



export function ReadContract(){
	 
	
	 
	return (<div className="MetamaskBtn">
	<h5>Read Contract</h5>
	<Button variant="primary"
	onClick={async ()=>{
	const contracto = new ethers.Contract(address, abi, signer);
	
	const myArray = await contracto.getdata();
	console.log(myArray);
	console.log(myArray.length);
	
	let text= "";
	for(let i=0; i<(myArray.length); i++){
		text += "id: " + i + ", " + myArray[i] + "<br>";
	}
	
	document.getElementById("demos").innerHTML = text;
	
	}}
	
	
	
	
	>Read Contract</Button>{' '}
	
	 <p id="demos"></p>
		    </div>)
	
	
}









export function TesterFactor(){
	return(<>

	<Button variant="primary"
	onClick={async ()=>{
		
		
	
	
	
	const metadata = await client.store({
  name: 'nft.storage store test',
  description: 'Test ERC-1155 compatible metadata.',
  image: new File([myFile[0]], myFile[0].name, { type: myFile[0].type }),
  properties: {
    custom: 'Custom data can appear here, files are auto uploaded.',
    file: new File(['<DATA>'], 'README.md', { type: 'text/plain' }),
  }
})

console.log('IPFS URL for the metadata:', metadata.url)
console.log('metadata.json contents:\n', metadata.data)


console.log('metadata.json with IPFS gateway URLs:\n', metadata.embed())

	
		
	}}
	>NFT Storage</Button>


	
	</>)
}

{/*
export function StoreFile(){
	return(<>
	
	<Button variant='primary'
	onClick={async ()=>{
		
	 cid = await client.storeDirectory([
	new File([myFile[0]], myFile[0].name),
	new File([JSON.stringify({'from': 'incognito'}, null, 2)], 'metadata.json')
])
	
	console.log(cid)
	}}
	>Store file in IPFS</Button>
	</>)
}
*/}




//**********************************STORAGE***********************************

export function TituloPaginaNftDrive(){
	return(<>
	
	<h2>NFT Drive</h2>
	
	</>)
}



var iddeleteData = " ";
export function InputdeleteDataContract(){
	return(<div className="deletedataInput">
	
	<h4>Remove data by id</h4>
	<p>Id to Remove: <input className="deletedata" id="dataBorrar"  onChange={function(e){
		iddeleteData = e.target.value
		
		console.log(iddeleteData)}}/></p>
		
	</div>)
}

export function DeleteIdButtonContract(){
	return(<div className="deletedata">
	
	
	<Button  variant="primary"
	onClick={async ()=>{
		const storingx = new ethers.Contract(address, abi, signer);
		var dataWantedtoDelete = document.getElementById('dataBorrar').value
		await storingx.removeData(dataWantedtoDelete);
	}}
	>Remove Id</Button>
	
	
	
	
	</div>)
}

var addresToTransfer = " ";
export function InputTransferOwnership(){
	return(<div >
	
	<h4>Transfer Ownership</h4>
	<p>Address: <input className="addresToTransfer" id="addresToTransfer"  onChange={function(e){
		addresToTransfer = e.target.value
		
		console.log(addresToTransfer)}}/></p>
		
	</div>)
}

export function TransferOwnershipNFTDrive(){
	return(<>
	<Button variant="primary"
	onClick={async ()=>{
		const storingx = new ethers.Contract(address, abi, signer);
	const x =	await storingx.transferOwnership(addresToTransfer);
	document.getElementById("transferO").innerHTML = "Transaction: "+"https://rinkeby.etherscan.io/tx/"+ x.hash
	}}
	>
		Transfer Ownership
	</Button>
	<p id="transferO" className="MetamaskBtn"></p>
	</>)
}
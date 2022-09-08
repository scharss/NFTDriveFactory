import { NFTStorage, File, Blob } from 'nft.storage'
//bootstrap
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles.css'
import React, { useState } from "react";

//<Container>
//      <Row>
//		< Col sm={12} md={12} lg={12} xl={12}>

//				<Button variant="primary">Primary</Button>{' '}

//      </Col>
//      </Row>
//</Container>
//bootstrap



{/*
var archivo = 0
export function Filer(){
	return (<>
	
	
		<p>Archivo <input className="myfile" id="file" type="file" multiple  onChange={function(e){
		 archivo = e.target.value
		console.log(archivo)}}/> </p>
		
		
		
	</>)
	
}

const client = new NFTStorage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ5QkVBYjEyMjlGOGJFNzIyNkIxOGVDMDhBRDEwMWNjZjdlMDFkRTgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MDAxNTQxMzA5NywibmFtZSI6Ik5mdFVwbG9hZGVyIn0.r4W2JWToqtiT3pihz0i7QuO0TqoSZqmPgw_i43sb7hE" })

			const cid = await client.storeDirectory(new File([archivo]))
*/}

const archivo = 0
export function GuardarArchivoIpfs(){
	return(<>
	<h2>Guardar Archivo Ipfs</h2>
	
	<p>Subir archivo <input className="myfile" id="fileItem" type="file" multiple  onChange={function(e){
		 archivo = e.target.value
		console.log(archivo)
		archivo = document.getElementById('fileItem').files[0];
		console.log(archivo)
		//archivo =  e.target.files[0];
		

		//console.log(archivo)
		}}/> </p>
		 
		<Button variant="primary"
		onClick={async ()=>{
			
			const client = new NFTStorage({ token: "API_KEY" })
					
			const cid = await client.storeDirectory([
			new File(["Hello word"], archivo),
			new File([JSON.stringify({'from': 'incognito'}, null, 2)], 'metadata.json')
])

//const readmeFile = new File('Run node src/index.js for a friendly greeting.', 'README.txt', { type: 'text/plain' })
//const sourceFile = new File('console.log("hello, world")', 'src/index.js', { type: 'text/javascript' })
//
//const cid = await client.storeDirectory([readmeFile, sourcefile])


//const client = new NFTStorage({ token: NFT_STORAGE_KEY });
//  const metadata = await client.store({
//    name,
//    description,
//    image,
//  });



			console.log(cid)
		}}
		
		>Primary</Button>{' '}
	
	</>)
}








export function GuardarTextoIpfs(){
	return(<>
	
	
	
	<h3>Guardar texto en IPFS</h3>
	<p>Escribir: <input id="textoIpfs" onChange={function(e){
		var caja1 = e.target.value
		console.log(caja1)}}/></p>
		
	
		<Button variant="primary"
		onClick={async ()=>{
			const client = new NFTStorage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ5QkVBYjEyMjlGOGJFNzIyNkIxOGVDMDhBRDEwMWNjZjdlMDFkRTgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MDAxNTQxMzA5NywibmFtZSI6Ik5mdFVwbG9hZGVyIn0.r4W2JWToqtiT3pihz0i7QuO0TqoSZqmPgw_i43sb7hE" })
	
			var textoIpfsx = document.getElementById('textoIpfs').value;
				
			const cid = await client.storeBlob(new Blob([textoIpfsx]))
			document.getElementById('cdi1').innerHTML= 'Url Ipsf: https://ipfs.io/ipfs/' + cid
			console.log(cid)
		}
			
		}
		>Guardar Texto en Ipfs</Button>{' '}
		
		<p id="cdi1">Url Ipsf:</p>
		
		
	
	</>)
}


export function UploaderTester(){
	return(<>
	<h1>UploaderTester</h1>
	
	<Button variant="primary"
	onClick={async ()=>{
		const client = new NFTStorage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ5QkVBYjEyMjlGOGJFNzIyNkIxOGVDMDhBRDEwMWNjZjdlMDFkRTgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MDAxNTQxMzA5NywibmFtZSI6Ik5mdFVwbG9hZGVyIn0.r4W2JWToqtiT3pihz0i7QuO0TqoSZqmPgw_i43sb7hE" })
			
		const metadata = await client.store({
  name: 'nft.storage store test',
  description: 'Test ERC-1155 compatible metadata.',
  image: new File(['<DATA>'], 'pinpie.jpg', { type: 'image/jpg' }),
  properties: {
    custom: 'Custom data can appear here, files are auto uploaded.',
    file: new File(['<DATA>'], 'README.md', { type: 'text/plain' }),
  }
})
console.log('IPFS URL for the metadata:', metadata.url)
console.log('IPFS URL for the metadata:', metadata.url)
console.log('metadata.json contents:\n', metadata.data)
console.log('metadata.json with IPFS gateway URLs:\n', metadata.embed())
	}}
	>UploaderTester</Button>
	
	
	</>)
}


export function FormUp(){
	return(<>
	
	
	<h4>Componente</h4>
	
	<p>Escribir: <input id="textoIpfs" onChange={function(e){
		var caja1 = e.target.value
		console.log(caja1)}}/></p>	

<Button variant="primary"
onClick={async ()=>{
	const client = new NFTStorage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ5QkVBYjEyMjlGOGJFNzIyNkIxOGVDMDhBRDEwMWNjZjdlMDFkRTgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MDAxNTQxMzA5NywibmFtZSI6Ik5mdFVwbG9hZGVyIn0.r4W2JWToqtiT3pihz0i7QuO0TqoSZqmPgw_i43sb7hE" })
		
	const cid = await client.storeDirectory([
  new File(['hello world'], 'hello.txt')
])
		
	
	console.log(cid)
}}
> Blob</Button>






	</>)
}
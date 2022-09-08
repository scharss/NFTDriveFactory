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

const NFT_STORAGE_TOKEN = process.env.REACT_APP_STORAGE
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })



var myFile= [];
export function TesterComponent(){
	
	
	
	return(<>
	
			<h1>NFT Storage</h1>
			<input id="fileItem" type="file" className="MyInputFile" name="My File"/>
			<h4>Elegir Archivo</h4>
						
			<p><Button variant='primary'
			onClick={()=>{
				const file = document.getElementById('fileItem').files[0];
				myFile.push(file);
				console.log(myFile[0])
				console.log(myFile[0].name)
				console.log(myFile[0].type)
			}}
			>Upload</Button></p>
			
			
			
			
	
	</>)
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


export function StoreFile(){
	return(<>
	<h1>StoreFile</h1>
	<Button variant='primary'
	onClick={async ()=>{
		
	const cid = await client.storeDirectory([
	new File([myFile[0]], myFile[0].name),
	new File([JSON.stringify({'from': 'incognito'}, null, 2)], 'metadata.json')
])
	
	console.log(cid)
	}}
	>Store file</Button>
	</>)
}






import {HomePageImg, Connectmetamask, BuyBtn} from '../components/HomePageComponent'
import penDrive from "../img/penDrive.png"
import floppy from "../img/floppy.png"
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



export function HomePage(){
	return (
	<div className='home'>

<Container>
      <Row>
		< Col sm={12} md={12} lg={12} xl={12}>

			<Connectmetamask />
			<HomePageImg />
			<BuyBtn />

		</Col>
     	</Row>
		</Container>
<br /><br /><br /><br /><br /><br />
		<Container className='aboutNft'>
      <Row>
		< Col sm={6} md={6} lg={6} xl={6}>

		<img className='imgAbout' src={floppy} alt="floppy" />
		

		</Col>
		
		< Col sm={6} md={6} lg={6} xl={6}>
		<h1>An NFT Drive is much more than an NFT </h1>
		<p>An NFT Drive is the evolution of paper, floppy disk, flash memory and the cloud, with our DApp the files are stored in the interplanetary file system IPFS and registered in the blockchain in perpetuity</p>
		<p>Share secret information, register works and prove their existence in time</p>
		<p>The information uploaded to the blockchain is immutable and will never change.</p>
		</Col>
     	</Row>
		</Container>

		<br /><br /><br /><br />

		<Container className='aboutNft'>
      <Row>
		< Col sm={6} md={6} lg={6} xl={6}>
		<h1>How it works </h1>
		<p>Save an NFT Drive in your Metamask wallet which you can get above, find your purchase transaction and identify your NFT Drive contract number</p>
		<p>Go to "UP file" in the menu of this DApp and connect your wallet</p>
		<p>Write a name or description for your file, upload it to the interplanetary file system or IPFS and save it on the blockchain</p>
		<p>You can read files or delete records in the NFT Drive, but files uploaded to the IPFS are not deleted, they will remain in the interplanetary file system.</p>
		<p>You can lend, rent, sell or give away your NFT to anyone</p>
		

		</Col>
		
		< Col sm={6} md={6} lg={6} xl={6}>
		<img className='imgAbout2' src={penDrive} alt="penDrive" />
		</Col>
     	</Row>
		</Container>

		<br /><br /><br /><br /><br /><br /><br />

	</div>
	
	)
}
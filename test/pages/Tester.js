import { NFTStorage, File, Blob } from 'nft.storage'
//bootstrap
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles.css'
import React, { useState } from "react";
import {TesterComponent, TesterFactor, StoreFile} from "../components/TesterComponent"

//<Container>
//      <Row>
//		< Col sm={12} md={12} lg={12} xl={12}>

//				<Button variant="primary">Primary</Button>{' '}

//      </Col>
//      </Row>
//</Container>
//bootstrap

export function Tester(){
	return(<>
	
	<Container>
	<Row>
	<Col sm={12} md={12} lg={12} xl={12}>
	
	<TesterComponent />
	<TesterFactor />
	<StoreFile />
	
	
	</Col>
	</Row>
	</Container>
	
	
	
	</>)
}
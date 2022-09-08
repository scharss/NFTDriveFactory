import {InputTransferOwnership, TransferOwnershipNFTDrive, InputdeleteDataContract, DeleteIdButtonContract, InputNameDescrip, TituloPaginaNftDrive, ChooseFile, Connectmetamask, ContractInput, ReadContract, WriteContract} from "../components/NftDriveComponent"

//bootstrap
//import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles.css'
//import React, { useState } from "react";
//import {TesterComponent, TesterFactor, StoreFile} from "../components/TesterComponent"

//<Container>
//      <Row>
//		< Col sm={12} md={12} lg={12} xl={12}>

//				<Button variant="primary">Primary</Button>{' '}

//      </Col>
//      </Row>
//</Container>
//bootstrap


export function NftDrive(){
	return(<div className="NftDrivePage">
	
	<Container >
      <Row>
	  
        < Col sm={12} md={12} lg={12} xl={12}>

	<TituloPaginaNftDrive />
	<Connectmetamask />
	<ContractInput />
	<InputNameDescrip />
	
	<ChooseFile />
	
	<WriteContract />
	
	<InputdeleteDataContract />
	<DeleteIdButtonContract />

	<InputTransferOwnership />
	<TransferOwnershipNFTDrive />


	<ReadContract />
      </Col>
      </Row>
</Container>
	
<br /><br /><br /><br />
	</div>)
}
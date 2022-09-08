import {ContractManager,Direccion, ReadContract, WriteContract} from "../components/ContractManager";
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


export function Manager(){
	return(<div>
<Container>
      <Row>
	  
        < Col sm={12} md={12} lg={12} xl={12}>

	<ContractManager />
	<Direccion />
	<ReadContract />
	<WriteContract />

      </Col>
      </Row>
</Container>
	
	
	</div>
);
}
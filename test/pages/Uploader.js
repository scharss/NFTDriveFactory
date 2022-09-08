import { GuardarArchivoIpfs, GuardarTextoIpfs, UploaderTester, FormUp} from '../components/UploaderStorage'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export function Uploader(){
	return(<>
	
	<Container>
      <Row>
	  
        < Col sm={12} md={12} lg={12} xl={12}>
	  
	    <GuardarArchivoIpfs />
		<GuardarTextoIpfs />
		<UploaderTester />
		<FormUp />
    
	    </Col>
		
      </Row>
    </Container>
	
	
	
	
	</>
);
}
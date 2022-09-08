import { NFTStorage, File } from 'nft.storage'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles.css'


export function UploaderComponent(){
	return(
	<div>


<Container>
      <Row>
	  
        < Col sm={4} md={4} lg={4} xl={4}><img className="img" src={'https://robohash.org/user1'}/></Col>
		< Col sm={4} md={4} lg={4} xl={4}><img className="img" src={'https://robohash.org/user2'}/></Col>
		< Col sm={4} md={4} lg={4} xl={4}><img className="img" src={'https://robohash.org/user3'}/></Col>
		
      </Row>
    </Container>
  



                
		
	</div>
	
	
	)
}

var archivo =0
export function Filer(){
	return (<div>
	
	<Container>
      <Row>
	  
        < Col sm={12} md={12} lg={12} xl={12}>
		<p>Archivo <input className="myfile" id="file" type="file" multiple  onChange={function(e){
		 archivo = e.target.value
		console.log(archivo)}}/> </p>
		
		</Col>
		
		
      </Row>
    </Container>
		
	</div>)
	
}

export function Boton(){
	return(<div>
	<Container>
      <Row>
	  
        < Col sm={12} md={12} lg={12} xl={12}>
		<Button variant="primary">Subir</Button>{' '}
		
		</Col>
		
		
      </Row>
    </Container>
	
	</div>)
}
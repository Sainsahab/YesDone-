import React from 'react'
import * as ReactBootStrap from "react-bootstrap";







const Slide = () => {
    return (
        <div > 
            
            <ReactBootStrap.Carousel  >
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block  w-100" 
      src="yes done 1.jpg"
      alt="First slide"
      
    />
    <ReactBootStrap.Carousel.Caption>
   </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>


  <ReactBootStrap.Carousel.Item><img
      className="d-block w-100"
      src="yes done 2.jpg"
      alt="Second slide"
    />    <ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>



  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src="yes done 1.jpg"
      alt="Third slide"
      
    />

    <ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  
</ReactBootStrap.Carousel>








<h1 >On Demand Professional Service Provider</h1>

<ReactBootStrap.Container >
  {/* <ReactBootStrap.Row>
    <ReactBootStrap.Col>1 of 2</ReactBootStrap.Col>
    <ReactBootStrap.Col>2 of 2</ReactBootStrap.Col>
  </ReactBootStrap.Row> */}
  <ReactBootStrap.Row>
    <ReactBootStrap.Col style={{marginTop:"50px"}}>
        
        <ReactBootStrap.Card style={{ width: '18rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="img1.jpg" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>Computer</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </ReactBootStrap.Card.Text>
    <ReactBootStrap.Button variant="outline-primary">Go somewhere</ReactBootStrap.Button>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>

</ReactBootStrap.Col >




    <ReactBootStrap.Col style={{marginTop:"50px"}} >

        
    <ReactBootStrap.Card style={{ width: '18rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="img4.jpg" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>Desk</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </ReactBootStrap.Card.Text>
    <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>





    </ReactBootStrap.Col>

    <ReactBootStrap.Col style={{marginTop:"50px"}}>

        
    <ReactBootStrap.Card style={{ width: '18rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="img2.jpg" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>Teem Work</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </ReactBootStrap.Card.Text>
    <ReactBootStrap.Button variant="outline-info">Go somewhere</ReactBootStrap.Button>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>





    </ReactBootStrap.Col>


    <ReactBootStrap.Col style={{marginTop:"50px"}}>

        
    <ReactBootStrap.Card style={{ width: '18rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="img3.jpg" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>About</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </ReactBootStrap.Card.Text>
    <ReactBootStrap.Button variant="warning">Go somewhere</ReactBootStrap.Button>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>





    </ReactBootStrap.Col>

    

    
  </ReactBootStrap.Row>
</ReactBootStrap.Container>

























        </div>
    )
}

export default Slide;

import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

import "../../index.css"

const CompetitionDetails = () => {
  return (
    <Container fluid className="p-0 m-0 h-100">
      <Row
        style={{ backgroundImage: "url('../../Images/competitionDetails_bg.jpg')" }}
        className="vw-100 vh-100 bg_img"
      >     
         <Col className="h-50">
         </Col>    
      </Row>
    </Container>
  )
}

export default CompetitionDetails
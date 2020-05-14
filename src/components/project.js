import React, {Component} from 'react';
import './project.css';
// import cisco from './cisco.jpg';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import { render } from '@testing-library/react';

export class Project extends Component{
    constructor(props){
        super(props);
    }


render(){
    return(
        <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body  className = "popUp">
        <h4>Centered Modal</h4>
        
        <p> {this.props.textStuff}</p>
        <img src = {this.props.imageC} className = "imagePop"/>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={this.props.onHide}>DELETE</Button>
      </Modal.Footer> */}
    </Modal>
    )
}
}

export default Project;
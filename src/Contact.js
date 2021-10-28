import { Button } from 'react-bootstrap';
import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { CloseButton } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai'
import { BsListStars } from 'react-icons/bs'
import { FcStart } from 'react-icons/fc'
import { FaCommentDots } from 'react-icons/fa'
import {FaCloudShowersHeavy} from 'react-icons/fa'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <CloseButton aria-label="cross" />
                <CloseButton disabled />
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
            </Card>
         
            4.0  <AiFillStar /><br/>
            <BsListStars />hello music<br/>
            <FcStart />TYY<br/>
            <FaCommentDots />message<br />
            <FaCloudShowersHeavy/>weather
            </div>
        )
    }
}

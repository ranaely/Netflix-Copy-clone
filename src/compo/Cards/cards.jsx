import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../App.css';
import { Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Cards({ sname, link, blink, text }) {
  return (

    <div style={{ display: 'inline-flex' }}>
      <Stack >
        <Card style={{ width: '19rem' }} className='card'>
          <Card.Img variant="top" src={link} style={{ width: '19rem' }} />
          <Card.Body>
            <Card.Title><h1>{sname}</h1></Card.Title>
            <Card.Text className='textt'>
              {text}
            </Card.Text><a href={blink} >
              <Button variant="outline-dark" >Go somewhere</Button></a>
          </Card.Body>
        </Card>

      </Stack>
    </div>

  )
}

export default Cards
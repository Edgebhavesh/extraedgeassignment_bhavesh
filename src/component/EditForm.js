import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export function EditForm (props) {
  console.log(props.data);
  const handleClose = () => props.setShow(false);

  const updateData=(id)=>{
   props.val.map((list)=>{
      if(list.id===id)
      {
        list.name=name;
        list.email=email;
        list.phone=phone;
        list.website=website;
      }
   })
  }

  const[name,setname]=useState(props.data.name);
  const[email,setemail]=useState(props.data.email);
  const[phone,setphone]=useState(props.data.phone);
  const[website,setwebsite]=useState(props.data.website);


  const changeName=(e)=>{
    setname(e.target.value);
  }

  const changeEmail=(e)=>{
    setemail(e.target.value);
  }

  const changePhone=(e)=>{
    setphone(e.target.value);
  }

  const changeWebsite=(e)=>{
    setwebsite(e.target.value);
  }


  return (
    <>
      <Modal show={props.setShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Basic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateData(props.data.id)}>
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" value={name} onChange={changeName}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" value={email} onChange={changeEmail}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" value={phone} onChange={changePhone}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicWebsite">
              <Form.Label>Website</Form.Label>
              <Form.Control type="text" value={website} onChange={changeWebsite}/>
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

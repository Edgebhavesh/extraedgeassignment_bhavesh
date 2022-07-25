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
  const[errorName,seterrorName]=useState("");
  const[errorEmail,seterrorEmail]=useState("");
  const[errorPhone,seterrorPhone]=useState("");
  const[errorWebsite,seterrorWebsite]=useState("");
  const[right,setright]=useState(true);


  const changeName=(e)=>{
    if((e.target.value).length==0)
    {
      setright(false);
      seterrorName("required");
    }
    else
    {
      setright(true);
      seterrorName(null);
    }
    setname(e.target.value);
  }

  const changeEmail=(e)=>{  
    if(!isValidEmail(e.target.value) && (e.target.value).length==0)
    {
        seterrorEmail("invalid email");
        setright(false);
    }
    else{
      seterrorEmail(null);
      setright(true);
    }
    setemail(e.target.value);
  }

  const changePhone=(e)=>{
    if((e.target.value).length==0)
    {
      setright(false);
      seterrorPhone("required");
    }
    else
    {
      setright(true);
      seterrorPhone(null);
    }
    setphone(e.target.value);
  }

  const changeWebsite=(e)=>{
    if((e.target.value).length==0)
    {
      setright(false);
      seterrorWebsite("required");
    }
    else
    {
      setright(true);
      seterrorWebsite(null);
    }
    setwebsite(e.target.value);
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  return (
    <>
      <Modal show={props.setShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Basic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={right && updateData(props.data.id)}>
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" value={name} onChange={changeName} required/>
              <p style={{ "color":"red"}}>{errorName}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" value={email} onChange={changeEmail} required/>
              <p style={{ "color":"red"}}>{errorEmail}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" value={phone} onChange={changePhone} required/>
              <p style={{ "color":"red"}}>{errorPhone}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicWebsite">
              <Form.Label>Website</Form.Label>
              <Form.Control type="text" value={website} onChange={changeWebsite} required />
              <p style={{ "color":"red"}}>{errorWebsite}</p>
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={right && handleClose} type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

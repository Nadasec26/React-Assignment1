import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contactus() {
  return <>
        <section className='py-5'>
            <div className="container py-5 text-center">
                <h1 className="fw-bold pt-5 mt-5">CONTACT SECTION</h1>
                <div className="d-flex justify-content-center align-items-center my-3">
                    <div style={{ width: '100px', height: '4px', background: '#2c3e50' }}></div>
                    <i class="mx-3 fa-solid fa-star"></i>
                    <div style={{ width: '100px', height: '4px', background: '#2c3e50' }}></div>
                </div>
                <div className="form w-75 m-auto">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="userName"
                        className="mb-3"
                    >
                        <Form.Control type="text" className="form-control border-top-0 rounded-0 border-black border-start-0 border-end-0" placeholder="userName" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="userAge"
                        className="mb-3"
                    >
                        <Form.Control type="number" className="form-control border-top-0 rounded-0 border-black border-start-0 border-end-0" placeholder="userAge" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="userEmail"
                        className="mb-3"
                    >
                        <Form.Control type="email" className="form-control border-top-0 rounded-0 border-black border-start-0 border-end-0" placeholder="userEmail" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="userPassword"
                        className="mb-3"
                    >
                        <Form.Control type="password" className="form-control border-top-0 rounded-0 border-black border-start-0 border-end-0" placeholder="userPassword" />
                    </FloatingLabel>
                    <Button className='btn btn-success'>send Message</Button>
                </div>
            </div>
        </section>
    </>
}

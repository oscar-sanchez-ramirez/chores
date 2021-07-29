import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap';


export const Canvas = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(s => !s);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-5">
                </div>
                <div className="col-md-5">
                </div>

                <div className="col-md-2">
                    <Button className="mt-3" style={{float: 'right'}} variant="outline-primary" onClick={handleShow}>
                    <i className="fa fa-info"></i> Información
                    </Button>

                    <Offcanvas show={show} onHide={handleShow}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Barra lateral</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <p>Cuerpo</p>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </div>
        </div>

    )
}

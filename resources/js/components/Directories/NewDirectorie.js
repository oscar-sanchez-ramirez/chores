import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { useForm } from '../Hooks/useForm';
import axios from 'axios';

export const NewDirectorie = () => {

    const [show, setShow] = useState(false);

    const [loading, setLoading] = useState(false);

    const [errorNombre, setErrorNombre] = useState(null);
    const [errorDireccion, setErrorDireccion] = useState(null);

    const handleChangeShow = () => {
        setShow(!show);
    }


    const [values, handleInputChange] = useForm({
        nombre: '',
        telefono: '',
        direccion: '',
    });

    const { nombre, telefono, direccion } = values;

    const [foto, setImagen] = useState(null);


    const handleChangeImage = (e) => {
        if (e.target.files[0]) {
            setImagen(e.target.files[0])
            const imgID = document.getElementById('imagen');
            const imgCodified = URL.createObjectURL(e.target.files[0]);
            imgID.src = imgCodified;
        }
    }

    const HandleSubmit = async (e) => {

        e.preventDefault();
        console.log(foto);

        const f = new FormData();
        let nooo = document.querySelector("input[name='nombre']");
        let dirr = document.querySelector("input[name='telefono']");


        if ((nombre.length > 3) && (nombre.length < 99)) {
            f.append('nombre', nombre);
            setErrorNombre('')
            nooo.style.borderColor = "green";
        } else {
            console.log('nombre requerido')
            setErrorNombre('El nombre es requerido')
            nooo.style.borderColor = "red";
        }

        if ((telefono.length > 0)) {
            f.append('telefono', telefono);
            setErrorDireccion('')
            dirr.style.borderColor = "green";
        } else {
            console.log('telefono requerido')
            setErrorDireccion('El teléfono es requerido')
            dirr.style.borderColor = "red";
        }

        if (direccion.length > 0) {
            f.append('direccion', direccion);
        }

        if (foto != null) {
            f.append('foto', foto);
        }

        if ((nombre.length > 3) && (telefono.length > 0)) {

            try {

                const res = await axios.post('http://directorios.com.net/api/directorios', f, { headers: { "Content-Type": "multipart/form-data" } })
                const info = await res.data;
                console.log(info)
                if (info) {
                    setLoading(true)
                }
                // setShow(!show);
                window.location.reload();
            } catch (error) {
                console.log(error)
            }
        }


    }




    return (

        <div>
            <Button variant="outline-primary mb-4" onClick={handleChangeShow}><i className="fa fa-plus"></i> Agregar</Button>

            <Modal show={show} onHide={handleChangeShow}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-muted"></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img
                        style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
                        src="http://directorios.com.net/user/1627521802.png"
                        id="imagen"
                        alt="user"
                        width="60"
                        className="rounded-circle shadow"
                    />
                    <Form onSubmit={HandleSubmit}>
                        <Form.Group className="mb-3 mt-2" controlId="formBasicNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" autoComplete="off" name="nombre" value={nombre} onChange={handleInputChange} />
                            <Form.Text className="text-danger">
                                {(errorNombre != null) ? errorNombre : 'Requerido'}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicTelefono">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="text" autoComplete="off" name="telefono" value={telefono} onChange={handleInputChange} />
                            <Form.Text className="text-danger">
                                {(errorDireccion != null) ? errorDireccion : 'Requerido'}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDireccion">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control as="textarea" rows={3} name="direccion" value={direccion} onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Foto de contacto</Form.Label>
                            <Form.Control type="file" name="foto" onChange={handleChangeImage} />
                        </Form.Group>


                        <Button variant="primary" type="submit" >
                            {loading ? <span>Cargando Información</span> : <i className="fa fa-save"> Guardar</i>}
                        </Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleChangeShow} ><i className="fa fa-window-close"></i> Cancelar</Button>
                </Modal.Footer>
            </Modal>


        </div>
    )
}



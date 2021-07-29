import React from 'react'
import { DeleteDirectorios } from './DeleteDirectorios'
import { UpdateDirectorie } from './UpdateDirectorie'

export const Directorios = ({ item }) => {


    return (

        <div className="col-md-3">
            {
                (item != null) &&
                (<div
                    key={item.id}
                    className="card shadow animate__animated animate__zoomIn mb-4"
                >
                    {
                        item.foto ?
                            <img className="card-img-top p-4 rounded-circle" src={`fotografias/${item.foto}`} alt="Foto" height="150" width="100" />
                            :
                            <img className="card-img-top p-4 rounded-circle" src="http://directorios.com.net/user/1627521802.png" alt="Foto" height="150px" />

                    }
                    <div className="card-body text-muted">
                        <p>{item.nombre}</p>
                        <p>Teléfono: {item.telefono}</p>
                        {/* <p>Dirección: {item.direccion}</p> */}
                    </div>
                    <div className="card-footer">
                        <span style={{float: 'left'}}><UpdateDirectorie /></span>
                        <span style={{float: 'right'}}> <DeleteDirectorios id={item.id}/></span>
                    </div>

                </div>)

            }
        </div>
    )
}
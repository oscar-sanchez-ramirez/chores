import React from 'react'

export const Directorios = ({ item }) => {


    return (
         
        <div className="col-md-3">
            {
                item ?
                (<div
                    key={item.id}
                    className="card shadow animate__animated animate__zoomIn mb-4"
                >
                    {
                        item.foto &&
                        <img className="card-img-top p-4 rounded-circle" src={`fotografias/${item.foto}`} alt="Foto" height="150px" />
                    }
                    <div className="card-body text-muted">
                        <p>{item.nombre}</p>
                        <p>Teléfono: {item.telefono}</p>
                        <p>Dirección: {item.direccion}</p>
                    </div>
                </div>) 
                : 
                (<p>No hay resultados</p>)
            }
        </div>
    )
}
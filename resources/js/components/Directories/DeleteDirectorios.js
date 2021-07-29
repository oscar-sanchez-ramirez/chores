import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const DeleteDirectorios = React.memo(({ id }) => {

    console.log(id)

    const MySwal = withReactContent(Swal);


    const handleDelete = async () => {


        MySwal.fire({
            title: '¿Estás seguro?',
            text: "No se podra recuperar el contacto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy seguro!'
        }).then((result) => {
            if (result.isConfirmed) {

                const res = axios.delete(`http://directorios.com.net/api/directorios/${id}`);
                console.log(res.data)
                Swal.fire(
                    'Eliminado!',
                    'El contacto fue eliminado.',
                    'success'
                )
                window.location.reload();

            }
        })

    }

    return (
        <>
            <button
                className="btn btn-sm btn-outline-danger shadow"
                onClick={handleDelete}
            >
                <i className="fa fa-trash"></i> Borrar
            </button>
        </>
    )
})

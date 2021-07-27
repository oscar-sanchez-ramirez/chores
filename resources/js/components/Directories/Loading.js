import React from 'react'

export const Loading = () => {

    return (
        <div className="card shadow">
            <div className="card-body">
                <div className="row justify-content-center">
                    <div className="spinner-border text-primary" style={{ width: '5rem', height: '5rem', }} role="status">
                        <span className="sr-only"></span>
                    </div>
                    <h4 className="text-center mt-3 text-primary animate__animated animate__pulse animate__infinite">Cargando...</h4>
                </div >
            </div>
        </div>
    )
}

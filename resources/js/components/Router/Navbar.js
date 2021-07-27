import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <Link
                    className="navbar-brand m2-4"
                    to="/"
                >
                    Inicio
                </Link>
                <Link
                    className="navbar-brand"
                    to="/directories"
                >
                    Directorios
                </Link>




                <div className="navbar-collapse">
                    <div className="navbar-nav">



                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                    </ul>
                </div>
            </div>
        </nav>
    )
}
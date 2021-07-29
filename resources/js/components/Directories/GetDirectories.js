import React, { useState } from 'react'
import { useFetch } from '../Hooks/useFetch';
import { Directorios } from './Directorios';
import { Loading } from './Loading';
import { NewDirectorie } from './NewDirectorie';

export const GetDirectories = () => {

    const [search, setSearch] = useState('');
    const state = useFetch(`http://directorios.com.net/api/directorios?txtBuscar=${search}`);
    const { data, loading } = state;
    // console.log(data);

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    

    return (
        <div className="container mt-5">
            <h1 className="text-center text-muted"><i className="fa fa-id-badge"></i> Contactos</h1>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <NewDirectorie />
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <input
                        name="search"
                        value={search}
                        onChange={handleInputChange}
                        placeholder="Buscar..."
                        className="form-control"
                        autoComplete="off"
                    />
                </div>
            </div>
            <div className="row mt-5">
                {
                    (loading) ? (<Loading />)
                        :
                        (data.map(item => (
                            <Directorios item={item} key={item.id} />
                        )))
                }
            </div>
        </div>
    )
}

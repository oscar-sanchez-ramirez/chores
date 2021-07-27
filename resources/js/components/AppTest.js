import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
import { SideBar } from './SideBar';



export const AppTest = () => {


    const inicialState = 10;

    const [counter, setCounter] = useState(inicialState);

    const [shores, setshores] = useState([]);

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(inicialState)
    }

    
    const fetchGet = () => {

        fetch('http://chores.com.net/api/chores')
            .then(resp => resp.json)
            .then(data => {
                setshores(data)
                console.log(data)
            })
            .catch(console.log)

    }


    useEffect(() => {

        fetchGet()

    }, [])



    return (
        <div className="container">
            <SideBar />
            <br />
            <h4 className="mt-5">React and Laravel</h4>
            <h4 className="text-info">{counter}</h4>
            <Button variant="contained" color="primary" className="mt-2" onClick={handleIncrement} >+1</Button>
            <br />
            <Button variant="contained" color="primary" className="mt-2" onClick={handleDecrement} >-1</Button>
            <br />
            <Button variant="contained" color="primary" className="mt-2" onClick={handleReset} >Reset</Button>
            {
                shores.map((item, index) => (
                    <ul className="mt-5" key={index}>
                        <li>{item}</li>
                    </ul>
                ))
            }
        </div>
    )
}   

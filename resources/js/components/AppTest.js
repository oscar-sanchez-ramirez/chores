import React, { useEffect, useState } from 'react'


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
            .then(resp => resp.json())
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
        <div className="container mt-5">
            <h4>React and Laravel</h4>
            <h4 className="text-info">{counter}</h4>
            <button onClick={handleIncrement} className="btn btn-info">+1</button>
            <br />
            <button onClick={handleDecrement} className="btn btn-success mt-4 mb-4">-1</button>
            <br />
            <button onClick={handleReset} className="btn btn-primary">Reset</button>
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

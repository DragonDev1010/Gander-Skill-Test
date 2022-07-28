import React, { useState } from 'react'

function AddNumbers() {
    const [firstNum, setFirstNum] = useState() // state of the first input field
    const [secNum, setsecNum] = useState() // state of the second input field
    const [sum, setSum] = useState(0) // sum of the first number and the second number

    // CSS styles for html
    const styles = {
        formCover : {
            width: '50%',
            margin: '10% 25% 25%',
            textAlign: 'left'
        },
        txtInput : {
            boxSizing: 'border-box',
            width: '200px',
            height: '30px',
            display: 'block',
            margin: '10px 0'
        },
        submitBtn : {
            fontWeight: 'bold'
        }
    }
    const handleSubmit = async (event) => {
        // cancels the event if it is cancelable,
        event.preventDefault();

        // connect to API
        // send POST request to API
        await fetch(process.env.REACT_APP_API_BASE_URL + '/addNum', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                firstNum: firstNum,
                secNum: secNum
            })
        })
        .then(res => res.json()) // treats the response string as a valid JSON object
        .then(res => {
            setSum(res) // set state with the response result
        })
    }
    return(
        <div style={styles.formCover}>
            <h1>Adding Two Numbers</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='First Number'
                    style={styles.txtInput} 
                    type='number' 
                    value={firstNum} 
                    onChange={(e) => setFirstNum(+e.target.value)}
                    data-testid='firstNum'
                />
                <input 
                    placeholder = 'Second Number'
                    style={styles.txtInput} 
                    type='number' 
                    value={secNum} 
                    onChange={(e) => setsecNum(+e.target.value)}
                    data-testid='secNum'
                />
                <input 
                    style={{...styles.txtInput, ...styles.submitBtn}} 
                    type='submit' 
                    value='Add Two Numbers' 
                    data-testid='add'
                />
            </form>
            <h3 data-testid='result'>Sum : {sum}</h3>
        </div>
    )
}

export default AddNumbers
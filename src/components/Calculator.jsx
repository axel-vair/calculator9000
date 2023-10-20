import React, { useState } from 'react';

import NumberButton from './NumberButton.jsx';
import OperatorButton from './OperatorButton.jsx';
import EqualButton from './EqualButton.jsx';
import ClearButton from './ClearButton.jsx';
import BeautifulScreen from './BeautifulScreen.jsx';
import Title from './Title.jsx';



export default function Calculator() {
    const [ output, setOutput] = useState("");localStorage



    return (
        <div className='calculator'>

            <BeautifulScreen output={output} setOutput={setOutput}/>
            <div id="numbersSpace">
                <NumberButton output={output} setOutput={setOutput}/>
            </div>

            <div id="operatorsSpace">
                <OperatorButton output={output} setOutput={setOutput}/>
            </div>
            <div id="equal">
                <EqualButton output={output} setOutput={setOutput}/>
                <ClearButton output={output} setOutput={setOutput}/>
            </div>
        </div>
    )
}
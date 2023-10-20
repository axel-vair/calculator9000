export default function OperatorButton({output, setOutput}) {

    const btnOp = ['+', '-', '*', '/'];

    function addOperator(value){
        setOutput((output) => output + value);
    }


    const buttonsOperator = btnOp.map((value)=>(
        <button className="operatorButton"
                onClick={() => addOperator(value)}
                value={value}
                key={value}>
            {value}
        </button>

    ))

    return (
        buttonsOperator

    )
}
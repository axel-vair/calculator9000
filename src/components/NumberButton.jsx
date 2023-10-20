export default function NumberButton({output, setOutput}) {
    const btnValues = [0,1,2,3,4,5,6,7,8,9];

    function addNumber(number){
        setOutput((output) => output + number);
    }


    const buttonsNumber = btnValues.map((value)=>(
        <button className="number"
                onClick={() => addNumber(value)}
                value={value}
                key={value}>
            {value}
        </button>
    ))


    return (
        buttonsNumber

    )
}
export default function ClearButton({output, setOutput}) {

    function clearAll(output){
        setOutput((output) => output=0);
        let dispCalc=document.getElementById('displayCalc');
        dispCalc.innerHTML=(output);

    }
    return (
        <button id="clear"
                onClick={() => clearAll(output)}> Clear
        </button>
    )
}
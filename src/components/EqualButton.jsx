export default function EqualButton({output, setOutput}) {
    let outputChange=output;

    function evalOp(output){
        try {
            const result = eval(output);
            setOutput(result.toString());
                let dispCalc=document.getElementById('displayCalc');
            dispCalc.innerHTML=(output);
        } catch (e) {
            if (e instanceof SyntaxError) {
                alert(e.message);
                let dispCalc=document.getElementById('displayCalc');
                dispCalc.innerHTML=("error");

            }
        }
    }

    return (
        <button id="egal"
                onClick={() => evalOp(outputChange)}> Equal
        </button>
    )
}
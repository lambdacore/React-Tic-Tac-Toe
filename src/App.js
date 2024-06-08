import {usestate} from 'react'

function Square({ value }) {

    const [value, setValue] = useState(null);
    function handleClick () {
        setValue("X");    }
    return (
        <button
            className="square"
            onClick= {handleClick}
        >
            {value}
        </button>
);
}



export default function Board() {
    return (
        /* single lines needs ; while fragments do not */
        <>
            <div className="board-row">
                <Square /> {/* 1 */}
                <Square /> {/* 2 */}
                <Square /> {/* 3 */}
            </div>
            <div className="board-row">
                <Square /> {/* 4 */}
                <Square /> {/* 5 */}
                <Square /> {/* 6 */}
            </div>
            <div className="board-row">
                <Square /> {/* 7 */}
                <Square /> {/* 8 */}
                <Square /> {/* 9 */}
            </div>
        </>
    )
}

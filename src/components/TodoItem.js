import {BsFillCheckCircleFill} from "react-icons/bs";
import {AiFillCloseCircle} from "react-icons/ai";

function TodoItem({text, completed, onComplete, onDelete}) {
    return(
        <>
            <li>
                <BsFillCheckCircleFill 
                className={`check ${completed ? "ok" : ""}`}
                onClick={onComplete}
                />
                <p className={`${completed ? "completed":""}`}>{text}</p>
                <AiFillCloseCircle 
                className="close"
                onClick={onDelete}
                />

            </li>
        </>
    )
}
export {TodoItem}
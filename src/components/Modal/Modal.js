import { createPortal } from "react-dom";
import "./Modal.css";

export function Modal({children}) {
    return createPortal(
        <div className="modal-main">
            <div className="modal-container">
                <div className="modal">
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}
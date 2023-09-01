import { ReactNode } from "react";
import './modal.css';


interface ModalType {
  children?: ReactNode;
}

export default function Modal(props: ModalType) {
  return (
    <>
        <div className="modal-overlay" >
          <div  className="modal-box">
            {props.children}
          </div>
        </div>
    </>
  );
}
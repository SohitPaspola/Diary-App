import { useContext } from "react";
import { DiaryContext } from "../HOOK/MyContext";
import "./Modal.css";

const Modal = (props) => {
  const {
    setShowModal,
    setIsEditing,
    setEditId,
    setShowFilterModal,
    setRenderFilterList,
  } = useContext(DiaryContext);

  const backClickHandler = () => {
    setShowModal(false);
    setIsEditing(false);
    setEditId(null);
    setShowFilterModal(false);
    setRenderFilterList(false);
  };
  return (
    <>
      <div className="backdrop" onClick={backClickHandler}></div>
      <div className="modal">
        <div>{props.children}</div>
      </div>
    </>
  );
};

export default Modal;

import { useContext } from "react";
import { DiaryContext } from "../HOOK/MyContext";
import Modal from "../UI/Modal";
import "./Input.css";

const Input = () => {
  const {
    input,
    setInput,
    userData,
    setUserData,
    setShowModal,
    isEditing,
    setIsEditing,
    editId,
    setEditId,
  } = useContext(DiaryContext);
  //   console.log(input);
  //   let today = new Date();

  let currentdate = new Date();
  let oneJan = new Date(currentdate.getFullYear(), 0, 1);
  let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
  let result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (isEditing) {
      const newData = userData.map((item) => {
        if (item.id === editId) {
          return { ...item, text: input };
        } else {
          return item;
        }
      });
      setUserData(newData);
      // console.log(newData);
    } else {
      userData.push({
        id: new Date().getTime().toString(),
        text: input,
        fullDate: new Date(),
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        week: +result - 1,
      });
    }
    console.log(userData);
    setInput("");
    setIsEditing(false);
    setShowModal(false);
    setEditId(null);
  };

  return (
    <Modal>
      <form className="input-cont" onSubmit={formSubmitHandler}>
        <div className="control">
          <label htmlFor="text">Text</label>
          <textarea
            id="text"
            rows="5"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          ></textarea>
        </div>

        <div className="actions">
          <button type="submit" className="btn">
            {isEditing ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Input;

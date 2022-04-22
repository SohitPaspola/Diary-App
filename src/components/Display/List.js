import { useContext } from "react";
import { DiaryContext } from "../HOOK/MyContext";
import "./List.css";

const List = () => {
  const {
    userData,
    setUserData,
    setIsEditing,
    setShowModal,
    setInput,
    setEditId,
    setShowFilterModal,
    filterInputData,
    filteredList,
    showFilterModal,
    renderFilterList,
    setRenderFilterList,
    setFilteredList,
  } = useContext(DiaryContext);

  const editButtonClickHandler = (id) => {
    setEditId(id);
    const item = userData.find((data) => data.id === id);
    //   console.log(userData,id);
    setIsEditing(true);
    setShowModal(true);
    setInput(item.text);
  };
  const removeButtonClickHandler = (id) => {
    const newData = userData.filter((item) => item.id !== id);
    setUserData(newData);
  };
  const sortButtonClickHandler = () => {
    const newData = [...userData].reverse();
    const newFilterData = [...filteredList].reverse()
    setUserData(newData);
    setFilteredList(newFilterData)
  };

  const filterButtonHandler = () => {
    setShowFilterModal(true);
  };
  let dataList = renderFilterList ? filteredList : userData;

  return (
    <>
      <div className="sorting">
        <button onClick={sortButtonClickHandler}>Sort</button>
        <button onClick={filterButtonHandler}>filter</button>
      </div>
      <div key={Math.random().toString()} className="list-cont-main">
        {dataList.length===0 ? (<p className="no-data">No record Found</p>) : 
          dataList.map((item) => {
            //   const { id } = item;
            const day = item.day;
            const month = item.fullDate.toLocaleString("en-us", {
              month: "long",
            });
            const year = item.year;
            return (
              <div key={item.id} className="list-item-sec-cont">
                <div className="list-item-sec">
                  <h3 className="list-item-text">{item.text}</h3>
                  <div className="list-item-date">
                    <strong>{day} </strong>
                    <strong>{month} </strong>
                    <strong>{year}</strong>
                  </div>
                </div>
                <div className="list-item-btn">
                  <button onClick={() => editButtonClickHandler(item.id)}>
                    edit
                  </button>
                  <button onClick={() => removeButtonClickHandler(item.id)}>
                    delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default List;

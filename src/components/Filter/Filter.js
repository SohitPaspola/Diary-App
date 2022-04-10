import { useContext, useEffect, useState } from "react";
import { DiaryContext } from "../HOOK/MyContext";
import Modal from "../UI/Modal";

const Filter = () => {
  const {
    filterInputData,
    setFilterInputData,
    userData,
    setFilteredList,
    setShowFilterModal,
    setRenderFilterList,
  } = useContext(DiaryContext);

  let initialValues = {
    week: "",
    month: "",
    year: "",
  };

  const [inputValues, setInputValues] = useState(initialValues);
  useEffect(() => {
    setFilterInputData({
      week: inputValues.week.slice(5),
      month: inputValues.month.slice(6),
      year: inputValues.year,
    });
  }, [inputValues]);

  const inputValuesHandler = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
    console.log(inputValues);
  };
  const filterByWeekHandler = () => {
    const filteredValue = userData.filter(
      (item) => +item.week === +filterInputData.week
    );
    setFilteredList(filteredValue);
    setShowFilterModal(false);
    setRenderFilterList(true);
  };
  const filterByMonthHandler = () => {
    const filteredValue = userData.filter(
      (item) => +item.month === +filterInputData.month
    );
    setFilteredList(filteredValue);
    setShowFilterModal(false);
    setRenderFilterList(true);
    // console.log(filteredList);
  };
  const filterByYearHandler = () => {
    const filteredValue = userData.filter(
      (item) => +item.year === +filterInputData.year
    );
    // console.log(inputValues);
    console.log(filteredValue);
    console.log(userData);
    setFilteredList(filteredValue);
    setShowFilterModal(false);
    setRenderFilterList(true);
    // console.log(filteredList, userData);
  };

  return (
    <Modal>
      <div>
        <div>
          <label>week</label>
          <input
            name="week"
            type="week"
            value={inputValues.week}
            onChange={inputValuesHandler}
          ></input>
          <button
            disabled={inputValues.week === ""}
            onClick={filterByWeekHandler}
          >
            filter by week
          </button>
        </div>
        <div>
          <label>month</label>
          <input
            name="month"
            type="month"
            value={inputValues.month}
            onChange={inputValuesHandler}
          ></input>
          <button
            disabled={inputValues.month === ""}
            onClick={filterByMonthHandler}
          >
            filter by month
          </button>
        </div>
        <div>
          <label>year</label>
          <input
            type="number"
            step="1"
            onChange={inputValuesHandler}
            name="year"
            value={inputValues.year}
          ></input>
          <button
            disabled={inputValues.year === ""}
            onClick={filterByYearHandler}
          >
            filter by year
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Filter;

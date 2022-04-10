import { createContext, useState } from "react";

const DiaryContext = createContext();

const DataProvider = ({ children }) => {
  const [input, setInput] = useState([]);
  const [userData, setUserData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [filterInputData, setFilterInputData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [renderFilterList, setRenderFilterList] = useState(false);

  let value = {
    input,
    setInput,
    userData,
    setUserData,
    showModal,
    setShowModal,
    isEditing,
    setIsEditing,
    editId,
    setEditId,
    showFilterModal,
    setShowFilterModal,
    filterInputData,
    setFilterInputData,
    filteredList,
    setFilteredList,
    renderFilterList,
    setRenderFilterList,
  };

  return (
    <DiaryContext.Provider value={value}>{children}</DiaryContext.Provider>
  );
};

export { DataProvider, DiaryContext };

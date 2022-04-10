import { useContext } from 'react';
import { DiaryContext } from '../HOOK/MyContext';
import './Header.css'

const Header = () => {
    const {setShowModal} = useContext(DiaryContext)

    const addNotehandler = () => {
        setShowModal((prev) => !prev)
    }

    return (
        <div className= 'header-container'>
            <h1>My Diary</h1>
            <div className= "header-cont-btn">
                <button onClick={addNotehandler}>Add a Note</button>
            </div>
        </div>
    );
};


export default Header;
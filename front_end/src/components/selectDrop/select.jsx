import React, { useState } from "react";
import '../selectDrop/select.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClickAwayListener from '@mui/material/ClickAwayListener'; 

const Select = ({ data }) => {
    // State to track whether the dropdown is open or closed
    const [isOpenSelect, setisOpenSelect] = useState(false);
    
    // State to track the selected item index
    const [selectedIndex, setselectedIndex] = useState(0);
    
    // State to store the selected item text
    const [selectedItem, setselectedItem] = useState('All Categories');

    // State to store the filtered list
    const [listData, setListData] = useState(data);

    // Function to toggle the dropdown open/close
    const OpenSelect = () => {
        setisOpenSelect(!isOpenSelect);
    };

    // Function to close the dropdown and update the selected item
    const closeSelect = (index, name) => {
        setselectedIndex(index);
        setisOpenSelect(false);
        setselectedItem(name);
    };

    // Function to filter the list based on user input
    const filterList = (event) => {
        const keyword = event.target.value.toLowerCase();
        const filteredList = data.filter((item) => item.toLowerCase().includes(keyword));
        setListData(filteredList);
    };

    return (
        <div className='selectDrop cursor position-relative'>
            {/* ClickAwayListener should wrap only the dropdown section */}
            <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
                <div>
                    {/* Display the selected item and toggle dropdown on click */}
                    <span className='openSelect' onClick={OpenSelect}>
                        {selectedItem} <KeyboardArrowDownIcon className='downArrow'/>
                    </span>

                    {/* Show dropdown menu only if isOpenSelect is true */}
                    {isOpenSelect && (
                        <div className='dropMenu'>
                            <div className='searchField'>
                                {/* Input field for searching items */}
                                <input 
                                    type='text' 
                                    placeholder='Search here...' 
                                    onChange={filterList} 
                                />

                                {/* List of selectable categories */}
                                <ul className='searchResult'>
                                    {listData.length > 0 ? (
                                        listData.map((item, index) => (
                                            <li 
                                                key={index} 
                                                onClick={() => closeSelect(index, item)} 
                                                className={`${selectedIndex === index ? 'active' : ''}`}
                                            >
                                                {item}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="no-result">No results found</li> // Handle empty search case
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </ClickAwayListener>
        </div>
    );
};

export default Select;

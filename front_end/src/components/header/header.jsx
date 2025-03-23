// Import the required dependencies
import React, { useState } from 'react';
import '../header/header.scss';
import Nav from './nav/nav';
import Logo from '../../assets/images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
import iconCompare from '../../assets/images/compare.png';
import iconFavorite from '../../assets/images/favorite.png';
import iconCart from '../../assets/images/shopping-cart.png';
import iconAccount from '../../assets/images/account.png';

// Import Material UI components for Account menu
import Button from '@mui/material/Button';
import UserIcon from '@mui/icons-material/PersonOutlineOutlined';
import OrderIcon from '@mui/icons-material/LocalMallOutlined';
import VoucherIcon from '@mui/icons-material/LocalOfferOutlined';
import SettingIcon from '@mui/icons-material/TuneOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';

import ClickAwayListener from '@mui/material/ClickAwayListener';

const Header = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const [categories] = useState([
    'All Categories',
    'Clothing',
    'Electronics',
    'Furniture',
    'Jewelry',
    'Shoes',
    'Sports',
    'Toys',
    'Foods',
    'Other'
  ]);

  return (
    <>
      <header>
        <div className='container-fluid'>
          <div className='row'>
            {/* Logo Section */}
            <div className='col-sm-2'>
              <img src={Logo} alt="Website Logo" className='logo'/>
            </div>

            {/* Search Section */}
            <div className='col-sm-5'>
              <div className='headerSearch d-flex align-items-center'>
                {/* Pass categories to Select component */}
                <Select data={categories} />

                {/* Search box with input field and search icon */}
                <div className='searchBox'>
                  <input type='text' placeholder='Search for items...' />
                  <SearchIcon className='searchIcon cursor' />
                </div>
              </div>
            </div>

            {/* Header Icons */}
            <div className='col-sm-5 d-flex align-items-center'>
              <div className='ml-auto d-flex align-items-center'>
                <ul className='list list-inline mb-0 headerTabs'>
                  <li className='list-inline-item'>
                    <span>
                      <img src={iconCompare} alt="Compare" /> Compare
                    </span>
                  </li>
                  <li className='list-inline-item'>
                    <span>
                      <img src={iconFavorite} alt="Wishlist" /> Wishlist
                    </span>
                  </li>
                  <li className='list-inline-item'>
                    <span>
                      <img src={iconCart} alt="Cart" /> Cart
                    </span>
                  </li>

                  {/* Account Dropdown */}
                  <ClickAwayListener onClickAway={() => setIsOpenDropDown(false)}>
                    <li className='list-inline-item position-relative'>
                      <span onClick={() => setIsOpenDropDown((prev) => !prev)}>
                        <img src={iconAccount} alt="Account" /> Account
                      </span>

                      {isOpenDropDown && (
                        <ul className='subMenu'>
                          <li><Button className='align-items-center'><UserIcon /> My Account</Button></li>
                          <li><Button><OrderIcon /> Orders</Button></li>
                          <li><Button><VoucherIcon /> Vouchers</Button></li>
                          <li><Button><SettingIcon /> Settings</Button></li>
                          <li><Button><LogoutIcon /> Sign out</Button></li>
                        </ul>
                      )}
                    </li>
                  </ClickAwayListener>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Nav />
    </>
  );
};

export default Header;

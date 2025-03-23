import React from "react";
import './nav.scss';
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

const Nav = () => {
    return (
        <div className='nav d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row position-relative'>
                    <div className='col-sm-3 part1 d-flex align-items-center'>
                         <Button className='catTab'><AppsOutlinedIcon/> &nbsp; Brows All Categories <KeyboardArrowDownIcon/></Button>
                    </div>
                    <div className='col-sm-7 part2 position-static'>
                        <nav>
                            <ul className='list list-inline mb-0'>
                                <li className='list-inline-item'>
                                    <Button><Link to='/'>Home</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to='/'>About</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to='/'>Shop</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to='/'>Vendors</Link></Button>
                                </li>
                                <li className='list-inline-item position-static'>
                                    <Button><Link to='/'>Mega menu <KeyboardArrowDownIcon/></Link></Button>
                                    <div className='dropDown_menu megaMenu w-100'>
                                        <div className='row'>
                                            <div className='col'>
                                                <h4>Home</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to='/'>Blog</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to='/'>Pages <KeyboardArrowDownIcon/></Link></Button>

                                    <div className='dropDown_menu'>
                                        <ul>
                                            <li><Button><Link to='/'>About Us</Link></Button></li>
                                            <li><Button><Link to='/'>Contact</Link></Button></li>
                                            <li><Button><Link to='/'>My Account</Link></Button></li>
                                            <li><Button><Link to='/'>Login</Link></Button></li>
                                            <li><Button><Link to='/'>Register</Link></Button></li>
                                            <li><Button><Link to='/'>Reset password</Link></Button></li>
                                            <li><Button><Link to='/'>Privacy Policy</Link></Button></li>
                                            <li><Button><Link to='/'>Terms of Services</Link></Button></li>
                                            <li><Button><Link to='/'>404 Page</Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to='/'>Contact</Link></Button>
                                </li>
                            </ul>
                        </nav>

                    </div>
                    <div className='col-sm-2 part3 d-flex align-items-center'>
                        <div className='support d-flex align-items-center ml-auto'>
                            <span> <HeadsetMicOutlinedIcon/></span>
                            <div className='info ml-3'>
                                <h4 className='text-g mb-0'>Support</h4>
                                <p className='mb-0'>24/7 Live Support</p>
                            </div>

                         </div>
                    </div>
                
                </div>
            </div>
        </div>

    );
};

export default Nav;
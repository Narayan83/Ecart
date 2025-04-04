// product.js
import React from "react";
import "./product.css";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Tooltip from '@mui/material/Tooltip';

import Product1 from "../../assets/images/running-shoes.png";

const Product = (props) => {
    return (
        <div className="productThumb">
            {
                // Tags (Hot Sale New Best)
                props.tag!==null && props.tag !== undefined &&
                <span className={`badge ${props.tag}`}>{props.tag}</span>
            }
            
            <Link to="/product-details">
                <div className="imgWrapper">
                    <img src={Product1} alt="Running Shoes" loading="lazy"/>
                    <div className="overlay">
                        <ul className="list">
                            <li>
                                <Tooltip title="Add to Wishlist" placement="top">
                                    <Link>
                                        <FavoriteBorderOutlinedIcon fontSize="small"/>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Compare" placement="top">
                                    <Link>
                                        <CompareArrowsOutlinedIcon fontSize="small"/>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Quick View" placement="top">
                                    <Link>
                                        <RemoveRedEyeOutlinedIcon fontSize="small"/>
                                    </Link>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </Link>

            <div className="info">
                <span className="catName">Shoes</span>
                <h4 className="title">
                    <Link to="/product-details">Running Shoes</Link>
                </h4>
                <Rating 
                    name="half-rating-read" 
                    defaultValue={4.5} 
                    precision={0.5} 
                    readOnly 
                    size="small"
                />
                <span className="brand">by <Link to="/brand/puma">PUMA</Link></span>

                <div className="priceSection">
                    <div>
                        <span className="price">Rs.1599</span>
                        <span className="oldPrice">2199</span>
                    </div>
                    <Button>
                        <ShoppingCartOutlinedIcon fontSize="small"/>
                        ADD
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Product;
import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "./StateProvider";
import {auth} from "./Firebase"

function Header() {
    const [{basket,user}] = useStateValue();

    const login = () =>{
        if(user){
            auth.signOut();
        }
    };

    return (
        <div className="header">
            
            {/* logo left*/}
            <Link to="/">
                <img 
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" 
                    alt="amazon logo"
                />
            </Link>

            {/* search box*/}
            <div className="header__search">
                <input
                    className="header__searchInput" 
                    type="text"
                />
                <SearchIcon  className="header__searchIcon" />
            </div>

            {/* 3 links*/}
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login}className="header__option">
                        <span className="header__optionlineone">Hello {user?.email}</span>
                        <span className="header__optionlinetwo">{user? 'Sign Out':'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionlineone" >Returns</span>
                        <span className="header__optionlinetwo" >& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionlineone" >Your</span>
                        <span className="header__optionlinetwo" >Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionlinetwo header__basketCount" >{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header

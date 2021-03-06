import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from './crown.svg'
import {  auth } from "./firebase/FireBaseUtiils";

const Header = (props:{user:any})=>{
    return <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>
                    SHOP
                </Link>
                {
                    props.user?
                        <div className='option' onClick={()=>auth.signOut() as any}>Sign Out</div>
                        :
                        <Link to='/signin' className='option'>
                            Sign In
                        </Link>
                }   
            </div>
    </div>
}

export default Header;

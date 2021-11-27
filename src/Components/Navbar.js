import React from 'react'
import {Link} from 'react-router-dom'

import {Icon} from 'react-icons-kit'
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart'
import {auth} from '../Config/Config'
import {useHistory} from 'react-router-dom'

export const Navbar = ({user,totalProducts}) => {

    const history = useHistory();

    const handleLogout=()=>{
        auth.signOut().then(()=>{
            history.push('/login');
        })
    }

    return (
        <div className='navbar'>
            <div className='leftside'>
                <div className='logo'>
                <div><Link className='navlinkhome' to="/"><h1>SoapBox </h1></Link></div>
                </div>
            </div>
            <div className='rightside'>

                {!user&&<>
                    <div><Link className='navlink' to="signup">SIGN UP</Link></div>
                    <div><Link className='navlink' to="login">LOGIN</Link></div>
                    <div><Link className='navlink' to="about">ABOUT US</Link></div>
                    <div><Link className='navlink' onClick={handleLogout}>LOGOUT</Link></div>
                </>} 

                {user&&<>
                    <div><Link className='navlink' to="/">{user}</Link></div>
                    <div><Link className='navlink' to="about">About Us</Link></div>
                    <div className='cart-menu-btn'>
                        <Link className='navlink' to="cart">
                            <Icon icon={shoppingCart} size={20}/>
                        </Link>
                        <span className='cart-indicator'>{totalProducts}</span>
                    </div>
                    <div className='btn btn-danger btn-md'
                    onClick={handleLogout}>LOGOUT</div>
                </>}                     
                                
            </div>
        </div>

    )
}
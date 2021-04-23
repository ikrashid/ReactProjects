import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

const Header = ({signedIn}) =>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/shop'>Contact</Link>
            {signedIn ? 
                (<div className='option' onClick={() => auth.signOut()}>Sign Out</div>) 
                : (<Link className='option' to='/signIn'></Link>)
            }
        </div>
    </div>

);
const mapStateToProps = state => ({
    signedIn: state.user.currentUser
})
export default connect(mapStateToProps)(Header);
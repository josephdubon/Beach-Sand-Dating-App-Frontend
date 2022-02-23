import React from 'react'

import './Header.css'

import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'

import logo from '../../logo-header-beach-sand.png'

const Header = () => {
    return (<div className="header">
        <IconButton>
            <PersonIcon fontSize={'large'} className={'header__icon'}/>
        </IconButton>
        <img src={logo} alt="header" className="header__logo"/>
        <IconButton>
            <ForumIcon fontSize={'large'} className={'header__icon'}/>
        </IconButton>
    </div>)
}

export default Header
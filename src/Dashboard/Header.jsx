// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Dashboard.css'
import 
 { BsJustify}
 from 'react-icons/bs'

// eslint-disable-next-line react/prop-types

function Header({OpenSidebar}){
    return(
        <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-right'>
            
        </div>
    </header>

    )

}
export default Header
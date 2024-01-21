// eslint-disable-next-line no-unused-vars
import React from 'react'
import 
{ BsMenuButtonWideFill , BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill }
 from 'react-icons/bs'

// eslint-disable-next-line react/prop-types


function Sidebar({openSidebarToggle, OpenSidebar}){
    return(
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsMenuButtonWideFill  className='icon_header'/> TO DO LIST
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
              
                    <BsFillArchiveFill className='icon'/> Add task
                
            </li>
            
            
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Sign Out
                </a>
            </li>
        </ul>
    </aside>

    )

}
export default Sidebar
import React, { useEffect, useReducer, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MenusItem } from './Menus';

const Menu_2 = () => {

    const [addActive, setActive] = useState('');
    const location = useLocation().pathname
    //menu toggle
    const reducermenu = (menuPreviousState, menuUpdatedState) => ({
        ...menuPreviousState,
        ...menuUpdatedState,
    });
    const menuInitialState = {
        activemenu: "",
    }

    const [menuState, setMenuState] = useReducer(reducermenu, menuInitialState);
    const menuHandler = (menuStatus) => {
        setMenuState({ activemenu: menuStatus })
        if (menuState.activemenu === menuStatus) {
            setMenuState({ activemenu: "" })
        }
    }
    //sub menu toggle
    const reducer = (previousState, updatedState) => ({
        ...previousState,
        ...updatedState,
    });
    const initialState = {
        activeSubmenu: "",
    }

    const [state, setState] = useReducer(reducer, initialState);
    const handleSubmenuActive = (status) => {
        setState({ activeSubmenu: status })
        if (state.activeSubmenu === status) {
            setState({ activeSubmenu: "" })
        }
    }


    useEffect(() => {
        MenusItem.map((ell) => {
            if (ell.link === location) {
                setActive(ell.menu)
            }
            ell.subMenu.map((ele) => {
                if (ele.link === location) {
                    setActive(ell.menu)
                }
            })
        })


    }, [])

    return (
        <>
            <ul className="nav navbar-nav navbar navbar-left">
                {MenusItem.map((menu, index) => {
                    return (
                        <li key={index} className={`sub-menu-down ${addActive === menu.menu ? 'active' : ''}`}>
                            <Link
                                onClick={() => { menuHandler(index) }}
                                to={'#'}>{menu.menu}
                                <i className="fa fa-angle-down"></i>
                            </Link>
                            <ul style={{ display: `${menuState.activemenu === index ? 'block' : 'none'}` }} className="sub-menu">
                                {menu.subMenu.map((item, ind) => {
                                    let subMenuClass = item.dropdown;
                                    if (subMenuClass === "sub-menu-down") {
                                        return (
                                            <li key={ind} className='sub-menu-down'>
                                                <Link onClick={() => { handleSubmenuActive(item.childe) }}>{item.childe} {item.icon}<i className="fa fa-angle-right"></i></Link>
                                                <ul style={{ display: `${state.activeSubmenu === item.childe ? "block" : 'none'}` }} className='sub-menu'>
                                                    {item.submenus.map((childe, mapKey) => {
                                                        return (
                                                            <li key={mapKey} className='sub-menu-down'>
                                                                <Link to={childe.link}>{childe.shildes}</Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                        )
                                    } else {
                                        return (
                                            <li key={ind} className='sub-menu-down'>
                                                <Link to={item.link}>{item.childe}</Link>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Menu_2
import React, { useEffect, useReducer, useState, } from 'react'
import { Link, useLocation } from 'react-router-dom'


export const MenusItem = [
    {
        menu: 'HOME',
        link: `/`,
        subMenu: [
            { childe: 'Home 1', link: '/' },
            { childe: 'Home 2', link: '/home-2' },
            { childe: 'Home 3', link: '/home-3' },
            { childe: 'Home 4', link: '/home-4' },
        ]
    },
    {
        menu: 'NEW',
        link: '/new',

        subMenu: [
            {
                childe: 'CAR LISTING',
                dropdown: 'sub-menu-down',
                submenus: [
                    { shildes: 'CART LISTING 1', link: '/car-listing' },
                    { shildes: 'CART LISTING 2', link: '/car-listing-2' },
                    { shildes: 'CART LISTING 3', link: '/car-listing-3' },
                ]
            },
            {
                childe: 'SEARCH CAR',
                dropdown: 'sub-menu-down',
                submenus: [
                    { shildes: 'SEARCH CAR', link: '/new-car-search' },
                    { shildes: 'SEARCH RESULT LIST', link: '/new-car-search-result-list' },
                    { shildes: 'SEARCH RESULT COLUMN', link: '/new-car-search-result-column' },
                ]
            },
            { childe: 'LETEST CAR', link: '/latest-cars' },
            { childe: 'POPULAR CARS', link: '/popular-cars' },
            { childe: 'UPCOMING CARS', link: '/upcoming-cars' },
            {
                childe: 'DEALER & SERVICE',
                dropdown: 'sub-menu-down',
                submenus: [
                    { shildes: 'CAR DEALERS', link: '/car-dealers' },
                    { shildes: 'SERVICE CENTER', link: '/car-service-center' },
                ]
            },
            { childe: 'ON ROAD PRICE', link: '/on-road-price' },
        ]
    },
    {
        menu: 'USED',
        link: '/used',

        subMenu: [
            { childe: 'MY CITY', link: '/used-car-search-result' },
            {
                childe: 'SEARCH CAR',
                dropdown: 'sub-menu-down',
                submenus: [
                    { shildes: 'SEARCH CAR', link: '/used-car-search' },
                    { shildes: 'SEARCH RESULT LIST', link: '/used-car-search-result' },
                    { shildes: 'USED CAR DETAIL', link: '/used-car-details' },
                ]
            },
            { childe: 'USED CAR DEATAILS', link: '/used-car-details' },
            { childe: 'SELL YOUR CAR', link: '/used-car-sell' },
            { childe: 'CAR VALUATION', link: '/used-car-valuation' },
        ]
    },
    {
        menu: 'COMPARE',
        link: '/compare',
        subMenu: [
            { childe: 'COMPARE CAR', link: '/compare-car' },
            { childe: 'COMPARE CAR RESULT', link: '/compare-result' },
            { childe: 'WRITE REVIEW', link: '/write-review' },
            { childe: 'CAR REVIEW', link: '/car-review' },
        ]
    },
    {
        menu: 'CAR DETAIL',
        link: '/car-detail',
        subMenu: [
            {
                childe: 'CAR DETAIL',
                dropdown: 'sub-menu-down',
                submenus: [
                    { shildes: 'CAR DETAIL 1', link: '/car-details' },
                    { shildes: 'CAR DETAIL 2', link: '/car-details-2' },
                ]

            },
            { childe: 'CAR SPECIFICATIONS', link: '/car-detail-specifications' },
            { childe: 'CAR PRICE', link: '/car-detail-price' },
            { childe: 'CAR COMPARE', link: '/car-detail-compare' },
            { childe: 'CAR PICTURES', link: '/car-detail-pictures' },
        ]
    },
    {
        menu: 'PAGES',
        link: '/pages',
        subMenu: [
            { childe: 'ABOUT', link: '/about-us' },
            { childe: 'SERVICES', link: '/services' },
            { childe: 'LOCATION', link: '/location' },
            { childe: 'CONTACT', link: '/contact-us' },
            {
                childe: 'BLOG',
                dropdown: 'sub-menu-down',
                submenus: [
                    { shildes: 'Blog Grid', link: '/blog-grid' },
                    { shildes: 'Blog List Sidebar', link: '/blog-list-sidebar' },
                    { shildes: 'Blog Detail', link: '/blog-details' },
                ]

            },
            {
                childe: 'ERROR 404', link: '/error-404',
            },
        ]
    },
]




const Menus = ({ setOpen }) => {

    const pathname = useLocation();
    const [activeLink, setActiveLink] = useState('');

    const reducer = (previousState, updatedState) => ({
        ...previousState,
        ...updatedState,
    });
    const initialState = {
        activeSubmenu: "",
    }

    const [state, setState] = useReducer(reducer, initialState);
    const menuHandler = (status) => {
        setState({ activeSubmenu: status })
        if (state.activeSubmenu === status) {
            setState({ activeSubmenu: "" })
        }
    }
    //sub menu toggle
    const reducermenu = (menuPreviousState, menuUpdatedState) => ({
        ...menuPreviousState,
        ...menuUpdatedState,
    });
    const menuInitialState = {
        activemenu: "",
    }

    const [menuState, setMenuState] = useReducer(reducermenu, menuInitialState);
    const submenuHandler = (menuStatus) => {
        setMenuState({ activemenu: menuStatus })
        if (menuState.activemenu === menuStatus) {
            setMenuState({ activemenu: "" })
        }
    }


    useEffect(() => {
        MenusItem.map((data) => {
            data.subMenu.map((item) => {
                if (item.link === pathname.pathname) {
                    setActiveLink(data.menu);
                }
                item?.submenus?.map((el) => {
                    if (el.link === pathname.pathname) {
                        setActiveLink(data.menu);
                    }
                })
            })
        })
    }, [pathname.pathname])


    return (
        <>
            <ul className="nav navbar-nav navbar navbar-left p-t50">
                {MenusItem.map((menu, index) => {
                    return (
                        <li key={index}
                            className={
                                `sub-menu-down ${state.activeSubmenu === menu.menu ? 'open' : ''} 
                                ${menu.menu === activeLink ? "active" : ""}
                                `                            }>
                            <Link to={`#`} onClick={() => { menuHandler(menu.menu); }}>
                                {menu.menu}
                                <i className="fa fa-angle-down"></i>
                            </Link>
                            <ul className="sub-menu">
                                {menu.subMenu.map((item, ind) => {
                                    let subMenuClass = item.dropdown;
                                    if (subMenuClass === "sub-menu-down") {
                                        return (
                                            <li key={ind} className={`sub-menu-down ${menuState.activemenu === ind ? 'open' : ''}`}>
                                                <Link
                                                    onClick={() => {
                                                        submenuHandler(ind);
                                                    }}
                                                >{item.childe}<i className={`fa fa-angle-${menuState.activemenu === ind ? 'down' : 'right'}`}></i>
                                                </Link>
                                                <ul className='sub-menu'>
                                                    {item.submenus.map((childe, mapKey) => {
                                                        return (
                                                            <li key={mapKey} className='sub-menu-down'>
                                                                <Link
                                                                    to={childe.link}
                                                                >{childe.shildes}</Link>
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
            <div className="dlab-social-icon p-t50">
                <ul>
                    <li><Link to={'#'} className="fab fa-facebook-f"></Link></li>
                    <li><Link to={'#'} className="fab fa-twitter"></Link></li>
                    <li><Link to={'#'} className="fab fa-linkedin-in"></Link></li>
                    <li><Link to={'#'} className="fab fa-instagram"></Link></li>
                </ul>
            </div>
        </>
    )
}

export default Menus
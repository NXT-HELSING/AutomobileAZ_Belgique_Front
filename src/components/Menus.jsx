import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const MenusItem = [
    {
        menu: 'ACCUEIL',
        link: '/',
    },
    {
        menu: 'VÉHICULES',
        link: '/cars',
    },
    {
        menu: 'COMPARER',
        link: '/compare-car',
    },
    {
        menu: 'À PROPOS',
        link: '/about-us',
    },
    {
        menu: 'CONTACT',
        link: '/contact-us',
    }
]

const Menus = ({ setOpen }) => {
    const pathname = useLocation();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        MenusItem.forEach((data) => {
            if (data.link === pathname.pathname) {
                setActiveLink(data.menu);
            }
        });
    }, [pathname.pathname])

    return (
        <>
            <ul className="nav navbar-nav navbar navbar-left p-t50">
                {MenusItem.map((menu, index) => {
                    return (
                        <li key={index} className={menu.menu === activeLink ? "active" : ""}>
                            <Link to={menu.link} onClick={() => setOpen(false)}>
                                {menu.menu}
                            </Link>
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
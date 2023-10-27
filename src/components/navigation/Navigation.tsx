//this file will be used to create the navigation bar
import * as React from "react";

export default function Navigation() {
    //import navigation items from json file
    const navigationItems = require('../../data/navigation.json');
    const maindata = require('../../data/main_site_data.json');
    console.log(navigationItems);

    return (
        <>
        <header role="banner">
        <div className="header-wrapper">
            <div className="header-main">
            <button className="hamburger hamburger--elastic" type="button" aria-label="Mobile Menu" aria-controls="navigation">
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
            </button>
            <div className="region region-header-branding">
                <div id="block-vlizbase-site-branding" className="block block-system block-system-branding-block">
                <a href="/" rel="home" title="">
                    <img loading="lazy" src={maindata.logo} alt="VLIZ" title="VLIZ" width="115px"/>
                </a>
                </div>
            </div>
            <div className="header-content">
                <div className="header-content-inner">
                <div className="region region-header-navigation-top"></div>
                <div className="region region-header-navigation">
                    <nav role="navigation" aria-labelledby="block-mainnavigation-menu" id="block-mainnavigation">
                    <h2 className="visually-hidden" id="block-mainnavigation-menu">Main
                        navigation</h2>
                    <ul className="menu">
                        {
                        navigationItems.length > 0 ?
                        //use react loop here to loop through the navigation items
                        navigationItems.map((item, index) => {
                            //check if item has property items
                            if (item.items) {
                                //make data-doormat-block by checking if index is 0
                                let doormatBlock = "doormat-block-hoofdnavigatie";
                                if (index != 0) {
                                    let toadd = index+1;
                                    doormatBlock += "-" + toadd;
                                }
                                //make class by checking if item has a property named highlight
                                let classHighlight = "";
                                if (item.highlight) {
                                    classHighlight = "highlight";
                                }

                                //make site url by checking if item has a property named url
                                let siteUrl = "";
                                if (item.url) {
                                    siteUrl = item.url;
                                }

                                return (
                                <li className="menu-item menu-item--collapsed">
                                    <a className={classHighlight} href={siteUrl}
                                    data-doormat-target={doormatBlock}>{item.title}</a>
                                </li>
                                )
                            }
                        })
                        : <></>
                        }
                    </ul>
                    </nav>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="region region-header-doormat">
            {
                navigationItems.length > 0 ?
                navigationItems.map((item, index) => {

                    let indexadd = index+1;
                    let doormatBlock = "doormat-block-hoofdnavigatie";
                    if (index != 0) {
                        doormatBlock += "-" + indexadd;
                    }

                    return(
                        <div 
                            id={doormatBlock} 
                            className="block block-menu-block block-menu-blockmain block-doormat"
                            data-doormat-id={doormatBlock}
                        >
                            <div className="doormat-inner">
                                <ul className="menu">
                                {
                                    item.items &&
                                    item.items.map((subitem, subindex) => {
                                        if (item.items.length > 4) {
                                            return (
                                                <li className="menu-item menu-item--expanded">
                                                    <a 
                                                        href={subitem.url}
                                                        target="blank"
                                                    >{subitem.title}</a>
                                                    {
                                                        subitem.items ? (
                                                            <ul className="menu">
                                                                {
                                                                    subitem.items.map((subsubitem, subsubindex) => {
                                                                        return (
                                                                            <li className="menu-item">
                                                                                <a 
                                                                                    href={subsubitem.url}
                                                                                    target="blank"
                                                                                >{subsubitem.title}</a>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        ) : (
                                                            <></>
                                                        )
                                                    }
                                                </li>
                                            )
                                        } else {
                                            let width = 100 / item.items.length;
                                            return (
                                                <li className="menu-item menu-item--expanded" style={{width: width + "%"}}>
                                                    <a 
                                                        href={subitem.url}
                                                        target="blank"
                                                    >{subitem.title}</a>
                                                    {
                                                        subitem.items ? (
                                                            <ul className="menu">
                                                                {
                                                                    subitem.items.map((subsubitem, subsubindex) => {
                                                                        return (
                                                                            <li className="menu-item">
                                                                                <a 
                                                                                    href={subsubitem.url}
                                                                                    target="blank"
                                                                                >{subsubitem.title}</a>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        ) : (
                                                            <></>
                                                        )
                                                    }
                                                </li>
                                            )
                                        }
                                    })
                                }
                                </ul>
                            </div>
                        </div>
                    )
                })
                : <></>
            }        
        </div>

        </header>
        </>
    )

}
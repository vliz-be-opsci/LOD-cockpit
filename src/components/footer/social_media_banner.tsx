//this component will be used in the footer to displat social media links

import * as React from "react";
//import from react icons, github, facebook, instagram, twitter, youtube, linkedin
import { FaGithub, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaBoxOpen } from 'react-icons/fa';

export default function SocialMediaBanner() {

    let socialMediaLinks = require('../../data/social_media_links.json');

    return (
        socialMediaLinks.length > 0 ? 
        <div className="col-12 field__item">
        <div
        className="background-dark-1 container-full-width pb-2 pt-2 paragraph paragraph--type--container paragraph--view-mode--default">
        <div
            className="field field--name-field-paragraph-container-items field--type-entity-reference-revisions field--label-hidden">
            <div className="row field__items">
            <div className="col-12 field__item">
                <div className="paragraph paragraph--type--basic-text paragraph--view-mode--default">
                <div
                    className="clearfix text-formatted field field--name-field-body field--type-text-long field--label-hidden field__items">
                    <div className="text-align-center white">
                    <span> Find more 'something something' at &nbsp; </span>
                    <br/>
                    <span className="social-icons">
                        {
                            socialMediaLinks.length > 0 ?
                            socialMediaLinks.map((item: any) => {
                                //get the correct svg by checking the item.name and making a switch case
                                let svg = <></>;
                                switch(item.name) {
                                    case "github":
                                        svg = <FaGithub />;
                                        break;
                                    case "facebook":
                                        svg = <FaFacebook />;
                                        break;
                                    case "instagram":
                                        svg = <FaInstagram />;
                                        break;
                                    case "twitter":
                                        svg = <FaTwitter />;
                                        break;
                                    case "youtube":
                                        svg = <FaYoutube />;
                                        break;
                                    case "linkedin":
                                        svg = <FaLinkedin />;
                                        break;
                                    default:
                                        svg = <FaBoxOpen/>; // TODO check if faboxopen is the best default
                                }
                                return (
                                    <a href={item.url} target="_blank"
                                    rel="noopener noreferrer">
                                    {svg}
                                    </a>
                                )
                            })
                            :
                            <></>
                        }
                    </span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
         : <></>
    )
}
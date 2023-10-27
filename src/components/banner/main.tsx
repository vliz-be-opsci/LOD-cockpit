//this component will contain the main banner
import * as React from "react";
let bannerimage = require('../../assets/media/img/cover/fedora29.jpg');


export default function BannerMain() {

    let bannerdata = require('../../data/main_site_data.json')

    //set variables based on given bannerdata
    let title = bannerdata.title ? bannerdata.title : "Give a prop title";
    let description = bannerdata.description ? bannerdata.description : "Give a prop description";

    let image = bannerimage;

    if(bannerdata.image) {
        //perform react lazy loading 
        image =bannerdata.image //TODO: Fix the issue where I can't load in an image
    }
    let url = bannerdata.url ? bannerdata.url : "";
    let url_text = bannerdata.url_text ? bannerdata.url_text : "Give a prop url_text";

    return (
    <>
        <div className="col-12 field__item">
            <div className="paragraph paragraph--type--hero paragraph--view-mode--default">
            <div className="hero-container">
                <div
                className="field field--name-field-media field--type-entity-reference field--label-hidden field__items">
                <article className="media media--type-video media--view-mode-hero">
                    <img loading="lazy" src={image}
                        width="640" height="480" alt={title}
                        title="{title}" typeof="foaf:Image"
                        className="image-style-medium-cropped"
                    />
                </article>
                </div>
                <div
                className="clearfix text-formatted field field--name-field-body field--type-text-long field--label-hidden field__items grayoverlay">
                <div className="field__item">
                    <h2 className="white">{title}</h2>
                    <p>{description}</p>
                    <p><a className="more-link" href={url}
                    >{url_text}</a>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
    )
}
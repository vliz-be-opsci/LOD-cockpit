//this component is used in the footer component
import * as React from "react";
import SocialMediaBanner from './social_media_banner';
var vlaanderenLogo = require('../../assets/core/misc/Vlaanderen_verbeelding werkt.png'); 
var westVlaanderenLogo = require('../../assets/core/misc/west_vlaanderen_logo.png');

export default function FooterMain() {
    return (
        <footer>
        <div className="region region-footer ">
            <div id="block-footerparagraphs"
            className="block--type-paragraphs-block block block-block-content block-block-contentfb3db23a-bc58-4eed-a875-1cb32e663944">
            <div className="field field--name-field-paragraphs field--type-entity-reference-revisions field--label-hidden">
                <div className="row field__items">
                <SocialMediaBanner />
                </div>
            </div>
            </div>
            <div id="block-footerparagraphsbottom"
            className="block--type-paragraphs-block block block-block-content block-block-content42c15541-5ab2-44df-8666-3573f6c0a83e">
            <div className="field field--name-field-paragraphs field--type-entity-reference-revisions field--label-hidden">
                <div className="row field__items">
                <div className="col-12 field__item">
                    <div
                    className="background-light-4 container-full-width pb-5 pt-5  container-align-items-center container-flex-justify-space-between pb-4 pt-2 paragraph paragraph--type--container paragraph paragraph--type--container paragraph--view-mode--default">
                    <div
                        className="field field--name-field-paragraph-container-items field--type-entity-reference-revisions field--label-hidden">
                        <div className="row field__items">
                        <div className="col-12 field__item">
                            <div className="paragraph paragraph--type--basic-text paragraph--view-mode--default">

                            <div
                                className="clearfix text-formatted field field--name-field-body field--type-text-long field--label-hidden field__items">
                                <p className="paragraph-small">© 2023 VLIZ. All rights reserved</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 field__item">
                            <div className="paragraph paragraph--type--basic-text paragraph--view-mode--default">
                            <div
                                className="clearfix text-formatted field field--name-field-body field--type-text-long field--label-hidden field__items">
                                <p className="paragraph-small"><a className="link-colored" data-entity-substitution="canonical"
                                    data-entity-type="node" data-entity-uuid="b74b4d98-09a8-46ab-9dab-c3cce361c675"
                                    href="https://www.vliz.be/en/privacy" title="Privacy policy">Privacy Policy</a> - <a
                                    className="link-colored" data-entity-substitution="canonical" data-entity-type="node"
                                    data-entity-uuid="0a6bc71e-a82c-4837-935d-a7c2847a3959"
                                    href="https://www.vliz.be/en/terms-use" title="Terms of use">Terms of use</a></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-12 field__item">
                    <div
                    className="container-align-items-center pb-4 pt-4 paragraph paragraph--type--container paragraph--view-mode--default">
                    <div
                        className="field field--name-field-paragraph-container-items field--type-entity-reference-revisions field--label-hidden">
                        <div className="row field__items">
                        <div className="col-4 col-md-3 col-lg-2 field__item">
                            <div className="paragraph paragraph--type--media paragraph--view-mode--default">
                            <div
                                className="field field--name-field-media field--type-entity-reference field--label-hidden field__items">
                                <article className="media media--type-image media--view-mode-large">
                                <div
                                    className="field field--name-field-media-image field--type-image field--label-hidden field__items">
                                    <a href="https://www.vlaanderen.be/" target="_blank" rel="noopener noreferrer"><img
                                        loading="lazy"
                                        src={ vlaanderenLogo }
                                        alt="Vlaanderen: Verbeelding werkt" typeof="Image" className="image-style-large-1000"
                                        width="823" height="347"/></a>
                                </div>
                                </article>
                            </div>
                            </div>
                        </div>
                        <div className="col-4 offset-4 col-md-3 offset-md-6 col-lg-2 offset-lg-8 field__item">
                            <div className="paragraph paragraph--type--media paragraph--view-mode--default">
                            <div
                                className="field field--name-field-media field--type-entity-reference field--label-hidden field__items">
                                <article className="media media--type-image media--view-mode-large">
                                <div
                                    className="field field--name-field-media-image field--type-image field--label-hidden field__items">
                                    <a href="https://www.west-vlaanderen.be/"><img loading="lazy"
                                        src={westVlaanderenLogo}
                                        width="404"
                                        height="181" alt="West vlaanderen de gedreven provincie" typeof="Image"
                                        className="image-style-large-1000" /></a>
                                </div>
                                </article>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </footer>
    )
}
import * as React from "react";
import Navigation from '../components/navigation/Navigation';
import FooterMain from '../components/footer/main';
import MobileOverlay from '../components/mobile-overlay/main';
import BannerMain from '../components/banner/main';

const DefaultLayout: React.FC = ({ children }) => 
(
    <>
    <a href="#main-content" className="visually-hidden focusable skip-link">
        Skip and go to main content
    </a>
    <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>
        <div className="layout-container">
            <Navigation />
            {
                //check if the current route is / => to disable this just put "" as the window.location.pathname
                window.location.pathname == "" ?
                <BannerMain />
                :
                <></>
            }
            <main role="main">
                <div className="main-container">
                    <a id="main-content" tabindex="-1"></a>
                    <div className="layout-content ">
                        <div className="region region-content">
                            <div className="region-content-inner">
                                <div id="block-vlizbase-page-title" className="block block-core block-page-title-block">
                                    <h1 className="page-title"><span property="schema:name"
                                            className="field field--name-title field--type-string field--label-hidden">Homepage</span>
                                    </h1>
                                </div>
                                <div id="block-vlizbase-content" className="block block-system block-system-main-block">
                                    <article role="article" about="/nl/homepage" typeof="schema:WebPage"
                                        className="node node--type-page node--view-mode-full">
                                        <span property="schema:name" content="Homepage" className="hidden"></span>
                                        <div className="node__content">
                                            <div
                                                className="field field--name-field-paragraphs field--type-entity-reference-revisions field--label-hidden">
                                                <div className="row field__items">
                                                    {children}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <h6>Site share enabling here</h6>
                    </div>
                </div>
            </main>
            <FooterMain />
            <MobileOverlay />
        </div>
    </div>
</>
);

export default DefaultLayout;
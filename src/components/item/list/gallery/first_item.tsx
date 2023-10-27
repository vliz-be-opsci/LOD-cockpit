//this component will be used by main component

import * as React from "react";

export default function ItemListGalleryFirstItem(props) {
    let item = props.item;
    console.log(item);

    return(
        <div className="attachment attachment-before">
            <div className="views-element-container">
                <div
                    className="view-news-promoted-first view view-news view-id-news view-display-id-attachment_1">
                    <div className="view-content">
                        <div className="views-row">
                            <article role="article" about={item.clickthrough_url}
                                className="node node--type-news node--promoted node--view-mode-extended-teaser">
                                <div className="node__content included-item">
                                    <div className="before">
                                        <a href={item.clickthrough_url } hreflang="nl" target="_blank">
                                            <img loading="lazy" src={ item.image }
                                                width="1000" height="562" alt={ item.title }
                                                title={ item.title } typeof="foaf:Image"
                                                className="image-style-large-cropped-16-9" />
                                        </a>
                                    </div>
                                    <div className="main" >
                                        <div className="main-inner">
                                            {
                                                item.tags ?
                                                item.tags.map((tag) => {
                                                    return <a href="#" className="field__news_teaser">{tag}</a>
                                                })
                                                :
                                                <></>
                                            }
                                            <h3>
                                                <a href={ item.clickthrough_url } hreflang="nl"
                                                    target="_blank"><span
                                                        className="field field--name-title field--type-string field--label-hidden">{ item.title }</span>
                                                </a>
                                            </h3>
                                            <div className="node-date">
                                                { item.date }
                                            </div>

                                            <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__articles">
                                                { item.description }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
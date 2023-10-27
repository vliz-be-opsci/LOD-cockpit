//this component is the subitem of the item/list/block/colored/main component

import * as React from "react";

export default function ItemListBlockColoredItem(props) {
    let item = props.item;

    let content_h = <span className="field field--name-title field--type-string field--label-hidden">{item.title}</span>
    if (item.clickthrough_url) {
        content_h = <a href={item.clickthrough_url } rel="bookmark">
            <span className="field field--name-title field--type-string field--label-hidden">{item.title}</span>
        </a>
    }

    return (
        <div className="views-row">
        <article role="article">
        <div className="node node--type-faq-question node--promoted node--view-mode-teaser">
            <div className="included-item">
            <h2>
                {content_h}
            </h2>
            <div className="node__content">
            </div>
            </div>
        </div>
        </article>
        </div>
    )
}
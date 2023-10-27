//this component is part of the item/list/card/colored/main component

import * as React from "react";

export default function ItemListCardColoredItem(props) {
    let item = props.item;

    return(
        <div className="views-row">
            <article role="article" about={ item.clickthrough_url }
                className="node node--type-jobs node--promoted node--view-mode-teaser">
                <h2>
                    <a href={item.clickthrough_url } rel="bookmark"><span
                        className="field field--name-title field--type-string field--label-hidden">{item.title }</span>
                    </a>
                </h2>
                <div className="node__content">
                    <div className="field field--name-field-teaser field--type-string-long field--label-hidden field__items">
                        <p>
                            {item.description }
                        </p>
                    </div>
                </div>
            </article>
        </div>
    )
}
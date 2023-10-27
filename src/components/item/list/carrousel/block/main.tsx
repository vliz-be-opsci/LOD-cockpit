//component to render a carrousel block

import * as React from "react";
import ItemListCarrouselBlockItem from './item';

//TODO: carrousel doesn't seem to be working properly

export default function ItemListCarrouselBlock(props) {
    let item = props.item;

    return(
        <div className="col-12 field__item">
            <div className="background-light-2 container-full-width pb-5 pt-5 paragraph paragraph--type--container paragraph--view-mode--default">
                <h2 className="container-title field field--name-field-title field--type-string field--label-hidden field__items">
                {item.title }
                </h2>
                <div className="field field--name-field-paragraph-container-items field--type-entity-reference-revisions field--label-hidden">
                <div className="row field__items">
                    <div className="col-12 field__item">
                    <div className="ticker-count-3 ticker-nav paragraph paragraph--type--ticker paragraph--view-mode--default">
                        <div className="ticker-items field field--name-field-paragraph-container-items field--type-entity-reference-revisions field--label-hidden">
                        <div className="field__items included-item-list">
                            {
                                item.items.map((iteme) => {
                                    return <ItemListCarrouselBlockItem item={iteme} />
                                })
                            }
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
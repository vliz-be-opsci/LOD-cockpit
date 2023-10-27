//main component of text image row

import * as React from "react";
import ItemListRowTextImageItem from './item';

export default function ItemListRowTextImage(props) {
    let item = props.item;

    return(
        <div className="col-12 field__item">
            <div className="pb-4 pt-4 paragraph paragraph--type--container paragraph--view-mode--default">
                <div
                    className="field field--name-field-paragraph-container-items field--type-entity-reference-revisions field--label-hidden">
                    <div className="row field__items included-item-list">
                        {
                            item.items.map((iteme) => {
                                return(
                                    <ItemListRowTextImageItem item={iteme} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
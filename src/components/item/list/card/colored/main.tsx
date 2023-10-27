//this component will render a colered card

import * as React from "react";
import ItemListCardColoredItem from './item';

export default function ItemListCardColored(props) {
    let item = props.item;

    return(
        <div className="col-12 field__item">
            <div className="pb-6 pt-4 paragraph paragraph--type--container paragraph--view-mode--default">
                <div className="field field--name-field-paragraph-container-items field--type-entity-reference-revisions field--label-hidden">
                <div className="row field__items">
                    <div className="col-12 field__item">
                    <div className="paragraph paragraph--type--block paragraph--view-mode--default">
                        <div className="field field--name-field-block field--type-block-field field--label-hidden field__items">
                        <div className="views-element-container block block-views block-views-blockjobs-block-jobs-promoted"
                            id="block-views-block-jobs-block-jobs-promoted">
                            <h2>{ item.title }</h2>
                            <div>
                            <div className="promoted-jobs view view-jobs view-id-jobs view-display-id-block_jobs_promoted ">
                                <div className="view-content">
                                    {
                                        item.items.map((iteme) => {
                                            return <ItemListCardColoredItem item={iteme} />
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
                </div>
            </div>
        </div>
    )
}
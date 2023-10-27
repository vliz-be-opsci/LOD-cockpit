//this component will render a waved carrousel
import * as React from "react";
import ItemListCarrouselWavedItem from './item';

export default function ItemListCarrouselWaved({ item }) {
    return(
        <div className="col-12 field__item">
            <div
                className="background-white container-full-width pb-6 pt-6 paragraph paragraph--type--container paragraph--view-mode--default">
                <div
                    className="field field--name-field-paragraph-container-items field--type-entity-reference-revisions field--label-hidden">
                    <div className="row field__items">
                        <div className="col-12 field__item">
                            <div className="paragraph paragraph--type--block paragraph--view-mode--default">
                                <div
                                    className="field field--name-field-block field--type-block-field field--label-hidden field__items">
                                    <div className="views-element-container block block-views block-views-blockevents-events-upcoming-block"
                                        id="block-views-block-events-events-upcoming-block">
                                        <h2>{item.title}
                                        </h2>
                                        <div>
                                            <div
                                                className="events-ticker view view-events view-id-events view-display-id-events_upcoming_block js-view-dom-id-e191d37c185b818cd5a6c279ebcc6dfdf564c0f46c280e772a63f13439f29bd0">
                                                <div className="view-header-wrapper">
                                                    <div className="view-header">
                                                    </div>
                                                </div>
                                                <div className="view-content included-item-list">
                                                    {
                                                        item.items.map((item, index) => {
                                                            return(
                                                            <ItemListCarrouselWavedItem item={item} />
                                                            )
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
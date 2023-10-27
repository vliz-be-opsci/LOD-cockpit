//this component will be part of the item/list/carrousel/main component

import * as React from "react";

export default function ItemListCarrouselBlockItem(props) {
    let item = props.item;
    return (
        <div className="field__item">
            <div className="background-white pb-4 pt-4 px-4 text-add-box-shadow paragraph paragraph--type--basic-text paragraph--view-mode--default">
                <div className="clearfix text-formatted field field--name-field-body field--type-text-long field--label-hidden field__items">
                <div className="included-item">
                    <h4 className="highlighted-heading text-align-center">
                    {item.title }
                    </h4>

                    <p className="paragraph-small text-align-center">
                    {item.description }
                    </p>
                    {
                        item.clickthrough_url ?
                        <>
                        <p className="paragraph-brand-color text-align-center">
                        <a 
                            className="more-link-colored"
                            href={item.clickthrough_url }
                            >
                                {item.clickthrough_text }
                            </a>
                        </p>
                        </>
                        :
                        <></>
                    }
                </div>
                </div>
            </div>
        </div>
    )
}
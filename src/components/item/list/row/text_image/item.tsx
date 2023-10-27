//this component wil be part of the main component

import * as React from "react";

export default function ItemListRowTextImageItem(props) {
    let item = props.item;
    let rest_col_width = 12 - item.col_width_text;
    let image_size = rest_col_width * 70;

    return (
            item.image ?
            <>
            <div class={`col-lg-${item.col_width_text} field__item`}>
                <div className="paragraph paragraph--type--basic-text paragraph--view-mode--default">
                    <div
                        className="clearfix text-formatted field field--name-field-body field--type-text-long field--label-hidden field__items">
                        <p>
                            <a href={item.clickthrough_url}>
                                {item.title} : 
                            </a>
                            {item.description}
                        </p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </div>
            <div class={`col-lg-${rest_col_width} field__item`}>
                <div className="paragraph paragraph--type--media paragraph--view-mode--default">
                    <div className="field field--name-field-media field--type-entity-reference field--label-hidden field__items">
                        <article className="media media--type-image media--view-mode-large">
                            <div className="field field--name-field-media-image field--type-image field--label-hidden field__items">
                                <img loading="lazy"
                                    src={item.image }
                                    alt={ item.title } 
                                    typeof="foaf:Image" 
                                    className="image-style-large-1000" 
                                    style={{
                                        width: `${image_size}px`,
                                        display: 'block',
                                        margin: 'auto',
                                        verticalAlign: 'middle',
                                        maxWidth: '300px'
                                    }}
                                />
                            </div>
                        </article>

                    </div>
                </div>
            </div>
            </>
        :
        <div className="col-lg-12 offset-lg-0 field__item">
            <div className="paragraph paragraph--type--basic-text paragraph--view-mode--default">
                <div
                    className="clearfix text-formatted field field--name-field-body field--type-text-long field--label-hidden field__items">
                    <p>
                        <a href={item.clickthrough_url}>
                            {item.title}
                        </a>
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
        
    )
}
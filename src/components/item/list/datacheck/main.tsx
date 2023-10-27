//this file will contain the main part of the component that will be used to represent the datachecks that need to be performed
//the porppose is to use this component per json file where all the checks were put in

import * as React from "react";
import { FaGithub,  } from "react-icons/fa";
import { GrDocumentTest } from "react-icons/gr";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DataCheckMain(props) {
    let item = props.itemlist;

    //check the item.items properties and loop through them to see f any item has the status fail in it 
    let status_css = "status--pass--sideline";
    for (let i = 0; i < item.items.length; i++) {
        const element = item.items[i];
        for (let j = 0; j < element.tests.length; j++) {
            const test = element.tests[j];
            if (test.status == "fail") {
                status_css = "status--fail--sideline";
            }
        }
    }

    //reorder the items so that the failed items are on top
    let failed_items = [];
    let passed_items = [];
    for (let i = 0; i < item.items.length; i++) {
        const element = item.items[i];
        let status = "pass";
        for (let j = 0; j < element.tests.length; j++) {
            const test = element.tests[j];
            if (test.status == "fail") {
                status = "fail";
            }
        }
        if (status == "fail") {
            failed_items.push(element);
        } else {
            passed_items.push(element);
        }
    }
    item.items = failed_items.concat(passed_items);


    return (
        <>
        <div className={`col-12 field__item`}>
            <div className="pb-4 pt-4 paragraph paragraph--type--container paragraph--view-mode--default">
                <div
                    className="field field--name-field-paragraph-container-items field--type-entity-reference-revisions field--label-hidden">
                    <div className="row field__items included-item-list">
                        <h3 className={`${status_css}`}>{item.title}</h3>
                        {
                            item.items.map((iteme) => {

                                let status_css_test = "status--pass";

                                //check all the test statuses
                                for (let j = 0; j < iteme.tests.length; j++) {
                                    const test = iteme.tests[j];
                                    if (test.status == "fail") {
                                        status_css_test = "status--fail";
                                        console.log("fail");
                                    }
                                }

                                //make the doughnut data 
                                let data = {};
                                let failed = 0;
                                let passed = 0;
                                for (let j = 0; j < iteme.tests.length; j++) {
                                    const test = iteme.tests[j];
                                    if (test.status == "fail") {
                                        failed++;
                                    } else {
                                        passed++;
                                    }
                                }
                                data.datasets = [{
                                    data: [failed, passed],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(0, 200, 83, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(0, 200, 83, 1)'
                                    ],
                                    borderWidth: 1
                                }]

                                //based on how many failed tests there are choose if the col-lg should be 6 or 4
                                //base decision of devisible by 3 or not
                                let failed_items  = 0;
                                for (let i = 0; i < item.items.length; i++) {
                                    const element = item.items[i];
                                    let status = "pass";
                                    for (let j = 0; j < element.tests.length; j++) {
                                        const test = element.tests[j];
                                        if (test.status == "fail") {
                                            status = "fail";
                                            continue;
                                        }
                                    }
                                    if (status == "fail") {
                                        failed_items++;
                                    }
                                }
                                let col_width = 6;
                                if (failed_items % 3 == 0) {
                                    col_width = 4;
                                }

                                //if status--css--test is status--pass then col_width should be 3
                                if (status_css_test == "status--pass") {
                                    col_width = 3;
                                }

                                return(
                                    <div className={`col-lg-${col_width} field__item ${status_css_test} item__box`}>
                                        <div className="pb-2 pt-2 paragraph paragraph--type--container paragraph--view-mode--default">
                                            <div className="row field__items included-item-list">
                                                <div className="col-lg-4">
                                                    <Doughnut data={data} />
                                                </div>
                                                <div className="col-lg-6  center-vertical">
                                                    {iteme.title}
                                                </div>
                                                <div className="col-lg-2 center-vertical">
                                                    <div className="row field__items included-item-list">
                                                        <div className="col-lg-12  center-vertical">
                                                            <a href={iteme.clickthrough_url} >
                                                                <GrDocumentTest/>
                                                            </a>
                                                        </div>
                                                        <div className="col-lg-12  center-vertical">
                                                            <a href={iteme["gh-url"]} >
                                                                <FaGithub/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
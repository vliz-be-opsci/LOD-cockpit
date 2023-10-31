import * as React from "react";
import DefaultLayout from './layouts/default';
import DataCheckMain from "./components/item/list/datacheck/main";

import './App.css';

function App() {

  //require the JSON file
  let LDES_data = require('data/cockpit/LDES.json');
  let RO_data = require('data/cockpit/RO.json');
  let GH_data = require('data/cockpit/GH_actions.json');
  
  return (
    <>
      <DefaultLayout>
        <h1>LOD-cockpit</h1>
        <DataCheckMain itemlist={LDES_data} />
        <DataCheckMain itemlist={RO_data} />
        <DataCheckMain itemlist={GH_data} />
      </DefaultLayout>
    </>
  );
}

export default App;

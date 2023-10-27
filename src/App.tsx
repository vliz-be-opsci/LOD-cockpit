import * as React from "react";
import DefaultLayout from './layouts/default';
import DataCheckMain from "./components/item/list/datacheck/main";

import './App.css';

function App() {

  let itemlist = {
  "title":"LDES",
  "items":[
            {
              "title": "item 1",
              "clickthrough_url":"/test", 
              "gh-url": "https://github.com/vliz-be-opsci",
              "tests": [
                {
                  "title": "test 1",
                  "description": "description 1",
                  "status": "pass"
                },
                {
                  "title": "test 2",
                  "description": "description 2",
                  "status": "pass"
                },
                {
                  "title": "test 3",
                  "description": "description 3",
                  "status": "pass"
                },
                {
                  "title": "test 4",
                  "description": "description 4",
                  "status": "pass"
                }
              ]
            },
            {
              "title": "item 2",
              "clickthrough_url":"/test", 
              "gh-url": "https://github.com/vliz-be-opsci",
              "tests": [
                {
                  "title": "test 1",
                  "description": "description 1",
                  "status": "pass"
                },
                {
                  "title": "test 3",
                  "description": "description 3",
                  "status": "pass"
                },
                {
                  "title": "test 4",
                  "description": "description 4",
                  "status": "fail"
                }
              ]
            },
            {
              "title": "item 3",
              "clickthrough_url":"/test", 
              "gh-url": "https://github.com/vliz-be-opsci",
              "tests": [
                {
                  "title": "test 1",
                  "description": "description 1",
                  "status": "pass"
                },
                {
                  "title": "test 2",
                  "description": "description 2",
                  "status": "pass"
                },
                {
                  "title": "test 3",
                  "description": "description 3",
                  "status": "pass"
                },
                {
                  "title": "test 4",
                  "description": "description 4",
                  "status": "pass"
                }
              ]
            },
            {
              "title": "item 4",
              "clickthrough_url":"/test", 
              "gh-url": "https://github.com/vliz-be-opsci",
              "tests": [
                {
                  "title": "test 1",
                  "description": "description 1",
                  "status": "pass"
                },
                {
                  "title": "test 2",
                  "description": "description 2",
                  "status": "fail"
                },
                {
                  "title": "test 3",
                  "description": "description 3",
                  "status": "pass"
                },
                {
                  "title": "test 4",
                  "description": "description 4",
                  "status": "fail"
                }
              ]
            },
            {
              "title": "item 5",
              "clickthrough_url":"/test", 
              "gh-url": "https://github.com/vliz-be-opsci",
              "tests": [
                {
                  "title": "test 1",
                  "description": "description 1",
                  "status": "pass"
                },
                {
                  "title": "test 2",
                  "description": "description 2",
                  "status": "fail"
                },
                {
                  "title": "test 3",
                  "description": "description 3",
                  "status": "pass"
                },
                {
                  "title": "test 4",
                  "description": "description 4",
                  "status": "fail"
                }
              ]
            }
          ]
  }

  let itemlisttwo = {
    "title":"RO-spaces",
    "items":[
              {
                "title": "item 1",
                "clickthrough_url":"/test", 
                "gh-url": "https://github.com/vliz-be-opsci",
                "tests": [
                  {
                    "title": "test 1",
                    "description": "description 1",
                    "status": "pass"
                  },
                  {
                    "title": "test 2",
                    "description": "description 2",
                    "status": "pass"
                  },
                  {
                    "title": "test 3",
                    "description": "description 3",
                    "status": "pass"
                  },
                  {
                    "title": "test 4",
                    "description": "description 4",
                    "status": "pass"
                  }
                ]
              },
              {
                "title": "item 2",
                "clickthrough_url":"/test", 
                "gh-url": "https://github.com/vliz-be-opsci",
                "tests": [
                  {
                    "title": "test 1",
                    "description": "description 1",
                    "status": "pass"
                  },
                  {
                    "title": "test 3",
                    "description": "description 3",
                    "status": "pass"
                  },
                  {
                    "title": "test 4",
                    "description": "description 4",
                    "status": "pass"
                  }
                ]
              },
              {
                "title": "item 3",
                "clickthrough_url":"/test", 
                "gh-url": "https://github.com/vliz-be-opsci",
                "tests": [
                  {
                    "title": "test 1",
                    "description": "description 1",
                    "status": "pass"
                  },
                  {
                    "title": "test 2",
                    "description": "description 2",
                    "status": "pass"
                  },
                  {
                    "title": "test 3",
                    "description": "description 3",
                    "status": "pass"
                  }
                ]
              },
              {
                "title": "item 4",
                "clickthrough_url":"/test", 
                "gh-url": "https://github.com/vliz-be-opsci",
                "tests": [
                  {
                    "title": "test 1",
                    "description": "description 1",
                    "status": "pass"
                  },
                  {
                    "title": "test 3",
                    "description": "description 3",
                    "status": "fail"
                  },
                  {
                    "title": "test 4",
                    "description": "description 4",
                    "status": "pass"
                  }
                ]
              },
              {
                "title": "item 5",
                "clickthrough_url":"/test", 
                "gh-url": "https://github.com/vliz-be-opsci",
                "tests": [
                  {
                    "title": "test 1",
                    "description": "description 1",
                    "status": "pass"
                  },
                  {
                    "title": "test 2",
                    "description": "description 2",
                    "status": "fail"
                  },
                  {
                    "title": "test 3",
                    "description": "description 3",
                    "status": "pass"
                  },
                  {
                    "title": "test 4",
                    "description": "description 4",
                    "status": "fail"
                  }
                ]
              }
            ]
    }
  
    let itemlistthree = {
      "title":"gh-actions",
      "items":[
                {
                  "title": "item 1",
                  "clickthrough_url":"/test", 
                  "gh-url": "https://github.com/vliz-be-opsci",
                  "tests": [
                    {
                      "title": "test 1",
                      "description": "description 1",
                      "status": "pass"
                    },
                    {
                      "title": "test 2",
                      "description": "description 2",
                      "status": "pass"
                    },
                    {
                      "title": "test 3",
                      "description": "description 3",
                      "status": "pass"
                    },
                    {
                      "title": "test 4",
                      "description": "description 4",
                      "status": "pass"
                    }
                  ]
                },
                {
                  "title": "item 2",
                  "clickthrough_url":"/test", 
                  "gh-url": "https://github.com/vliz-be-opsci",
                  "tests": [
                    {
                      "title": "test 1",
                      "description": "description 1",
                      "status": "pass"
                    },
                    {
                      "title": "test 3",
                      "description": "description 3",
                      "status": "pass"
                    },
                    {
                      "title": "test 4",
                      "description": "description 4",
                      "status": "pass"
                    }
                  ]
                },
                {
                  "title": "item 3",
                  "clickthrough_url":"/test", 
                  "gh-url": "https://github.com/vliz-be-opsci",
                  "tests": [
                    {
                      "title": "test 1",
                      "description": "description 1",
                      "status": "pass"
                    },
                    {
                      "title": "test 2",
                      "description": "description 2",
                      "status": "pass"
                    },
                    {
                      "title": "test 3",
                      "description": "description 3",
                      "status": "pass"
                    }
                  ]
                },
                {
                  "title": "item 4",
                  "clickthrough_url":"/test", 
                  "gh-url": "https://github.com/vliz-be-opsci",
                  "tests": [
                    {
                      "title": "test 1",
                      "description": "description 1",
                      "status": "pass"
                    },
                    {
                      "title": "test 3",
                      "description": "description 3",
                      "status": "pass"
                    },
                    {
                      "title": "test 4",
                      "description": "description 4",
                      "status": "pass"
                    }
                  ]
                },
                {
                  "title": "item 5",
                  "clickthrough_url":"/test", 
                  "gh-url": "https://github.com/vliz-be-opsci",
                  "tests": [
                    {
                      "title": "test 1",
                      "description": "description 1",
                      "status": "pass"
                    },
                    {
                      "title": "test 2",
                      "description": "description 2",
                      "status": "fail"
                    },
                    {
                      "title": "test 3",
                      "description": "description 3",
                      "status": "pass"
                    },
                    {
                      "title": "test 4",
                      "description": "description 4",
                      "status": "fail"
                    }
                  ]
                }
              ]
      }

  return (
    <>
      <DefaultLayout>
        <h1>LOD-cockpit</h1>
        <DataCheckMain itemlist={itemlist} />
        <DataCheckMain itemlist={itemlisttwo} />
        <DataCheckMain itemlist={itemlistthree} />
      </DefaultLayout>
    </>
  );
}

export default App;

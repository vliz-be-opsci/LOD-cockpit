# README for the projects created with the VLIZ BE theme

Using a React App
=================

This guide will walk you through the process of setting up and using a React app. We'll cover the installation process, how to run the development server, and how to deploy your app to GitHub Pages.

Prerequisites
-------------

Before you get started, make sure you have the following prerequisites installed on your system:

*   Node.js: You can download and install Node.js from [nodejs.org](https://nodejs.org/).
*   npm (Node Package Manager): npm is included with Node.js, so no additional installation is necessary.

Installation
------------

1.  Clone the project repository to your local machine:
    
    bashCopy code
    
    `git clone <repository_url>`
    
2.  Navigate to the project directory:
    
    bashCopy code
    
    `cd <project_directory>`
    
3.  Install the project dependencies using npm:
    
    bashCopy code
    
    `npm install`
    

This will download and install all the necessary packages and dependencies required for your React app.

Development
-----------

To start the development server and work on your React app, follow these steps:

0. Check in the package.json file if the homepage is set to the correct url. If you are developing locally, this should be empty. If you are developing on a server, this should be the url of the server.

1.  Run the development server using npm:
    
    bashCopy code
    
    `npm run start`
    
    This command will start a development server and open your app in a web browser. Any changes you make to the source code will be automatically reflected in the browser.
    
2.  Open your preferred code editor and start making changes to the React app source files. The development server will hot-reload your app whenever you save changes.
    
3.  Continue developing your app, and don't forget to test it in your browser.
    

Deployment to GitHub Pages
--------------------------

Once you're ready to deploy your React app to GitHub Pages, follow these steps:

1.  Open your `package.json` file and add a `homepage` field. This should contain the URL where your app will be hosted on GitHub Pages. It will typically be in the format: `https://<username>.github.io/<repository-name>`.
    
    jsonCopy code
    
    `"homepage": "https://<username>.github.io/<repository-name>"`
    
2.  In your `package.json` file, add the following line in the `scripts` section to specify the deployment command:
    
    jsonCopy code
    
    `"deploy": "npm run build && gh-pages -d build"`
    
    This command tells npm to build the app and then use the `gh-pages` package to deploy it to GitHub Pages.
    
3.  Save your `package.json` file.
    
4.  Build your React app using the following command:
    
    bashCopy code
    
    `npm run build`
    
    This will generate a production-ready build of your app in the "build" directory.
    
5.  Deploy your app to GitHub Pages using the following command:
    
    bashCopy code
    
    `npm run deploy`
    
    This command will push the "build" folder to a new branch called "gh-pages" in your GitHub repository, which will be used to host your app.
    
6.  After deploying, your app should be accessible at the URL specified in the `homepage` field in your `package.json`.
    

That's it! You've successfully installed, developed, and deployed your React app to GitHub Pages. You can now share your app with others on the web.

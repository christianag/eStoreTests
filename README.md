
# Automated Tests for e-Store Page

Automated UI tests for practice website - https://magento.softwaretestingboard.com/ 







## Directory Structure

```
eStoreTests
│
├── cypress
│    ├── e2e
│    │   └── features
│    │       ├── cart.feature  
│    │       ├── home.feature 
│    │       └── item.feature   
│    ├── fixtures 	
│    └── support  
│        ├── page_objects
│        │   ├── cart_page.js  
│        │   ├── home_page.js 
│        │   └── item_page.js 
│        ├── step_definitions
│        │   ├── cart_page.js  
│        │   ├── home_page.js 
│        │   └── item_page.js 
│        ├──commands.js
│     	 └── e2e.js                   
├── node_modules
├── cypress.config.js
├── package-lock.json
└── package.json
```




## Setting up the project

I opened my IDE of choice (VS Code)

Created a new project folder (eStoreTests)

Created a 'package.json' file using command:


```bash
  npm init -y
```

Installed Cypress using following command:

```bash
  npm install cypress
```

In order to run set up tests use command:

```bash
  npx cypress open
```

## Cucumber

I used the Cucumber preprocessor with Webpack in order to set-up my project. I used the install steps described in the bellow links:

- [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)

- [@cypress/webpack-preprocessor](https://github.com/cypress-io/cypress/tree/master/npm/webpack-preprocessor)


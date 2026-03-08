# AngularCaseStudy

This Case Study is for Zenduit as part of the interview process. The main goal of the case study was to test the front-end functionaility and angular familarity. 

** Note: In the document, it says the following two commands must be successful upon build. `ng build --prod` and `ng lint`. I downloadeed the latest version of Angular so the newer version for that command `ng build --configuration production` is successful. 

## Website Deployed URL (Netlify)
https://zenduit-case-study.netlify.app/forms

## Development server

To start a local development server, run:

```bash
git clone https://github.com/Ansh757/zenduit-case-study.git
npm install 
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Architectural Design
I wanted to be bit modular with the design; so the componets are well segragated. There are components folder (for reusable components), there is a pages folder that contains that contains all the pages for the website. There is a seperate folder for models to define Report Models (for the purpose of this case study). Finally, a folder for Mock Data. 

## Functionalities
1. Implemented Search Functionality - using typescript logic to simply check each user action typed on the search bar and render the frontend based on the matches.
2. Implemented Sort Functionality - Defaults to Newest created, Name alphabetically and Oldest. The sort works a.time - b.time logic and renders the frontend based on the selected sort. 
3. Deleting Report Feature - simply delete the selected report after user confirms on the confirmation window.  


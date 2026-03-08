# AngularCaseStudy

This Case Study is for Zenduit as part of the interview process. The goal of this case study was to demonstrate front-end implementation skills and familiarity with Angular. It redirects to Form as the HomePage. The Routings are set, so you may simpliy go to the Reports page for the implmented features. 

**Note:** The original instructions reference `ng build --prod`. In newer Angular versions, the equivalent production build command is `ng build --configuration production`, which completes successfully in this project.

## Website Deployed URL (Netlify)
https://zenduit-case-study.netlify.app/

## Development server

To start a local development server, run:

```bash
git clone https://github.com/Ansh757/zenduit-case-study.git
cd zenduit-case-study
npm install 
npm start
```

Additional Commands:
```bash
ng lint (Additional)
ng build --configuration production (Additional)
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Project Structure

src/
  app/
    components/
    pages/
    models/
    mock-data/

## Architectural Design
I wanted to be bit modular with the design; so the componets are well segragated. There are components folder (for reusable components), there is a pages folder that contains that contains all the pages for the website. There is a seperate folder for models to define Report Models (for the purpose of this case study). Finally, a folder for Mock Data. 

## Functionalities
1. **Search** — Filters the report list in real time based on user input.
2. **Sorting** — Supports sorting by newest created, oldest created, and alphabetical name order.
3. **Delete** — Allows the user to remove a selected report after confirmation in a modal/dialog.

## Assumptions 

- Data is mocked for the purpose of the exercise.
- Delete functionality updates UI state only and does not persist to a backend.
- Focus was placed on component structure, usability, and clean Angular patterns.


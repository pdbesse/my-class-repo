## Instructions

* If you haven't already, generate a starter React app using Create React App. You can do this by running `npx create-react-app 00-practice-app`. We will run all of the activity code today inside of this boilerplate, as to avoid constantly reinstalling the same node modules.

## Before We Begin

Initializing a React application by using the `create-react-app` command-line utility can take some time. To save time throughout this module, we will create one React application and only replace the `/src` files for each subsequent activity as we work on them. Before you add comments to the code, you will practice the workflow for creating a React app and updating your practice app for subsequent activities.

To do this, follow these steps:

1. In the command line, navigate to `/00-starter`.

2. Run the command `npx create-react-app 00-practice-app`.

3. `create-react-app` now automatically uses the latest release of React, version 18. Due to several conflicting packages with React version 18, follow the steps below to ensure that all activities work as intended.

    * Delete the `package-lock.json` file and `node_modules` folder from the `client` directory.

    * Downgrade `react` to 17.0.2 inside of the `package.json` file.

    * Downgrade `react-dom` to 17.0.2 inside of the `package.json` file.

    * Downgrade `@testing-library/react` to ^11.1.0 inside of the `package.json` file.

    * Your `package.json` file should look like the following:

        ```js
        "dependencies": {
            "@testing-library/jest-dom": "^5.16.4",
            "@testing-library/react": "^11.1.0",
            "@testing-library/user-event": "^13.5.0",
            "react": "17.0.2",
            "react-dom": "17.0.2",
            "react-scripts": "5.0.1",
            "web-vitals": "^2.1.4"
        },
        ```

    * Run `npm install` to ensure that your project is now running React version 17.

4. After `create-react-app` has completed (which can take a few minutes), run the command `npm i bootstrap dotenv axios --save` to add dependencies that we will need in later activities.

5. Copy the `src/` folder from each activity and paste it into the root of `00-practice-app`.

6. Run `npm start` to ensure that the source files were transplanted successfully.
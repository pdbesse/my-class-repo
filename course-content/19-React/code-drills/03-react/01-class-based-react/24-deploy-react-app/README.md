# Deploying your first React App

## Instructions:
1. Create a GitHub repository
2. Clone that repository to your desktop
3. Copy the contents of this folder into your local copy of the GitHub repository
4. In Terminal/Git Bash, navigate to that directory
5. Run: `npm install gh-pages --save-dev`
6. Open the `package.json` file in your editor
7. Change the `homepage` section to your deployed link on GitHub Pages. It should look like: `https://<GithubUsername>.github.io/<RepositoryName>`

    **Example:**
    ```
    "homepage": "https://seiretsym.github.io/derpityderp/"
    ```

8. Next, we're going to add 2 lines to the `scripts` section:

```
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
```

9. Now, back on your Terminal / Git Bash, run this command: `npm run deploy`

10. Once that's done, let's navigate back to your GitHub repository on your browser.

11. If you refresh, you'll notice that you have a new branch named `gh-pages`

12. Let's navigate into your settings and make sure that your repository is deployed to GitHub Pages with the source being `gh-pages`

13. If it isn't, change it so that it is deployed with the source being `gh-pages`
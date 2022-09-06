# **04-PublishPackage**

We're ready to publish our package! Our final step is to write... A `README.md` and update our **`package.json.`** After completing the following, you can look at the `/Solved` folder for reference.

1. In your `/google` directory, create a `README.md` file.

    **`touch README.md`**

2. Title your README with the name of your **npm** package name.
    
    `# @yourusername/google`

3. Add a small description section that describes what the package may do.

4. Add an **Installation** section and indicate the steps to download your package.

    ```markdown

    # Installation

    ` npm install @yourusername/google` 

    ```

5. Add a **Usage** or **Examples** section that demonstrates how the package should work.

    **Example:** 

    ```js
        var google = require('@yourusername/google');

        var avengersSearch = google.search(["captain america", "thor", "black widow", "captain america", "captain america", "iron man", "quicksilver", "spiderman", "starlord", "captain america", "ant man", "dr. strange", "thanos", "captain marvel", "gamora", "hulk", "nebula", "hawkeye", "vision", "scarlet witch"], "captain america"));

        // { positions: [ 0, 3, 4, 9 ], count: 4, time: '0.13' }

        console.log(`Your search took ${avengersSearch.time}s long to execute.`)
        // Your search took 0.13s long to execute.

    ```
## **Update `package.json` and add MIT License**

6. Go to your **`package.json.`** and make sure you have a *description*, that your *license* is listed as "MIT," and add few *keywords* (as strings) that others can use to search for your package.
    - Also, make sure your *main* is **google.js**.

7. In the root directory of your **/google** directory, make a **LICENSE** file and copy the following into it:


    ```
    MIT License

    Copyright (c) 2019 [YOUR NAME HERE]

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    ```

8. WOW!!! You're good to go. Let's run the following command to indicate that we've made a significant version change:

    `npm version major`

    - For more information, look into https://docs.npmjs.com/cli/version.

9. Drum roll! This time, we can cleanly run the following.

    `npm publish`

10. You should be able to go to https://www.npmjs.com and search for your freshly-minted package!


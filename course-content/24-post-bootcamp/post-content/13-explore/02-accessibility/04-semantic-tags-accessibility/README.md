# Semantic Tags

*Instructions at the bottom*

When we create HTML tags, we often want to be explicit about what content each tag will contain. 

While we are mostly going to use `<div>` tags to create our general elements (something you will see on many webpages online), whenever we have the opportunity, we should *describe the content that we're displaying* and utilize existing and accepted semantic elements!

## WHY?
1. Clarity for other computers
2. Much better for accessiblity

For example, we would rather use an actual footer tag

```HTML
<footer>
    This is my amazing footer.
</footer>
```

rather than a basic div, even though they achieve the same functionality.

```HTML
<div>
    This is my amazing footer.
</div>
```

## Landmarks

To provide a better and more understandable experience for screen readers, we should semantically organize the most important content in our pages in what are called "landmarks." Examples of landmark tags include `<header>`, `<main>`, and `<footer>`.

```HTML
Including at LEAST <header>, <main>, and <footer> landmarks in web pages is slowly becoming convention!
```

Adding roles to your content also adds value to screen-readers. At the very least, add a `role="main"` to your main content to highlight the part that contains the central topic of the document. Check the **Resources** section below for some more information on aria roles.

For example, given a code snippet like this

```HTML
<div>
    This is my project's logo.
</div>

<div>
    <h1>I am so cool</h1>
</div>

<div>
    <p>Just kidding</p>
</div>

<div>
    <p>Made with love in San Francisco.</p>
    <a href="#">See my Github</a>
</div>

```

We would want to wrap our content in landmark tags, based on the section:

```HTML
<header>
    This is my project's logo.
</header>

<main role="main">
    <div>
        <h1>I am so cool</h1>
    </div>

    <div>
        <p>Just kidding</p>
    </div>
</main>

<footer>
    <p>Made with love in San Francisco.</p>
    <a href="#">See my Github</a>
</footer>

```


## **DEMO:** Screen reading.

<hr>


# Instructions

Open `semantic.html` and adjust the tags so that they are more explicit and semantic. 

1. Review the areas that are labeled as `landmarks` and wrap the content in a semantic "landmark" tag.

2. Pay close attention to the one element that hints that it's a `nav` element (it should have many classes that hint to this)! Change that `div` to be a `nav` element.

3. Also be on the lookout for elements that hint that they are buttons! Change those `divs` to `button` elements.
    - Note: `<button>` tags in HTML are more than just semantic - they provide clickability and minor styling, and sometimes form submission. 

#### BONUS!

1. Add a link (`<a href="">`) at the beginning of the body that only shows up if the user is screen-reading (HINT: there's a fairly easy way to do this with Bootstrap). 
    - You might need to look up some documentation on Google or YouTube on how to do this! 

### Definitions 

#### Semantic Markup 
- HTML that introduces meaning to the page


### More Resources

https://www.w3schools.com/html/html5_semantic_elements.asp
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles


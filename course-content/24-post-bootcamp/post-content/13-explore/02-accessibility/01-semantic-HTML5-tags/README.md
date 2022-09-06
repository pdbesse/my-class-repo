# Search Engine Optimization (SEO)

__*What is SEO and why is it important?*__

"SEO stands for Search Engine Optimization, which is the practice of increasing the quantity and quality of traffic to your website through organic search engine results." - Mozilla

In other words, SEO is the process of *anticipating* what your users will be searching for on Google and *tailoring* your site to best match these searches. In this way, you can ensure your site shows up higher in search results on Google, thus increasing the overall traffic to your site.

So what strategies can you use to optimize your site's content to match with user queries on Google?

1. [*Activity:* Semantic HTML](#Activity:-Semantic-HTML)
2. [*Activity:* Metadata](#Activity:-Metadata)
3. [*Further Reading:* Google Indexing](#Further-Reading:-Google-Indexing)

<hr>

## *Activity:* Semantic HTML

"[An important feature] of HTML5 is its semantics. Semantic HTML refers to syntax that makes the HTML more comprehensible by better defining the different sections and layout of web pages. It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content. For example, instead of using div id="header" you can use a header tag." - Muroslav Gajic, PluralSight

Take this HTML for example:

```HTML
<html>
   <head>
      <title>Example Semantic Tags</title>
   </head>
   <body>
      <div id="header">
         Here goes logo, navigation, etc.
      </div>
      <div id="main-content">
         A place for website's main content
      </div>
      <div id="footer">
         Footer information, links, etc.
      </div>
   </body>
</html>
```

The above HTML does not use any semantic tags. Instead, it uses each "div" tag's "id" attribute to describe the contents of the section. This could be optimized by instead using the appropriate semantic HTML5 tags, as shown below:

```HTML
<html>
   <head>
      <title>Example Semantic Tags</title>
   </head>
   <body>
      <header>
         Here goes logo, navigation, etc.
      </header>
      <main>
         A place for website's main content
      </main>
      <footer>
         Footer information, links, etc.
      </footer>
   </body>
</html>
```

Time for you to try it out! Open the "semantic.html" file in the directory "/01-semantic-HTML5-tags/unsolved". Directions are included in an HTML comment. When you are done, check you work against the solution in the accompanying "/solved" directory, and then move on to the Metadata section below.

<hr>




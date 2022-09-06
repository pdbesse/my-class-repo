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

## Activity: Metadata

Metadata is information included in the "head" of your HTML that will be read by search engines. Optimizing your metadata can make your website appear more frequently in search results on Google. Below is one example of what metadata may look like:

```HTML
<html>
   <head>

      <!-- Metadata -->
      <!----------------------------->
      <title>Example Title!</title>
      <meta name="description" content="This is a meta description sample.">
      <meta name="robots" content="index, follow">
      <!----------------------------->

   </head>

   <body>
   </body>

</html>
```

So what do each of these tags do? Let's break them down:

1. Title Tag

```HTML
<title>Example Title!</title>
```

The title tag is - surprise! - the title of a web page. This title appears in the tabs of a web browser and in lists of search results on Google. The latter is why the title tag is important for SEO. 

You should make sure your site title is something you believe a user would click if it appeared in their search results. Of course, users are not totally predictable, so it's up to you as the developer to make your best judgement for what title will icrease incoming traffic.


2. Meta Description Tag

```HTML
<meta name="description" content="This is a meta description sample.">
```

The meta description tag should summarize the contents of your site in 160 characters (not 160 words!) or less. Just like the title, this description will appear in lists of search results on Google, so this is another thing you should write with the user in mind. Use this description to convince a user to visit your site instead of the 10 other sites listed alongside it!


3. Meta Robots Tag

```HTML
<meta name="robots" content="index, follow">
```

The "content" attribute of the robots tag can contain 4 different values:

* *follow* – the search engine crawler will follow all the links in that web page
* *index* – the search engine crawler will index the whole web page
* *nofollow* – The search engine crawler will NOT follow the page and any links in that web page
* *noindex* – The search engine crawler will NOT index that web page

This means the example above will instruct Google's site crawler to follow all the links in your site and index the whole web page. If your site is indexed by Google's site crawler, then it will be more likely to appear in search results.

Time for you to practice writing your own metadata. Open the "semantic.html" file in the directory "/01-semantic-HTML5-tags/unsolved". Directions are included in an HTML comment. When you are done, check you work against the solution in the accompanying "/solved" directory

What exactly are 'site crawlers' and 'indexing'? Check out the further reading below for some insight into these concepts.

<hr>

## Further Reading: Google Indexing

For more information explaining how Google 'crawls' the web and indexes sites for it's search engine, check out the following articles:

* [How Google's Site Crawlers Index Your Site](https://www.google.com/search/howsearchworks/crawling-indexing/)
* [How Google Search Works](https://support.google.com/webmasters/answer/70897?hl=en)


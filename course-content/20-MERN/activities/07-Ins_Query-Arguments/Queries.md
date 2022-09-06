
The following query returns all classes and their name

```graphql
query classes{
  classes {
  	_id
    name
  }
}
```


The following query returns a SPECIFIC class and the name by ID
🔑 To create a query, we start with the class endpoint and then specify the id of the specific Class object we want queried. (Note: the query will not yet return data):
In the next activity, you will be building that resolver to make it work.

```graphql
query classInline {
  class(id: "6305ae7128c804f7c15b0526") {
    name
  }
}
```

🔑 To make our queries more durable, we can also add a variable. Variables are identified by a dollar sign $ and allow us to reuse the same query over and over:

```graphql
 query classVariable($id: ID!) {
  class(id: $id) {
    name
  }
}
```

`^` In our completed apps, the value for the variable is typically provided by the client. However, we can test the query using the GraphQL playground.

We enter the variable name and pass a value -- in JSON -- in the Query Variables pane, to test the query. We use just the variable name, not the $ identifier:

```graphql
{"id": "6305ae7128c804f7c15b0526"}
```

```graphql
{"id" : "Add_Copied_ID_Here"}
```

☝️ Why would we add an argument to our query?

🙋 An argument allows us to write more specific queries. When we add an argument to our query, the argument is then passed to our resolver function. The resolver can then use that information to make a more targeted search.
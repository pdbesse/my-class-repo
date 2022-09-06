The following query returns all classes and their name

```graphql
query classes{
  classes {
    name
  }
}
```

The following will return all classes and their name and building


```graphql
query classes{
  classes {
    name
    building
  }
}
```

//get back all classes and their name and building and creditHours
```graphql
query classes{
  classes {
    name
    building
    creditHours
  }
}
```
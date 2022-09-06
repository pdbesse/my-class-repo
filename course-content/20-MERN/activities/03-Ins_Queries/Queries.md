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

//=================

🔑 To access the professor data in the same query, we start by adding professor to the list of fields. Then, to display data from the Professor object, we use a sub-query to list the names of the fields from the Professor object. 

The following will return all classes, their name and the associated Professor Name

```graphql
query classes {
 classes {
   name
   professor {
    name
   }
 }
}
```

The following will return all schools, their name, location, and studentCount 

```graphql
query professors {
  schools {
    name
    location
    studentCount
  }
}
```

The following will return all schools, their name, location, and studentCount 

```graphql
query professors {
  schools {
    name
    location
    studentCount
  }
}
```

The following will return all schools, their name, location, and studentCount and the assoicated classes for the associated school (name and building)

```graphql
query professors {
  schools {
    name
    location
    studentCount
    classes {
      name
      building
    }
  }
}
```

The following will return all schools, their name, location, and studentCount and the assoicated classes for the associated school (name and building) as well as the associated Professor for each class (name and studetScore)

```graphql
query professors {
  schools {
    name
    location
    studentCount
    classes {
      name
      building
      professor {
        name
        studentScore
      }
    }
  }
}
```
# Sorting in MongoDB

* The format of a sort follows `db.COLLECTION_NAME.find().sort({FIELD:1})`

* A value of `1` is for ascending order.

* A value of `-1` is for descending order.

* NOTE: Remember to add `.pretty()` afterwards so the results are readable!

* In the mongo shell, using the animals collection that you created in the last exercise:

* ***Sort by id:**

* The id contains a timestamp, so sorting by id will sort by when they were entered to the database.

```sql
db.animals.find().sort({ _id:1 });
db.animals.find().sort({ _id:-1 });
```

* **Sort by an integer - numLegs:**

```sql
db.animals.find().sort({ numLegs:1 });
db.animals.find().sort({ numLegs:-1 });
```

* **Sort by a string - class:**

```sql
db.animals.find().sort({ class:1 });
db.animals.find().sort({ class:-1 });
```

# INSERTING ANIMALS 

* An example of animals you can insert into the zoo db:

```
use zoo
db.animals.insert({"name":"Panda", "numLegs":4, "class":"mammal", "weight": 254, "whatIWouldReallyCallIt":"Captain Fuzzy Face"})

db.animals.insert({"name":"Dog", "numLegs":4, "class":"mammal", "weight": 60, "whatIWouldReallyCallIt":"Captain Fuzzy Face II"})

db.animals.insert({"name":"Lion", "numLegs":4, "class":"mammal", "weight": 300, "whatIWouldReallyCallIt":"Grumbles"})

db.animals.insert({"name":"Zebra", "numLegs":4, "class":"mammal", "weight": 500, "whatIWouldReallyCallIt":"Stripes"})

db.animals.insert({"name":"Chameleon", "numLegs":4, "class":"Reptile", "weight": 5, "whatIWouldReallyCallIt":"Scales"})
```
# Types

## Comments
```python
"""
This
is
a
multi-line
comment!
"""

# Single Line Comment!
```

## Console Output/Input
```ruby
puts("Hello World!")
print("Hello World!\n")
```
is equivalent to
```javascript
console.log("Hello World!")
```

```ruby
x = gets() # gets a string from the console and places it in x
```

## Statements
Ruby statements aren't terminated with semi-colons! ";"

Ruby function argument lists don't need to be surrounded with parenthesis but can be
  so don't be surprised if you see something that doesn't make sense as a variable but makes
  sense as a function.

Ruby functions will return 'nil' if they don't explicitly return an actual value just as
javascript functions will return undefined.

## String Literals
```ruby
# Ruby double quoted strings and JavaScript template literals/strings
puts "#{2*3} #{3*3}" # "6 9"
=> nil # puts returns nil when it prints out the string
```
is equivalent to
```javascript
console.log(`${2*3} ${3*3}`)
```

## Types or Classes in Ruby?
The philosophy of Ruby indicates that there are "no types" and that there are only "classes".
All things in Ruby are objects (ie. instantiated classes).

## Examples
```ruby
# Creates a variable x with a string "Frankfurter"
x = "Fight Club!"
puts(x.length) # prints the length of the string
puts x.length
puts(x.size) # prints the length of the string
puts x.size # also prints the length of the string
# JS: console.log(typeof x) === 'string'
puts(x.class()) # "String"

# Assigns a variable x with an integer 80
x = 80
# JS: console.log(typeof x) === 'number'
puts(x.class()) # "Integer"

# Assigns a variable x with a floating point value 1.25
x = 1.25
# JS: console.log(typeof x) === 'number'
puts(x.class()) # "Float"

# Assigns a variable x with a boolean value True
x = true # JS: x = true
y = true # JS: y = true
# JS: console.log(typeof x) === 'boolean'
# JS: console.log(typeof y) === 'boolean'
puts(x.class()) # "TrueClass"
puts(x.class()) # "FalseClass"

# Assigns a variable x with an array [ "A", "B", "C" ]
x = [ "A", "B", "C" ]
# JS: console.log(typeof x) === 'object'
puts(x.class()) # "Array"

# Assigns a variable x with a hash JS: { "A": 1, "B": 2, "C": 3 }
# Ruby uses the => as the separator for keys and values in a hash
x = { "A" => 1, "B"=> 2, "C" => 3 }
# JS: console.log(typeof x) === 'object'
puts(x.class()) # "Hash"

# Constructors

x = String("Dark City")
x = Integer(80)
x = Float(1.25) 
x = Array(["A", "B", "C"])
x = Hash({ "A" => 1, "B" => 2, "C" => 3})
```

## Casting Values

Ruby does not automatically "cast"/"convert" a value of one
type to another.  There are only explicit casts/conversions.

JS Example:
```javascript
x = "This string is less than "+1000+"characters!"
```
JS automatically casts/converts 1000 to a string of "1000" so it can be
appended.

Ruby will not do this!
```ruby
x = "This string is less than "+1000+"characters!"
#...
#TypeError (no implicit conversion of Integer into String)
```

However, the following does work:
```ruby
x = "This string is less than "+String(1000)+"characters!"
```

```ruby
x = String(1000) # "1000"
# OR
x = 1000.to_s() # to string member function of Integer class

x = Integer("80") # integer 80 > Instead of parseInt!
# OR
x = "80".to_i() # to integer member function of String class

x = Float("1.25") # float 1.25 > Instead of parseFloat
# OR
x = "1.25".to_f() # to float member function of String class

x = Array({ "A" => 1, "B" => 2, "C" => 3}) # [["A",1],["B",2],["C",3]]
# OR
x = { "A" => 1, "B" => 2, "C" => 3}.to_a() # "to array" member function of Hash class

# x = Hash([["A",1],["B",2],["C",3]]) # Doesn't allow you to convert an array to a hash but..
[["A",1],["B",2],["C",3]].to_h() # "to hash" member function of the Array class
```

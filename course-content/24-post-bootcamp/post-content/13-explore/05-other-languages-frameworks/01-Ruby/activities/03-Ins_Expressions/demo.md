# Expressions and Operators

Most operators are just like those in Javascript

## Arithmetic Operators You Know in Ruby
*  \+	  Addition	        x + y	
*  \-	  Subtraction	    x - y	
*  \*	  Multiplication	x * y	
*  /	  Division	        x / y	
*  %	  Modulus           x % y
*  +=     Add & Assign      x = x + y
*  -=     Sub & Assign      x = x - y
*  *=     Mul & Assign      x = x * y
*  /=     Div & Assign      x = x / y
*  []     Indexing          [x]
*  ?:     Ternary Operator  x = conditional ? THEN_A : ELSE_B

## [] Operator
```ruby
[x]     # x as index
[x..y]  # x as index of first element up to and including index y
[x...y] # x as index of first element up to and NOT including index y
[x,y]   # x as index of first element with a count of y
[0,1,2,3,4,5,6,7,8,9][4]=      4
[0,1,2,3,4,5,6,7,8,9][0..2]=   [0,1,2]
[0,1,2,3,4,5,6,7,8,9][0...2]=  [0,1]
[0,1,2,3,4,5,6,7,8,9][0,4]=    [0,1,2,3]
# Negative values are permitted.  They refer to the end of the array where -1 is the last element
# and -2 is the second to the last element.
[0,1,2,3,4,5,6,7,8,9][-4]=     6
[0,1,2,3,4,5,6,7,8,9][-3..-1]= [7,8,9]
[0,1,2,3,4,5,6,7,8,9][-3...-1]=[7,8]
[0,1,2,3,4,5,6,7,8,9][-4,4]=   [6,7,8,9]
```

# => Operator
```ruby
# The => operator from JS also takes a different form.

# x = -> (arguments) { expression } 
# x.call(arguments)
f = -> (x) { x * 2 } # JS f = (x) => x * 2
=> #<Proc:0x000000000527cf40@(irb):2 (lambda)>
f.call(2) # JS f(2)
=> 4
```

## A Few New Arithmetic Operators in Ruby Not In JS
```ruby
# Exponentiation
x = 10 ** 2 # 100!
# x ** y is equivalent to JavaScript's Math.pow(x,y)
x = 10
x **= 2 # 100!
# x **= 2 is equivalent to x = Math.pow(x,y)
```

## A Few JS Arithmetic Operators Not In Ruby
```javascript
++x,x++ //   Prefix and postfix increment
--x,x-- //   Prefix and postfix decrement
```

## + Operator
```ruby
# The + arithmetic operator doubles as the append/push operator
# for arrays.

[ 0, 1, 2 ] + [ 3, 4, 5 ] # [ 0, 1, 2, 3, 4, 5 ]
[ 0 ] + [ 1 ] # [ 0, 1 ]
```

## Comparison
### Comparison Operators You Know in Ruby
*  \>	    Greater than	            x > y	
*  <	    Less than	                x < y	
*  \>=	Greater than or equal to	x >= y	
*  <=	Less than or equal to	    x <= y
*  ==    Equal to

### == and != Operators
```ruby
# However, the following are slightly different
# There is no === or !== operator in Ruby but the
# == and != Ruby operators work similarly!

# Examples of == and != behaving just like === and !==
2 == 2
# => true
2 == "2"
# => false
2 != 2 
# => false
2 != "2"
# => true

# BUT...
x = { "a" => 1 } # Hash, the rough Ruby equivalent of an object.
y = { "a" => 1 } 
# In JS with similarly created objects x === y is false
x == y
# => true

x = y = { "a" => 1 }
# In JavaScript with similarly created objects: x === y is true
x == y
=> true

# Ruby has a class method called equals?
# equals() checks to see if the two variables point to the same
# object.
x = { "a" => 1 }
y = { "a" => 1 }
x.equal?(y) # false
# => false

x = { "a" => 1 }
y = x
# OR
x = y = { "a" : 1 }

x.equal?(y) # true
# => true
```

## in Operator
```ruby
# Membership operator:  Ruby doesn't have one.
# You're used to using JavaScript's:
# if ("key" in { "key": "value" }) {
#   console.log("key in object!");
# } 
# 
# To see if a key exists in a Hash
# you have to use the key?() member function.
#
{ "key" => "value" }.key?("key")
# => true
```
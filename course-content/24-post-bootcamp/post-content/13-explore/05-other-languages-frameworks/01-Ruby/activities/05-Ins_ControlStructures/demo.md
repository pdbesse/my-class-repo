# Control Structures

## if-elsif-else
```ruby
# if CONDITIONAL
# STATEMENT
# STATEMENT
# ...
# elsif CONDITIONAL
# STATEMENT
# STATEMENT
# ...
# else
# STATEMENT
# STATEMENT
# ...
# end

if x == true
 puts("x is True")
elsif x == false
 puts("x is False")
else
 puts("x is neither True nor False")
end
```

## Functions
```ruby
# def FUNCTION_NAME
# STATEMENT
# STATEMENT
# ...
# return nil
# end

def isAlwaysTrue()
    return true
end

def compareIt(a,b)
    if a == b
        print("#{a} == #{b}\n")
        return 0
    elsif a < b
        print("#{a} < #{b}\n")
        return -1
    else
        print("#{a} > #{b}\n")
        return 1
    end
end
```

## For Loops!
```ruby
# for VAR in VALUES
# STATEMENT
# STATEMENT
# ...
# end

# Example
def printCollection(collection)
    for x in collection
        puts("#{x}\n")
    end
end

printCollection(0..2) # range
printCollection(0...3) # range
printCollection([0,1,2]) # Array
printCollection({0 => "a",1 => "b",2 =>"c"}.keys()) # Hash

# All of the above print out
# 0
# 1
# 2

def printHash(hash)
    lst = []
    for key,value in hash
        tmpString = "#{key}=>#{value}"
        puts("#{tmpString}\n")
        lst += [tmpString] # appends the s to the list r
    end
    return lst
end

printHash({0 => "a",1 => "b",2 => "c"}) # Hash

# Prints out
# 0=>a
# 1=>b
# 2=>c
# Returns
# ["0=>a", "1=>b", "2=>c"]

# For iterables where you can pull out multiple values
# per element...
for x,y in [[0,1],[2,3],[4,5]]
    puts("#{x} #{y}")
end
# Prints out
# 0 1
# 2 3
# 4 5
```

## While Loops!
```ruby
# while CONDITION [do] # do is optional
# STATEMENT
# STATEMENT
# ...
# end

x = "N"
while true
    # puts adds a newline at the end of the string
    puts("Knock! Knock!! Little pig little pig let me in!")
    # print does not add a newline at the end of the string
    print("Does the pig let the wolf in? (Y/N) ")
    # chomp() removes the whitespace from what gets() retrieves
    x = gets().chomp() 
    if x == "Y" || x == "y"
        puts("The wolf eats the pig!")
        break
    end
end
```

# 1. Using any of these forms:
# [x..y], [x...y] or [x,y]
# Select ["Dear","Aunt"] from the array ["My","Dear","Aunt","Sally"]
["My","Dear","Aunt","Sally"][1..2]
["My","Dear","Aunt","Sally"][1...3]
["My","Dear","Aunt","Sally"][1,2]

# 2. Using a negative index, select the "Dog" from the array [ "Dog", "Cat", "Cow", "Goat"]
[ "Dog", "Cat", "Cow", "Goat"][-4]

# 3. What is the equivalent Ruby expression of JS's Math.pow(2,2)?
2 ** 2

# 4. What is the result of the expression?
# []+[]
[]

# 5. How does Ruby determine if two variables point to the same object?
x.equal?(y)

# 6. How does Ruby determine if a key is in a Hash?
{ "key" => "value" }.key?("key") # true

# 1. Use the Ruby String constructor to convert an Integer to a String.
String(1000)

# 2. Use the appropriate Integer instance member function to convert an Integer to a String.
1000.to_s()

# 3. Use the Ruby Integer constructor to convert a String to an Integer.
Integer("1000")

# 4. Use the appropriate String instance member function to convert a String to an Integer.
"1000".to_i()

# 5. Use the Ruby Float constructor to convert a String to a Float.
Float("1000.1")

# 6. Use the appropriate Float instance member function to convert a String to a Float.
"1000.1".to_f()

# 7. Use the Ruby Integer constructor to convert a Float to an Integer.
Integer(1000.5)

# 8. Use the appropriate Float instance member function to convert Float to an Integer.
(1000.5).to_f()

# 9. Use the Array constructor to convert a Hash into an Array.
Array({ "A" => 1, "B" => 2, "C" => 3}) # [["A",1],["B",2],["C",3]]

# 10. Use the appropriate Hash member function to convert a hash into an Array.
x = { "A" => 1, "B" => 2, "C" => 3}.to_a() # "to array" member function of Hash class

# 11. Use the appropriate Array member function to convert an array into a Hash.
[["A",1],["B",2],["C",3]].to_h() # "to hash" member function of the Array class

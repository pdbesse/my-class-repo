#1. Create a function that takes an array of numbers and generates an array which
#   is a running sum using Ruby.
#   [1,2,3,4] => [1,3,6,10]

def func1(nums)
    ret = [nums[0]]
    for index in 1...nums.length
        ret += [ret[index-1]+nums[index]]
    end
    return ret 
end

#2. Create a function that takes an array "array" and generates a count of good pairs
#   where a good pair is (x,y) and array[x] == array[y] and x < y.

def func2(nums)
    num = 0;
    for i in 0...nums.length
        for j in (i+1)...nums.length
            if nums[i] == nums[j]
                num = num + 1
            end
        end
    end
    return num     
end
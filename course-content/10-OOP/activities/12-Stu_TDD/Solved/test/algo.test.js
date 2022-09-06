const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // 'reverse' should reverse "Hello World!"
    it("should reverse a given string", () => {
      // In order to test the function, we need to create a working example. First we define 'str'. 
      const str = "Hello World!";
      // Next we define 'reversed' as the value of 'str' reversed.
      const reversed = "!dlroW olleH";
      // We pass 'str' into '.reverse()' and set that value equal to result
      const result = new Algo().reverse(str);
      // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
      expect(result).toEqual(reversed);
    });

    it("should reverse a given string", () => {
      // In order to test the function, we need to create a working example. First we define 'str'. 
      const str = "cat";
      // Next we define 'reversed' as the value of 'str' reversed.
      const reversed = "tac";
      // We pass 'str' into '.reverse()' and set that value equal to result
      const result = new Algo().reverse(str);
      // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
      expect(result).toEqual("tac");
    });

    it("should return empty string when given an empty string", () => {
      // In order to test the function, we need to create a working example. First we define 'str'. 
      const str = "";
      // Next we define 'reversed' as the value of 'str' reversed.
      const reversed = "";
      // We pass 'str' into '.reverse()' and set that value equal to result
      const result = new Algo().reverse(str);
      // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
      expect(result).toEqual(reversed);
      // expect(result).toBe(reversed);
    });
  });

  describe("isPalindrome", () => {
    // First test for '.isPalindrome()'
    it("should return true if a string is a palindrome", () => {
      // Arrange
      const str = "racecar";

      // Act
      const result = new Algo().isPalindrome(str);
      // Assert
      expect(result).toEqual(true);
    });
    // Second test for '.isPalindrome()'
    it("should return false if a string is not a palindrome", () => {
      // Arrange
      const str = "neon";

      // Act
      const result = new Algo().isPalindrome(str);
      // Assert
      expect(result).toEqual(false);
    });

    // it("should return true if a string is a palindrome even with different Case", () => {
    //   // Arrange
    //   const str = "raceCar";

    //   // Act
    //   const result = new Algo().isPalindrome(str);
    //   // Assert
    //   expect(result).toEqual(true);
    // });
  });

  describe("capitalize", () => {
    it("should take a string and return a new string with the first letter of each word capitalized", () => {
      // Arrange
      const str = "capitalize every first word of the string.";
      const capitalized = "Capitalize Every First Word Of The String.";

      // Act
      const result = new Algo().capitalize(str);
      // Assert
      expect(result).toEqual(capitalized);
    });
  });
});

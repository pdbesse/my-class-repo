const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("should reverse a given string", () => {
      // Arrange
      const str = "Hello World!";
      const reversed = "!dlroW olleH";

      // Arrange
      const result = new Algo().reverse(str);


      // Assert
      expect(result).toEqual(reversed);

    });
  });

  describe("isPalindrome", () => {
    it("should return true if a string is a palindrome", () => {
      // Arrange
      const str = "racecar";

      // Arrange
      const result = new Algo().isPalindrome(str);

      // Assert
      expect(result).toEqual(true);
    });

    it("should return false if a string is not a palindrome", () => {
      // Arrange
      const str = "neon";

      // Arrange
      const result = new Algo().isPalindrome(str);

      // Assert
      expect(result).toEqual(false);
    });
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

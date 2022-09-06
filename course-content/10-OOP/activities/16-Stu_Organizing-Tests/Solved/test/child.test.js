const Child = require("../child");

describe("Child", () => {
  // Test for all use cases when initializing a new Child object
  describe("Initialization", () => {
    it("should create an object with a name and age if provided valid arguments", () => {
      // Act
      const child = new Child("Sarah", 3);

      // Verify that the new object has the correct properties
      expect(child.name).toEqual("Sarah");
      expect(child.age).toEqual(3);
    });

    it("should throw an error if provided no arguments", () => {
      // Wrap the object initialization in a callback function that Jest will run
      // Act
      const cb = () => new Child();

      // Verify that an error was thrown in the callback function
      // Assert
      expect(cb).toThrow();
    });

    it("should throw an error if not provided an age", () => {
      // Act
      const cb = () => new Child("Sarah");

      // Define the error message that is expected to be thrown
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      // Verify that the correct error was thrown when the callback is executed
      // Assert
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      // Act
      const cb = () => new Child(3, 2);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      // Assert
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is not a number", () => {
      // Act
      const cb = () => new Child("Sarah", "2");
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      // Assert
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is less than 0", () => {
      // Act
      const cb = () => new Child("Sarah", -1);
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      // Assert
      expect(cb).toThrowError(err);
    });
  });
});

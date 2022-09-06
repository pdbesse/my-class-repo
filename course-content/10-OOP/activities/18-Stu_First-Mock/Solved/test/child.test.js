const Child = require("../child");

describe("Child", () => {
  describe("Initialization", () => {
    it("should create an object with a name and age if provided valid arguments", () => {
      // Act
      const child = new Child("Sarah", 3);

      // Assert
      expect(child.name).toEqual("Sarah");
      expect(child.age).toEqual(3);
    });

    it("should throw an error if provided no arguments", () => {
      // Act
      const cb = () => new Child();

      // Assert
      expect(cb).toThrow();
    });

    it("should throw an error if not provided an age", () => {
      // Act
      const cb = () => new Child("Sarah");
      const err = new Error("Expected parameter 'age' to be a non-negative number");

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

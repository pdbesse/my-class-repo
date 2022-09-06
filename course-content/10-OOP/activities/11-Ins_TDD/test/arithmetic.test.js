const Arithmetic = require("../arithmetic");

describe("Arithmetic", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
      // Act
      const obj = new Arithmetic();

      // Assert
      expect("number" in obj).toEqual(true);
    });

    it("should set 'number' when created", () => {
      // Arrange
      const num = 108;
      // Act
      const obj = new Arithmetic(num);
      // Assert
      expect(obj.number).toEqual(num);
    });

    it("should default 'number' to 0", () => {
      // Act
      const obj = new Arithmetic();
      // Assert
      expect(obj.number).toEqual(0);
    });
  });

  describe("plus", () => {
    it("should return a new 'Arithmetic' object", () => {
      // Act
      const obj = new Arithmetic(3).plus(3);
      // Assert
      expect(obj instanceof Arithmetic).toEqual(true);
    });

    it("should return a new 'Arithmetic' object that has an updated 'number' value", () => {
      // Arrange
      const num = 8;
      const added = 7;
      const sum = num + added;

      // Act
      const { number } = new Arithmetic(num).plus(added);

      // Assert
      expect(number).toEqual(sum);
    });
  });

  describe("minus", () => {
    it("should return a new 'Arithmetic' object", () => {
      // Act
      const obj = new Arithmetic(9).minus(4);
      // Assert
      expect(obj instanceof Arithmetic).toEqual(true);
    });

    it("should return a new 'Arithmetic' object that has an updated 'number' value", () => {
      // Arrange
      const num = 10;
      const subtracted = 17;
      const difference = num - subtracted;
      // Act
      const { number } = new Arithmetic(num).minus(subtracted);

      // Assert
      expect(number).toEqual(difference);
    });
  });

  describe("value", () => {
    it("should return the 'Arithmetic' object's 'number' value", () => {
      // Arrange
      const num = 10;

      // Act
      const obj = new Arithmetic(num);

      const result = obj.value();

      // Assert
      expect(result).toEqual(num);
    });
  });
});

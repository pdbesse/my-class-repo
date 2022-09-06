const Logger = require("../logger");

const colors = {
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m"
};

describe("Logger", () => {
  describe("colors", () => {
    it("should print in black", () => {
      // Arrange
      const log = new Logger();
      const message = "Hello world!";
      // console.log()
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});//if we don't mockImplement it "does the work" console.log();

      // Act
      log.black(message);
      
      // Assert
      // https://jestjs.io/docs/expect#tohavebeencalledwitharg1-arg2-
      expect(mock).toBeCalledWith(colors.black, message);

      mock.mockRestore();
    });

    it("should print in red", () => {
      // Arrange
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      // Act
      log.red(message);

      // Assert
      expect(mock).toBeCalledWith(colors.red, message);

      mock.mockRestore();
    });

    it("should print in green", () => {
      // Arrange
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      // Act
      log.green(message);

      // Assert
      expect(mock).toBeCalledWith(colors.green, message);

      mock.mockRestore();
    });

    it("should print in yellow", () => {
      // Arrange
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

       // Act
      log.yellow(message);

      // Assert
      expect(mock).toBeCalledWith(colors.yellow, message);

      mock.mockRestore();
    });

    it("should print in blue", () => {
      // Arrange
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

       // Act
      log.blue(message);

      // Assert
      expect(mock).toBeCalledWith(colors.blue, message);

      mock.mockRestore();
    });

    it("should print in magenta", () => {
      // Arrange
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      // Act
      log.magenta(message);

      // Assert
      expect(mock).toBeCalledWith(colors.magenta, message);

      mock.mockRestore();
    });

    it("should print in cyan", () => {
      // Arrange
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      // Act
      log.cyan(message);

      // Assert
      expect(mock).toBeCalledWith(colors.cyan, message);

      mock.mockRestore();
    });

    it("should print in white", () => {
       // Arrange
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      // Act
      log.white(message);

      // Assert
      expect(mock).toBeCalledWith(colors.white, message);

      mock.mockRestore();
    });
  });
});

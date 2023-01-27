const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '123' when given 123", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "123"});
    expect(trivialKey).toBe("123");
  });
});

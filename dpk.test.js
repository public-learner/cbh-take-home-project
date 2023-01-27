const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '123' when given 123", () => {
    const simpleKey = deterministicPartitionKey({partitionKey: "123"});
    expect(simpleKey).toBe("123");
  });

  it("Returns the literal 128 characters when given over 256 over key", () => {
    let partitionKey = 'a'.repeat(300);
    const trivialKey = deterministicPartitionKey({partitionKey: partitionKey});
    expect(trivialKey).toHaveLength(128);
  });
});

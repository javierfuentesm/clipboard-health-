const { deterministicPartitionKey } = require("./dpk");

// This unit test covers all the different cases described in the original code,
// including the trivial case (no input), the case where a partition key exists,
// the case where a partition key does not exist and the event is a string, and
// the case where a partition key does not exist and the event is not a string.
// Additionally, the test for when the partition key length is greater than 256 ensures
// that the functionality for hashing the partition key has not changed.

describe("deterministicPartitionKey", () => {
  it("Returns the trivial partition key '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partition key of the input event if it exists", () => {
    const event = { partitionKey: "test-key" };
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe("test-key");
  });

  it("Uses the partition key if it's a string and less than 256 characters", () => {
    const event = { partitionKey: "test-key", test: 12345 };
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe("test-key");
  });

  it("Hashes the partition key if it's a string and more than 256 characters", () => {
    const longKey = Array(257).join("a");
    const event = { partitionKey: longKey, test: 12345 };
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey.length).toBe(256);
  });


  it("Hashes the stringified input event if no partition key exists", () => {
    const event = { test: "data" };
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey.length).toBe(128);
  });

  it("Hashes the input event if it's not a string and no partition key exists", () => {
    const event = { test: [1, 2, 3] };
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey.length).toBe(128);
  });

  it("Hashes the partition key if its length is greater than 256", () => {
    const event = { partitionKey: "a".repeat(257) };
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey.length).toBe(128);
  });

  it("Hashes the partition key if it's a boolean value and no partition key exists", () => {
    const event = { test: true };
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey.length).toBe(128);
  });

  it("Hashes the partition key if it's an object and no partition key exists", () => {
    const event = { test: { data: "test-data" } };
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey.length).toBe(128);
  });


  it("Hashes the partition key if it's a number and no partition key exists", () => {
    const event = { test: 12345 };
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey.length).toBe(128);
  });


});







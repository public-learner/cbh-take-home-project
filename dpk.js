const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate = TRIVIAL_PARTITION_KEY;

  if (typeof event == undefined)
    return candidate;
  
  if (typeof event != 'object')
    return candidate;
  
  if (event.hasOwnProperty('partitionKey') && event.partitionKey) {
    candidate = event.partitionKey;

    if (typeof event.partitionKey !== "string") {
      candidate = JSON.stringify(candidate);
    }
    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
      candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
    }
    console.log(candidate);
  } else {
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }
    
  return candidate;
};
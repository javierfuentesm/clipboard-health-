const crypto = require("crypto");


exports.deterministicPartitionKey = event => {
    const TRIVIAL_PARTITION_KEY = "0";
    const MAX_PARTITION_KEY_LENGTH = 256;

    if (!event) {
        return TRIVIAL_PARTITION_KEY;
    }

    const eventData = JSON.stringify(event) || TRIVIAL_PARTITION_KEY;
    const partitionKeyCandidate = event && event.partitionKey || crypto.createHash("sha3-512").update(eventData).digest("hex");
    return typeof partitionKeyCandidate === "string" && (partitionKeyCandidate.length > MAX_PARTITION_KEY_LENGTH ? crypto.createHash("sha3-512").update(partitionKeyCandidate).digest("hex") : partitionKeyCandidate) || TRIVIAL_PARTITION_KEY;
};



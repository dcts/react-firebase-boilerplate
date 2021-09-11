class FirebaseTimestamp {
  static toDate(firebaseTimestamp) {
    this.validate(firebaseTimestamp);
    return new Date(firebaseTimestamp._seconds * 1000 + firebaseTimestamp._nanoseconds / 1000000);
  }

  static validate(firebaseTimestamp) {
    const keys = Object.keys(firebaseTimestamp);
    const includesSecs = keys.includes("_seconds");
    const includesNanosecs = keys.includes("_nanoseconds");
    if (!includesSecs) {
      throw new Error(`InvalidFirestoreTimestampObject: Requires key '_seconds'. Got: ${keys}`)
    }
    if (!includesNanosecs) {
      throw new Error(`InvalidFirestoreTimestampObject: Requires key '_nanoseconds'. Got: ${keys}`)
    }
    if (firebaseTimestamp.constructor.name !== "Timestamp") {
      throw new Error(`constructor.name should be 'Timestamp'. Got: ${firebaseTimestamp.constructor.name}`);
    }
    return true;
  }
}

module.exports = FirebaseTimestamp;

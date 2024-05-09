// Never,Unknown And Nullable Type

{
  // Nullable Type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("Nothing to search");
    }
  };
  searchName(null);

  // Unknown Type
  // use "typeof" in "Unknown Type"
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} m^-1`);
    } else if (typeof value === "string") {
      const [num, unit] = value?.split(" ");
      const convertedSpeed = (parseFloat(num) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} m^-1`);
    } else {
      console.log("Please give a right input.");
    }
  };

  getSpeedInMeterPerSecond("1000 km^-1");

  // Never Type
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("muskil se error hogiya");

  //
}

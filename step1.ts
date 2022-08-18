const fs = require("fs");

function cat(path: string) {
  fs.readFile(path, "utf8", (err: Error, data: string) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(typeof data);
    console.log(data);
  });
}

cat("one.txt");

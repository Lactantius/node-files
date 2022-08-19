// const fs = require("fs");
import { readFile } from "fs";

function cat(path: string) {
  readFile(
    path,
    "utf8",
    (err: NodeJS.ErrnoException | null, data: string | Buffer) => {
      /* The type matching was surprisingly hard */
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log(data);
    }
  );
}

function webCat(path: string) {
  fetch(path).then(async (res) => console.log(await res.text()));
}

function main(arg: string): void {
  if (arg.slice(0, 4) === "http") {
    webCat(arg)
  } else {
    cat(arg)
  }
}

main(process.argv[2]);

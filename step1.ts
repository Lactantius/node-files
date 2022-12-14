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

cat(process.argv[2]);

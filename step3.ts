import { promisify } from "util";
import { readFile } from "fs";

const promiseFile = promisify(readFile);

function cat(path: string) {
  return promiseFile(path, "utf8")
    .then((data) => data)
    .catch((err) => err);
}

function webCat(path: string): Promise<string | Error> {
  return fetch(path)
    .then((res) => res.text())
    .then((text) => text)
    .catch((err) => err);
}

async function main(arg: string) {
  if (arg.slice(0, 4) === "http") {
    console.log(await webCat(arg));
  } else {
    console.log(await cat(arg));
  }
}

main(process.argv[2]);

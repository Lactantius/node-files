import { promisify } from "util";
import { readFile, writeFile } from "fs";

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

async function main(args: string[]) {
  if (args[2] === "--out") {
    const data = await getData(args[4]);
    writeFile(args[3], data, (err) =>
      err ? console.log(err) : console.log("File saved successfully")
    );
  } else {
    console.log(await getData(args[2]));
  }
}

async function getData(resource: string) {
  if (resource.slice(0, 4) === "http") {
    return await webCat(resource);
  } else {
    return await cat(resource);
  }
}

main(process.argv);

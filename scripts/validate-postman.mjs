import { readFileSync } from "node:fs";

const files = [
  "postman/makepay.postman_collection.json",
  "postman/makepay.postman_environment.json",
];

for (const file of files) {
  const parsed = JSON.parse(readFileSync(file, "utf8"));
  if (!parsed.info && !parsed.values) {
    throw new Error(`${file} is not a recognized Postman collection or environment`);
  }
}

console.log(`Validated ${files.length} Postman artifact(s).`);

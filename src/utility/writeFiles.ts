import fs from "fs";
import {
  OUTPUT_DIR_readable,
  OUTPUT_DIR_minified
} from "../config/directoryControl";
/** Writes a javasript object/generic type to two json files, a minified version and a readable version
 * The files will have the following names: [filename].json and [filename].min.json
 * The files will be output to the directories defined in the config
 */
export const writeFiles = (obj: any, filename: string) => {
  const json = JSON.stringify(obj, null, 2);
  const json_min = JSON.stringify(obj);

  fs.writeFile(`${OUTPUT_DIR_readable}/${filename}.json`, json, "utf8", err => {
    if (err) {
      throw err;
    }
    console.log(
      `Finished writing json to ${OUTPUT_DIR_readable}/${filename}.json`
    );
  });
  fs.writeFile(
    `${OUTPUT_DIR_minified}/${filename}.json`,
    json_min,
    "utf8",
    err => {
      if (err) {
        throw err;
      }
      console.log(
        `Finished writing json to ${OUTPUT_DIR_readable}/${filename}.json`
      );
    }
  );
};

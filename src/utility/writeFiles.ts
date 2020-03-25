import fs from "fs";
import { Directories } from "../config/directoryControl";
/** Writes a javasript object/generic type to two json files, a minified version and a readable version
 * The files will have the following names: [filename].json and [filename].min.json
 * The files will be output to the directories defined in the config
 */
export const writeFiles = (obj: any, filename: string) => {
  const json = JSON.stringify(obj, null, 2);
  const json_min = JSON.stringify(obj);

  try {
    fs.writeFileSync(
      `${Directories.OUTPUT_DIR_readable}/${filename}.json`,
      json,
      "utf8"
    );
    console.log(
      `Wrote json to ${Directories.OUTPUT_DIR_readable}/${filename}.json`
    );
    fs.writeFileSync(
      `${Directories.OUTPUT_DIR_minified}/${filename}.json`,
      json_min,
      "utf8"
    );
    console.log(
      `Wrote json to ${Directories.OUTPUT_DIR_readable}/${filename}.json`
    );
  } catch (error) {
    throw error;
  }
};

import fs from "fs";
import {
  unmodifiedFiles_minified,
  unmodifiedFiles_readable
} from "../config/unmodifiedFiles";
import { Directories } from "../config/directoryControl";

// Takes care of transfering all input files that should not be modified before put into autput folder
export const transferFilesUntouched = () => {
  console.log("🌟 Tranfering all files that doesn't need modifying 🌟");

  for (const file of unmodifiedFiles_minified) {
    fs.copyFileSync(
      Directories.INPUT_DIR_RePoE + "/RePoE/data/" + file,
      Directories.OUTPUT_DIR_minified + "/" + file
    );
  }
  for (const file of unmodifiedFiles_readable) {
    fs.copyFileSync(
      Directories.INPUT_DIR_RePoE + "/RePoE/data/" + file,
      Directories.OUTPUT_DIR_readable + "/" + file
    );
  }
};

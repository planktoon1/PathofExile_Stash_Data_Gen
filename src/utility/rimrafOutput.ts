import rimraf from "rimraf";
import { Directories } from "../config/directoryControl";

export const rimrafOutput = () => {
  rimraf.sync(Directories.OUTPUT_DIR_minified + "/*");
  console.log(`Deleted all files in "${Directories.OUTPUT_DIR_minified}"`);
  rimraf.sync(Directories.OUTPUT_DIR_readable + "/*");
  console.log(`Deleted all files in "${Directories.OUTPUT_DIR_readable}"`);
};

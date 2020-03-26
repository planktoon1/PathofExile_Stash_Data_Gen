import { writeTierListToFile } from "./tierList/writeTierListToFile";
import { writeProcessedModListToFile } from "./modList/writeProcessedModListToFile";
import { rimrafOutput } from "./utility/rimrafOutput";
import { transferFilesUntouched } from "./utility/transferFilesUntouched";

export const generateAllFiles = () => {
  // Cleanup the output folder
  rimrafOutput();
  // Run all the functions that generate needed files..
  writeTierListToFile();
  writeProcessedModListToFile();
  transferFilesUntouched();
};

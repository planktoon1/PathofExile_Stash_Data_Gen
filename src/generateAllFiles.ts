import { writeTierListToFile } from "./tierList/writeTierListToFile";
import { writeProcessedModListToFile } from "./modList/writeProcessedModListToFile";
import { rimrafOutput } from "./utility/rimrafOutput";

export const generateAllFiles = () => {
  // Cleanup the output folder
  rimrafOutput();
  // Run all the functions that generate needed files..
  writeTierListToFile();
  writeProcessedModListToFile();
};

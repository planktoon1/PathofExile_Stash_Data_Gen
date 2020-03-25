import { writeFiles } from "../utility/writeFiles";
import { FileNames } from "../config/fileNames";
import { getProcessedModList } from "./generateProcessedModList";

export const writeProcessedModListToFile = () => {
  const PROCESSEDMODLIST = getProcessedModList();
  writeFiles(PROCESSEDMODLIST, FileNames.MODS_PROCESSED);
};

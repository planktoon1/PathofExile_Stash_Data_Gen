import { getItemClassTierListLookUp } from "./generateModTierList";
import { writeFiles } from "../utility/writeFiles";
import { FileNames } from "../config/fileNames";

export const writeTierListToFile = () => {
  // note: if assumption2 is not true the getTierGroupTierListLookUp should be used instead (also resulting in changes in tier lookup is done in main project)
  const TIERLISTLOOKUP = getItemClassTierListLookUp(); // getTierGroupTierListLookUp();
  writeFiles(TIERLISTLOOKUP, FileNames.MOD_TIER_LOOKUP);
};

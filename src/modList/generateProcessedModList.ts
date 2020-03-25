import { ModDict, ModOutputDict } from "../models/interfaces";
import { getModDescription } from "../utility/translation/translation";
import { modIsWithin } from "../utility/modIsWithin";

const MODLIST: ModOutputDict = require("../../input/RePoE_Data/mods.min.json");

/** Used to filter the mod list to only contain valid item mods, to avoid iterating over irrelevant data */
const filterMods = (modlist: ModOutputDict) => {
  const itemModList: ModOutputDict = {};
  for (let [modName, modData] of Object.entries(modlist)) {
    if (modIsWithin(modData, ["item"], ["suffix", "prefix"])) {
      itemModList[modName] = modData;
    }
  }
  return itemModList;
};

/** Used to add descriptions to mods, so that it only has to be done this one time and not on every mod render */
const addDescriptionsToModList = (modlist: ModOutputDict): ModDict => {
  const itemModList: ModDict = {};
  for (let [modName, modData] of Object.entries(modlist)) {
    itemModList[modName] = {
      ...modData,
      key: modName,
      description: getModDescription(modData).join(" / "),
      description_only_values: getModDescription(modData, true).join(" / ")
    };
  }
  return itemModList;
};

console.log("🌟 Generating modified mod list 🌟");

console.log("   Entries before filtering: " + Object.entries(MODLIST).length);
const filteredModList = filterMods(MODLIST);
console.log(
  "   Entries after filtering: " + Object.entries(filteredModList).length
);
const alteredModList = addDescriptionsToModList(filteredModList);

export const getProcessedModList = () => {
  return alteredModList;
};

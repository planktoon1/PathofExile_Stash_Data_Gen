import git from "isomorphic-git";
import http from "isomorphic-git/http/node";
import fs from "fs";
import rimraf from "rimraf";
import { Directories } from "../../config/directoryControl";
export const updateRePoEData = async () => {
  console.log(`🌟 Updating RePoe Data 🌟`);
  console.log(`   Deleting old RePoE Data...`);
  rimraf.sync(Directories.INPUT_DIR_RePoE + "/");
  // fetch repoe data
  console.log(`   Fetching new RePoE Data...`);
  await fetchRePoEData();
  console.log(`🌟 Done updating RePoE Data 🌟`);
};

const fetchRePoEData = async () => {
  // call github
  await git.clone({
    fs,
    http,
    dir: Directories.INPUT_DIR_RePoE,
    url: "https://github.com/brather1ng/RePoE.git",
    singleBranch: true,
    depth: 1,
    remote: "RePoE",
    onProgress: logGitCloneProgress
  });
};

const logGitCloneProgress = onProgressParam => {
  if (
    onProgressParam &&
    onProgressParam.total &&
    onProgressParam.loaded &&
    onProgressParam.phase === "Updating workdir"
  ) {
    const percentage = Math.round(
      (onProgressParam.loaded / onProgressParam.total) * 100
    );
    if (percentage % 10 === 0) {
      console.log(`   Cloning RePoE Repo: ${percentage}%`);
    }
  }
};

updateRePoEData();

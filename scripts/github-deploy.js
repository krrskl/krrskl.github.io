const execa = require("execa");
const config = require("../config");
const folderOutputName = config.build.assetsRoot;

(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);

    console.log(`⏩ Building...`);
    await execa("npm", ["run", "build"]);
    await execa("git", ["--work-tree", folderOutputName, "add", "--all"]);
    await execa("git", [
      "--work-tree",
      folderOutputName,
      "commit",
      "-m",
      "gh-pages"
    ]);

    console.log(`⏩ Pushing...`);
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rm", ["-r", folderOutputName]);
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "gh-pages"]);

    console.log(`🚀 Successfully deployed.`);
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();

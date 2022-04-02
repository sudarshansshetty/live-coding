// Input: file-names = ["Valorant","Valorant(1)","Valorant","Valorant(2019)"]
// Output: ["Valorant","Valorant(1)","Valorant(2)","Valorant(2019)"]
// Explanation:
// "Valorant" -- not assigned before, remains "Valorant"
// "Valorant(1)" -- not assigned before, remains "Valorant(1)"
// "Valorant" -- assigned before, so add a (i) suffix, with smallest positive valid i. Valorant(1) is already taken, so Valorant(2)
// "Valorant(2019)" -- not assigned before, remains "Valorant(2019)

function checkFileNameIsPresentInArray(fileName, uniqueFileList) {
  for (let i = 0; i < uniqueFileList.length; i++) {
    if (fileName == uniqueFileList[i]) return true;
  }
  return false;
}

let fileNames = ["naruto", "naruto(1)", "naruto(2)", "naruto(3)", "naruto"];

let uniqueFiles = [];

for (let i = 0; i < fileNames.length; i++) {
  let fileName = fileNames[i];

  let checkIsFilePresent = checkFileNameIsPresentInArray(fileName, uniqueFiles);

  if (!checkIsFilePresent) uniqueFiles.push(fileName);
  else {
    let suffix = 0;
    let newFileName = "";
    do {
      suffix += 1;
      newFileName = fileName + "(" + suffix + ")";
    } while (checkFileNameIsPresentInArray(newFileName, uniqueFiles));
    uniqueFiles.push(newFileName);
  }
}

console.log(uniqueFiles);

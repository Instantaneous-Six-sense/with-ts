const axios = require("axios");

async function getContents001() {
  const data = await axios.get(
    "https://6bdhahizcf.execute-api.ap-northeast-2.amazonaws.com/lg/contents/C001"
  );

  displayC001(data.data);
}

async function getContents005() {
  const data = await axios.get(
    "https://6bdhahizcf.execute-api.ap-northeast-2.amazonaws.com/lg/contents/C005"
  );

  displayC005(data.data);
}

function displayC005(data) {
  console.log("BANNER::");
  data.banner.forEach((value) => {
    console.log(value);
  });

  console.log("CONTENTS::");
  data.contents.forEach((value) => {
    console.log(value);
  });
}

function displayC001(data) {
  console.log("DATA::");
  data.forEach((value) => {
    console.log(value);
  });
}

async function run() {
  await getContents005();
  await getContents001();
}

run();

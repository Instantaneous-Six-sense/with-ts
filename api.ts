const axios = require("axios");

type Base = {
  id: number,
  title: string,
  createdAt: string,
  author: string,
  brand: string,
  link: string
}

type C005Banner = {
  src: string,
} & Base;

// interface C005Banner extends Base {
//   src: string,
// };

type C005Contents = Base;

type C005 = {
  banner: C005Banner[],
  contents: C005Contents[]
}

type C001 = {
  id: number,
  brand: string,
  src: string,
  link: string
}

async function getContents001() {
  const data = await axios.get<any>(
    "https://6bdhahizcf.execute-api.ap-northeast-2.amazonaws.com/lg/contents/C001"
  );

  displayC001(data.data as C001[]);
}

async function getContents005() {
  const data = await axios.get(
    "https://6bdhahizcf.execute-api.ap-northeast-2.amazonaws.com/lg/contents/C005"
  );

  const res: C005 = data.data;

  displayC005(res);
}

function displayC005(data: C005) {
  console.log("BANNER::");

  data.banner.forEach((value) => {
    console.log(value);
  });

  console.log("CONTENTS::");

  data.contents.forEach((value) => {
    console.log(value);
  });
}

function displayC001(data: C001[]) {
  console.log("DATA::");
  data.forEach((value) => {
    console.log(value);
  });
}

async function run() {
  await getContents005();
  // await getContents001();
}

run();

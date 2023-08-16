import * as fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata");
  let myFile;
  let allBlogs = [];
  data.forEach((item) => {
    myFile = fs.readFileSync("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  });
  res.status(200).json(allBlogs);

  // fs.promises.readdir("blogdata", (err, data) => {
  //   console.log(data);
  //   let allBlogs = [];
  //   data.forEach((item) => {
  //     fs.readFile("blogdata/" + item, (d) => {
  //       allBlogs.push(d);
  //     });
  //   });
  // });
  // res.status(200).json(allBlogs);
}

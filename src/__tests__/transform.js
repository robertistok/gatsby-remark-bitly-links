// TODO

// const fs = require("fs");
// const path = require("path");
// const remark = require("remark");
// const plugin = require("../index");

// const fixtureDirName = "__fixtures__";
// const inputFileName = "input.md";
// const expectedFileName = "expected.md";
// const options = {};

// describe("Remark transformer", () => {
//   const fixturesDir = path.resolve(path.join(__dirname, ".."), fixtureDirName);

//   const inputFilePath = path.join(fixturesDir, inputFileName);
//   const input = fs.readFileSync(inputFilePath, "utf8");
// //
//   const expectedFilePath = path.join(fixturesDir, expectedFileName);
//   const expected = fs.readFileSync(expectedFilePath, "utf8");

//   it("finds all the links", async () => {
//     const processor = remark().use(plugin, options);

//     processor.process(input, (err, actual) => {
//       if (err) {
//         throw new Error(err);
//       }

//       expect(actual && actual.contents).toEqual(expected);
//       done();
//     });
//   });
// });

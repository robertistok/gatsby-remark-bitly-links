"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _remark = _interopRequireDefault(require("remark"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fixtureDirName = "__fixtures__";
const inputFileName = "input.md";
const expectedFileName = "expected.md";
const options = {};
describe("Remark transformer", () => {
  const fixturesDir = _path.default.resolve(_path.default.join(__dirname, ".."), fixtureDirName);

  const inputFilePath = _path.default.join(fixturesDir, inputFileName);

  const input = _fs.default.readFileSync(inputFilePath, "utf8");

  const expectedFilePath = _path.default.join(fixturesDir, expectedFileName);

  const expected = _fs.default.readFileSync(expectedFilePath, "utf8");

  it("finds all the links", async () => {
    const processor = (0, _remark.default)().use(_index.default, options);
    processor.process(input, (err, actual) => {
      if (err) {
        throw new Error(err);
      }

      expect(actual && actual.contents).toEqual(expected);
      done();
    });
  });
});
//# sourceMappingURL=transform.js.map
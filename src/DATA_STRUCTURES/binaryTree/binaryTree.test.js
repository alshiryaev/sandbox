const { BST } = require("../binaryTree/binaryTree");

let bst;

beforeEach(() => {
  bst = new BST(10);
});

test("BST: Should be a correct size", () => {
  expect(bst.size()).toBe(1);
  bst.insert(11);
  expect(bst.size()).toBe(2);
});

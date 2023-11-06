import getOriginalSequence from "../src/utils/getOriginalSequence";

test.each([
  {
    sequence: [1],
    subSequences: [[1]],
  },
  {
    sequence: [1, 2],
    subSequences: [[1], [2], [1, 2]],
  },
  {
    sequence: [1, 2, 3],
    subSequences: [[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]],
  },
  {
    sequence: [1, 2, 3, 4],
    subSequences: [
      [1],
      [2],
      [3],
      [4],
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
      [1, 2, 3],
      [1, 2, 4],
      [1, 3, 4],
      [2, 3, 4],
      [1, 2, 3, 4],
    ],
  },
])('get original sequence', ({ sequence, subSequences }) => {
  const result = getOriginalSequence(subSequences);
  expect(sequence.sort()).toEqual(result.sort());
});

import getSubsequence from "../src/utils/getSubsequence";

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
  ])('get subsequences', ({ sequence, subSequences }) => {
    const subsequencesRes = getSubsequence(sequence);
    expect(subsequencesRes.sort()).toEqual(subSequences.sort());
  });
  
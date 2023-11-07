function getCombinations(sequence: number[], expectedLength: number): number[][] {
  if (expectedLength === 1) {
    return sequence.map((e) => [e]);
  }
  if (sequence.length === expectedLength) {
    return [sequence];
  }
  const combinations: number[][] = [];
  for (let i = 0, l = sequence.length; i < l; i += 1) {
    const element = sequence[i];
    if (element !== undefined) {
      const sequenceToEvaluate = sequence.slice(i + 1);
      const res = getCombinations(sequenceToEvaluate, expectedLength - 1);
      if (res) {
        for (let j = 0, k = res.length; j < k; j += 1) {
            if (res[j] !== undefined) {
              combinations.push([element, ...res[j] as number[]])
            }
          }
        
      }
    }
  }
  return combinations;
}

export default function getSubsequences(sequence: number[]) {
  const result: number[][] = [];
  for (let i = 1, l = sequence.length; i <= l; i += 1) {
    const combinations = getCombinations(sequence, i);
    result.push(...combinations);
  }
    return result;
}
export default function getOriginalSequence(
  subsequence: number[][],
): number[] | undefined {
  return subsequence[subsequence.length - 1];
}

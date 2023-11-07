export default function getOriginalSequence(subsequence: number[][]): number[] {
  return subsequence[subsequence.length - 1] as number[];
}
export default function getOriginalSequence(subsequence: number[][]): number[] {
    return subsequence.filter((subsequence) => subsequence.length === 1).flat();
}
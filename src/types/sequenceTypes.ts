export interface Subsequence {
    subsequence: number[][];
    createdAt?: Date;
}

export interface Sequence {
    sequence: number[];
}

export interface SequenceInfo extends Subsequence, Subsequence {}
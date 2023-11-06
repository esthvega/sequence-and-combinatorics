import type { SequenceInfo } from "./sequenceTypes";

export interface BasicResponse {
  ok: boolean;
  error?: string;
}

export interface SequencesResponse extends BasicResponse {
  data: SequenceInfo[];
}

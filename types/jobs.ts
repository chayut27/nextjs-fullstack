import { CompType } from "./companies";

export type JobsType = {
    id: string;
    name: string;
    detail: string;
} & CompType    
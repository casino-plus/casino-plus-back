import { Inner } from "./inner";
import { Outer } from "./outer";
import { Side } from "./side";

export class Board extends BaseEntity {

    inners: [Inner]
    outers: [Outer]
    sides: [Side]
}

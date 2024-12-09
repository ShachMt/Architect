import { Pictures } from "./Pictures";

export class work {
    constructor(
        public idProject?: number,
        public idCategory?: Number,
        public nameOfTheProject?: string,
        public location?: string,
        public size?: string,
        public aboutTheProject?: string,
        public pictures?:Pictures[],

    ) { }
    /**
     * Name of the project: The Nest Hotel
Location: Hahula valley
Size: 6000 sq. m.
Category: Architectural planing total design
     */
}
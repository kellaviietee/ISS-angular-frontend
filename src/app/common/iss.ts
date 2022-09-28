import { ProductService } from "../services/product.service";

export class Iss {
    

    constructor(
                public id:number,
                public timestamp:number,
                public message: string,
                public iss_position: IssPosition
                ) {

                }
}

export class IssPosition {
    constructor(public longitude:string,
                public latitude:string
    ) {

    }
}

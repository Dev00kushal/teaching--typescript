type product = {
  readonly _product_id: string;
  name: string;
  location: string;
  phoneNumber?: string;
  isSale: Boolean;
};

let products: product[]  = [{
    _product_id: "",
    isSale : true,
    location : "",
    name : "",
}]

let store: Array<string> = ["local store", "global store", "remote store"];


let twoDimensionArray : number[][];

twoDimensionArray = [[0,1,1],[1,1,1]]
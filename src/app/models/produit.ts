export class Produit {
  id : number;
  name : string;
  category: number;
  price : number;
  unit : string;
  availability : string;
  sale : boolean;
  discount : number;
  comments : string;
  owner : string;

  constructor(id : number, name : string, category: number,
              price : number, unit : string, availability : string, sale : boolean,
              discount : number, comments : string, owner : string) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.unit  = unit;
    this.availability = availability;
    this.sale = sale;
    this.discount = discount;
    this.comments = comments;
    this.owner = owner;
  }
}

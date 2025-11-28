export class Recette {
  id : number;
  nom : string;
  recette : string;
  imgUrl : string;


  constructor(id : number, nom : string, recette: string, imgUrl: string) {
        this.id = id;
        this.nom = nom;
        this.recette = recette;
        this.imgUrl = imgUrl;
  }
}

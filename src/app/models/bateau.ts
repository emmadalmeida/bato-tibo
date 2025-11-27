export class Bateau {
  id : number;
  nom : string;
  proprietaire : string;
  localisation : string;
  contact : string;
  imgUrl : string;


  constructor(id : number, nom : string, proprietaire: string, localisation : string, contact : string, imgUrl : string) {
        this.id = id;
        this.nom = nom;
        this.proprietaire = proprietaire;
        this.localisation = localisation;
        this.contact = contact;
        this.imgUrl = imgUrl;
  }
}

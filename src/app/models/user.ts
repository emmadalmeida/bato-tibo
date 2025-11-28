export class User {
  id: string;
  mdp: string;

  constructor(id: string, mdp: string) {
    this.id = id;
    this.mdp = mdp;
  }
}


class Voiture {

    /**
     * titulaire de compte bancaire
     * @param voiture_id
     * @param {string} nom_proprietaire
     * @param {string} prenom_proprietaire
     * @param {string} numero_telephone
     * @param {string} email
     */
    constructor(nom_proprietaire, prenom_proprietaire, email, numero_telephone) {
        this.nom_proprietaire = nom_proprietaire;
        this.prenom_proprietaire = prenom_proprietaire;
        this.email = email;
        this.numero_telephone = numero_telephone;
    }


    get nom_proprietaire() {
        return this.nom_proprietaire
    }

    set nom_proprietaire(nom) {
        return this.nom_proprietaire = nom
    }

    get email() {
        return this.email
    }

}
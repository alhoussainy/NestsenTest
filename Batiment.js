class Batiment {

    /**
     * @param batiment_id
     * @param etage
     */
    constructor(etage = 3) {

        this.etage = etage;
    }


    affichersolde() {

        console.log("le solde est " + this.solde + "euros")
    }
}
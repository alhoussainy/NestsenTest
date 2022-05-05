class Espace {

    /**
     *
     * @param espace_id // auotIncrement
     * @param  numero_emplamcent
     * @param {boolean} status_emplacement  // occupé , libre
     */

    constructor(numero_emplamcent, status_emplacement) {

        this.numero_emplamcent = numero_emplamcent;
        this.status_emplacement = status_emplacement;
    }


    Retouner_espace_libre() {
        // verifier que l'espace est libre 
        // si c'est le cas retourne libre
        // sinon retourne occupé
    }

}
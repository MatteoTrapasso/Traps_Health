export class Mybody {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: Mybody) => string = item => item.id;
}

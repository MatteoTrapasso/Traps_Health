export class Myprogress {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: Myprogress) => string = item => item.id;
}

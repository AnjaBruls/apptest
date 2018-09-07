import Vlow from 'vlow';
import ToDoListActions from './ToDoListActions';



class ToDoListStore extends Vlow.Store {
    constructor() {

        super(ToDoListActions);

        // Create the initial state
        this.state = {
            list: []
        };

        this.lastId = 0;
    }

    getNextId() {
        const id = this.lastId;
        this.lastId++;
        return id;
    }

    onAdd(name) {
        const item = {
            id: this.getNextId(),
            name: name
        };
        this.setState(prevState => ({list: [...prevState.list, item]}));
    }

    // onGet(id, cb) {
    //     const item = this.state.list.find(item => item.id === id);
    //     cb(item); // en nog proberen om zon functie te maken vanuit de itemcontent. gewoon lijst opbragen en dan eruit halen wat nodig is.
    // }

    onRemove(itemId) {
        const { list } = this.state;
        this.setState({list: list.filter(i => i.id !== itemId)});
    }
}

export default ToDoListStore;
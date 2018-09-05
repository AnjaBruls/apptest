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

    onGet(id, cb) {
        const item = this.state.list.find(item => item.id === id);
        cb(item);
    }

    // onRemove(itemId) {
    //     this.setState({items: this.state.filter(i => i.id !== itemId)});
    // }     (arg1, arg2) => ({ })
}

export default ToDoListStore;
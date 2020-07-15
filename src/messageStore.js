import { EventEmitter } from "events"
import dispatcher from "./dispatcher.js";
class MsgStore extends EventEmitter {
    constructor() {
        super();
        this.msgs = [
            "7122"
            // { "author": "hi", "text": "7122" }
        ]
    }

    create(text) {
        const id = Date.now();
        this.msgs.push(text);
        this.emit("change");
    }

    getAll() {
        return this.msgs;
    }

    handleActions(action) {
        switch (action.type) {
            case "SEND": {
                console.log("hi")
                this.create(action.text)
                break
            }
        }
    }
}
const msgStore = new MsgStore;
dispatcher.register(msgStore.handleActions.bind(msgStore));
export default msgStore;
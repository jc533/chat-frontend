import {EventEmitter} from "events"

class MsgStore extends EventEmitter{

}
const msgStore = new MsgStore;
export default msgStore;
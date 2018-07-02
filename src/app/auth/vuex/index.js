import state from "./state";
import mutations from "./mutations";
import * as getters from "./getters";
import plugin from './plugins';
import * as actions from "./actions";

const module = { state, mutations, actions, getters };

export default { module, plugin };

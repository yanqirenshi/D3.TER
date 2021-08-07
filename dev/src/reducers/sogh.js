import * as ACTIONS from '../actions/sogh.js';

export const successedConnectGithub = (state, action) => {
    const new_state = {...state};

    new_state.core = action.data;
    new_state.updated_at = new Date();

    return new_state;
};

export const failedConnectGithub = (state, action) => {
    const new_state = {...state};

    new_state.core = null;
    new_state.updated_at = new Date();

    return new_state;
};

const sogh = (state = [], action) => {
    switch (action.type) {

    case ACTIONS.SUCCESSED_CONNECT_GITHUB:
        return successedConnectGithub(state, action);
    case ACTIONS.FAILED_CONNECT_GITHUB:
        return failedConnectGithub(state, action);

    default:
        return state;
    }
};

export default sogh;

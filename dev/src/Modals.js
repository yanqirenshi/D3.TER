import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { close } from './slices/modals.js';
import { connectGithub } from './slices/github.js';

import * as modal from './modals/index.js';

export default function Modals (props) {
    const github = useSelector(state => state.github);

    const callbacks = {
        github: {
            auth: (token, cb)=> {
                dispatch(connectGithub({token: token, callbacks: cb}));
            }
        }
    };

    const modals = useSelector(state => state.modals);
    const dispatch = useDispatch();

    const opend_modal_code = modals.opened;

    if (!opend_modal_code)
        return null;

    const data = modals.list[opend_modal_code];

    const closeModal = ()=> dispatch(close());

    if ('connect_github'===opend_modal_code)
        return <modal.ConnectGithub code={opend_modal_code}
                                    data={data}
                                    close={closeModal}
                                    github={github}
                                    callbacks={callbacks} />;

    return null;
}

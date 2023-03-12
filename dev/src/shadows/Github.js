import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';

import { connectGithub } from '../slices/github.js';

export default function Github (props) {
    const [githubToken, setGithubToken] = React.useState(null);
    const dispatch = useDispatch();

    React.useState(()=> {
        const token = process.env.REACT_APP_GITHUB_TOKEN;

        if (githubToken!==null || !token || !token.length===0)
            return;

        setGithubToken(token);

        dispatch(connectGithub({token: token}));
    }, [githubToken]);

    return null;
}

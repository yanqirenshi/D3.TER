import Sogh from '@yanqirenshi/sogh';

export const SUCCESSED_CONNECT_GITHUB = 'SUCCESSED_CONNECT_GITHUB';
export const FAILED_CONNECT_GITHUB = 'FAILED_CONNECT_GITHUB';

export const successedConnectGithub = (sogh) => ({
    type: SUCCESSED_CONNECT_GITHUB,
    data: sogh,
});
export const failedConnectGithub = () => ({
    type: FAILED_CONNECT_GITHUB,
    data: null,
});

export const connectGithub = (token) => {
    return (dispatch) => {
        const success = (sogh) => dispatch(successedConnectGithub(sogh));

        const error = () => dispatch(failedConnectGithub());

        new Sogh().connect(token, success, error);
    };
};

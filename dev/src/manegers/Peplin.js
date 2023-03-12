class Peplin {
    // constructor () {}
    findCredentials (firebase_uid, successed, failed) {
        const resource = `http://localhost:8080/firebse/auth/${firebase_uid}/credentials`;

        const options = {
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(resource, options)
            .then((response) => response.json())
            .then((data) => successed(data))
            .catch((error) => failed(error));
    }
    saveCredential (firebase_uid, provider_id, credential) {
        const resource = `http://localhost:8080/firebse/auth/${firebase_uid}/credentials/${provider_id}`;

        const options = {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: credential,
                authed_at: new Date(),
            }),
        };

        fetch(resource, options)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

const peplin = new Peplin();

export default peplin;

import base64 from 'base-64';

export default class Neo4j {
    constructor (options) {
        this._scheme = options.scheme;
        this._host = options.host;
        this._port = options.port;
        this._database = options.database;
        this._user = options.user || null;
        this._password = options.password;

        this._state = null;
        this._status = null;
    }
    // getter & setter
    scheme () {
        return this._scheme || 'http';
    }
    host () {
        return this._host || 'localhost';
    }
    port () {
        return this._port || 7474;
    }
    database () {
        return this._database || 'neo4j';
    }
    user () {
        return this._user;
    }
    password () {
        return this._password;
    }
    headerAuthorization () {
        const user = this._user;
        const pass = this._password;

        return {
            'Accept': 'application/json;charset=UTF-8',
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + base64.encode(user + ":" + pass),
        };
    }
    state (v) {
        if (arguments.lengh>0)
            this._state = v;;

        return this._state;
    }
    status (v) {
        if (arguments.lengh>0)
            this._status = v;;

        return this._status;
    }
    // this._state = null;
    // this._status = null;
    // request
    url () {
        return `${this._scheme}://${this._host}:${this._port}`;
    }
    urlTx (transaction_num_or_commit, commit) {
        const base = `${this.url()}/db/${this._database}/tx`;

        if (transaction_num_or_commit===true)
            return `${base}/commit`;

        if (transaction_num_or_commit===false)
            return base;

        if (!transaction_num_or_commit)
            return base;

        const base_with_tx_num = `${base}/${transaction_num_or_commit}`;

        if (commit===true)
            return `${base_with_tx_num}/commit`;

        return base_with_tx_num;
    }
    makeBody (body) {
        return JSON.stringify({
            statements: body.map(d=> {
                const new_d = {...d};

                if (Array.isArray(new_d.statement))
                    new_d.statement = new_d.statement.join(' ');

                return new_d;
            })
        });
    }
    request (url, body, success, error) {
        const method = "POST";
        const headers = this.headerAuthorization();

        const params ={
            method: method,
            headers: headers,
            body: this.makeBody(body),
        };

        fetch(url, params)
            .then(response=> {
                if (response.ok)
                    return response.json();

                throw new Error(response.statusText);
            })
            .then(data=> {
                return success && success(data);
            })
            .catch(e=> {
                return error && error(e);
            });
    }
    tx (body, success, error) {
        const url = this.urlTx();
        this.request(url, body, success, error);
    }
    txCommit (body, success, error) {
        const url = this.urlTx(true);

        this.request(url, body, success, error);
    }
    txNum (num, body, success, error) {
        const url = this.urlTx(num);
        this.request(url, body, success, error);
    }
    txNumCommit (num, body, success, error) {
        const url = this.urlTx(num, true);
        this.request(url, body, success, error);
    }
    txNumDelete (num, success, error) {
        const url = this.urlTx(num);
        this.request(url, {}, success, error);
    }
}

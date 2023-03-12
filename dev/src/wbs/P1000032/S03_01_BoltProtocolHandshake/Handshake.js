import React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Text from '../common/Text.js';
import Pre from '../common/Pre.js';


export default function Handshake () {
    return (
        <Paper elevation={0} sx={{mb:'55px'}}>

          <Text en="Immediately following a successful connection, the client MUST initiate a handshake.">
            <Typography>接続が成功した直後に、クライアントはハンドシェイクを開始する必要があります。</Typography>
          </Text>

          <Text en="This handshake is a fixed exchange used to determine the version of messaging protocol that follows.">
            <Typography>このハンドシェイクは、後に続くメッセージング プロトコルのバージョンを決定するために使用される固定交換です。</Typography>
          </Text>

          <Typography variant="h5" style={{marginTop:33, marginBottom:11}}>
            Bolt identification
          </Typography>

          <Text en="The first part of the handshake is used to identify to the server that this is a Bolt connection.">
            <Typography>ハンドシェイクの最初の部分は、サーバーに対してこれが Bolt 接続であることを識別するために使用されます。</Typography>
          </Text>

          <Text en="It should be sent by a client immediately following the establishment of a successful connection and does not require a server response.">
            <Typography>これは、接続の確立に成功した直後にクライアントによって送信される必要があり、サーバーの応答は必要ありません。</Typography>
          </Text>

          <Text en="The identification consists of the following four bytes:">
            <Typography>ID は、次の 4 バイトで構成されます。</Typography>
          </Text>

          <Pre conents={['C: 60 60 B0 17']}/>

          <Typography variant="h5" style={{marginTop:33, marginBottom:11}}>
            Version negotiation
          </Typography>

          <div>
            <Text en="After identification, a small client-server exchange occurs to determine which version of the messaging protocol to use.">
              <Typography>
                識別後、使用するメッセージング プロトコルのバージョンを決定するために、小規模なクライアント/サーバー交換が発生します。
              </Typography>
            </Text>
            <Text en="In this, the client submits exactly four protocol versions, each encoded as a big-endian 32-bit unsigned integer for a total of 128 bits.">
              <Typography>
                この場合、クライアントは正確に 4 つのプロトコル バージョンを送信し、それぞれが合計 128 ビットのビッグ エンディアン 32 ビット符号なし整数としてエンコードされます。
              </Typography>
            </Text>
            <Text en="Protocol version zero can be used as a placeholder if fewer than four versions are required in the exchange.">
              <Typography>
                交換で必要なバージョンが 4 つ未満の場合は、プロトコル バージョン 0 をプレースホルダーとして使用できます。
              </Typography>
            </Text>
            <Text en="Should a match be found for a version supported by the server, the response will contain that version encoded as a single 32-bit integer.">
              <Typography>
                サーバーでサポートされているバージョンに一致するものが見つかった場合、応答には、単一の 32 ビット整数としてエンコードされたそのバージョンが含まれます。
              </Typography>
            </Text>
            <Text en="If no match is found, a zero value is returned followed by immediate closure of the connection by the server.">
              <Typography>
                一致するものが見つからない場合は、0 の値が返された後、サーバーによって接続がただちに閉じられます。
              </Typography>
            </Text>
          </div>

          <div style={{marginTop:33}}>
            <Text en="Within this exchange, a zero value (four zero bytes) always represents “no protocol version”.">
              <Typography>
                この交換内で、ゼロ値 (4 つのゼロ バイト) は常に「プロトコル バージョンなし」を表します。
              </Typography>
            </Text>

            <Text en="For the client, this can be used as a filler if fewer than four protocol versions are known.">
              <Typography>
                クライアントの場合、既知のプロトコル バージョンが 4 つ未満の場合、これをフィラーとして使用できます。
              </Typography>
            </Text>

            <Text en="For the server, this indicates no version match has been found.">
              <Typography>
                サーバーの場合、これは一致するバージョンが見つからなかったことを示します。
              </Typography>
            </Text>
          </div>

          <div style={{marginTop:33}}>
            <Text en="A server should assume that the versions contained within a client’s request have been sent in order of preference.">
              <Typography>
                サーバーは、クライアントのリクエストに含まれるバージョンが優先順に送信されたと想定する必要があります。
              </Typography>
            </Text>

            <Text en="Therefore, if a match occurs for more than one version, the first match should be selected.">
              <Typography>
                したがって、複数のバージョンで一致が発生した場合は、最初に一致したバージョンを選択する必要があります。
              </Typography>
            </Text>
          </div>

          <div style={{marginTop:33}}>
            <Pre caption="Example where the client is aware of the Bolt protocol version 1 and the server responds with version 1."
                 conents={[
                     'C: 60 60 B0 17',
                     'C: 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00 00',
                     'S: 00 00 00 01',
                 ]}/>
          </div>

          <div style={{marginTop:33}}>
            <Pre caption="Example where the client is aware of the Bolt protocol versions 1 and 2, and the server responds with version 2."
                 conents={[
                     'C: 60 60 B0 17',
                     'C: 00 00 00 02 00 00 00 01 00 00 00 00 00 00 00 00',
                     'S: 00 00 00 02',
                 ]}>
            </Pre>
          </div>

          <div style={{marginTop:33}}>
            <Pre caption="Example where the client is aware of the Bolt protocol versions 1, 2 and 3, and the server responds with version 2."
                 conents={[
                     'C: 60 60 B0 17',
                     'C: 00 00 00 03 00 00 00 02 00 00 00 01 00 00 00 00',
                     'S: 00 00 00 02',
                 ]}>
            </Pre>
          </div>

          <div style={{marginTop:33}}>
            <Pre caption="Example where the client is aware of the Bolt protocol version 3 but the server responds with no version, the server do not support communication with the client."
                 conents={[
                     'C: 60 60 B0 17',
                     'C: 00 00 00 03 00 00 00 00 00 00 00 00 00 00 00 00',
                     'S: 00 00 00 00',
                 ]}>
            </Pre>
          </div>

        </Paper>
    );
}

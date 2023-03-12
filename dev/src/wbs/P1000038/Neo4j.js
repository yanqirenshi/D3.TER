import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Neo4j () {
    return (
        <Box>
          <Container>

            <Typography>
              <Link href="https://note.com/yanqirenshi/n/n492eae387309?magazine_key=med98acdb0b53">
                Conoha VPS で一番安いやつに Neo4j を導入する。
              </Link>
            </Typography>

            <Typography>
              <Link href="https://note.com/yanqirenshi/n/n3e15fe76dd3d?magazine_key=med98acdb0b53">
                Conoha に立てた Neo4j の管理コンソール画面に接続する。
              </Link>
            </Typography>

            <Typography>
              <Link href="https://note.com/yanqirenshi/n/n1817f7e98755?magazine_key=med98acdb0b53">
                Conoha VPS の一番安いやつに立てた Neo4j の管理コンソール画面にログインする。
              </Link>
            </Typography>

            <Typography>
              <Link href="https://note.com/yanqirenshi/n/n38006bf6b8eb?magazine_key=med98acdb0b53">
                Conoha VPS の一番安いやつに立てた Neo4j に Common Lisp から接続してみる。
              </Link>
            </Typography>

            <Typography>
              <pre>
                <code>
                  {add.join('\n')}
                </code>
              </pre>
            </Typography>
          </Container>
        </Box>
    );
}

const add = [
    'firewall-cmd --state',
    'firewall-cmd --list-all',
    '',
    'firewall-cmd --add-service=http --zone=public --permanent',
    'firewall-cmd --add-port=7474/tcp --zone=public --permanent',
    'firewall-cmd --add-port=7687/tcp --zone=public --permanent',
    'firewall-cmd --reload',
    '',
    '#server.bolt.listen_address=:7687',
    'server.bolt.listen_address=0.0.0.0:7687',
    '',
    '#server.http.listen_address=:7474',
    'server.http.listen_address=160.251.80.102:7474',
    '',
    'systemctl restart neo4j',
];

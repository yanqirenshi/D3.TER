import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function PostgreSQL () {
    return (
        <Box>
          <Container>
            <Typography>
              <Link href="https://note.com/yanqirenshi/n/na93da2c468e6?magazine_key=med98acdb0b53">
                Conoha VPS の一番安いやつに PostgreSQL をインストールする。
              </Link>
            </Typography>

            <Typography>
              <Link href="https://note.com/yanqirenshi/n/ne648a1ddb333?magazine_key=med98acdb0b53">
                Conoha VPS の一番安いやつで ローカルPC から PostgreSQL に接続出来るようにする。
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
    'firewall-cmd --add-port=5432/tcp --zone=public --permanent',
    'firewall-cmd --reload',
    'firewall-cmd --list-all',
];

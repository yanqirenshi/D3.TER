import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const style ={
    display:'flex',
    justifyContent: 'center',
    width:'100vw',
    height: '100vh',
    overflow:'auto'
};

export default function P1000035 () {
    return (
        <Box style={style}>
          <Box sx={{p: '55px'}}>
            <Typography gutterBottom variant="h1" component="div" sx={{textAlign: 'center'}}>
              Wikipedia:
              <Link href="https://ja.wikipedia.org/wiki/%E6%B3%95_(%E6%B3%95%E5%AD%A6)">
                法 (法学)
              </Link>
            </Typography>
          </Box>
          {/* 憲法 */}
          {/* 条約 */}
          {/* 法律 */}
          {/* 命令・最高裁判所規則・議院規則 */}
          {/* 条例・地方公共団体の長の規則 */}
          {/* 参照: https://www.lsclaw.jp/law/houkeishiki.html#:~:text=%E3%82%8F%E3%81%8C%E5%9B%BD%E3%81%AE%E6%B3%95%E5%BD%A2%E5%BC%8F%E3%81%AF,%E5%BD%A2%E5%BC%8F%E3%81%AE%EF%BC%91%E3%81%A4%E3%81%A7%E3%81%99%E3%80%82 */}
          {/* 参照: https://fukatax.com/other/law/ */}
        </Box>
    );
}

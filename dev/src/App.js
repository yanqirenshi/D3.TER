import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import S from '@mui/material/Typography';

import Graph from './Graph.js';
import InputDataModel from './InputDataModel.js';
import DataModel from './DataModel.js';
import ObjectModel from './ObjectModel.js';
import Classes from './Classes.js';

export default function App() {
    return (
        <Container maxWidth="md"
                   sx={{pt: 3, pb: 22}}>
          <Box sx={{height:333, p: 2, background: '#f8f8f8'}}>
            <Graph/>
          </Box>


          <Box sx={{mt:3}}>
            <S>
              <a href="http://www.sdi-net.co.jp/tm3-1.pdf">
                TM3.0 の技術 (説明資料 ダウンロード)
              </a>
            </S>
            <S>E-R: E ← R</S>
            <S>{'E-E: E +→ E, E >-対応表- E'}</S>
            <S>R-R: R -対照表- R</S>
            <S>再帰: 再帰</S>
            <S>セット(集合): サブセット</S>
            <S>多値: MO, HDR-DTL</S>
          </Box>

          <Box sx={{mt:6}}>
            <S variant="h5">Data Model</S>
            <DataModel/>
          </Box>

          <Box sx={{mt:6}}>
            <S variant="h5">Input Data Model</S>
            <InputDataModel/>
          </Box>

          <Box sx={{mt:6}}>
            <S variant="h5">Object Model</S>
            <ObjectModel/>
          </Box>

          <Box sx={{mt:6}}>
            <S variant="h5">Classes</S>
            <Classes/>
          </Box>
        </Container>
    );
}

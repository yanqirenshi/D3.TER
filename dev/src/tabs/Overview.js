import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import S from '@mui/material/Typography';

import Relationships from './Overview/Relationships.js';

export default function Overview () {
    return (
        <Container maxWidth="md"
                   sx={{pt: 3, pb: 22}}>
          <Box sx={{mt:3}}>
            <Box>
              <S variant="h5">
                元情報
              </S>

              <S>
                <a href="http://www.sdi-net.co.jp/tm3-1.pdf">
                  [PDF] TM3.0 の技術 (説明資料 ダウンロード)
                </a>
              </S>

              <S>
                <a href="https://www.amazon.co.jp/%E4%BA%8B%E6%A5%AD%E5%88%86%E6%9E%90%E3%83%BB%E3%83%87%E3%83%BC%E3%82%BF%E8%A8%AD%E8%A8%88%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%83%A2%E3%83%87%E3%83%AB%E4%BD%9C%E6%88%90%E6%8A%80%E8%A1%93%E5%85%A5%E9%96%80-%E4%BD%90%E8%97%A4-%E6%AD%A3%E7%BE%8E/dp/4297129469">
                  [書籍] 事業分析・データ設計のためのモデル作成技術入門
                </a>
              </S>
            </Box>

            <Box sx={{mt:8}}>
              <S variant="h5">
                関係の種類
              </S>
              <Relationships/>
            </Box>

            <Box sx={{mt:8}}>
              <S variant="h5">
                結線の種類
              </S>
              <S>1 対 1</S>
              <img src={process.env.PUBLIC_URL + '/assets/2024-01-27_130647.png'}/>
              <S>1 対 (1 or 値なし)</S>
              <img src={process.env.PUBLIC_URL + '/assets/2024-01-27_130706.png'}/>
              <S>1 対 複数</S>
              <img src={process.env.PUBLIC_URL + '/assets/2024-01-27_130724.png'}/>
              <S>1 対 (複数 or 値なし)</S>
              <img src={process.env.PUBLIC_URL + '/assets/2024-01-27_130740.png'}/>
              <S>対照表、対応表</S>
              <S>再帰</S>
            </Box>
          </Box>
        </Container>
    );
}

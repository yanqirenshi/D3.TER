import React from 'react';

import Box from '@mui/material/Box';
import S from '@mui/material/Typography';

export default function Views () {
    return (
        <Box sx={{mt:3}}>
          <Box>
            <S variant="h5">関係の種類</S>

            <Box>
              <S variant="h6">E-R</S>
            </Box>

            <Box sx={{mt:3}}>
              <S variant="h6">E-E</S>
            </Box>

            <Box sx={{mt:3}}>
              <S variant="h6">R-R</S>
            </Box>

            <Box sx={{mt:3}}>
              <S variant="h6">再帰</S>
            </Box>

            <Box sx={{mt:3}}>
              <S variant="h6">セット(集合)</S>
            </Box>

            <Box sx={{mt:3}}>
              <S variant="h6">多値 (MO)</S>
            </Box>

            <Box sx={{mt:3}}>
              <S variant="h6">多値 (HDR-DTL)</S>
            </Box>
          </Box>

          <Box sx={{mt: 8}}>
            <S variant="h5">結線の種類</S>
            <Box>
              <S variant="h6">1 対 1</S>
            </Box>

            <Box sx={{mt:3}}>
              <S variant="h6">1 対 (1 or 値なし)</S>
            </Box>

            <Box sx={{mt:3}}>
              <S variant="h6">1 対 複数</S>
            </Box>

            <Box sx={{mt:3}}>
              <S variant="h6">1 対 (複数 or 値なし)</S>
            </Box>

            <Box sx={{mt:3}}>
              <S variant="h6">対照表、対応表</S>
            </Box>

            <Box sx={{mt:3}}>
              <S variant="h6">再帰</S>
            </Box>
          </Box>
        </Box>
    );
}

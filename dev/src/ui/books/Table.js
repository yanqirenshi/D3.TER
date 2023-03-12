import React from 'react';

import TableContainer from '@mui/material/TableContainer';
import MTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Table (props) {
    const books = props.data;

    return (
        <TableContainer component={Paper}>
          <MTable sx={{ minWidth: 650 }} aria-label="simple table">

            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>タイトル</TableCell>
                <TableCell>ISBN-10</TableCell>
                <TableCell>ISBN-13</TableCell>
                <TableCell>判型</TableCell>
                <TableCell>ページ数</TableCell>
                <TableCell colSpan="2">定価</TableCell>
                <TableCell>発行年月日</TableCell>
                <TableCell>発売日</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {books.map(book=> {
                  return (
                      <TableRow key={book.id()}>
                        <TableCell>{book.id()}</TableCell>
                        <TableCell>{book.title()}</TableCell>
                        <TableCell>{book.isbn10()}</TableCell>
                        <TableCell>{book.isbn13()}</TableCell>
                        <TableCell>{book.paperSize()}</TableCell>
                        <TableCell>{book.pageCount()}</TableCell>
                        <TableCell>{book.priceAmount()}</TableCell>
                        <TableCell>{book.priceUnit()}</TableCell>
                        <TableCell>{book.publicationDate()}</TableCell>
                        <TableCell>{book.releaseDate()}</TableCell>
                      </TableRow>
                  );
              })}
            </TableBody>

          </MTable>
        </TableContainer>
    );
}

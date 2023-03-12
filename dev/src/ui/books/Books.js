import React from 'react';

import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import Table from './Table.js';

export default function Books (props) {
    const books = props.data;
    const state = props.state;
    const callbacks = props.callbacks;

    return (
          <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>

            <div style={{width: 1000, paddingTop:11, display: 'flex', alignItems: 'center'}}>
              <div style={{flexGrow:1}}>
                <p>
                  <span>
                    <Link href={state.website.url}>
                      {state.website.name}
                    </Link> :
                  </span>
                  <span style={{marginLeft:11}}>
                    {state.website.description}
                  </span>
                </p>
              </div>

              <div>
                <Button variant="contained" size="small"
                        onClick={callbacks.create_book.open}>
                  Add
                </Button>
              </div>
            </div>

            <div style={{width: 1000, paddingTop:11}}>
              <Table data={books}/>
            </div>
          </div>
    );
}

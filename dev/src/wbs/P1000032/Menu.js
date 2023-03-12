import React from 'react';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Menu (props) {
    const mtenu_items = props.mtenu_items;
    const callbacks = props.callbacks;
    const selected = props.selected;

    const click = (code) => callbacks.click.menu_item(code);

    return (
        <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Nested List Items
                  </ListSubheader>
              }>

          {mtenu_items.map(menu_item=> {
              return (
                  <>
                    <ListItemButton selected={selected===menu_item.code}
                                    onClick={()=>click(menu_item.code)}>
                      <ListItemText primary={menu_item.label}/>
                    </ListItemButton>

                    {menu_item.children && menu_item.children.map(menu_item_child=> {
                        return (
                            <ListItemButton sx={{ pl: 6 }}
                                            selected={selected===menu_item_child.code}
                                            onClick={()=>click(menu_item_child.code)}>
                              <ListItemText primary={menu_item_child.label}/>
                            </ListItemButton>
                        );
                    })}
                  </>
              );
          })}
        </List>
    );
}

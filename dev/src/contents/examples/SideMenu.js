import React from 'react';

const style = {
    height: '100%',
    background: 'rgba(137, 91, 138, 0.3)',
    item: {
        width:66,
        height:66,
        borderRadius:5,
        background: 'rgba(137, 91, 138, 0.1)',
        margin: 11,
        padding: 6,
        conts: {
            width:'100%',
            height:'100%',
            background: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
        },
    },
    item_selected: {
        width:66,
        height:66,
        borderRadius:5,
        background: 'rgba(137, 91, 138, 0.6)',
        margin: 11,
        padding: 6,
        conts: {
            width:'100%',
            height:'100%',
            background: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
        },
    },
};

export default function SideMenu (props) {
    const tabs = props.tabs;
    const callbacks = props.callbacks;

    const click = (e)=> {
        const new_tabs = {...tabs};
        const code = e.target.getAttribute('code');

        if (new_tabs.selected===code)
            return;

        new_tabs.selected = code;

        callbacks.change.tab(new_tabs);
    };

    return (
        <div style={style}>

          {tabs.list.map(item=> {
              const s = item.code===tabs.selected ? style.item_selected : style.item;

              return (
                  <div key={item.code}
                       style={s}
                       code={item.code}
                       onClick={click}>
                    <div style={s.conts}
                         code={item.code}>
                      {item.label}
                    </div>
                  </div>
              );
          })}

        </div>
    );
}

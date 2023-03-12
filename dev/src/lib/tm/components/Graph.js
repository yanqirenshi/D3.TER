import React from 'react';

import D3Ter, {Rectum} from '@yanqirenshi/d3.ter';

export default function Graph (props) {
    const data = props.data;

    const [rectum, setRectum] = React.useState(null);
    const [graph_data] = React.useState(data.entities);

    React.useEffect(()=> {
        if (rectum!==null) return;

        setRectum(new Rectum({
            transform: { k: 0.7, x: 400.0, y: 400.0 },
            edge: { width: 6, color: '#333333' },
            callbacks: {
                entity: {
                    click: (node)=> {
                        console.log(node);
                    }
                }
            }
        }));
    }, [rectum]);

    React.useEffect(()=> {
        if (rectum)
            rectum.data(graph_data);
    }, [rectum, graph_data]);

    return (
        <div style={{height: '100%',width: '100%'}}>
            <D3Ter rectum={rectum} />
        </div>
    );
}

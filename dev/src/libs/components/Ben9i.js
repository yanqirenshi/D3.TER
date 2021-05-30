import React, {useState} from 'react';

import Measure from "react-measure";

export default function Ben9i (props) {
    const [svgid] = useState(props.svgid);
    const [ass] = useState(props.asshole);

    // useEffect(() => ass.focus(), [ass]);
    // useEffect(() => core.data(props.source));

    return (
        <Measure bounds onResize={(cr) => ass.bounds({ ...cr.bounds})}>
          {({ measureRef }) => {
              return <div ref={measureRef}
                          className="grid-inner"
                          style={{width:'100%', height: '100%'}}>
                       <svg id={svgid}>
                       </svg>
                     </div>;
          }}
        </Measure>
    );
}

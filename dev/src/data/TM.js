import IDENTIFIERS from './TM/IDENTIFIERS.js';
import ATTRIBUTES from './TM/ATTRIBUTES.js';

import ENTITY_EVENT from './TM/ENTITY_EVENT.js';
import ENTITY_RESOURCE from './TM/ENTITY_RESOURCE.js';
import RELATIONSHIPS from './TM/RELATIONSHIPS.js';

// identifiers: 10,000
// attributes:  20,000
// entities:    30,000 resource
// entities:    40,000 event

const TM = {
    identifiers: IDENTIFIERS,
    attributes:  ATTRIBUTES,
    entities:    [
        ...ENTITY_EVENT,
        ...ENTITY_RESOURCE,
    ],
    relationships: RELATIONSHIPS,
};

export default TM;

export {
    IDENTIFIERS,
    ATTRIBUTES,
}

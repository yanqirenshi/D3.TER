const DATA = [
    {
        code: 'ex1',
        title: 'Merge single node with a label',
        description: 'Merging a single node with the given label.',
        contents: [
            ' MERGE (robert:Critic)',
            'RETURN robert',
            '     , labels(robert)',
        ],
    },
    {
        code: 'ex2',
        title: 'Merge single node with properties',
        description: 'Merging a single node with properties where not all properties match any existing node.',
        contents: [
            " MERGE (charlie {name: 'Charlie Sheen', age: 10})",
            "RETURN charlie",
        ],
    },
    {
        code: 'ex3',
        title: 'Merge single node specifying both label and property',
        description: 'Merging a single node with both label and property matching an existing node.',
        contents: [
            " MERGE (michael:Person {name: 'Michael Douglas'})",
            "RETURN michael.name",
            "     , michael.bornIn;",
        ]
    },
    {
        code: 'ex4',
        title: 'Merge single node derived from an existing node property',
        description: "For some property 'p' in each bound node in a set of nodes, a single new node is created for each unique value for 'p'.",
        contents: [
            " MATCH (person:Person)",
            " MERGE (city:City {name: person.bornIn})",
            "RETURN person.name",
            "     , person.bornIn",
            "     , city",
        ]
    },
    {
        code: 'ex5',
        title: "Merge with ON CREATE",
        description: "Merge a node and set properties if the node needs to be created.",
        contents: [
            " MERGE (keanu:Person {name: 'Keanu Reeves'})",
            "    ON CREATE",
            "   SET keanu.created = timestamp()",
            "RETURN keanu.name",
            "     , keanu.created",
        ]
    },
    {
        code: 'ex5-6',
        title: "Merge with ON MATCH",
        description: "Merging nodes and setting properties on found nodes.",
        contents: [
            " MERGE (person:Person)",
            "    ON MATCH",
            "   SET person.found = true",
            "RETURN person.name, person.found",
        ]
    },
    {
        code: 'ex6',
        title: "Merge with ON CREATE and ON MATCH",
        description: "",
        contents: [
            " MERGE (keanu:Person {name: 'Keanu Reeves'})",
            "    ON CREATE",
            "   SET keanu.created = timestamp()",
            "    ON MATCH",
            "   SET keanu.lastSeen = timestamp()",
            "RETURN keanu.name",
            "     , keanu.created",
            "     , keanu.lastSeen",
        ]
    },
    {
        code: 'ex7',
        title: "Merge with ON MATCH setting multiple properties",
        description: "If multiple properties should be set, simply separate them with commas.",
        contents: [
            " MERGE (person:Person)",
            "    ON MATCH",
            "   SET person.found = true",
            "     , person.lastAccessed = timestamp()",
            "RETURN person.name",
            "     , person.found",
            "     , person.lastAccessed",
        ]
    },
    {
        code: 'ex8',
        title: "Merge on a relationship",
        description: "MERGE can be used to match or create a relationship.",
        contents: [
            " MATCH (charlie:Person {name: 'Charlie Sheen'}),",
            "       (wallStreet:Movie {title: 'Wall Street'})",
            " MERGE (charlie)-[r:ACTED_IN]->(wallStreet)",
            "RETURN charlie.name",
            "     , type(r)",
            "     , wallStreet.title",
        ]
    },
    {
        code: 'ex9',
        title: "Merge on multiple relationships",
        description: "",
        contents: [
            " MATCH (oliver:Person {name: 'Oliver Stone'}),",
            "       (reiner:Person {name: 'Rob Reiner'})",
            " MERGE (oliver)-[:DIRECTED]->(movie:Movie)<-[:ACTED_IN]-(reiner)",
            "RETURN movie",
        ]
    },
    {
        code: 'ex10',
        title: "Merge on an undirected relationship",
        description: "MERGE can also be used with an undirected relationship. When it needs to create a new one, it will pick a direction.",
        contents: [
            " MATCH (charlie:Person {name: 'Charlie Sheen'}),",
            "       (oliver:Person {name: 'Oliver Stone'})",
            " MERGE (charlie)-[r:KNOWS]-(oliver)",
            "RETURN r",
        ]
    },
    {
        code: 'ex11',
        title: "Merge on a relationship between two existing nodes",
        description: "MERGE can be used in conjunction with preceding MATCH and MERGE clauses to create a relationship between two bound nodes 'm' and 'n', where 'm' is returned by MATCH and 'n' is created or matched by the earlier MERGE.",
        contents: [
            " MATCH (person:Person)",
            " MERGE (city:City {name: person.bornIn})",
            " MERGE (person)-[r:BORN_IN]->(city)",
            "RETURN person.name",
            "     , person.bornIn",
            "     , city",
        ]
    },
    {
        code: 'ex12',
        title: "Merge on a relationship between an existing node and a merged node derived from a node property",
        description: "MERGE can be used to simultaneously create both a new node 'n' and a relationship between a bound node 'm' and 'n'.",
        contents: [
            " MATCH (person:Person)",
            " MERGE (person)-[r:HAS_CHAUFFEUR]->(chauffeur:Chauffeur {name: person.chauffeurName})",
            "RETURN person.name",
            "     , person.chauffeurName",
            "     , chauffeur",
        ]
    },
    {
        code: 'ex14',
        title: "Merge using unique constraints creates a new node if no node is found",
        description: "Merge using unique constraints creates a new node if no node is found.",
        contents: [
            " MERGE (laurence:Person {name: 'Laurence Fishburne'})",
            "RETURN laurence.name",
        ]
    },
    {
        code: 'ex15',
        title: "Merge using unique constraints matches an existing node",
        description: "Merge using unique constraints matches an existing node.",
        contents: [
            " MERGE (oliver:Person {name: 'Oliver Stone'})",
            "RETURN oliver.name",
            "     , oliver.bornIn",
        ]
    },
    {
        code: 'ex16',
        title: "Merge with unique constraints and partial matches",
        description: "Merge using unique constraints fails when finding partial matches.",
        contents: [
            "MERGE (michael:Person {name: 'Michael Douglas', role: 'Gordon Gekko'})",
            "                #RETURN michael",
        ]
    },
    {
        code: 'ex17',
        title: "?",
        description: "If we want to give Michael Douglas the role of Gordon Gekko, we can use the SET clause instead:",
        contents: [
            "MERGE (michael:Person {name: 'Michael Douglas'})",
            "  SET michael.role = 'Gordon Gekko'",
        ]
    },
    {
        code: 'ex18',
        title: "Merge with unique constraints and conflicting matches",
        description: "Merge using unique constraints fails when finding conflicting matches.",
        contents: [
            " MERGE (oliver:Person {name: 'Oliver Stone', role: 'Gordon Gekko'})",
            "RETURN oliver",
        ]
    },
    {
        code: 'ex19',
        title: "Using map parameters with MERGE",
        description: "MERGE does not support map parameters the same way CREATE does. To use map parameters with MERGE, it is necessary to explicitly use the expected properties, such as in the following example. For more information on parameters, see Parameters.",
        contents: [
            " MERGE (person:Person {name: $param.name, role: $param.role})",
            "RETURN person.name",
            "     , person.role",
        ]
    },
];

export default DATA;

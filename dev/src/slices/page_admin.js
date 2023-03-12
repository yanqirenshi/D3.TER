import { createSlice } from '@reduxjs/toolkit';

import sogh from '../manegers/sogh.js';

import * as model from '../models/index.js';

import maneger from '../manegers/SephirothicTree.js';
import librarian from '../manegers/Librarian.js';

function timestamp () {
    return new Date().toISOString();
}

function initialCreateChildNodeData () {
    return {
        rank: '未設定',
        name_ja: '',
        name_en: '',
        name_scientific: '',
        move: 'will',
        position: { x:0, y:0 },
        label: { contents: '', font: { size: 16 } },
    };
}

function initialState () {
    return {
        life: {
            root: {
                start: null,
                end: null,
            },
            netrowrk: {
                start: null,
                end: null,
            },
            selected: {
                node: null,
            },
            view: {
                mode: 'NETWORK', // or TILES
            },
            inspectore: {
                tabs: {
                    selected: 'core-data',
                    list: [
                        { code: 'core-data', label: 'Core Data' },
                        { code: 'node-data', label: 'Node Data' },
                    ],
                },
                create_child_node: {
                    active: false,
                    contents: initialCreateChildNodeData(),
                    start: null,
                    end: null,
                }
            },
        },
        backlogs: {
            project: {
                data: null,
                start: null,
                end: null,
            },
            items: {
                data: [],
                start: null,
                end: null,
            },
        },
        books: {
            books: {
                start: null,
                end: null,
            },
            create_book: {
                active: false,
                data: null,
                start: null,
                end: null,
            },
            website: {
                name: "Books",
                description: '本の総合カタログ。出版書誌データベース',
                url: 'https://www.books.or.jp/',
            },
        },
    };
}

export const page_admin = createSlice({
    name: 'page/admin',
    initialState: initialState(),
    reducers: {
        // selectedOrganismNode
        selectedOrganismNode: (state, action)=> {
            const node_id = action.payload;

            if (state.life.selected.node===node_id) {
                state.life.selected.node = null;
                state.life.inspectore.create_child_node.active = false;
            } else {
                state.life.selected.node = node_id;
            }
        },
        // changedSelectedTabInspectore
        changedSelectedTabInspectore: (state, action)=> {
            state.life.inspectore.tabs.selected = action.payload;
        },
        // CreateChildNode Panel
        openCreateChildNodePanel: (state, action)=> {
            const parent = maneger.getNode(state.life.selected.node);

            state.life.inspectore.create_child_node.contents.position.x = parent._node.x;
            state.life.inspectore.create_child_node.contents.position.y = parent._node.y;

            state.life.inspectore.create_child_node.active = true;
        },
        closeCreateChildNodePanel: (state, action)=> {
            state.life.inspectore.create_child_node.active = false;
        },
        changeCreateChildNodeContents: (state, action)=> {
            state.life.inspectore.create_child_node.contents = action.payload;
        },
        started_createChildNodePanel: (state, action)=> {
            state.life.inspectore.create_child_node.start = timestamp();
            state.life.inspectore.create_child_node.end = null;
        },
        successed_createChildNodePanel: (state, action)=> {
            const row  = action.payload.results[0].data[0].row;

            const row_parent  = row[0];
            const row_r  = row[1];
            const row_child  = row[2];

            // Nodes
            const parent = maneger.makeNode(row_parent);
            const child  = maneger.makeNode(row_child);

            // Edge
            maneger.makeEdge(row_r, parent, child);

            state.life.inspectore.create_child_node.active = false;
            state.life.inspectore.create_child_node.contents
                = initialCreateChildNodeData();
            state.life.inspectore.create_child_node.end = timestamp();
        },
        failed_createChildNodePanel: (state, action)=> {
            state.life.inspectore.create_child_node.end = timestamp();
        },
        // update move of node
        started_updateNodeMove: (state, action)=> {
        },
        successed_updateNodeMove: (state, action)=> {
        },
        failed_updateNodeMove: (state, action)=> {
        },
        // udpate position ov node
        started_updateNodePosition: (state, action)=> {},
        successed_updateNodePosition: (state, action)=> {},
        failed_updateNodePosition: (state, action)=> {},
        // mergeRootOrganisum
        started_mergeRootOrganisum: (state, action)=> {
            state.life.root.start = timestamp();
            state.life.root.end = null;
        },
        successed_mergeRootOrganisum: (state, action)=> {
            state.life.root.end = timestamp();

            const data = action.payload.results[0].data[0].row[0];

            maneger.rootNode(maneger.record2node(data));
        },
        failed_mergeRootOrganisum: (state, action)=> {
            state.life.root.end = timestamp();
        },
        // findOrganisums
        started_findOrganisums: (state, action)=> {
            state.life.netrowrk.start = timestamp();
            state.life.netrowrk.end = null;
        },
        successed_findOrganisums: (state, action)=> {
            state.life.netrowrk.end = timestamp();

            const records = action.payload.results[0].data;

            for (const record of records) {
                const row  = record.row;

                const row_parent  = row[0];
                const row_r  = row[1];
                const row_child  = row[2];

                row_parent.x = row_parent.x * 1;
                row_parent.y = row_parent.y * 1;
                row_child.x = row_child.x * 1;
                row_child.y = row_child.y * 1;

                // Nodes
                const parent = maneger.makeNode(row_parent);
                const child  = maneger.makeNode(row_child);

                // Edge
                maneger.makeEdge(row_r, parent, child);
            }
        },
        failed_findOrganisums: (state, action)=> {
            state.life.netrowrk.end = timestamp();
        },
        // fetchProject
        started_fetchProject: (state, action)=> {
            state.backlogs.project.start = timestamp();
            state.backlogs.project.end = null;
        },
        successed_fetchProject: (state, action)=> {
            state.backlogs.project.end = timestamp();

            state.backlogs.project.data = action.payload.contents;
        },
        failed_fetchProject: (state, action)=> {
            state.backlogs.project.end = timestamp();
        },
        // fetchProjectItems
        started_fetchProjectItems: (state, action)=> {
            state.backlogs.items.start = timestamp();
            state.backlogs.items.end = null;
        },
        successed_fetchProjectItems: (state, action)=> {
            state.backlogs.items.end = timestamp();

            state.backlogs.items.data = action.payload.contents;
        },
        failed_fetchProjectItems: (state, action)=> {
            state.backlogs.items.end = timestamp();
        },
        /* *
         * Books
         * */
        opened_createBook: (state, action)=> {
            state.books.create_book.active = true;
            state.books.create_book.data = action.payload;
        },
        closeed_createBook: (state, action)=> {
            state.books.create_book.active = false;
            state.books.create_book.data = null;
        },
        changed_createBook:(state, action)=> {
            const code = action.payload.code;
            const value = action.payload.value;

            state.books.create_book.data[code] = value;
        },
        started_createBook: (state, action) => {
            state.books.create_book.start = timestamp();
            state.books.create_book.end = null;
        },
        successed_createBook: (state, action) => {
            state.books.create_book.end = timestamp();
            state.books.create_book.active = false;

            // const data = action.payload.results[0].data[0];

            // maneger.rootNode(maneger.record2node(data));
        },
        failed_createBook: (state, action) => {
            state.books.create_book.end = timestamp();
        },
        started_findBooks: (state, action)=> {
            state.books.books.start = timestamp();
            state.books.books.end = null;
            state.books.books.data = [];
        },
        successed_findBooks: (state, action)=> {
            state.books.books.end = timestamp();
            const list = action.payload.results[0].data;

            for (const data of list)
                librarian.makeBook(data.row[0]);
        },
        failed_findBooks: (state, action)=> {
            state.books.books.end = timestamp();
        },
    },
});

export const {
    // Books
    opened_createBook,
    closeed_createBook,
    changed_createBook,
    started_createBook,
    successed_createBook,
    failed_createBook,
    started_findBooks,
    successed_findBooks,
    failed_findBooks,
    // mergeRootOrganisum
    started_mergeRootOrganisum,
    successed_mergeRootOrganisum,
    failed_mergeRootOrganisum,
    // findOrganisums
    started_findOrganisums,
    successed_findOrganisums,
    failed_findOrganisums,
    // fetchProject
    started_fetchProject,
    successed_fetchProject,
    failed_fetchProject,
    // fetchProjectItems
    started_fetchProjectItems,
    successed_fetchProjectItems,
    failed_fetchProjectItems,
    // selectedOrganismNode
    selectedOrganismNode,
    // changedSelectedTabInspectore
    changedSelectedTabInspectore,
    // createChildNodePanel
    openCreateChildNodePanel,
    closeCreateChildNodePanel,
    changeCreateChildNodeContents,
    started_createChildNodePanel,
    successed_createChildNodePanel,
    failed_createChildNodePanel,
    // update move
    started_updateNodeMove,
    successed_updateNodeMove,
    failed_updateNodeMove,
    // udpate position
    started_updateNodePosition,
    successed_updateNodePosition,
    failed_updateNodePosition,
} = page_admin.actions;

export default page_admin.reducer;


/* **************************************************************** *
 * Tab of Backlog
 * **************************************************************** */
export function fetchProject (project_id) {
    return (dispatch)=> {
        dispatch(started_fetchProject());

        sogh.fetchProjectsV2ByID(
            project_id,
            data=>  dispatch(successed_fetchProject(data)),
            error=> dispatch(failed_fetchProject(error)),
        );
    };
}

export function fetchProjectItems (project) {
    return (dispatch)=> {
        dispatch(started_fetchProjectItems());

        sogh.fetchProjectV2ItemsByProjectNext(
            project,
            data=>  dispatch(successed_fetchProjectItems(data)),
            error=> dispatch(failed_fetchProjectItems(error)),
        );
    };
}

/* **************************************************************** *
 * Books
 * **************************************************************** */
export function openCreateBook () {
    const form_data = new model.Book().makeFormData();

    return opened_createBook(form_data);
}

export function closeCreateBook () {
    return closeed_createBook();
}

export function changecreateBook (code, value) {
    return changed_createBook({code: code, value: value});
}

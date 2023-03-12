import Sogh from 'sogh';

const SOGH = new Sogh();

SOGH.routes({
    'issue':           '/backlogs/:id',
    'project-v2':      '/projectsV2/:id',
    'project-v2-item': '/projectV2-items/:id',
});

export default SOGH;

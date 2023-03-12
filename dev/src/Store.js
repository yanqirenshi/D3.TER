import { configureStore } from '@reduxjs/toolkit';

import github from './slices/github.js';
import modals from './slices/modals.js';
import page_admin from './slices/page_admin.js';
import backlogs from './slices/backlogs.js';

export default configureStore({
  reducer: {
      // tools
      github: github,
      // modals
      modals: modals,
      // pages
      page_admin,
      // contents
      backlogs,
  }
});

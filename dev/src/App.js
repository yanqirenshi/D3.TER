import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as page from './pages/index.js';
import Modals from './Modals.js';

import {Page} from './ui/layout.js';

import * as shadow from './shadows/index.js';

export default function App() {
    return (
        <>
          <shadow.Github/>

          <Modals/>

          <BrowserRouter>
            <Routes>
              <Route path="/"         element={<Page><page.Home/></Page>} />
              <Route path="/wbs/:id"  element={<Page><page.WbsNode/></Page>} />
              <Route path="/wbs"      element={<Page><page.WbsTrees/></Page>} />
              <Route path="/backlogs" element={<Page><page.Backlogs/></Page>} />

              <Route path="/dev.network" element={<Page><page.DevNetworkGraph/></Page>} />
            </Routes>
          </BrowserRouter>
        </>
    );
}

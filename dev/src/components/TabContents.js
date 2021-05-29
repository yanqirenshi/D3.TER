import React from 'react';
import { useLocation } from "react-router-dom";

export default function TabContents (props) {
    const tabs = props.tabs;

    const code = new URLSearchParams(useLocation().search).get('tab');
    const tab = tabs.find(d=>d.code===code) || tabs[0];

    return (
        <>
          {tab.code===props.code && props.children}
        </>
    );
}

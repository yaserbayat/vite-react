import React from 'react';
import loadable from '@loadable/component';
import Header from "src/components/Header";

const WebsiteRoutes = loadable(() => import('src/routes/WebsiteRoutes'), {fallback: <div>loading...</div>});

const WebsiteContainer = () => {
    return (
        <div>
            <Header/>
            <WebsiteRoutes/>
        </div>
    );
};

export default WebsiteContainer;
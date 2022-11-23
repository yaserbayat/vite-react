import React from 'react';
import loadable from '@loadable/component';
import {Container} from "react-bootstrap";
import Header from "src/components/Header";

const WebsiteRoutes = loadable(() => import('src/routes/WebsiteRoutes'), {fallback: <div>loading...</div>});

const WebsiteContainer = () => {
  return (
    <Container>
      <Header/>
      <WebsiteRoutes/>
    </Container>
  );
};

export default WebsiteContainer;
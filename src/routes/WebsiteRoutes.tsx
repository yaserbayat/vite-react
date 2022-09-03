import {Route, Routes} from "react-router-dom";
import PrivateRoute from "src/components/PrivateRoute";
import NotFound from "src/routes/NotFound";
import React from "react";
import loadable from "@loadable/component";
const Home = loadable(() => import('src/routes/Website/Home'))
const Product = loadable(() => import('src/routes/Website/Product'))

const routes = [{element: <Home/>, path: '/'}, { element: <Product/>, path: '/product/:id'}]

const WebsiteRoutes = () => {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route key={JSON.stringify(route)} path={route.path} element={<PrivateRoute/>}>
                    <Route  index={index === 0} path={route.path} element={route.element}/>
                </Route>
            ))}
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    );
};

export default WebsiteRoutes;
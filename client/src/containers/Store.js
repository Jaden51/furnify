import React from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import SofasArmchairs from '../components/Store/SofasArmchairs';
import TablesChairs from '../components/Store/SofasArmchairs';
import Storage from '../components/Store/SofasArmchairs';
import Sleep from '../components/Store/SofasArmchairs';

const Item = () => {
    const { name } = useParams();

    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
}

const Store = () => {
    const { url, path } = useRouteMatch();

    return (
        <div>
            <h4><Link to={`${url}/sofas-and-armchairs`}>Sofas and Armchairs</Link></h4>
            <h4><Link to={`${url}/tables-and-chairs`}>Tables and Chairs</Link></h4>
            <h4><Link to={`${url}/storage-systems`}>Storage System and Units</Link></h4>
            <h4><Link to={`${url}/sleeping-area`}>Sleeping Area</Link></h4>
            <Route exact path={`${path}/:name`}>
                <Item />
            </Route>
        </div>
    )
}

export default Store;
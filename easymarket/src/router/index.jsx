import React from 'react';

import RouterMap from './map.jsx'

import Routes from "./routes.jsx"

class RouterView extends React.Component {
    render() {
        const routes = this.props.routes ? this.props.routes : Routes
        return <RouterMap routes={routes} />
    }
}

export default RouterView
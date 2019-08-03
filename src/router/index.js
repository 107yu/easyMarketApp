import React from 'react';
import RouterMap from './map'
import Routes from "./routes"
class RouterView extends React.Component {
    render() {
        const routes = this.props.routes ? this.props.routes : Routes
        return <RouterMap routes={routes} />
    }
}
export default RouterView
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
class RouterMap extends React.Component {
    render() {
        // let token=localStorage.getItem("token")
        const { routes } = this.props
        const defaultRouter = <Route key={0} path='/' render={() => {
            return <Redirect to='/pages/page' />
        }} exact />
        // const defaultRouter = <Redirect to='/pages/page' />
        // const login=<Redirect to='/login' exact key={1}/>
            return <Switch>
            {
                routes.length && routes.map((item, index) => {
                    const { children: routes, component: Component } = item
                    if (Component) {
                        return <Route key={index} path={item.path} render={(config) => {
                            return <Component routes={routes} {...config} key={item.path}/>
                        }}/>
                    }
                    return true;
                }).concat([defaultRouter])
            }
        </Switch>
    }
}

export default RouterMap
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
class RouterMap extends React.Component {
    render() {
        const { routes } = this.props
          let token=localStorage.getItem("token")
        const defaultRouter = <Route key={0} path='/' render={() => {
            return <Redirect to='/pages/page' />
        }} exact />
         const login=token?defaultRouter:<Redirect to='/login' exact/>
        return <Switch>
            {
                routes.length && routes.map((item, index) => {
                    const { children: routes, component: Component } = item
                    if (Component) {
                        return <Route key={index} path={item.path} render={(config) => {
                            return <Component routes={routes} {...config} />
                        }}/>
                    }
                    return true;
                }).concat([login])
            }
        </Switch>
    }
}

export default RouterMap
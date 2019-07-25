import React from 'react';
import './index.scss'

import { NavLink } from 'react-router-dom'

class Footer extends React.Component {
    render() {
        console.log(this.props.routes)
        return <ul className='footer'>
            {
                this.props.routes && this.props.routes.map((item, index) => {
                    return <li key={index}>
                        <NavLink to={item.path} activeClassName='active'><i className={item.icon}></i>{item.name}</NavLink>
                    </li>
                })
            }
        </ul>
    }
}

export default Footer;
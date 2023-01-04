import React , {Component} from 'react'

class GreetPropsClass extends Component
{
    render()
    {
        return(<h1>Welcome  {this.props.name}</h1>)
    }
}

export default GreetPropsClass
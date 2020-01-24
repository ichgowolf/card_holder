import React from 'react'
import { View } from 'react-native'
import { Input } from 'react-native-elements';
import  {Icon}  from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements'

class LoginAccount extends React.Component {
    state = {
        email: '',
        password: ''
    }
    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleFormSubmit = () => {

    }
    onClick = () => {

    }

    render() {
        return <View style={topMargin= 10}>
            <Input
                placeholder='Enter E-Mail'
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
            />

            <Input
                placeholder='enter password'
                name='password'
                value={this.state.password}
                onChange={this.handleInputChange}
            />

        </View>
    }
}
export default LoginAccount

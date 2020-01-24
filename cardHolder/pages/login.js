import React from 'react'
import { View } from 'react-native'
import LoginAccount from '../components/loginaccount.js'




class Login extends React.Component {
    state = {
       email : '',
       password : '',
    }
    handleInputChange=(e)=>{
        
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        return <View>
            <LoginAccount></LoginAccount> 
        </View>
    } 

}

export default Login
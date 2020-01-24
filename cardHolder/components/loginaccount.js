import React from 'react'
import { View } from 'react-native'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


class LoginAccount extends React.Component {
    
    render(props) {
        return <View>
            <Input
                placeholder='Enter E-Mail'
               name={this.email}
            />

            <Input
                placeholder='enter password' 
                name={this.password} 
            />
        </View>
    }
}
export default LoginAccount

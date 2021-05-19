import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Foh from '../screens/Foh'

const Stack = createStackNavigator()

export default function ClientesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="foh"
                component={Foh}
                options={{ title: "Pescados" }}
            />
        </Stack.Navigator>
    )
}

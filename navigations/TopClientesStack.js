import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Foh from '../screens/Foh'
import TopClientes from '../screens/TopClientes'

const Stack = createStackNavigator()

export default function TopClientesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="top-clientes"
                component={TopClientes}
                options={{ title: "Los Mejores Clientes" }}
            />
        </Stack.Navigator>
    )
}

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import ClientesStack from './ClientesStack'
import FavoritesStack from './FavoritesStack'
import TopClientesStack from './TopClientesStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                name="foh"
                component={ClientesStack}
                options={{ title:"Pescados" }}
                />              
                <Tab.Screen
                name="Favoritos"
                component={FavoritesStack}
                options={{ title:"Favoritos" }}
                />              
                <Tab.Screen
                name="Top Clientes"
                component={TopClientesStack}
                options={{ title:"Clientes" }}
                />              
                <Tab.Screen
                name="Search"
                component={SearchStack}
                options={{ title:"Buscar" }}
                />              
                <Tab.Screen
                name="Account"
                component={AccountStack}
                options={{ title:"Cuentas" }}
                />              
            </Tab.Navigator>
        </NavigationContainer>
    )
}

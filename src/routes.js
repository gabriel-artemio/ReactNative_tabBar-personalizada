import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Search from './pages/Search';

import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    position:'absolute',
                    backgroundColor:'#171626',
                    borderTopWidth:0,

                    bottom:14,
                    left:14,
                    right:14,
                    elevation:0,
                    borderRadius:4,
                    height:60
                }
            }}>
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown:false,
                    tabBarIcon:({color,size,focused})=>{
                        if(focused){
                            return <Ionicons name='home' size={size} color={color} />
                        }
                        return <Ionicons name='home-outline' size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name="Pesquisar"
                component={Search}
                options={{
                    headerShown:false,
                    tabBarIcon:({color,size,focused})=>{
                        if(focused){
                            return <Ionicons name='search' size={size} color={color} />
                        }
                        return <Ionicons name='search-outline' size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name="Favoritos"
                component={Favorites}
                options={{
                    headerShown:false,
                    tabBarIcon:({color,size,focused})=>{
                        if(focused){
                            return <Ionicons name='bookmark' size={size} color={color} />
                        }
                        return <Ionicons name='bookmark-outline' size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name="Perfil"
                component={Profile}
                options={{
                    headerShown:false,
                    tabBarIcon:({color,size,focused})=>{
                        if(focused){
                            return <Ionicons name='person' size={size} color={color} />
                        }
                        return <Ionicons name='person-outline' size={size} color={color} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default Routes;
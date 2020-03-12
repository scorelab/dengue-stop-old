import { createStackNavigator} from 'react-navigation-stack'
import{ createAppContainer } from 'react-navigation'
import Home from '../components/Home'
import Login from '../components/Login'
import Report from '../components/Report'
import Mapview from "../components/Mapview";


const screens = {
    Login: {
        screen: Login,
        navigationOptions: {headerShown: false}
    },
    Home : {
        screen: Home,
        navigationOptions: {headerShown: false}
    },
    Report: {
        screen: Report,
        createStackNavigator: {headerShown: false}
    },
    Map: {
        screen: Mapview,
        navigationOptions: {headerShown: false}
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
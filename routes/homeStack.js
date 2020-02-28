import { createStackNavigator} from 'react-navigation-stack'
import{ createAppContainer } from 'react-navigation'
import Home from '../components/Home'
import Login from '../components/Login'
import Report from '../components/Report'


const screens = {
    Login: {
        screen: Report,
        navigationOptions: {header: null}
    },
    Home : {
        screen: Home,
        navigationOptions: {header: null}
    },
    Report: {
        screen: Report,
        createStackNavigator: {header: null}
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
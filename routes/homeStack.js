import { createStackNavigator} from 'react-navigation-stack'
import{ createAppContainer } from 'react-navigation'
import Home from '../components/Home'
import Login from '../components/Login'


const screens = {
    Login: {
        screen: Login,
        navigationOptions: {header: null}
    },
    Home : {
        screen: Home,
        navigationOptions: {header: null}
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
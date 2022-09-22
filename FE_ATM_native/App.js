import { TextInput } from "@react-native-material/core";
import Login from './src/pages/Login'
import Register from './src/pages/Register'
import Header from './src/components/Header'
import MainPage from "./src/pages/MainPage";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return ( 
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  )
}


export default App;
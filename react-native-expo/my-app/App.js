import { NavigationContainer } from "@react-navigation/native";
import AppContainer from "./src/nav/AppContainer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Setting from "./src/pages/Setting";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={AppContainer} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Frontend/screens/LoginScreen';
import HomeScreen from '../Frontend/screens/HomeScreen';
import MenuScreen from '../Frontend/screens/MenuScreen';
import AddRecordScreen from '../Frontend/screens/AddRecordScreen';
import ListRecordsScreen from '../Frontend/screens/ListRecordsScreen';
import EditRecordScreen from '../Frontend/screens/EditRecordScreen';
import { RootStackParamList } from '../Frontend/types/navigationTypes';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddRecord" component={AddRecordScreen} />
        <Stack.Screen name="ListRecords" component={ListRecordsScreen} />
        <Stack.Screen name="EditRecord" component={EditRecordScreen} />
      </Stack.Navigator>
  );
}
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from '../../home/screens/Home';
import Quran from '../../quran/screens/Quran';
import Tasbih from '../../tasbih/screens/Tasbih';
import Surah from '../../quran/screens/Surah';

const stackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Quran,
    Tasbih,
    Surah
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#c6d6b0'
      }
    }
  }
);

export default createAppContainer(stackNavigator);

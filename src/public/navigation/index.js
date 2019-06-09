import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from '../../home/screens/Home';
import Quran from '../../quran/screens/Quran';
import Tasbih from '../../tasbih/screens/Tasbih';
import Surah from '../../quran/screens/Surah';

const stackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Quran,
  Tasbih,
  Surah
});

export default createAppContainer(stackNavigator);

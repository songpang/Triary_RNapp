import { createStackNavigator } from 'react-navigation';
import AddMediaTab from './CreateAlbum';
import HomeTab from './HomeTab';

export default createStackNavigator({
    HomeTab : { screen: HomeTab },
    AddMediaTab: { screen: AddMediaTab}
},
    {
        headerMode: 'none'
    });
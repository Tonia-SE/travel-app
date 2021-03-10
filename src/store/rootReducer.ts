import { IAppState, RootReducerAction } from './types';

const initialState: IAppState = {
  loggedIn: false,
  registred: false,
  failedAttempt: false,
  userName: '',
  userImage: '',
  lang: 'EN',
  isLoading: false,
  countries: [{
    id: 'br',
    name: 'Brazil',
    pictureURL: 'https://i-fakt.ru/wp-content/uploads/2013/11/braz.jpg',
  },
  {
    id: 'tz',
    name: 'Tanzania',
    pictureURL: 'https://i-fakt.ru/wp-content/uploads/2021/03/interesnye-fakty-1614802526.jpg',
  },
  {
    id: 'sp',
    name: 'Spain',
    pictureURL: 'https://i-fakt.ru/wp-content/uploads/2019/12/fakty-barselona.jpg',
  },
  {
    id: 'ca',
    name: 'Canada',
    pictureURL: 'https://i-fakt.ru/wp-content/uploads/2019/12/fakty-monreal.jpg',
  },
  {
    id: 'in',
    name: 'India',
    pictureURL: 'https://i-fakt.ru/wp-content/uploads/2019/10/fakty-india.jpg',
  },
  {
    id: 'ir',
    name: 'Ireland',
    pictureURL: 'https://i-fakt.ru/wp-content/uploads/2017/11/ireland.jpg',
  },
  {
    id: 'ae',
    name: 'United Arab Emirates',
    pictureURL: 'https://i-fakt.ru/wp-content/uploads/2015/04/oaemirat.jpg',
  },
  {
    id: 'nz',
    name: 'New Zealand',
    pictureURL: 'https://i-fakt.ru/wp-content/uploads/2013/07/skytower3.jpeg',
  },
  {
    id: 'jp',
    name: 'Japan',
    pictureURL: 'https://i-fakt.ru/1/tokio.jpg',
  },
  ],
};

const rootReducer = (state: IAppState = initialState, action: RootReducerAction) => {
  switch (action.type) {
    case 'SET_LANG':
      return { ...state, lang: action.payload.lang };
    case 'LOGGED_IN':
      return { ...state, loggedIn: action.payload.loggedIn };
    case 'REGISTRED':
      return { ...state, registred: action.payload.registred };
    case 'FAILED_ATTEMPT':
      return { ...state, failedAttempt: action.payload.failedAttempt };
    case 'SET_USER_IMAGE':
      return { ...state, userImage: action.payload.userImage };
    case 'SET_USER_NAME':
      return { ...state, userName: action.payload.userName };
    case 'SHOW_LOADER':
      return { ...state, isLoading: action.payload.isLoading };
    case 'HIDE_LOADER':
      return { ...state, isLoading: action.payload.isLoading };
    default:
  }
  return state;
};

export default rootReducer;

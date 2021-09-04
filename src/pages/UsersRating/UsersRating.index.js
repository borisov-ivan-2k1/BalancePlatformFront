import { bindActionCreators } from 'redux';
import { getUsersRating } from 'redux/users/actions';
import { selectUsersRating, selectRatingLoading } from 'redux/users/selectors';


export const mapStateToProps = state => ({
  items: selectUsersRating(state),
  loading: selectRatingLoading(state)
})

export const mapActionsToProps = dispatch => bindActionCreators({
  getUsersRating
}, dispatch);

export const itemsMock = [
  {
    id: '1',
    imgUrl: 'https://sun9-12.userapi.com/impg/2RuhO0hVa2P4ALj9fq-5Iri040nRGU9IERqdUg/-ZyKEzhHSk4.jpg?size=2048x1365&quality=96&sign=fd9e3c46f5fccd947eff00fa48e451a8&type=album',
    title: 'Наталья Свиридова',
    type: 'user',
    placeOnTop: 1,
    totalScore: 900,
    score: 900,
  },
  {
    id: '2',
    imgUrl: 'https://img.youscreen.ru/wall/14977928959176/14977928959176_1920x1200.jpg',
    title: 'Илья Бондаренко',
    type: 'user',
    placeOnTop: 2,
    totalScore: 900,
    score: 848,
  },
  {
    id: '3',
    imgUrl: null,
    title: 'Андрей Аксёнов',
    type: 'user',
    placeOnTop: 3,
    totalScore: 900,
    score: 789,
  },
  {
    id: '4',
    imgUrl: 'https://sun9-34.userapi.com/impg/0hRAn1qU21OzA8YTQRTlGd6TXTwkv8GBkQi_gA/4xp_s1AVgXk.jpg?size=1600x1066&quality=96&sign=c759467aeb01711ae3a7fe7792971843&type=album',
    title: 'Наталья Свиридова',
    type: 'user',
    placeOnTop: 4,
    totalScore: 900,
    score: 721,
  }
]
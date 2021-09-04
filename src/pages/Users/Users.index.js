import { bindActionCreators } from 'redux';
import { getUsers } from 'redux/users/actions';
import { selectUsers, selectLoading } from 'redux/users/selectors';


export const mapStateToProps = state => ({
  users: selectUsers(state),
  loading: selectLoading(state)
})

export const mapActionsToProps = dispatch => bindActionCreators({
  getUsers
}, dispatch);

export const usersMock = [
  {
    id: '1',
    imgUrl: 'https://sun9-12.userapi.com/impg/2RuhO0hVa2P4ALj9fq-5Iri040nRGU9IERqdUg/-ZyKEzhHSk4.jpg?size=2048x1365&quality=96&sign=fd9e3c46f5fccd947eff00fa48e451a8&type=album',
    title: 'Наталья Свиридова',
    email: 'Natalia.Sviridova@balance-pl.ru',
    phone: '79128745217',
    placeOnTop: 1,
  },
  {
    id: '2',
    imgUrl: 'https://img.youscreen.ru/wall/14977928959176/14977928959176_1920x1200.jpg',
    title: 'Илья Бондаренко',
    email: 'Ilya.Bondarenko@balance-pl.ru',
    phone: '79091342147',
    placeOnTop: 2,
  },
  {
    id: '3',
    imgUrl: null,
    title: 'Андрей Аксёнов',
    email: 'Andrey Aksyonov@balance-pl.ru123123123',
    phone: '79013351596',
    placeOnTop: 3,
  },
  {
    id: '4',
    imgUrl: 'https://sun9-34.userapi.com/impg/0hRAn1qU21OzA8YTQRTlGd6TXTwkv8GBkQi_gA/4xp_s1AVgXk.jpg?size=1600x1066&quality=96&sign=c759467aeb01711ae3a7fe7792971843&type=album',
    title: 'Наталья Свиридова',
    email: 'Natalia.Sviridova@balance-pl.ru',
    phone: '79128745217',
    placeOnTop: 4,
  }
]
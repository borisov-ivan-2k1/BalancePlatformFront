import { bindActionCreators } from 'redux';
import { selectUserLoading, selectUser } from 'redux/users/selectors';
import { getUser, clearUser } from 'redux/users/actions';


export const mapStateToProps = state => ({
  user: selectUser(state),
  loading: selectUserLoading(state),
})

export const mapActionsToProps = dispatch => bindActionCreators({
  getUser,
  clearUser
}, dispatch);

export const userMock = {
  id: '1',
  imgUrl: 'https://sun9-12.userapi.com/impg/2RuhO0hVa2P4ALj9fq-5Iri040nRGU9IERqdUg/-ZyKEzhHSk4.jpg?size=2048x1365&quality=96&sign=fd9e3c46f5fccd947eff00fa48e451a8&type=album',
  title: 'Наталья Свиридова',
  email: 'Natalia.Sviridova@balance-pl.ru',
  phone: '79128745217',
  placeOnTop: 1,
  birthday: '2021-09-03T20:03:17.043Z',
  city: 'Барнаул',
  currency: 10,
  spentCurrency: 43,
}

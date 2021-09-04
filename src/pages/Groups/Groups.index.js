import { bindActionCreators } from 'redux';
import { getGroups, changeAddGroup } from 'redux/groups/actions';
import { selectGroups, selectLoading } from 'redux/groups/selectors';


export const mapStateToProps = state => ({
  groups: selectGroups(state),
  loading: selectLoading(state),
})

export const mapActionsToProps = dispatch => bindActionCreators({
  getGroups,
  changeAddGroup
}, dispatch);

export const groupsMock = [
  {
    id: '1',
    imgUrl: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk0MzZyoQwrEfKmqOq-THiRqaKTM5SRkZCeTgDn6uOyic',
    title: 'Профессионалы своего дела',
    description: 'Перевыполняем планы, разрываем рейтинги',
    placeOnTop: 1,
    wins: 12,
    draws: 1,
    defeats: 3,
    usersCount: 20,
  },
  {
    id: '2',
    imgUrl: 'https://i.pinimg.com/736x/34/22/6a/34226a9e7c35c4296c028d29ebfa9387--great-barrier-reef-sailing-ships.jpg',
    title: 'Покорители морей',
    description: 'Полный вперёд!',
    placeOnTop: 2,
    wins: 10,
    draws: 2,
    defeats: 4,
    usersCount: 14,
  },
  {
    id: '3',
    imgUrl: 'https://www.sobaka.ru/images/image/01/42/73/95/_normal.jpg',
    title: 'Отчаянные бандюганы',
    description: 'Наводим суету на просторах геймифицированного пространства',
    placeOnTop: 3,
    wins: 9,
    draws: 1,
    defeats: 6,
    usersCount: 17,
  },
]
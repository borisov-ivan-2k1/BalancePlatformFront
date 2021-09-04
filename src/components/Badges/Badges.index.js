import { bindActionCreators } from 'redux';
import { selectBages, selectLoading } from 'redux/badges/selectors';
import { getBadges, clearBadges } from 'redux/badges/actions';


export const mapStateToProps = state => ({
  badges: selectBages(state),
  loading: selectLoading(state),
})

export const mapActionsToProps = dispatch => bindActionCreators({
  getBadges, 
  clearBadges 
}, dispatch);

export const badgesMock = [
  {
    id: '1',
    title: 'Франция',
    imgUrl: 'https://image.flaticon.com/icons/png/512/284/284442.png',
    description: '',
    score: 10, // баллы в рейтинг
    spentCurrency: 2, // валюта
  },
  {
    id: '2',
    title: 'Сотрудник месяца',
    imgUrl: 'https://image.flaticon.com/icons/png/512/1910/1910476.png',
    description: '',
    score: 50, // баллы в рейтинг
    spentCurrency: 5, // валюта
  }
]

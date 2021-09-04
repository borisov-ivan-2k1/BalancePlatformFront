import { bindActionCreators } from 'redux';
import { getShopProducts } from 'redux/shop/actions';
import { selectProducts, selectLoading } from 'redux/shop/selectors';


export const mapStateToProps = state => ({
  products: selectProducts(state),
  loading: selectLoading(state),
})

export const mapActionsToProps = dispatch => bindActionCreators({
  getShopProducts
}, dispatch);


export const productsMock = [
  {
    id: '1',
    imgUrl: 'https://www.digiseller.ru/preview/232073/p1_2463032_2a38d60f.jpg',
    title: '1 месяц подписки ivi +',
    description: 'Наслаждайтесь лучшими фильмами, сериалами, мультфильмами.',
    price: 20,
    canBy: true,
  },
  {
    id: '2',
    imgUrl: 'https://www.1rre.ru/wp-content/uploads/2021/04/2-12.jpg',
    title: '1 оплачиваемый выходной',
    description: 'Получите 1 оплачиваемый выходной и проведите его с пользой',
    price: 100,
    canBy: true,
  },
  {
    id: '3',
    imgUrl: 'https://lh3.googleusercontent.com/proxy/fDH6HME7kGW4FRchinMeZ2SgrOv8RPRM78CLuyQHpN7PdCbkludFifp6XPJcwYyOxfUeGetelZlUgqPyJNoNz8Lpu8hJ1H12xJMGFLTCan3-sw',
    title: 'Кружка с веселым принтом',
    description: 'Кружка с веселым принтом для хорошего настроения',
    price: 25,
    canBy: true,
  },
  {
    id: '4',
    imgUrl: 'https://www.iphones.ru/wp-content/uploads/2021/01/yandexplus2year.jpg',
    title: 'Подписка Яндекс плюс на 1 год',
    description: 'Подписка на все сервисы Яндекса в одном месте',
    price: 90,
    canBy: true,
  }
]
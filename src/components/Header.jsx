import { useContext } from 'react';
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button.jsx';
import BasketContext from '../store/BasketContext.jsx';

export default function Header () {
  let basketCtx = useContext(BasketContext)

  const totalBasketItems = basketCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logoImg} alt="A restaurant" />
        <h1>What would you like to order?</h1>
      </div>
      <nav> <Button textOnly>{totalBasketItems}</Button>  </nav>
    </header>

  )
}

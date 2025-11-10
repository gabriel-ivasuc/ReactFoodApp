import logoImg from '../assets/logo.jpg'
import Button from './UI/Button.jsx';

export default function Header () {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logoImg} alt="A restaurant" />
        <h1>What would you like to order?</h1>
      </div>
      <nav> <Button textOnly>Add item to basket</Button>  </nav>
    </header>

  )
}

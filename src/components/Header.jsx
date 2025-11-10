import logoImg from '../assets/logo.jpg'

export default function Header () {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logoImg} alt="A restaurant" />
        <h1>What would you like to order?</h1>
      </div>
      <nav> <button>Basket(0)</button> </nav>
    </header>

  )
}

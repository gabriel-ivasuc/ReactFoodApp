import logoImg from '../assets/logo.jpg'

export default function Header() {
  return <header id='main-header'>
    <div id='title'>
      <img src={logoImg} alt='A restaurant'/>
      <h1>What's for Dinner?</h1>
     <nav>
      <button>Cart(0)</button>
     </nav>
    </div>
  </header>
}

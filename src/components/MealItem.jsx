import { currencyFormatter } from "../util/formatting";
import Button from './UI/Button.jsx'
import { useContext } from "react";
import BasketContext from '../store/BasketContext.jsx';

export default function MealItem({meal}) {
 const basketCtx = useContext(BasketContext);

  function handleAddMealToCart() {
    basketCtx.addItem(meal);
  }

  return <li className='meal-item'>
    <article>
      <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
      <div>
        <h3>{meal.name}</h3>
        <p className='meal-item-price'>{currencyFormatter.format(meal.price)}</p>
        <p className='meal-item-description'>{meal.description}</p>
      </div>
      <p className="meal-item-actions">
        <Button onClick={handleAddMealToCart}>Add meal to basket</Button>
      </p>
    </article>
  </li>
}

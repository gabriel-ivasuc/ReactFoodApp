import { createContext, useReducer } from "react";

const BasketContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function basketReducer(state, action) {
  let updatedItems;

  if (action.type === 'ADD_ITEM') {
    const existingBasketItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    updatedItems = [...state.items];

    if(existingBasketItemIndex > -1) {
    const updatedItem = {
      ...state.items[existingBasketItemIndex],
      quantity: state.items[existingBasketItemIndex].quantity + 1
    }
    updatedItems[existingBasketItemIndex] = updatedItem;
    }
    else {
    updatedItems.push({...action.item, quantity: 1});
    }
    return {...state, items: updatedItems};
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingBasketItemIndex = state.items.findIndex((item) => item.id === action.id);

    const existingBasketItem = state.items[existingBasketItemIndex];

    updatedItems = [...state.items];

    if(existingBasketItem.quantity === 1) {
      updatedItems.splice(existingBasketItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingBasketItem,
        quantity: existingBasketItem.quantity - 1,
      };
      updatedItems[existingBasketItemIndex] = updatedItem;
    }
    return {...state, items: updatedItems};
  }
}
export function BasketContextProvider({children}) {
 const [basket, dispatchBasketAction] = useReducer(basketReducer, { items: [] });

  function addItem(item){
    dispatchBasketAction({type: 'ADD_ITEM', item })
  }

  function removeItem(id){
    dispatchBasketAction({type: 'REMOVE_ITEM', id })
  }

  const basketContext = {
  items: basket.items,
  addItem,
  removeItem,
}
  return <BasketContext.Provider value={basketContext}>{children}</BasketContext.Provider>
}
export default BasketContext;

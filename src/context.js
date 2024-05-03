import React, {useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
// const url = 'https://www.course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()
const initialState={
  loading:false,
  cart:[],
  total:0,
  amount:0,
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialState)
  const clearCart = () => {
    dispatch({type:'CLEAR_CART'})
  }
  const remove = (id) => {
    dispatch({type:'REMOVE', payload: id})
  }
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }
  const addCart = (id) => {
    dispatch({ type: 'ADDTOCART',payload: id}); // Update cart
  }; 
  // const displaycart = () => {
  //     handleAddToCart = (productId) => {
  //     // Your logic to add the product to the cart
  //     // Dispatch the ADDTOCART action
  
  //     // After adding to cart, filter the items and dispatch the DISPLAY_ITEMS action
  //     filteredItems = data.filter(item => item.id === productId);
  //     dispatch({ type: 'DISPLAY_ITEMS', payload: filteredItems });
  //   };
  // };
  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])

  // const fetchData = async () => {
  //   dispatch({ type: 'LOADING' })
  //   const response = await fetch(url)
  //   const cart = await response.json()
  //   dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        addCart,
        // displaycart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

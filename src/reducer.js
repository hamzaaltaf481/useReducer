import data from './data'; // Import your data array
const reducer = (state,action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    }
  }
  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 }
      }
      return cartItem
    })
    return { ...state, cart: tempCart }
  }
  if (action.type === 'DECREASE') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.amount !== 0)
    return { ...state, cart: tempCart }
  }
  
if (action.type === 'ADDTOCART') {
  // Find the selected product in the data based on its ID
  const selectedProduct = state.cart.find(item => item.id === action.payload);
  // If the product is already in the cart, increase its amount by 1
  if (selectedProduct) {
    return {
      ...state,
      cart: state.cart.map(item =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      ),
      amount: state.amount + 1 // Increment the total amount of items in the cart
    };
  } else {
    // If the product is not in the cart, add it to the cart array with amount 1
    const newProduct = {
      id: action.payload,
      amount: 1, // Initial amount
      ...data.find(item => item.id === action.payload) // Fetch product details from data
    };
    return {
      ...state,
      cart: [...state.cart, newProduct],
      amount: state.amount + 1 // Increment the total amount of items in the cart
    };
  }
}
  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload };
  }
    
  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem
        const itemTotal = price * amount

        cartTotal.total += itemTotal
        cartTotal.amount += amount
        return cartTotal
      },
      {
        total: 0,
        amount: 0,
      }
    )
    total = parseFloat(total.toFixed(2))

    return { ...state, total, amount }
  }
  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }
  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false }
  }
  if (action.type === 'TOGGLE_AMOUNT') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            return { ...cartItem, amount: cartItem.amount + 1 }
          }
          if (action.payload.type === 'dec') {
            return { ...cartItem, amount: cartItem.amount - 1 }
          }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.amount !== 0)
    return { ...state, cart: tempCart }
  }
  throw new Error('no matching action type')
}
export default reducer
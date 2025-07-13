import React, { createContext, useContext, useReducer } from 'react';

const ShopContext = createContext();

const initialState = {
  products: [
    {
      id: 1,
      name: 'Organic Cotton Pads',
      price: 12.99,
      category: 'Period Care',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
      description: 'Ultra-soft organic cotton pads for sensitive skin',
      rating: 4.8,
      recommended: true,
      aiReason: 'Perfect for your sensitive skin and heavy flow days'
    },
    {
      id: 2,
      name: 'Magnesium Supplement',
      price: 24.99,
      category: 'Supplements',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
      description: 'Natural magnesium to reduce cramps and bloating',
      rating: 4.7,
      recommended: true,
      aiReason: 'Helps with the cramps you logged last cycle'
    },
    {
      id: 3,
      name: 'Menstrual Cup',
      price: 29.99,
      category: 'Period Care',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
      description: 'Eco-friendly menstrual cup, 12-hour protection',
      rating: 4.9,
      recommended: false
    },
    {
      id: 4,
      name: 'PMS Relief Tea',
      price: 16.99,
      category: 'Wellness',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400',
      description: 'Herbal blend to ease PMS symptoms',
      rating: 4.6,
      recommended: true,
      aiReason: 'Great for the mood swings you experience pre-period'
    },
    {
      id: 5,
      name: 'Heating Pad',
      price: 34.99,
      category: 'Pain Relief',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      description: 'Cordless heating pad for cramp relief',
      rating: 4.8,
      recommended: false
    },
    {
      id: 6,
      name: 'Dark Chocolate Bundle',
      price: 18.99,
      category: 'Treats',
      image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400',
      description: 'Premium dark chocolate for mood boosting',
      rating: 4.9,
      recommended: true,
      aiReason: 'Your period starts in 2 days - treat yourself!'
    }
  ],
  cart: [],
  orders: [],
  recommendations: []
};

function shopReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.product.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.product, quantity: 1 }]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.productId)
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.productId
            ? { ...item, quantity: action.quantity }
            : item
        )
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      };
    case 'PLACE_ORDER':
      return {
        ...state,
        orders: [...state.orders, {
          id: Date.now(),
          items: state.cart,
          total: action.total,
          date: new Date(),
          status: 'confirmed'
        }],
        cart: []
      };
    default:
      return state;
  }
}

export function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const placeOrder = (total) => {
    dispatch({ type: 'PLACE_ORDER', total });
  };

  const getCartTotal = () => {
    return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getRecommendedProducts = () => {
    return state.products.filter(product => product.recommended);
  };

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    placeOrder,
    getCartTotal,
    getRecommendedProducts
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}
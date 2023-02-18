import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button
} from '@chakra-ui/react'
import { useSelector } from "react-redux"
import {selectCartItems} from '../../store/cart/cartSlice'
import {CartItem as CartItemType} from '../../store/cart/types'

type CartItemProps = {
  cartItem: CartItemType;
}

const CartItem = ({cartItem}: CartItemProps) => {
  const {title: bookTitle, imageUrl, quantity} = cartItem;
  return(
  <div>  
    <span>{bookTitle}</span>
    <span>{quantity}</span>
  </div>
  )
}

const ShoppingCart = () => {
  const cartItems = useSelector(selectCartItems)
  return (
  <div>
    {cartItems.map((cartItem, index) => <CartItem key={index} cartItem={cartItem}/>)}
  </div>
  )
}

export default ShoppingCart
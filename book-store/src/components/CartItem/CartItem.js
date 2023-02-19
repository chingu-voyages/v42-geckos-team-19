import {
  Flex,
  Link,
  Select,
  useColorModeValue,
  IconButton,
  Text,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { FiTrash2 } from "react-icons/fi";
import { useAppDispatch } from "../../hooks";
import { CartProductMeta } from "../CartProductMeta/CartProductMeta";
import { clearCartItem, setCartItemQuantity } from "../../store/cart/cartSlice";
import Counter from "../Counter/Counter";


const CartItem = ({ cartItem }) => {
  const dispatch = useAppDispatch();
  const {
    title,
    author,
    imageUrl,
    id,
    quantity,
    price, } = cartItem;

  const handleClearCartItem = () => dispatch(clearCartItem(cartItem))
  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        title={title}
        // description={description}
        coverImg={`https://covers.openlibrary.org/b/id/${imageUrl}-M.jpg?default=false`}
      />
      <Text textAlign="center" >${(price * quantity).toFixed(2)} {(quantity > 1) ? (<Text>(${price.toFixed(2)} per unit)</Text>) : null}</Text>
      {/* Desktop */}
      <Flex
     
        justify="end"
        display="flex"
      >
        
        
        <Flex alignItems="center">
          <NumberInput onChange={(value) => {
            let updatedCartItem = { ...cartItem };
            updatedCartItem.quantity = parseInt(value);
            dispatch(setCartItemQuantity(updatedCartItem))
            }} width="5em" defaultValue={quantity} min={1} max={999}>
          <NumberInputField m={0}  />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        </Flex>
        <IconButton
          marginLeft="30px"
          variant="outline"
          borderColor="transparent"
          aria-label={`Delete ${title} from cart`}
          fontSize="20px"
          icon={<FiTrash2 />}
          onClick={() => handleClearCartItem()}
        />
      </Flex>

    
    </Flex>
  );
};

export default CartItem;

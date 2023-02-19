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
import { clearCartItem } from "../../store/cart/cartSlice";
import Counter from "../Counter/Counter";


const CartItem = ({ cartItem }) => {
  const dispatch = useAppDispatch()
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

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <Flex>X <NumberInput defaultValue={15} min={10} max={20}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput> {quantity} = ${(price * quantity).toFixed(2)} {(quantity > 1) ? (`($${price.toFixed(2)} per unit)`) : null}</Flex>

        <IconButton
          variant="outline"
          borderColor="transparent"
          aria-label={`Delete ${title} from cart`}
          fontSize="20px"
          icon={<FiTrash2 />}
          onClick={() => handleClearCartItem()}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        {/* <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        /> */}
        <Text>$49.99</Text>
      </Flex>
    </Flex>
  );
};

export default CartItem;

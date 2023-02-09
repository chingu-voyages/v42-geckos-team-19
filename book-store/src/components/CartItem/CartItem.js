import {
  Flex,
  Link,
  Select,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { FiTrash2 } from "react-icons/fi";
import { CartPriceTag } from "../CartPriceTag/CartPriceTag";
import { CartProductMeta } from "../CartProductMeta/CartProductMeta";
const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue("#E4573D", "#EFB865")}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
};

export const CartItem = (props) => {
  const {
    title,
    description,
    quantity,
    coverImg,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
  } = props;
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
        description={description}
        coverImg={coverImg}
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
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <CartPriceTag price={price} currency={currency} />
        <IconButton
          variant="outline"
          borderColor="transparent"
          aria-label={`Delete ${title} from cart`}
          fontSize="20px"
          icon={<FiTrash2 />}
          onClick={onClickDelete}
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
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <CartPriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  );
};

export default CartItem;
import {
  Box,
  Image,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

export const CartProductMeta = (props) => {
  const { coverImg, title} = props;
  return (
    <Stack direction="row" spacing="5">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={coverImg}
        alt={title}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{title}</Text>
        </Stack>
      </Box>
    </Stack>
  );
};

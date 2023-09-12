import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import Book from "../models/Book";
import { useContext } from "react";
import { BookContext } from "../BookContext";

export default function BookCardChakra({ book }: { book: Book }) {
    const booksContext = useContext(BookContext);

    return (
    <Card maxW="300px">
        <CardBody>
        <Center>
        <Image
            src={book.img}
            maxW='150px'
            alt="Green double couch with wooden legs"
            borderRadius="lg"
        />
        </Center>
        <Stack mt="6" spacing="3">
            <Heading size="md">{book.title}</Heading>
            <Text>Priority: {book.priority}</Text>
        </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
        <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
            Show more
            </Button>
            <Button variant="ghost" colorScheme="blue">
            Delete
            </Button>
        </ButtonGroup>
        </CardFooter>
    </Card>
  );
}

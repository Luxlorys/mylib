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

import { Book } from "../models/Book";
import { useContext } from "react";
import { BookDispatcherContext } from "../BookContext";

export default function BookCardChakra({ book }: { book: Book }) {
    const dispatcher = useContext(BookDispatcherContext);

    const handleDeleteButton = (bookId: number) => {
        console.log('clicked on id ' + book.id);
        console.log(dispatcher);
        dispatcher({type: 'deleted', payload: bookId});
    }

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
            <Button variant="solid" colorScheme="blue"> Show more </Button>
            <Button variant="ghost" colorScheme="blue" onClick={() => handleDeleteButton(book.id)}> Delete</Button>
        </ButtonGroup>
        </CardFooter>
    </Card>
  );
}

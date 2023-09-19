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
import { useDispatcher } from "../BookContext";
import DeleteButton from "./DeleteBook";

interface Props {
    book: Book
}

export default function BookCard({book}: Props) {
    const dispatch = useDispatcher();
    
    const handleDeleteButton = (bookId: number) => {
        console.log('clicked on id ' + bookId);    
        console.log(dispatch);
        if (dispatch !== null) {
            console.log(typeof dispatch);
            dispatch({ type: 'deleted', payload: bookId });
        }
    }

    return (
    <Card maxW="300px" bg='gray.100'>
        <CardBody>
        <Center>
        <Image
            src={book.img}
            minW='150px'
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
            <DeleteButton book={book} onDelete={() => handleDeleteButton(book.id)}/>
        </ButtonGroup>
        </CardFooter>
    </Card>
  );
}
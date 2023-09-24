import {
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
import ShowMoreButton from "./ShowMoreButton";

interface Props {
    book: Book
}

export default function BookCard({book}: Props) {
    const dispatch = useDispatcher();
    
    const handleDeleteButton = (bookId: string) => {
        dispatch !== null && dispatch({ type: 'deleted', payload: bookId });
    }

        const iconLink = (priority: 'low' | 'medium' | 'high') => {
        switch (priority) {
            case 'high':
                return require('../assets/icons/high.png');
            case 'medium':
                return require('../assets/icons/medium.png');
            case 'low':
                return require('../assets/icons/low.png');
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
            <Center>
            <Heading size="md">{book.title}</Heading>
            </Center>
            <Center>
            <Image maxW={50} src={iconLink(book.priority)} alt="priority_icon"/>
            </Center>
        </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
        <ButtonGroup spacing="2">
            <ShowMoreButton book={book} />
            <DeleteButton book={book} onDelete={() => handleDeleteButton(book.id)}/>
        </ButtonGroup>
        </CardFooter>
    </Card>
  );
}

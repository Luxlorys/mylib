import { Image, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Center } from "@chakra-ui/react";
import { Book } from "../models/Book";
import { ViewIcon } from "@chakra-ui/icons";

export default function ShowMoreButton({book}: {book: Book}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
        <Button variant="solid" colorScheme="blue" onClick={onOpen}>
            Show more
            <ViewIcon ml={2} />
        </Button>
        
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{book.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
            <Image
                mb='0.5'
                src={book.img}
                minW='150px'
                maxW='150px'
                alt="Green double couch with wooden legs"
                borderRadius="lg"
            />
            </Center>
            {book.description}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    );
}
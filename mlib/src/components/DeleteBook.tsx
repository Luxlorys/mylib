import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react"
import { Book } from "../models/Book"

export default function DeleteButton({book, onDelete}: {book: Book, onDelete: React.MouseEventHandler<HTMLElement>}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button variant='ghost' colorScheme="blue" onClick={onOpen}>Delete</Button>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Are you sure?</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
             Delete {book.title} book?
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onDelete}>
                Delete
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
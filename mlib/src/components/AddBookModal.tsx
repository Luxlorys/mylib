import { AddIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Select,
} from "@chakra-ui/react";
import { createRef } from "react";
import { Book } from "../models/Book";
import { useDispatcher } from "../BookContext";
import { v4 as uuid } from "uuid";


export default function BookModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const titleRef = createRef<HTMLInputElement>();
  const descriptionRef = createRef<HTMLInputElement>();
  const priorityRef = createRef<HTMLSelectElement>();
  const imgRef = createRef<HTMLInputElement>();
  
  const dispatch = useDispatcher();

  const book = (): Book => {
    const title = titleRef.current?.value || "";
    const description = descriptionRef.current?.value || "";
    const priority = (priorityRef.current?.value as "high" | "medium" | "low") || "low";
    const img = imgRef.current?.value || '';

    return {
      id: uuid(),
      title,
      description,
      priority,
      finished: false,
      date: new Date(),
      img,
    };
  };

  function handleAddBookButton(book: Book) {
    console.log(imgRef.current?.value);
    dispatch({type: 'added', payload: book})
  }

  return (
    <>
      <Button
        onClick={onOpen}
        variant={"solid"}
        colorScheme="teal"
        size={"sm"}
        leftIcon={<AddIcon />}
      >
        Add new book
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Add new book</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={titleRef} placeholder="Title" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input ref={descriptionRef} placeholder="Description" />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Choose priority</FormLabel>
                <Select ref={priorityRef} placeholder='Select option'>
                    <option value='hot'>hot</option>
                    <option value='medium'>medium</option>
                    <option value='low'>low</option>
                </Select>
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Image to link</FormLabel>
                <Input ref={imgRef} placeholder="link" />
            </FormControl>
          </ModalBody>
            
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => handleAddBookButton(book())}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

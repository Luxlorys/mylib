import { v4 as uuid } from "uuid";

export type Book = {
    id: string;
    title: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
    finished: boolean;
    date: Date;
    img: string;
}

export let initialBooks: Book[] = [
    {
        id: uuid(),
        title: 'Book-1',
        description: 'description description description',
        priority: 'high',
        finished: true,
        date: new Date(),
        img: 'https://content2.rozetka.com.ua/goods/images/big/232768606.jpg',
    },
    {
        id: uuid(),
        title: 'Book-2',
        description: 'description description description',
        priority: 'low',
        finished: false,
        date: new Date(),
        img: 'https://content2.rozetka.com.ua/goods/images/big/232768606.jpg',
    },
    {
        id: uuid(),
        title: 'Book-3',
        description: 'description description description',
        priority: 'medium',
        finished: true,
        date: new Date(),
        img: 'https://content2.rozetka.com.ua/goods/images/big/232768606.jpg',
    },
    {
        id: uuid(),
        title: 'Book-4',
        description: 'description description description',
        priority: 'low',
        finished: false,
        date: new Date(),
        img: 'https://content2.rozetka.com.ua/goods/images/big/232768606.jpg',
    },
    {
        id: uuid(),
        title: 'Silent patient',
        description: 'description description description',
        priority: 'low',
        finished: true,
        date: new Date(),
        img: 'https://content2.rozetka.com.ua/goods/images/big/232768606.jpg',
    },
];
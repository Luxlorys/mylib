export type Book = {
    id: number;
    title: string;
    description: string;
    priority: number;
    finished: boolean;
    date: Date;
    img: string;
}

export let initialBooks: Book[] = [
    {
        id: 1,
        title: 'Book-1',
        description: 'description description description',
        priority: 1,
        finished: true,
        date: new Date(),
        img: 'https://content2.rozetka.com.ua/goods/images/big/232768606.jpg',
    },
    {
        id: 2,
        title: 'Book-2',
        description: 'description description description',
        priority: 2,
        finished: false,
        date: new Date(),
        img: 'https://content2.rozetka.com.ua/goods/images/big/232768606.jpg',
    },
    {
        id: 3,
        title: 'Book-3',
        description: 'description description description',
        priority: 1,
        finished: true,
        date: new Date(),
        img: 'https://content2.rozetka.com.ua/goods/images/big/232768606.jpg',
    },
    {
        id: 4,
        title: 'Book-4',
        description: 'description description description',
        priority: 2,
        finished: false,
        date: new Date(),
        img: 'https://content2.rozetka.com.ua/goods/images/big/232768606.jpg',
    },
    {
        id: 5,
        title: 'Silent patient',
        description: 'description description description',
        priority: 1,
        finished: true,
        date: new Date(),
        img: 'https://content2.rozetka.com.ua/goods/images/big/232768606.jpg',
    },
];
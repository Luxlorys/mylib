export default interface Book {
    id: number,
    title: string, 
    desctiption: string,
    priority: number,
    finished: boolean
    date: Date,
    img: string
}

export let initialBooks = [
    {
        id: 1,
        title: 'Book-1',
        desctiption: 'description description description',
        priority: 1,
        finished: true,
        date: new Date(),
        img: 'https://content2.rozetka.com.ua/goods/images/big/232768606.jpg',
    },
    {
        id: 2,
        title: 'Book-2',
        desctiption: 'description description description',
        priority: 2,
        finished: false,
        date: new Date(),
        img: 'https://content2.rozetka.com.ua/goods/images/big/232768606.jpg',
    },
    {
        id: 3,
        title: 'Book-3',
        desctiption: 'description description description',
        priority: 1,
        finished: true,
        date: new Date(),
        img: 'https://content2.rozetka.com.ua/goods/images/big/232768606.jpg',
    },
    {
        id: 4,
        title: 'Book-4',
        desctiption: 'description description description',
        priority: 2,
        finished: false,
        date: new Date(),
        img: 'https://content2.rozetka.com.ua/goods/images/big/232768606.jpg',
    },
    {
        id: 5,
        title: 'Silent patient',
        desctiption: 'description description description',
        priority: 1,
        finished: true,
        date: new Date(),
        img: 'https://content2.rozetka.com.ua/goods/images/big/232768606.jpg',
    },
];
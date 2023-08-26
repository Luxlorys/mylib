interface Book {
    name: string, 
    desctiption: string,
    priority: number,
    finished: boolean
    date: Date,
}

export let books: Book[] = [
    {
        name: 'Book-1',
        desctiption: 'description description description',
        priority: 1,
        finished: false,
        date: new Date(),
    },
    {
        name: 'Book-2',
        desctiption: 'description description description',
        priority: 2,
        finished: true,
        date: new Date(),
    },
];
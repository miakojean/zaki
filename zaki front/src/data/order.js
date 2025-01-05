const order = {
    id: string,
    date: string,
    total: number,
    status: string,
    items: [
        {
            id: string,
            name: string,
            price: number,
            quantity: number,
            image: string,
        }
    ]
}
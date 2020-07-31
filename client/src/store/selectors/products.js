const getVisibleProducts = (products, { text, sortBy, startDate, endDate }) => {
    return products.filter(product => {
        const startDateMatch = typeof startDate !== 'number' || product.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || product.createdAt <= endDate;

        return startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

export default getVisibleProducts;
export function sortListByName(list) {
    const sortedList = [...list];
    sortedList.sort((a, b) => {
    if (a.product < b.product) {
        return -1;
    } else if (a.product > b.product) {
        return 1;
    }
    return 0;
    });

    return sortedList
}

export function sortListByPrice(list) {
    const sortedList = [...list];
    return sortedList.sort((a, b) => a.price - b.price);
}


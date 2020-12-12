export const GetSortOrder = (prop) => {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    };
};

export const paginateArray = (array, limit, page) => {
    return array.slice((page - 1) * limit, limit * page);
}

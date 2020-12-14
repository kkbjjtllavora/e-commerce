export const getSortOrder = (prop) => {
    const toTimestamp = (date) => Date.parse(date) / 1000;

    return function (a, b) {
        let propA, propB;

        if (prop === 'createdAt') {
            propA = toTimestamp(a[prop]);
            propB = toTimestamp(b[prop]);

            if (propA < propB) {
                return 1;
            } else if (propA > propB) {
                return -1;
            }
        } else {
            propA = a[prop];
            propB = b[prop];
        }

        if (propA > propB) {
            return 1;
        } else if (propA < propB) {
            return -1;
        }
        return 0;
    };
};

export const paginateArray = (array, limit, page) => {
    return array.slice((page - 1) * limit, limit * page);
};

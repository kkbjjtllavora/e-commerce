import mockData from "../constants/mockData";
import { GetSortOrder, paginateArray } from "./array";

export const getAsciiFaces = (sortString, limit = 40, page = 1) => {
    return new Promise((resolve, reject) => {
        if (!mockData) {
            return setTimeout(
                () => reject(new Error("Ascii faces not found!")),
                1500
            );
        }

        if (sortString) {
            mockData.sort(GetSortOrder(sortString));
        }

        const paginatedArray = paginateArray(mockData, limit, page);

        const data = {
            nextPage: page + 1,
            totalCount: mockData.length,
            results: paginatedArray,
        }

        setTimeout(() => resolve(data), 1500);
    });
};

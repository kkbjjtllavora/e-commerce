import mockData from '../constants/mockData';
import { getSortOrder, paginateArray } from './array';

export const MOCK_LOADING_TIME = 1500;

export const getAsciiFaces = (sortString, limit = 20, page = 1) => {
    return new Promise((resolve, reject) => {
        if (!mockData) {
            return setTimeout(
                () => reject(new Error('Ascii faces not found!')),
                MOCK_LOADING_TIME
            );
        }

        if (sortString) {
            mockData.sort(getSortOrder(sortString));
        }

        const paginatedArray = paginateArray(mockData, limit, page);

        const data = {
            nextPage: page + 1,
            totalCount: mockData.length,
            results: paginatedArray,
        };

        setTimeout(() => resolve(data), MOCK_LOADING_TIME);
    });
};

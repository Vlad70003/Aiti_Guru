import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { getAchievementLevelResponse, getAchievementLevelQuery } from './types';

const ENDPOINTS = {
    achievementLevel: '/achievement-level',
};

export const ACHIEVEMENT_LEVEL_SERVICE_API = createApi({
    reducerPath: 'AchievementLevelService',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),
    tagTypes: ['AchievementLevel'],
    endpoints: (builder) => ({
        getAchievementLevel: builder.mutation<getAchievementLevelResponse, getAchievementLevelQuery>({
            query: (params) => ({
                url: ENDPOINTS.achievementLevel,
                method: 'POST',
                params,
            }),
            invalidatesTags: ['AchievementLevel'],
        }),
    }),
});

export const { useGetAchievementLevelMutation } = ACHIEVEMENT_LEVEL_SERVICE_API;

import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';

// Api
import { METRICS_SERVICE_API } from '@/store/api/Metrics';
import { ACHIEVEMENT_LEVEL_SERVICE_API } from '@/store/api/AchievementLevel';
import { GENERAL_INDICATORS_SERVICE_API } from '@/store/api/GeneralIndicators';
import { NP_PARAMETERS_SERVICE_API } from '@/store/api/NpParameters';
import { NP_INDICATORS_SERVICE_API } from '@/store/api/NpIndicators';
import { ACTIVITIES_REGISTRY_SERVICE_API } from '@/store/api/ActivitiesRegistry';
import { NP_ACHIEVEMENTS_SERVICE_API } from '@/store/api/NpAchievments';
import { INDICATOR_COUNTS_SERVICE_API } from '@/store/api/IndicatorCounts';
import { CONTROL_POINTS_SERVICE_API } from '@/store/api/ControlPoints';
import { FINANCIAL_SOURCES_SERVICE_API } from '@/store/api/FinancialSources';
import { FINANCING_SERVICE_API } from '@/store/api/Financing';
import { MAP_SERVICE_API } from '@/store/api/MapRegions';
import { EXPORT_XLSX_API } from './api/ExportsXlSX';
import { FEDERAL_PROJECT_NAMES_SERVICE_API } from '@/store/api/FederalProjectNames';
import { FEDERAL_PROJECTS_ACHIEVEMENT_LEVEL_SERVICE_API } from '@/store/api/FederalProjects/AchievementLevel';
import { FP_PARAMETERS_SERVICE_API } from '@/store/api/FederalProjects/FpParameters';
import { DETAILS_FP_INDICATORS_SERVICE_API } from '@/store/api/FederalProjects/Indicators';
import { CONTROL_POINTS_BY_ID_SERVICE_API } from '@/store/api/ControlPointById';
import { UNACCEPTED_BUDGET_OBLIGATIONS_SERVICE_API } from './api/UnacceptedBudgetObligations';
import { PROJECT_CONTROL_DATA_SERVICE_API } from './api/ProjectControlData';
import { USER_API } from './api/User';
import { RESULT_PASSPORT_SERVICE_API } from './api/ResultPassport';
import { UNACHIEVED_PARAMETERS_SHARED_API } from './api/UnachivedParametersSharedApi';
import { NP_WITH_FP_SERVICE_API } from './api/NpWithFp';
import { NATIONAL_PROJECT_VERSION_SERVICE_API } from './api/NationalProjectVersion';
import { REPORT_EXPORT_STRUCTURE_SERVICE_API } from './api/ReportExportStructure';

// Reducers
import modalReducer from './slices/modalSlice';
import financialReducer from './slices/financialSlice';
import registryEventsReducer from './slices/registryEventsSlice';
import driverReducer from './slices/DraverSlice';
import periodReducer from './slices/IsPeriodSlice';
import federalProjectsFilterSliceReducer from './slices/federalProjectsFilterSlice';
import userReducer from './slices/UserSlice/UserSlice';
import periodWidgetsReducer from './slices/IsPeriodWidgetsSlice';
import roadMapFiltersReducer from './slices/roadMapFiltersSlice';
import nationalProjectVersionReducer from './slices/nationalProjectVersionSlice';
import financingUnitsReducer from '@/store/slices/financingUnitsSlice/financingUnitsSlice';
import globalLoadingReducer from '@/store/slices/GlobalLoadingSlice';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        [METRICS_SERVICE_API.reducerPath]: METRICS_SERVICE_API.reducer,
        [ACHIEVEMENT_LEVEL_SERVICE_API.reducerPath]: ACHIEVEMENT_LEVEL_SERVICE_API.reducer,
        [GENERAL_INDICATORS_SERVICE_API.reducerPath]: GENERAL_INDICATORS_SERVICE_API.reducer,
        [NP_PARAMETERS_SERVICE_API.reducerPath]: NP_PARAMETERS_SERVICE_API.reducer,
        [NP_INDICATORS_SERVICE_API.reducerPath]: NP_INDICATORS_SERVICE_API.reducer,
        [ACTIVITIES_REGISTRY_SERVICE_API.reducerPath]: ACTIVITIES_REGISTRY_SERVICE_API.reducer,
        [NP_ACHIEVEMENTS_SERVICE_API.reducerPath]: NP_ACHIEVEMENTS_SERVICE_API.reducer,
        [INDICATOR_COUNTS_SERVICE_API.reducerPath]: INDICATOR_COUNTS_SERVICE_API.reducer,
        [CONTROL_POINTS_SERVICE_API.reducerPath]: CONTROL_POINTS_SERVICE_API.reducer,
        [FINANCIAL_SOURCES_SERVICE_API.reducerPath]: FINANCIAL_SOURCES_SERVICE_API.reducer,
        [FINANCING_SERVICE_API.reducerPath]: FINANCING_SERVICE_API.reducer,
        [MAP_SERVICE_API.reducerPath]: MAP_SERVICE_API.reducer,
        [EXPORT_XLSX_API.reducerPath]: EXPORT_XLSX_API.reducer,
        [FEDERAL_PROJECT_NAMES_SERVICE_API.reducerPath]: FEDERAL_PROJECT_NAMES_SERVICE_API.reducer,
        [FP_PARAMETERS_SERVICE_API.reducerPath]: FP_PARAMETERS_SERVICE_API.reducer,
        [DETAILS_FP_INDICATORS_SERVICE_API.reducerPath]: DETAILS_FP_INDICATORS_SERVICE_API.reducer,
        [CONTROL_POINTS_BY_ID_SERVICE_API.reducerPath]: CONTROL_POINTS_BY_ID_SERVICE_API.reducer,
        [FEDERAL_PROJECTS_ACHIEVEMENT_LEVEL_SERVICE_API.reducerPath]:
            FEDERAL_PROJECTS_ACHIEVEMENT_LEVEL_SERVICE_API.reducer,
        [USER_API.reducerPath]: USER_API.reducer,
        [UNACCEPTED_BUDGET_OBLIGATIONS_SERVICE_API.reducerPath]: UNACCEPTED_BUDGET_OBLIGATIONS_SERVICE_API.reducer,
        [PROJECT_CONTROL_DATA_SERVICE_API.reducerPath]: PROJECT_CONTROL_DATA_SERVICE_API.reducer,
        [RESULT_PASSPORT_SERVICE_API.reducerPath]: RESULT_PASSPORT_SERVICE_API.reducer,
        [UNACHIEVED_PARAMETERS_SHARED_API.reducerPath]: UNACHIEVED_PARAMETERS_SHARED_API.reducer,
        [NP_WITH_FP_SERVICE_API.reducerPath]: NP_WITH_FP_SERVICE_API.reducer,
        [NATIONAL_PROJECT_VERSION_SERVICE_API.reducerPath]: NATIONAL_PROJECT_VERSION_SERVICE_API.reducer,
        [REPORT_EXPORT_STRUCTURE_SERVICE_API.reducerPath]: REPORT_EXPORT_STRUCTURE_SERVICE_API.reducer,

        modal: modalReducer,
        financial: financialReducer,
        registryEvents: registryEventsReducer,
        federalProjects: federalProjectsFilterSliceReducer,
        driver: driverReducer,
        period: periodReducer,
        user: userReducer,
        periodWidgets: periodWidgetsReducer,
        roadMapFilters: roadMapFiltersReducer,
        nationalProjectVersion: nationalProjectVersionReducer,
        financingUnits: financingUnitsReducer,
        globalLoading: globalLoadingReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [baseApi.util.resetApiState.type],
            },
        }).concat(
            baseApi.middleware,
            METRICS_SERVICE_API.middleware,
            ACHIEVEMENT_LEVEL_SERVICE_API.middleware,
            ACTIVITIES_REGISTRY_SERVICE_API.middleware,
            NP_ACHIEVEMENTS_SERVICE_API.middleware,
            GENERAL_INDICATORS_SERVICE_API.middleware,
            NP_PARAMETERS_SERVICE_API.middleware,
            NP_INDICATORS_SERVICE_API.middleware,
            INDICATOR_COUNTS_SERVICE_API.middleware,
            CONTROL_POINTS_SERVICE_API.middleware,
            FINANCIAL_SOURCES_SERVICE_API.middleware,
            FINANCING_SERVICE_API.middleware,
            MAP_SERVICE_API.middleware,
            EXPORT_XLSX_API.middleware,
            FEDERAL_PROJECT_NAMES_SERVICE_API.middleware,
            FEDERAL_PROJECTS_ACHIEVEMENT_LEVEL_SERVICE_API.middleware,
            FP_PARAMETERS_SERVICE_API.middleware,
            DETAILS_FP_INDICATORS_SERVICE_API.middleware,
            USER_API.middleware,
            CONTROL_POINTS_BY_ID_SERVICE_API.middleware,
            UNACCEPTED_BUDGET_OBLIGATIONS_SERVICE_API.middleware,
            PROJECT_CONTROL_DATA_SERVICE_API.middleware,
            RESULT_PASSPORT_SERVICE_API.middleware,
            UNACHIEVED_PARAMETERS_SHARED_API.middleware,
            NP_WITH_FP_SERVICE_API.middleware,
            NATIONAL_PROJECT_VERSION_SERVICE_API.middleware,
            REPORT_EXPORT_STRUCTURE_SERVICE_API.middleware
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

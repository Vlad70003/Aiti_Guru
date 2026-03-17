export type getAchievementLevelFederalProject = {
    id: number;
    government_document_id: number;
    name: string;
    achievement: number;
    not_achieved_in_period?: number;
    activities_deviation_count?: number;
    control_points_overdue?: number;
    federal_budget_deviation_from_plan?: number | null;
    np_foiv_not_achieved_indicator?: string | null;
    np_not_achieved_in_period?: number;
    foiv_not_achieved_indicator?: string | null;
    foiv_not_achieved_activities?: string | null;
    foiv_not_achieved_control_points?: string | null;
    failed_results_count?: number;
    foiv_failed_results?: string | null;
};

export type getAchievementLevelData = {
    national_project_achievement: number;
    federal_projects: getAchievementLevelFederalProject[];
};

export type getAchievementLevelResponse = {
    status: number;
    data: getAchievementLevelData;
    error: null;
};

export type getAchievementLevelQuery = {
    startDate: string;
    endDate: string;
    govDocId?: number;
};

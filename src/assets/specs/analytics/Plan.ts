import { Integration, Spec } from "../Spec";

export const Plan: Spec = {
    name: 'Plan | Player Analytics',
    url: "https://github.com/plan-player-analytics/Plan",
    developerTooling: Integration.YES,
    community: {
        bounceAnalytics: Integration.YES,
        growthAnalytics: Integration.YES,
        geolocationAnalytics: Integration.YES,
        playtimeAnalytics: Integration.YES,
        peakPlayersLog: Integration.YES,
        gameStats: Integration.YES,
        playtimeHabits: Integration.YES,
        votingSitePerformance: Integration.PARTIAL
    },
}
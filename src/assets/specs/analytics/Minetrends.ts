import { Integration, Spec } from "../Spec";

export const Minetrends: Spec = {
    id: 'minetrends',
    preferred: 'community',
    name: 'Minetrends',
    url: "https://minetrends.com/",
    community: {
        staffMembers: Integration.YES_PAID,
        playtimeHabits: Integration.YES_PAID,
        peakPlayersLog: Integration.YES,
        growthAnalytics: Integration.PARTIAL_PAID,
        engagementSurveys: Integration.PARTIAL,
        geolocationAnalytics: Integration.PARTIAL
    },
    website: {
        elements: Integration.PARTIAL_PAID
    }
}
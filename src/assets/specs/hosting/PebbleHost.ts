import { Integration, Spec } from "../Spec";

export const PebbleHost: Spec = {
    id: 'pebblehost',
    preferred: 'hosting',
    name: 'PebbleHost',
    url: "https://pebblehost.com/",
    developerTooling: Integration.YES,
    hosting: {
        justYourGame: Integration.YES,
        dedicatedPricing: 37.50,
        hardwareInformation: Integration.PARTIAL,
        detailedAnalytics: Integration.YES,
    }

}
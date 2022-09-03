import { Integration, Spec } from "../Spec";

export const Hetzner: Spec = {
    id: 'hetzner',
    preferred: 'hosting',
    name: 'Hetzner',
    url: "https://www.hetzner.com/",
    hosting: {
        bringYourInfrastructure: Integration.YES_PAID,
        hourlyBasedBilling: Integration.YES,
        routingRules: Integration.YES,
        dedicatedPricing: 26.44,
        hardwareInformation: Integration.PARTIAL,
        softwareInformation: Integration.YES,
        eventHistory: Integration.YES,
        detailedAnalytics: Integration.YES,
    }

}
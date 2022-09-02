import { Integration, Spec } from "../Spec";

export const CraftingStore: Spec = {
    name: 'CraftingStore',
    url: "https://craftingstore.net/",
    developerTooling: Integration.PARTIAL,
    monetization: {
        directFunds: Integration.YES,
        worldwidePaymentsProcessing: Integration.YES,
        unlimitedPackages: Integration.YES,
        discordSupport: Integration.YES,
        sales: Integration.YES_PAID,
        coupons: Integration.YES,
        giftcards: Integration.YES_PAID,
        instantActions: Integration.YES_PAID,
        recurringPayments: Integration.YES_PAID,
        checkoutVariables: Integration.YES_PAID,
    },
    community: {
        staffMembers: Integration.PARTIAL,
    },
    website: {
        secureTraffic: Integration.YES,
        adFree: Integration.YES,
        customizableLayout: Integration.YES_PAID,
        customizableStyle: Integration.YES,
    }
}
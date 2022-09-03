import { Integration, Spec } from "../Spec";

export const Tebex: Spec = {
    id: 'tebex',
    preferred: 'monetization',
    name: 'tebex.io',
    akas: ['Buycraft'],
    url: "https://tebex.io/",
    developerTooling: Integration.PARTIAL,
    monetization: {
        worldwidePaymentsProcessing: Integration.YES,
        instantActions: Integration.YES,
        unlimitedPackages: Integration.YES,
        recurringPayments: Integration.YES,
        multipleServerSupport: Integration.YES,
        multipleGameSupport: Integration.YES,
        discordSupport: Integration.YES,
        sales: Integration.YES_PAID,
        coupons: Integration.YES_PAID,
        giftcards: Integration.YES_PAID,
        abandonedBasketRecovery: Integration.YES_PAID,
        purchaseFollowups: Integration.YES_PAID,
        upselling: Integration.YES_PAID,
        accountSync: Integration.PARTIAL,
        refundManagement: Integration.PARTIAL,
        disputeManagement: Integration.PARTIAL,
        officialPartnerships: Integration.YES,
        detailedAnalytics: Integration.PARTIAL,
        giftingOptions: Integration.PARTIAL,
    },
    website: {
        secureTraffic: Integration.YES,
        customizableLayout: Integration.YES_PAID,
        customizableStyle: Integration.YES,
        embedding: Integration.YES,
        adFree: Integration.YES
    }
}
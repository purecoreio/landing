export enum Integration {
    PARTIAL = 0,
    YES = 1,
    PARTIAL_PAID = 2,
    YES_PAID = 3,
    PLANNED = 4
}

export type Spec = {

    name: string,
    akas?: string[],
    url: string,
    developerTooling?: Integration,

    monetization?: {
        worldwidePaymentsProcessing?: Integration,
        instantActions?: Integration,
        unlimitedPackages?: Integration,
        recurringPayments?: Integration,
        multipleServerSupport?: Integration,
        multipleGameSupport?: Integration,
        discordSupport?: Integration,
        sales?: Integration,
        coupons?: Integration,
        giftcards?: Integration,
        abandonedBasketRecovery?: Integration,
        purchaseFollowups?: Integration,
        metadataDrivenDiscounts?: Integration,
        giftingOptions?: Integration,
        upselling?: Integration,
        unifiedPayments?: Integration,
        directFunds?: Integration,
        refundPolicy?: Integration,
        accountSync?: Integration
        refundManagement?: Integration,
        disputeManagement?: Integration,
        creditFallback?: Integration,
        smartDetection?: Integration,
        easyProfileSelector?: Integration,
        billingDataAutofill?: Integration,
        officialPartnerships?: Integration,
        checkoutVariables?: Integration,
        signedVariables?: Integration,
        nativePerkLists?: Integration,
        googleAnalytics?: Integration,
        detailedAnalytics?: Integration,
        spendingHabits?: Integration,
    }

    hosting?: {
        bringYourInfrastructure?: Integration,
        dataMigration?: Integration,
        hourlyBasedBilling?: Integration,
        autoscaling?: Integration,
        routingRules?: Integration,
        justYourGame?: Integration,
        dedicatedPricing: number,
        hardwareInformation?: Integration,
        softwareInformation?: Integration,
        geoRelay?: Integration,
        eventHistory?: Integration,
        exceptionGrouping?: Integration,
        detailedAnalytics?: Integration,
    }

    website?: {
        secureTraffic?: Integration,
        advancedIdentity?: Integration,
        sessionProvider?: Integration,
        customizableLayout?: Integration,
        customizableStyle?: Integration,
        elements?: Integration,
        embedding?: Integration,
        adFree?: Integration,
        detailedAnalytics?: Integration,
        googleAnalytics?: Integration,
    }

    community?: {
        newsletter?: Integration,
        votingSitePerformance?: Integration,
        votingSiteEngagement?: Integration,
        growthAnalytics?: Integration,
        peakPlayersLog?: Integration,
        playtimeAnalytics?: Integration,
        gameStats?: Integration,
        playtimeHabits?: Integration,
        playerRelationshipAnalytics?: Integration,
        trendNotifications?: Integration,
        bounceAnalytics?: Integration,
        engagementSurveys?: Integration,
        leaderDetection?: Integration,
        googleAnalytics?: Integration,
        staffMembers?: Integration,
        geolocationAnalytics?: Integration,
    }

}
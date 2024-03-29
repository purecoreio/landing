import { Minetrends } from "./analytics/Minetrends";
import { Plan } from "./analytics/Plan";
import { Hetzner } from "./hosting/Hetzner";
import { PebbleHost } from "./hosting/PebbleHost";
import { CraftingStore } from "./monetization/CraftingStore";
import { Tebex } from "./monetization/Tebex";
import { Ours } from "./Ours";

export const Specs = {
    ours: Ours,
    others: [
        Tebex,
        CraftingStore,
        PebbleHost,
        Hetzner,
        Minetrends,
        Plan
    ]
}
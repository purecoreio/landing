import { Minetrends } from "./analytics/Minetrends";
import { Plan } from "./analytics/Plan";
import { Hetzner } from "./hosting/Hetzner";
import { PebbleHost } from "./hosting/PebbleHost";
import { CraftingStore } from "./monetization/Craftingstore";
import { Tebex } from "./monetization/Tebex";
import { Ours } from "./Ours";

export const Specs = {
    ours: Ours,
    others: {
        tebex: Tebex,
        craftingstore: CraftingStore,
        pebbleHost: PebbleHost,
        hetzner: Hetzner,
        minetrends: Minetrends,
        plan: Plan
    }
}
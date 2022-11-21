import { GetMatchingOrdersFnArgs } from "src/shared";

export type MatchOrdersFnArgs = GetMatchingOrdersFnArgs & { orderIds: string[], account: string };

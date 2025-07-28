import type { ITile, TileChargeable } from "$lib/models/Tile.svelte";


export class TypeGuardUtil {

    static isChargeableTile(tile: ITile): tile is TileChargeable {
        return tile.type === "property" || tile.type === "tax";
    }

}

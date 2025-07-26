import type { Tile } from "$lib/models/Tile.svelte"
import type { PropertyTile } from "$lib/models/PropertyTile.svelte"


export class TypeGuardUtil {

    static isBuyableTile(tile: Tile): tile is PropertyTile {
        return tile.type === "property";
    }

}

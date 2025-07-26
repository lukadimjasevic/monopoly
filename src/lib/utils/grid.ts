import type { Tile } from "$lib/models/Tile.svelte";

export interface GridPosition {
    col: number,
    row: number,
};


export class GridUtil {
    
    static getGridPosition(tile: Tile): GridPosition {
        /*  id    x=col  y=row
            0 -> (1, 11) "Kreni"
            1 -> (1, 10)
            2 -> (1, 9)
            ...
            10 -> (1, 1) "U posjeti"
            
            11 -> (2, 1)
            12 -> (3, 1)
            13 -> (4, 1)
            ...
            20 -> (11, 1) "Parkiralište"
            
            21 -> (11, 2)
            22 -> (11, 3)
            29 -> (11, 10)
            ...
            30 -> (11, 11) "Zatvor"
            
            31 -> (10, 11)
            32 -> (9, 11)
            33 -> (8, 11)
            ...
            39 -> (2, 11)
        */
        const id = tile.id;
        if (id >= 0 && id <= 10) {
            return { col: 1, row: 11 - id };
        }
        else if (id >= 11 && id <= 20) {
            return { col: id - 9, row: 1 };
        }
        else if (id >= 21 && id <= 30) {
            return { col: 11, row: id - 19 };
        }
        else if (id >= 31 && id <= 39) {
            return { col: 41 - id, row: 11 };
        } else {
            return { col: 0, row: 0 };
        }
    }

    static getPlayerPosition(tile: Tile): GridPosition {
        return this.getGridPosition(tile);
    }

    static getTileRotationDegree(tile: Tile): number {
        const id = tile.id;
        if (id >= 1 && id <= 9) return 90;
        else if (id >= 21 && id <= 29) return -90;
        else return 0;
    }
}

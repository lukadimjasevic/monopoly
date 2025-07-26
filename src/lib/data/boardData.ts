import { Tile } from "../models/Tile.svelte";
import { StartTile } from "$lib/models/StartTile.svelte";
import type { TileType } from "../models/Tile.svelte";
import { PropertyTile } from "$lib/models/PropertyTile.svelte";
import { CommunityTile } from "$lib/models/CommunityTile.svelte";
import { TaxTile } from "$lib/models/TaxTile.svelte";
import { ChanceTile } from "$lib/models/ChanceTile.svelte";
import { JailTile } from "$lib/models/JailTile.svelte";
import { ParkingTile } from "$lib/models/ParkingTile.svelte";
import { GoToJailTile } from "$lib/models/GoToJailTile.svelte";

export interface TileData {
    id: number;
    name: string;
    type: TileType;
    price?: number;
}

export const boardTiles: Tile[] = [
    new StartTile(0, "Kreni"),
    new PropertyTile(1, "Jeretova ulica", 60),
    new CommunityTile(2, "Državna blagajna"),
    new PropertyTile(3, "Zagrebačka ulica", 60),
    new TaxTile(4, "Porez na dobit", 200),
    new PropertyTile(5, "Zagrebački glavni kolodvor", 200),
    new PropertyTile(6, "Decumanus", 100),
    new ChanceTile(7, "Šansa"),
    new PropertyTile(8, "Duga ulica", 100),
    new PropertyTile(9, "Županijska ulica", 120),
    new JailTile(10, "U posjetu"),
    new PropertyTile(11, "Ulica J. P. Kamova", 140),
    new PropertyTile(12, "Elektra", 150),
    new PropertyTile(13, "Obala Lazareta", 140),
    new PropertyTile(14, "Maksimirska ulica", 160),
    new PropertyTile(15, "Riječki željeznički kolodvor", 200),
    new PropertyTile(16, "Ulica S. Radića", 180),
    new CommunityTile(17, "Državna blagajna"),
    new PropertyTile(18, "Istarska ulica", 180),
    new PropertyTile(19, "Kapucinska ulica", 200),
    new ParkingTile(20, "Besplatno parkiranje"),
    new PropertyTile(21, "Zametska ulica", 220),
    new ChanceTile(22, "Šansa"),
    new PropertyTile(23, "Kalelarga", 220),
    new PropertyTile(24, "Trg pučkih kapetana", 240),
    new PropertyTile(25, "Osječki glavni kolodvor", 200),
    new PropertyTile(26, "Forum", 260),
    new PropertyTile(27, "Trg Kralja Tomislava", 260),
    new PropertyTile(28, "Vodovod", 150),
    new PropertyTile(29, "Zrinska ulica", 280),
    new GoToJailTile(30, "Idite u zatvor"),
    new PropertyTile(31, "Trg bana Jelačića", 300),
    new PropertyTile(32, "Korzo", 300),
    new CommunityTile(33, "Državna blagajna"),
    new PropertyTile(34, "Prokurativa", 330),
    new PropertyTile(35, "Željeznička stanica Slavonski Brod", 200),
    new ChanceTile(36, "Šansa"),
    new PropertyTile(37, "Stradun", 350),
    new TaxTile(38, "Super porez", 100),
    new PropertyTile(39, "Ilica", 400),
];

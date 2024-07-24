import { EggItem } from "@/pages/egg-items/[id]";
import { NonVegItem } from "@/pages/non-veg-items/[id]";
import { VegItem } from "@/pages/veg-items/[id]";
import { atom } from "jotai";

export const eggAtom = atom<EggItem[]>([]);
export const vegAtom = atom<VegItem[]>([]);
export const nonvegAtom = atom<NonVegItem[]>([]);

// export const eggAtomWithSetter = atom(
//   (get) => get(eggAtom),
//   (get, set, newEggData) => set(eggAtom, newEggData)
// );

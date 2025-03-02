import {MetalStatut, Statut} from "../types/Statut.ts";


export function getRandomEnumValue<T>(anEnum: T): T[keyof T] {
    //save enums inside array
    const enumValues = Object.keys(anEnum) as Array<keyof T>;

    //Generate a random index (max is array length)
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    // get the random enum value
    const randomEnumKey = enumValues[randomIndex];
    return anEnum[randomEnumKey];
}

export function randomStatut():Statut {
    const rang: number = Math.floor(Math.random() * 5) + 1;
    const numMetal: number = Math.floor(Math.random() * 20);
    let metalStatut: MetalStatut = MetalStatut.bronze;
    if (numMetal >= 12)  {
        metalStatut = MetalStatut.argent;
        if (numMetal >= 20)  {
            metalStatut = MetalStatut.or;
        }
    }
    return {rang, metalStatut};
}

export function getRandomInt(num: number): number {
    return Math.floor(Math.random() * num) + 1;
}

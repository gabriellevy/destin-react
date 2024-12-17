export type Perso = {
    name: string;
    sex: 'male' | 'female' | 'other';
    job: string;
    ageInDays: number;
    height: number; // in cm
    weight: number; // in kg
    nationality: string;
    skills: string[];
    backstory: string;
    [key: string]: any; // Allow for dynamic properties
};

export const defaultCharacter: Perso = {
    name: "John Doe",
    sex: "male",
    job: "Adventurer",
    ageInDays: 10950, // Approximately 30 years
    height: 180,
    weight: 80,
    nationality: "American",
    skills: ["Swordsmanship", "Survival", "Diplomacy"],
    backstory: "A brave adventurer seeking fortune and glory."
};
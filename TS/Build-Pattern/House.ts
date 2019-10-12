import { Material } from "./Material";

export class House{
    public parts: string[] = [];
    public type: Material;

    public listParts(): void {
        console.log(`House type: ${this.type}\n`);
        console.log(`House parts: ${this.parts.join(', ')}\n`);
    }
}
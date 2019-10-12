import { Builder } from "./builder";
import { House } from "./House";
import { Material } from "./Material";

export class ConcreteHouseBuilder implements Builder{
    private house: House;

    constructor(){
        this.reset();
    }

    public reset(): void{
        this.house = new House();
    }

    setWall(): void {
        this.house.parts.push('Concrete wall');
    }    

    setDoor(): void {
        this.house.parts.push('Concrete door');
    }

    setWindow(): void {
        this.house.parts.push('Concrete window');
    }

    setGround(): void {
        this.house.parts.push('Concrete ground');
    }

    setRoof(): void {
        this.house.parts.push('Concrete roof');
    }

    setType(): void{
        this.house.type = Material.CONCRETE;
    }

    public getHouse(): House{
        const house = this.house;
        this.reset();
        return house;
    }

}
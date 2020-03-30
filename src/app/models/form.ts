import {Deserializable} from "./deserializable";

export class Form implements Deserializable {
    name: string;
    description: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}

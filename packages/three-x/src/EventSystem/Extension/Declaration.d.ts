import {Object3D} from "three"

declare module "three" {
    interface Object3D {
        newFun(): void;
    }
}
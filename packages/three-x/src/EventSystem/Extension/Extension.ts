import {Object3D} from "three"

Object3D.prototype.newFun = function() {
    console.log("newFun", this)
}
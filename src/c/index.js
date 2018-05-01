import createEmptyArray from "create-empty-array";
import hi from "./util";
import anotherDifferentDependency from "./anotherDifferentDependency";

console.log(createEmptyArray);
hi();
anotherDifferentDependency();
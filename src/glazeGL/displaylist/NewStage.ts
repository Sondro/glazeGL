import { NewDisplayObject } from "./NewDisplayObject.js";
import { NewDisplayObjectContainer } from "./NewDisplayObjectContainer.js";

export class NewStage extends NewDisplayObjectContainer {
    constructor() {
        super();
        this.id = "Stage";
        this.worldAlpha = this.alpha;
    }

    public updateTransform() {
        const stack:Array<NewDisplayObject> = [this];
        var top = 1;
        while (top>0) {
            const node = stack[--top];
            for (const child of this.children) {
                child.transform.updateTransform(node.transform);
                if (node.children.length) {
                    stack[top++] = child;
                }
            }
        }
    }
}
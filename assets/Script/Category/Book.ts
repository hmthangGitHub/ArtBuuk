import PreviewVariable from "../PreviewVariable";


// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Book extends cc.Component {

    public productID : string= "01";
    @property
    public mouseEnterScaling = 1.05;
    private mouseEnterAction : cc.FiniteTimeAction = null;
    private mouseLeaveAction : cc.FiniteTimeAction = null;
    start()
    {
        this.mouseEnterAction = cc.scaleTo(0.05, this.mouseEnterScaling, this.mouseEnterScaling);
        this.mouseLeaveAction = cc.scaleTo(0.05, 1, 1);
        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
    }
    public onBookClick()
    {
        if(CC_PREVIEW)
        {
            PreviewVariable.currentBook = this.productID;
            cc.director.loadScene("Book");
        }
        else
        {
            PreviewVariable.currentBook = this.productID;
            cc.director.loadScene("Book");
        }
    }

    onDestroy()
    {
        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
        this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
    }

    onMouseEnter()
    {
        cc.log("ENTER");
        this.node.runAction(this.mouseEnterAction);
    }

    onMouseLeave()
    {
        cc.log("LEAVE");
        this.node.runAction(this.mouseLeaveAction);
    }
}

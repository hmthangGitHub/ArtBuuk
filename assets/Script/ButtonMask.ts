import PreviewVariable from "./PreviewVariable";

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
export default class ButtonMask extends cc.Component {
    @property
    public mouseEnterScaling = 1.05;
    private mouseEnterAction : cc.FiniteTimeAction = null;
    private mouseLeaveAction : cc.FiniteTimeAction = null;
    @property(cc.Node)
    public mask : cc.Node = null;
    start()
    {
        this.mouseEnterAction = cc.fadeTo(0.05, 128);
        this.mouseLeaveAction = cc.fadeTo(0.05, 0);
        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
    }

    onDestroy()
    {
        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
        this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
    }

    onMouseEnter()
    {
        cc.log("ENTER");
        this.mask.runAction(this.mouseEnterAction);
    }

    onMouseLeave()
    {
        cc.log("LEAVE");
        this.mask.runAction(this.mouseLeaveAction);
    }
}

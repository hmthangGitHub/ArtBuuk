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
export default class ParalaxPageView extends cc.Component {

    private pageView : cc.PageView =  null;
    @property(cc.Node)
    public background : cc.Node  = null;
    @property
    public speedRatio = 0.25;
    private pageViewContent :cc.Node = null;
    private oldContentPos = 0;

    @property(cc.Node)
    public labels : cc.Node  = null;

    start () {
        this.pageView = this.node.getComponent(cc.PageView);
        this.pageViewContent = this.pageView.content;
        this.oldContentPos = this.pageViewContent.x;
    }

    update(dt)
    {
        let delta = this.pageViewContent.x - this.oldContentPos;
        this.oldContentPos = this.pageViewContent.x;
        this.background.x += delta * this.speedRatio;

        this.labels.x += delta * 2;

        // cc.log("this.pageView.brake" + this.pageView.brake);
        // cc.log("this.pageView.autoPageTurningThreshold "+this.pageView.autoPageTurningThreshold);
        // cc.log("this.pageView.autoPageTurningThreshold "+ this.pageView.autoPageTurningThreshold);
    }
}

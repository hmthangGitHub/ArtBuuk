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
export default class PageViewAnimationController extends cc.Component {

    private isZoomIn = false;
    private animation : cc.Animation  = null;

    @property([cc.Node])
    public zoomInActiveNodes : cc.Node[] = [];
    @property([cc.Node])
    public zoomInDisableNodes : cc.Node[] = [];
    @property([cc.Node])
    public zoomOutActiveNodes : cc.Node[] = [];
    @property([cc.Node])
    public zoomOutDisableNodes : cc.Node[] = [];

    start()
    {
        this.animation = this.node.getComponent(cc.Animation);
    }
    public in()
    {
        if(!this.isZoomIn)
        {
            this.isZoomIn = true;
            this.animation.play("In");
            // this.animation.on("finished", this.finishedIn);
        }
    }

    public out()
    {
        if(this.isZoomIn)
        {
            this.isZoomIn = false;
            this.animation.play("Out");
            
        }
    }

    public finishedIn()
    {
        this.zoomInActiveNodes.forEach(node => {
            node.active = true;
        });
        this.zoomInDisableNodes.forEach(node => {
            node.active = false;
        });
    }

    public finishedOut()
    {
        this.zoomOutActiveNodes.forEach(node => {
            node.active = true;
        });
        this.zoomOutDisableNodes.forEach(node => {
            node.active = false;
        });
    }
}

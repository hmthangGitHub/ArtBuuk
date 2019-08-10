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
export default class SubCategoriesAnim extends cc.Component {

    private allSubs : cc.Node[] = [];
    private currentSub = 0;
    @property(Number)
    public fadeDuration = 0.9;
    private fadeInAction : cc.FiniteTimeAction = null;


    onLoad () {
        this.fadeInAction = cc.fadeIn(this.fadeDuration);
        this.node.children.forEach(subCate => {
            this.allSubs.push(subCate);
            subCate.opacity = 0;
        });
    }

    

    onEnable()
    {
        this.currentSub = 0;
        this.allSubs.forEach(subCate => {
            subCate.opacity = 0;
        });
        this.fadeIn();
    }

    update()
    {
        
    }

    fadeIn()
    {
        this.allSubs[this.currentSub].runAction(
            cc.sequence(this.fadeInAction, cc.callFunc(this.oneFadeInFinished, this))
        );
    }

    oneFadeInFinished()
    {
        if(this.currentSub < this.allSubs.length - 1)
        {
            this.currentSub++;
            this.fadeIn();
        }
    }

    onDisable()
    {
        this.allSubs.forEach(subCate => {
            subCate.stopAllActions();
        });
    }

    // update (dt) {}
}

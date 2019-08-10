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
export default class Categories extends cc.Component {
    private cateButtons: cc.Node[] = [];
    private currentCategories : string = "";
    @property(cc.Node)
    public unSelectButton: cc.Node = null;
    start()
    {
        let buttonContainer = this.node.getChildByName("Buttons");
        buttonContainer.children.forEach(cate => {
            this.cateButtons.push(cate);
        });
    }
    
    public chooseCate(event, customData)
    {
        let currentCateButton : cc.Node =  event.target;
        if(this.currentCategories === currentCateButton.name)
        {
            return;
        }
        else
        {
            if(this.unSelectButton)
            {
                this.unSelectButton.active = true;
            }
            this.currentCategories = currentCateButton.name;
            
            this.cateButtons.forEach(button => {
                let backGround = button.getChildByName("Background");
                let subCate = button.getChildByName("SubCategories");
                if(backGround) backGround.active = false;
                if(subCate) subCate.active = false;
            });
            currentCateButton.getChildByName("Background").active = true;
            currentCateButton.getChildByName("SubCategories").active = true;
        }
        
    }

    public chooseSubCate(event, customData)
    {
        if(CC_PREVIEW)
        {
            PreviewVariable.currentCate = event.target.getComponent(cc.Label).string;        
            cc.director.loadScene('Category');
        }
        else
        {
            PreviewVariable.currentCate = event.target.getComponent(cc.Label).string;        
            cc.director.loadScene('Category');
        }
    }

    public unSelectAll()
    {
        this.currentCategories = "";
        this.cateButtons.forEach(button => {
            let backGround = button.getChildByName("Background");
            let subCate = button.getChildByName("SubCategories");
            if(backGround) backGround.active = false;
            if(subCate) subCate.active = false;
        });
        if(this.unSelectButton)
        {
            this.unSelectButton.active = false;
        }

    }


}

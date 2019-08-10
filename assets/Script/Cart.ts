import Utils from "./Common/Utils";


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
export default class Cart extends cc.Component {
    private isIdle = true;
    private isTouching = false;
    @property(cc.Label)
    public number : cc.Label  =null;
    @property(cc.Animation)
    public anim : cc.Animation = null;
    @property(cc.Node)
    public cartNode : cc.Node = null;
    start()
    {
        this.checkCart();
        this.schedule(this.checkCart, 1.0, cc.macro.REPEAT_FOREVER, 0);
        
        this.cartNode.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
        this.cartNode.on(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
    }

    checkCart()
    {
        let cart : Object=  Utils.getCart();
        if(cart != null)
        {
            let productIDs = Object.keys(cart);
            if(productIDs.length > 0)
            {
                if(this.isIdle && !this.isTouching)
                {
                    this.isIdle = false;
                    this.anim.play();
                }
            }
            this.number.string = productIDs.length.toString();
        }
        else
        {
            Utils.saveCart([]);
            this.number.string = "0";
        }
    }

    onMouseEnter()
    {
        this.anim.stop();
        this.isTouching = true;
        this.isIdle = true;
    }
    onMouseLeave()
    {
        this.isTouching = false;
    }



}

import Utils from "./Common/Utils";
import BookProperties from "./Book/BookProperties";

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
export default class AddToCart extends cc.Component {

     
    @property(cc.EditBox)
    public bookNumberEditBox : cc.EditBox = null;
    @property(BookProperties)
    public bookProperties : BookProperties = null;
    public increase()
    {
        let number = Number.parseInt(this.bookNumberEditBox.string);
        number++;
        number = Math.min(number, 99);
        this.bookNumberEditBox.string = number.toString();
    }
    public decrease()
    {
        let number = Number.parseInt(this.bookNumberEditBox.string);
        number--;
        number = Math.max(number, 1);
        this.bookNumberEditBox.string = number.toString();
    }

    public onTextChange()
    {
        let number = Number.parseInt(this.bookNumberEditBox.string);
        number = Math.max(number, 1);
        this.bookNumberEditBox.string = number.toString();
    }

    public addToCart()
    {
        let cart :Object = Utils.getCart();
        cart[this.bookProperties.bookID] = this.bookNumberEditBox.string;
        Utils.saveCart(cart);
    }

}

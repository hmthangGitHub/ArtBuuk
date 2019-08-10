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
export default class NewClass extends cc.Component {

    onLoad()
    {
        // if(cc.screen['fullScreen']()){
        //     // Exit full screen
        //     cc.screen['exitFullScreen'](document.getElementById('idOfCanvasParent'));
        // } else{
        //     cc.screen['requestFullScreen'](document.getElementById('idOfCanvasParent'), () => {
        //         // Full screen completed
        //     });
        // }

        //cc.screen.requestFullScreen()
        
    }
    start () {
        this.node.getComponent(cc.Label).string = "What the fuck";
        this.node.getComponent(cc.Animation).play("yo - 001");

        //let canvas = document.querySelector('canvas');
        //canvas.width = window.innerWidth;
        //canvas.height = window.innerHeight;
    }

    update (dt) {
        // console.log("update");
    }
}

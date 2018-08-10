//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timerNum = 10; // 倒计数数
        _this.num = 10;
        /**
         * 倒计时动画
         */
        _this.questionNum = 1; // 第几题
        _this.answerStep = 1; // 答题步骤
        _this.questionType = 'select';
        _this.userSelect = 0;
        _this._source = [
            'resource/assets/Poetry-2x/bs_normal@2x.png',
            'resource/assets/Poetry-2x/bs_right@2x.png',
            'resource/assets/Poetry-2x/bs_wrong@2x.png',
            'resource/assets/Poetry-2x/bs_xz@2x.png',
            'resource/assets/Poetry-2x/bs_bigright@2x.png',
            'resource/assets/Poetry-2x/bs_bigwrong@2x.png',
            'resource/assets/Poetry-2x/bs_tk@2x.png',
            'resource/assets/Poetry-2x/bs_cright@2x.png',
            'resource/assets/Poetry-2x/bs_cwrong@2x.png' // 填空题 错
        ];
        // 填充位置
        _this.fillLocate = 1;
        return _this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        this.makeWebSocket();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("poetry", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        // 背景图
        var bg = this.createBitmapByName('app_bg@2x_png');
        this.addChild(bg);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        bg.width = stageW;
        bg.height = stageH;
        // // 左上角返回
        // let back = this.createBitmapByName('bs_fh@2x_png');
        // back.x = 30;
        // back.y = 50;
        // this.addChild(back);
        // // 右上角分享
        // let share = this.createBitmapByName('bs_dd@2x_png');
        // share.x = stageW-40;
        // share.y = 50;
        // this.addChild(share);
        // 头部中间信息
        var title = new egret.TextField();
        title.textColor = 0xffffff;
        title.textAlign = egret.HorizontalAlign.CENTER;
        title.width = stageW;
        title.size = 36;
        title.y = 50;
        title.text = '比赛';
        this.addChild(title);
        // 头部信息背景图
        var topBg = this.createBitmapByName('bs_gd@2x_png');
        topBg.x = 25;
        topBg.y = 140;
        topBg.width = stageW - 50;
        this.addChild(topBg);
        // 头部信息
        this.author = new egret.TextField();
        this.author.textColor = 0xffffff;
        this.author.y = 158;
        this.author.x = 40;
        this.author.size = 25;
        this.author.text = '作者：林夕abcd';
        this.addChild(this.author);
        this.corretCount = new egret.TextField();
        this.corretCount.textColor = 0xffffff;
        this.corretCount.y = 158;
        this.corretCount.x = 345;
        this.corretCount.size = 25;
        this.corretCount.text = '回答正确 2';
        this.addChild(this.corretCount);
        this.questionCount = new egret.TextField();
        this.questionCount.textColor = 0xffffff;
        this.questionCount.y = 158;
        this.questionCount.x = 545;
        this.questionCount.size = 25;
        this.questionCount.text = '3/10';
        this.addChild(this.questionCount);
        // 竖线
        var vline = new egret.Shape();
        vline.graphics.lineStyle(3, 0x4057bb);
        vline.graphics.moveTo(325, 160);
        vline.graphics.lineTo(325, 185);
        vline.graphics.endFill();
        this.addChild(vline);
        var vline2 = new egret.Shape();
        vline2.graphics.lineStyle(3, 0x4057bb);
        vline2.graphics.moveTo(525, 160);
        vline2.graphics.lineTo(525, 185);
        vline2.graphics.endFill();
        this.addChild(vline2);
        // 倒数圈圈
        this.countDownCircle();
        // 提示img
        var tipsImg = new eui.Image();
        tipsImg.source = 'resource/assets/Poetry-2x/bs_bulb@2x.png';
        tipsImg.x = this.stage.stageWidth - 80;
        tipsImg.y = 270;
        this.addChild(tipsImg);
        // 提示text
        var tipsText = new eui.Label();
        tipsText.text = "提示";
        //设置颜色等文本属性
        tipsText.textColor = 0xffffff;
        tipsText.size = 18;
        tipsText.x = this.stage.stageWidth - 75;
        tipsText.y = 358;
        this.addChild(tipsText);
        // 中间文字
        this.middleMsg = new egret.TextField();
        this.middleMsg.textColor = 0xffffff;
        this.middleMsg.textAlign = egret.HorizontalAlign.CENTER;
        this.middleMsg.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.middleMsg.width = stageW;
        this.middleMsg.height = stageH;
        this.middleMsg.size = 36;
        //this.middleMsg.text = '消息消息';
        this.addChild(this.middleMsg);
        // 选择题区域
        this.createAnswerBlock();
        // 底部头像区域
        //this.createBottomBlock();
        // 统计答案区域
        this.createCountBlock();
        // 填空题区域
        this.createAnswerBlock1();
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
        // 倒数定时器
        this.timer = new egret.Timer(this.timerNum, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        // 延时定时器
        this.timer1 = new egret.Timer(1000, 0);
        this.timer1.addEventListener(egret.TimerEvent.TIMER, this.timerFunc1, this);
        this.timer1.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc1, this);
        // this.timer.start();
    };
    Main.prototype.timerFunc = function () {
        this.num = this.num - 1;
        this.countNum.text = String(this.num);
        this.countNum.x = 312;
        console.log(this.timer.currentCount);
        // 倒数数字
        this.outline_3.graphics.clear();
        this.outline_3.graphics.beginFill(0xffc807);
        this.outline_3.graphics.moveTo(320, 245);
        this.outline_3.graphics.lineTo(320, 275);
        this.outline_3.graphics.drawArc(320, 245, 25, 0.5 * Math.PI, (0.1 * (this.timer.currentCount) + 1.5) * Math.PI);
        this.outline_3.graphics.endFill();
        this.outline_3.graphics.lineTo(320, 245);
        // 选项显示对错
        // if(this.timer.currentCount == 10){
        //     // 选择题处理
        //     if(this.questionType == 'select'){
        //         console.log(1);
        //         if(this.userSelect !== 1 && this.userSelect !== 0){
        //             let selectName = 'img_'+(this.userSelect);
        //             this[selectName].source = this._source[2];
        //         }
        //         this.img_1.source =  this._source[1];
        //         this.userSelect = 0;
        //         this.questionNum += 1;
        //     }else if(this.questionType == 'fill'){ // 填空题处理
        //         console.log(2);
        //         this.fillAnswerImg.source = this._source[7];
        //         this._grpLayout2.addChild(this.fillAnswerImg);
        //     }
        //     this.num = 10;
        //     this.timer.reset();
        //     this.timer1.start();
        // }
    };
    ;
    // 倒计时结束
    Main.prototype.timerComFunc = function () {
        // this.countNum.text = '0';
        // this.removeChild(this._grpLayout);
        // this.removeChild(this._bottomLayout);
        // this.addChild(this._grpLayout1);
    };
    // 延时定时器
    Main.prototype.timerFunc1 = function () {
        // if(this.timer1.currentCount == 2){
        //     this.timer1.reset();
        //     // 第一次等 //显示结果
        //     if(this.answerStep == 1){
        //         // 判断选择题
        //         if(this.questionType == 'select'){
        //             console.log(3);
        //             // 隐藏
        //             this.removeChild(this._grpLayout);
        //             this.removeChild(this._bottomLayout);
        //             // 显示
        //             this.addChild(this._grpLayout1);
        //         }else if(this.questionType == 'fill'){ // 填空题
        //             console.log(4);
        //             // 隐藏
        //             this.removeChild(this._grpLayout2);
        //             this.removeChild(this._bottomLayout);
        //             // 显示
        //             this.addChild(this._grpLayout1);
        //         }
        //         this.answerStep +=1;
        //         this.timer1.start();
        //     }else if(this.answerStep == 2){ // 第二次等 // 显示下一题
        //         // 判断题型
        //         if(this.questionType == 'select'){
        //             // 隐藏
        //             this.removeChild(this._grpLayout1);
        //             // 显示
        //             this.addChild(this._grpLayout2);
        //             this.addChild(this._bottomLayout);
        //             this.questionType = 'fill';
        //         }else if(this.questionType == 'fill'){ // 填空题
        //             // 隐藏
        //             this.removeChild(this._grpLayout1);
        //             // 显示
        //             this.addChild(this._grpLayout);
        //             this.addChild(this._bottomLayout);
        //             this.questionType = 'select';
        //         }
        //         // 重置
        //         this.answerStep = 1;
        //         this.timer.start();
        //     }
        // }
    };
    // 延时定时器结束
    Main.prototype.timerComFunc1 = function () {
    };
    Main.prototype.makeWebSocket = function () {
        this.webSocket = new egret.WebSocket();
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.webSocket.connect("192.168.10.10", 1800);
    };
    Main.prototype.onSocketOpen = function () {
        // this.webSocket.writeUTF(cmd); 
        // 发送token
        var senddata = JSON.stringify({ 'url': 'User.bind', 'data': { 'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIyMSJ9.uiHWjWONG_mX2kNJqqrQDgQB3ru2eu6iQFcN4SBUPs8' } });
        this.webSocket.writeUTF(senddata);
        var ws = this.webSocket;
        setTimeout(function () {
            var joinMatch = JSON.stringify({ 'url': 'Match.joinMatch', 'data': { 'matchId': 100055 } });
            ws.writeUTF(joinMatch);
        }, 1000);
    };
    Main.prototype.onReceiveMessage = function (e) {
        var _this = this;
        var msg = this.webSocket.readUTF();
        msg = JSON.parse(msg);
        console.log(msg);
        // 回ping
        if (msg.code == 'Ping.ping') {
            var senddata = JSON.stringify({ 'url': 'Ping.ping', 'data': {} });
            this.webSocket.writeUTF(senddata);
        }
        // 绑定成功
        if (msg.code == 'Bind.success') {
            //this.author.text = '作者：'+msg.data.nickname;
        }
        // 加入房间成功！
        if (msg.code == 'Match.joinSuccess') {
            this.middleMsg.text = msg.msg;
            // 显示头像
            var avatar_array_1 = [];
            msg.data.player.forEach(function (item, index) {
                //let avatar = 'avatar_'+index
                //this[avatar].source = item.userInfo.avatar;
                //this._bottomLayout.addChild(this[avatar]);
                avatar_array_1.push(item.userInfo.avatar);
            });
            console.log(avatar_array_1);
            var num = msg.data.player.length;
            this.createBottomBlock(num, avatar_array_1);
            var middleMsg_1 = this.middleMsg;
            setTimeout(function () {
                middleMsg_1.text = '等待开始...';
            }, 500);
            // 发送开始比赛
            var ws = this.webSocket;
            setTimeout(function () {
                var startMatch = JSON.stringify({ 'url': 'Match.startMatch', 'data': { 'matchId': 100055 } });
                ws.writeUTF(startMatch);
            }, 1500);
        }
        // 开始比赛
        if (msg.code == 'Match.start') {
            this.middleMsg.text = msg.msg;
            this.addChild(this.middleMsg);
        }
        // 接收题目
        if (msg.code == 'Match.nextQuestion') {
            // 移除提示、统计
            if (this.middleMsg.parent)
                this.removeChild(this.middleMsg);
            if (this._grpLayout1.parent)
                this.removeChild(this._grpLayout1);
            // 作者
            this.author.text = msg.data.question.author;
            // 隐藏上一题内容
            if (this.beforeQtype == 'select') {
                if (this._grpLayout.parent)
                    this.removeChild(this._grpLayout);
                if (this._bottomLayout.parent)
                    this.removeChild(this._bottomLayout);
            }
            if (this.beforeQtype == 'fill') {
                if (this._grpLayout2.parent)
                    this.removeChild(this._grpLayout2);
                if (this._bottomLayout.parent)
                    this.removeChild(this._bottomLayout);
            }
            // 题型显示
            if (msg.data.question.type == 'select') {
                this.quesetType.text = msg.data.question.typeCn;
                this.quesetTitle.text = msg.data.question.question;
                msg.data.question.option.forEach(function (item, index) {
                    var i = index + 1;
                    var option = 'imgLabel_' + i;
                    var abcd = ['A', 'B', 'C', 'D'];
                    _this[option].text = abcd + '_' + item;
                });
                this.addChild(this._grpLayout);
                this.addChild(this._bottomLayout);
                this.beforeQtype = 'select';
            }
            else if (msg.data.question.type == 'fill') {
                this.beforeQtype = 'fill';
                if (msg.data.question.img == '') {
                    if (this.imgQuestion.parent)
                        this._grpLayout2.removeChild(this.imgQuestion);
                    this.quesetType1.text = msg.data.question.typeCn;
                    this.quesetTitle1.text = msg.data.question.question;
                    this._grpLayout2.addChild(this.quesetType1);
                    this._grpLayout2.addChild(this.quesetTitle1);
                }
                else {
                    if (this.quesetType1.parent)
                        this._grpLayout2.removeChild(this.quesetType1);
                    if (this.quesetTitle1.parent)
                        this._grpLayout2.removeChild(this.quesetTitle1);
                    //this.imgQuestion.source = msg.question.img;
                    this._grpLayout2.addChild(this.imgQuestion);
                }
                this.answerArea(msg.data.question.answerLength);
                if (msg.data.question.option.length == 12) {
                    for (var i = 1; i <= 5; i++) {
                        var qContain5_1 = 'qContain_5_1_' + i;
                        var qContain5_2 = 'qContain_5_2_' + i;
                        if (this[qContain5_1].parent)
                            this._grpLayout2.removeChild(this[qContain5_1]);
                        if (this[qContain5_2].parent)
                            this._grpLayout2.removeChild(this[qContain5_2]);
                    }
                    msg.data.question.option.forEach(function (item, index) {
                        var i = index + 1;
                        if (i <= 6) {
                            var qContain6_1 = 'qContain_6_1_' + i;
                            _this[qContain6_1] = item;
                            _this._grpLayout2.addChild(_this[qContain6_1]);
                        }
                        else {
                            var j = i - 6;
                            var qContain6_2 = 'qContain_6_2_' + j;
                            _this[qContain6_2] = item;
                            _this._grpLayout2.addChild(_this[qContain6_2]);
                        }
                    });
                }
                else if (msg.data.question.option.length == 10) {
                    for (var i = 1; i <= 6; i++) {
                        var qContain6_1 = 'qContain_6_1_' + i;
                        var qContain6_2 = 'qContain_6_2_' + i;
                        if (this[qContain6_1].parent)
                            this._grpLayout2.removeChild(this[qContain6_1]);
                        if (this[qContain6_2].parent)
                            this._grpLayout2.removeChild(this[qContain6_2]);
                    }
                    msg.data.question.option.forEach(function (item, index) {
                        var i = index + 1;
                        if (i <= 5) {
                            var qContain5_1 = 'qContain_5_1_' + i;
                            _this[qContain5_1] = item;
                            _this._grpLayout2.addChild(_this[qContain5_1]);
                        }
                        else {
                            var j = i - 5;
                            var qContain5_2 = 'qContain_5_2_' + j;
                            _this[qContain5_2] = item;
                            _this._grpLayout2.addChild(_this[qContain5_2]);
                        }
                    });
                }
                this.timerNum = msg.data.question.time;
                this.num = msg.data.question.time;
                this.addChild(this._grpLayout2);
                this.addChild(this._bottomLayout);
            }
        }
        // 开始答题
        if (msg.code == 'Match.startAnswer') {
            this.timer.start();
        }
        // 结束答题
        if (msg.code == 'Match.stopAnswer') {
            this.timer.reset();
            if (this._grpLayout.parent)
                this.removeChild(this._grpLayout);
            if (this._grpLayout2.parent)
                this.removeChild(this._grpLayout2);
            if (this._bottomLayout.parent)
                this.removeChild(this._bottomLayout);
            this.rightAnswerText.text = msg.data.trueAnswer;
            this.numText1.text = msg.data.trueNum + '人';
            this.numText2.text = msg.data.falseNum + '人';
            this.addChild(this._grpLayout1);
        }
    };
    // 倒计数圈圈
    Main.prototype.countDownCircle = function () {
        // 外圈 
        this.outline_1 = new egret.Shape();
        this.outline_1.graphics.beginFill(0xa4c2f4);
        this.outline_1.graphics.drawArc(320, 245, 30, 0, 2 * Math.PI);
        this.outline_1.graphics.endFill();
        this.addChild(this.outline_1);
        // 蓝边外圈
        this.outline_2 = new egret.Shape();
        this.outline_2.graphics.beginFill(0x646ef5);
        this.outline_2.graphics.drawArc(320, 245, 25, 0, 2 * Math.PI);
        this.outline_2.graphics.endFill();
        this.addChild(this.outline_2);
        // 橙色外圈
        this.outline_3 = new egret.Shape();
        this.outline_3.graphics.beginFill(0xffc807);
        this.outline_3.graphics.moveTo(320, 245); //绘制点移动(r, r)点
        this.outline_3.graphics.lineTo(320, 275); //画线到弧的起始点
        this.outline_3.graphics.drawArc(320, 245, 25, 0.5 * Math.PI, 1.5 * Math.PI);
        this.outline_3.graphics.endFill();
        this.outline_3.graphics.lineTo(320, 245);
        this.addChild(this.outline_3);
        // 白色内圈
        this.outline_4 = new egret.Shape();
        this.outline_4.graphics.beginFill(0xffffff);
        this.outline_4.graphics.drawArc(320, 245, 18, 0, 2 * Math.PI);
        this.outline_4.graphics.endFill();
        this.addChild(this.outline_4);
        // 倒数计时
        this.countNum = new egret.TextField();
        this.countNum.textColor = 0x646ef5;
        this.countNum.x = 302;
        this.countNum.y = 230;
        this.countNum.width = 80;
        this.countNum.size = 30;
        this.countNum.text = String(this.num);
        this.addChild(this.countNum);
    };
    Main.prototype.createAnswerBlock = function () {
        // 创建布局容器
        this._grpLayout = new eui.Group();
        this._grpLayout.horizontalCenter = 0;
        this._grpLayout.verticalCenter = 0;
        //this.addChild( this._grpLayout );
        this._grpLayout.width = this.stage.stageWidth - 100;
        this._grpLayout.height = this.stage.stageWidth * 0.8;
        // 题型
        this.quesetType = new eui.Label();
        this.quesetType.text = "选择题";
        //设置颜色等文本属性
        this.quesetType.textColor = 0xffffff;
        this.quesetType.size = 30;
        this.quesetType.lineSpacing = 12;
        this.quesetType.textAlign = egret.HorizontalAlign.CENTER;
        this.quesetType.width = this.stage.stageWidth - 100;
        this.quesetType.top = 50;
        this._grpLayout.addChild(this.quesetType);
        // 题目
        this.quesetTitle = new eui.Label();
        this.quesetTitle.text = "静夜诗的作者是谁？";
        //设置颜色等文本属性
        this.quesetTitle.textColor = 0xffffff;
        this.quesetTitle.size = 30;
        this.quesetTitle.lineSpacing = 12;
        this.quesetTitle.textAlign = egret.HorizontalAlign.CENTER;
        this.quesetTitle.width = this.stage.stageWidth - 100;
        this.quesetTitle.top = 120;
        this._grpLayout.addChild(this.quesetTitle);
        var _loop_1 = function (i) {
            // 选项容器
            var imgName = 'img_' + i;
            var imgLabelName = 'imgLabel_' + i;
            var selectContain = new egret.Sprite();
            selectContain.width = this_1.stage.stageWidth - 100;
            selectContain.height = 100;
            selectContain.y = 120 * (i - 1) + this_1.stage.stageHeight * 0.2;
            this_1._grpLayout.addChild(selectContain);
            selectContain.touchEnabled = true;
            selectContain.addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
                this[imgName].source = this._source[3];
                this[imgLabelName].textColor = 0xffffff;
                this.userSelect = i;
            }, this_1);
            // 选项背景图
            this_1[imgName] = new eui.Image();
            this_1[imgName].source = this_1._source[0];
            this_1[imgName].width = this_1.stage.stageWidth - 100;
            this_1[imgName].height = 100;
            //  img.verticalCenter = 120 *i + 20;
            //  img.horizontalCenter = 0;
            selectContain.addChild(this_1[imgName]);
            // 选项
            this_1[imgLabelName] = new eui.Label();
            this_1[imgLabelName].text = "A 选项有七个字的";
            this_1[imgLabelName].textColor = 0x233dae;
            this_1[imgLabelName].size = 30;
            this_1[imgLabelName].textAlign = egret.HorizontalAlign.CENTER;
            this_1[imgLabelName].width = this_1.stage.stageWidth - 100;
            this_1[imgLabelName].y = 35;
            selectContain.addChild(this_1[imgLabelName]);
        };
        var this_1 = this;
        // 判断是否是选择题
        for (var i = 1; i <= 4; i++) {
            _loop_1(i);
        }
    };
    Main.prototype.createBottomBlock = function (num, avatarUrl) {
        // 创建布局容器
        this._bottomLayout = new eui.Group();
        this._bottomLayout.horizontalCenter = 0;
        this._bottomLayout.verticalCenter = this.stage.stageHeight * 0.5 - 20;
        this._bottomLayout.width = this.stage.stageWidth;
        this._bottomLayout.height = 120;
        this.addChild(this._bottomLayout);
        // 头像底部
        for (var i = 0; i < num; i++) {
            // 头像
            var avatar = 'avatar_' + i;
            this[avatar] = new eui.Image();
            this[avatar].source = 'resource/assets/Poetry-2x/avatar_1@2x.jpg';
            //this[avatar].source = avatarUrl[i];
            this[avatar].width = 60;
            this[avatar].height = 60;
            this[avatar].x = this.stage.stageWidth * 0.5 - (40 * num) + 80 * (i);
            this[avatar].y = -30;
            this._bottomLayout.addChild(this[avatar]);
            // 遮罩
            var avatarBackground = new egret.Shape();
            avatarBackground.graphics.beginFill(0xffffff);
            avatarBackground.graphics.drawArc(this.stage.stageWidth * 0.5 - (30 * num) + 80 * (i), 0, 30, 0, 2 * Math.PI);
            avatarBackground.graphics.endFill();
            this._bottomLayout.addChild(avatarBackground);
            this[avatar].mask = avatarBackground;
        }
        // 游戏人数统计
        var playerCount = new eui.Label();
        playerCount.text = num + '人正在游戏中';
        playerCount.size = 25;
        playerCount.textColor = 0xffffff;
        playerCount.y = 42;
        playerCount.textAlign = egret.HorizontalAlign.CENTER;
        playerCount.width = this.stage.stageWidth;
        this._bottomLayout.addChild(playerCount);
    };
    Main.prototype.createCountBlock = function () {
        // 创建布局容器
        this._grpLayout1 = new eui.Group();
        this._grpLayout1.horizontalCenter = 0;
        this._grpLayout1.verticalCenter = 0;
        //this.addChild( this._grpLayout1 );
        this._grpLayout1.width = this.stage.stageWidth - 100;
        this._grpLayout1.height = this.stage.stageWidth * 0.8;
        // 中间 对或错logo
        this.rightWrongImg = new eui.Image();
        this.rightWrongImg.source = this._source[4];
        this.rightWrongImg.x = (this.stage.stageWidth - 100) * 0.5 - 89;
        this.rightWrongImg.y = 80;
        this._grpLayout1.addChild(this.rightWrongImg);
        // 正确答案信息
        this.rightAnswerText = new eui.Label();
        this.rightAnswerText.textColor = 0xffffff;
        this.rightAnswerText.text = '正确答案：A 选项字数七个字';
        this.rightAnswerText.size = 28;
        this.rightAnswerText.y = 300;
        this.rightAnswerText.width = this.stage.stageWidth - 100;
        this.rightAnswerText.textAlign = egret.HorizontalAlign.CENTER;
        this._grpLayout1.addChild(this.rightAnswerText);
        // 回答统计背景1
        var img1 = new eui.Image();
        img1.source = this._source[1];
        img1.width = this.stage.stageWidth - 100;
        img1.height = 100;
        img1.y = 370;
        this._grpLayout1.addChild(img1);
        // 回答统计背景2
        var img2 = new eui.Image();
        img2.source = this._source[2];
        img2.width = this.stage.stageWidth - 100;
        img2.height = 100;
        img2.y = 490;
        this._grpLayout1.addChild(img2);
        // 人数1
        this.numText1 = new eui.Label;
        this.numText1.text = '18人';
        this.numText1.textColor = 0xffffff;
        this.numText1.width = this.stage.stageWidth - 100;
        this.numText1.textAlign = egret.HorizontalAlign.CENTER;
        this.numText1.size = 28;
        this.numText1.y = 405;
        this._grpLayout1.addChild(this.numText1);
        // 人数2
        this.numText2 = new eui.Label;
        this.numText2.text = '24人';
        this.numText2.textColor = 0xffffff;
        this.numText2.width = this.stage.stageWidth - 100;
        this.numText2.textAlign = egret.HorizontalAlign.CENTER;
        this.numText2.size = 28;
        this.numText2.y = 525;
        this._grpLayout1.addChild(this.numText2);
    };
    Main.prototype.createAnswerBlock1 = function () {
        var _this = this;
        // 创建布局容器
        this._grpLayout2 = new eui.Group();
        this._grpLayout2.horizontalCenter = 0;
        this._grpLayout2.verticalCenter = 0;
        //this.addChild( this._grpLayout2 );
        this._grpLayout2.width = this.stage.stageWidth - 80;
        this._grpLayout2.height = this.stage.stageWidth * 0.8;
        // 填空题图片
        this.imgQuestion = new eui.Image();
        this.imgQuestion.source = 'resource/assets/Poetry-2x/fillimg.png';
        this.imgQuestion.maxWidth = 200;
        this.imgQuestion.maxHeight = 200;
        this.imgQuestion.y = 60;
        //this._grpLayout2.addChild(this.imgQuestion);
        this.imgQuestion.addEventListener(egret.Event.COMPLETE, function (e) {
            ///在图片的载入完成事件中获得图片的宽高。
            var width = _this.imgQuestion.width;
            var height = _this.imgQuestion.height;
            // 宽
            if (width <= 200) {
                _this.imgQuestion.width = width;
                _this.imgQuestion.x = (_this.stage.stageWidth - 80) * 0.5 - width * 0.5;
            }
            else {
                _this.imgQuestion.width = 200;
                _this.imgQuestion.x = (_this.stage.stageWidth - 80) * 0.5 - 100;
            }
            // 高
            if (height <= 200) {
                _this.imgQuestion.height = height;
            }
            else {
                _this.imgQuestion.width = 200;
            }
        }, this);
        // 填空题无图
        // 题型
        this.quesetType1 = new eui.Label();
        this.quesetType1.text = "选择题";
        //设置颜色等文本属性
        this.quesetType1.textColor = 0xffffff;
        this.quesetType1.size = 30;
        this.quesetType1.lineSpacing = 12;
        this.quesetType1.textAlign = egret.HorizontalAlign.CENTER;
        this.quesetType1.width = this.stage.stageWidth - 100;
        this.quesetType1.top = 50;
        //this._grpLayout2.addChild(this.quesetType1);
        // 题目
        this.quesetTitle1 = new eui.Label();
        this.quesetTitle1.text = "静夜诗的作者是谁？";
        //设置颜色等文本属性
        this.quesetTitle1.textColor = 0xffffff;
        this.quesetTitle1.size = 30;
        this.quesetTitle1.lineSpacing = 12;
        this.quesetTitle1.textAlign = egret.HorizontalAlign.CENTER;
        this.quesetTitle1.width = this.stage.stageWidth - 100;
        this.quesetTitle1.top = 120;
        //this._grpLayout2.addChild(this.quesetTitle1);
        // 答题区域
        //this.answerArea(4);
        // 选项区域 每行5个词
        this.answerArea2();
        // 选项区域 每行6个词
        this.answerArea3();
    };
    // 填空答题块
    Main.prototype.answerArea = function (num) {
        var _loop_2 = function (i) {
            // 容器
            var containName = 'aContain_' + i;
            this_2[containName] = new egret.Sprite(); // 答题容器
            this_2[containName].width = 80;
            this_2[containName].height = 80;
            this_2[containName].x = (this_2.stage.stageWidth - 80) * 0.5 - (num * 80 + (num - 1) * 10) * 0.5 + 90 * (i - 1);
            this_2[containName].y = 290;
            this_2._grpLayout2.addChild(this_2[containName]);
            this_2[containName].touchEnabled = true;
            this_2[containName].addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
                this[aTextName].text = '';
                if (this.fillLocate > 0) {
                    this.fillLocate -= 1;
                }
            }, this_2);
            // 背景图
            var imgName = 'aImg_' + i;
            this_2[imgName] = new eui.Image();
            this_2[imgName].source = this_2._source[6];
            this_2[imgName].width = 80;
            this_2[imgName].height = 80;
            this_2[containName].addChild(this_2[imgName]);
            // 答题内容
            var aTextName = 'aText_' + i;
            this_2[aTextName] = new eui.Label();
            //this[aTextName].text = '李';
            this_2[aTextName].textColor = 0x233dae;
            this_2[aTextName].size = 25;
            this_2[aTextName].x = 27.5;
            this_2[aTextName].y = 27.5;
            this_2[containName].addChild(this_2[aTextName]);
        };
        var this_2 = this;
        for (var i = 1; i <= num; i++) {
            _loop_2(i);
        }
        // 对错img
        this.fillAnswerImg = new eui.Image();
        //this.fillAnswerImg.source = this._source[7];
        this.fillAnswerImg.width = 60;
        this.fillAnswerImg.height = 60;
        this.fillAnswerImg.y = 300;
        //this._grpLayout2.addChild(this.fillAnswerImg);
    };
    // 答题选项 每行5个词
    Main.prototype.answerArea2 = function () {
        for (var j = 1; j <= 2; j++) {
            var _loop_3 = function (i) {
                // 方块容器
                var containName = 'qContain_5_' + j + '_' + i;
                this_3[containName] = new egret.Sprite(); // 答题容器
                this_3[containName].width = 80;
                this_3[containName].height = 80;
                this_3[containName].x = (this_3.stage.stageWidth - 80) * 0.5 - (5 * 80 + (5 - 1) * 40) * 0.5 + 120 * (i - 1);
                this_3[containName].y = 450 + 120 * (j - 1);
                this_3._grpLayout2.addChild(this_3[containName]);
                this_3[containName].touchEnabled = true;
                this_3[containName].addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
                    // 判断填充位置
                    if (1) {
                        var choice = this[aTextName].text;
                        var fillname = 'aText_' + this.fillLocate;
                        this[fillname].text = choice;
                        this.fillLocate += 1;
                    }
                }, this_3);
                // 背景图
                var imgName = 'qImg_5_' + j + '_' + i;
                this_3[imgName] = new eui.Image();
                this_3[imgName].source = this_3._source[6];
                this_3[imgName].width = 80;
                this_3[imgName].height = 80;
                this_3[containName].addChild(this_3[imgName]);
                // 答题内容
                var aTextName = 'qText_5_' + j + '_' + i;
                this_3[aTextName] = new eui.Label();
                this_3[aTextName].text = '白';
                this_3[aTextName].textColor = 0x233dae;
                this_3[aTextName].size = 25;
                this_3[aTextName].x = 27.5;
                this_3[aTextName].y = 27.5;
                this_3[containName].addChild(this_3[aTextName]);
            };
            var this_3 = this;
            // 行容器1
            // let rowContain = 'rowContain_5_'+j;
            // this[rowContain] = new egret.DisplayObject();
            // this[rowContain].width = this.stage.stageWidth - 80;
            // this[rowContain].height = 80;
            // this[rowContain].y = 450 + 120*(j-1);
            // this._grpLayout2.addChild(this[rowContain]);
            for (var i = 1; i <= 5; i++) {
                _loop_3(i);
            }
        }
    };
    // 答题选项 每行6个词
    Main.prototype.answerArea3 = function () {
        for (var j = 1; j <= 2; j++) {
            var _loop_4 = function (i) {
                // 方块容器
                var containName = 'qContain_6_' + j + '_' + i;
                this_4[containName] = new egret.Sprite(); // 答题容器
                this_4[containName].width = 80;
                this_4[containName].height = 80;
                this_4[containName].x = (this_4.stage.stageWidth - 80) * 0.5 - (6 * 80 + (6 - 1) * 20) * 0.5 + 100 * (i - 1);
                this_4[containName].y = 450 + 120 * (j - 1);
                //this._grpLayout2.addChild(this[containName]);
                this_4[containName].touchEnabled = true;
                this_4[containName].addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
                    // 判断填充位置
                    if (1) {
                        var choice = this[aTextName].text;
                        var fillname = 'aText_' + this.fillLocate;
                        this[fillname].text = choice;
                        this.fillLocate += 1;
                    }
                }, this_4);
                // 背景图
                var imgName = 'qImg_6_' + j + '_' + i;
                this_4[imgName] = new eui.Image();
                this_4[imgName].source = this_4._source[6];
                this_4[imgName].width = 80;
                this_4[imgName].height = 80;
                this_4[containName].addChild(this_4[imgName]);
                // 答题内容
                var aTextName = 'qText_6_' + j + '_' + i;
                this_4[aTextName] = new eui.Label();
                this_4[aTextName].text = '白';
                this_4[aTextName].textColor = 0x233dae;
                this_4[aTextName].size = 25;
                this_4[aTextName].x = 27.5;
                this_4[aTextName].y = 27.5;
                this_4[containName].addChild(this_4[aTextName]);
            };
            var this_4 = this;
            for (var i = 1; i <= 6; i++) {
                _loop_4(i);
            }
        }
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");

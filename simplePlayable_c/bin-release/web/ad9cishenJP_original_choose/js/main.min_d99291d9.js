return g.load=!1,g.createView(),g}return __extends(g,A),g.prototype.createView=function(){var A=this;this.width=1280,this.height=720,RES.getResByUrl(loading_bg,function(g){A.bg=new egret.Bitmap(g),A.width=egret.MainContext.instance.stage.stageWidth,A.height=egret.MainContext.instance.stage.stageHeight,A.bg.width=egret.MainContext.instance.stage.stageWidth,A.bg.height=egret.MainContext.instance.stage.stageHeight,A.addChild(A.bg),A.getHam()},this,RES.ResourceItem.TYPE_IMAGE)},g.prototype.onProgress=function(A,g){this.load&&(this.pro.scaleX=A/g)},g.prototype.getHam=function(){var A=this;RES.getResByUrl(loading_c,function(g){A.imgHam=new eui.Image(g),A.imgHam.x=500,A.imgHam.y=460,A.imgHam.anchorOffsetY=300,A.addChild(A.imgHam),A.setY(),egret.Tween.get(A.imgHam,{loop:!0}).to({scaleY:.8},400).to({scaleY:1},800)},this,RES.ResourceItem.TYPE_IMAGE)},g.prototype.setY=function(){this.imgHam.y=this.imgHam.y+(this.getStageH()-720)/2,this.imgHam.x=this.imgHam.x+(this.getStageW()-1280)/2},g.prototype.getStageH=function(){return egret.MainContext.instance.stage.stageHeight},g.prototype.getStageW=function(){return egret.MainContext.instance.stage.stageWidth},g}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Guide=function(A){function g(){return A.call(this)||this}return __extends(g,A),g.prototype.init=function(A,g,e){var B=new egret.DisplayObjectContainer,t=new egret.Shape;t.graphics.beginFill(0,.65),t.graphics.drawRect(0,0,g,e),t.graphics.endFill(),B.addChild(t),B.addChild(A),A.blendMode=egret.BlendMode.ERASE;var C=new egret.RenderTexture;C.drawToTexture(B);var r=new egret.Bitmap(C);this.addChild(r)},g}(egret.DisplayObjectContainer);__reflect(Guide.prototype,"Guide");var GuideStep=function(A){function g(){var g=A.call(this)||this;return g.guideStep=0,g.pointArr=[],g.area=new eui.Rect,g.guideType=1,g}return __extends(g,A),Object.defineProperty(g,"instance",{get:function(){return this._instance||(this._instance=new g),this._instance},enumerable:!0,configurable:!0}),g.prototype.init=function(A,g){A.touchEnabled=!1,this.kImgArrow=new eui.Image(main_guide_arrow),this.kImgArrow.visible=!1,this.kImgArrow.anchorOffsetY=26,this.area.width=600,this.area.height=600,this.kImgPoint=new eui.Image(main_arrow),this.kImgPoint.visible=!1,this.kImgPoint.anchorOffsetX=28,this.kImgPoint.anchorOffsetY=0,this.kImgCirle=new eui.Image(main_circle),this.kImgCirle.visible=!1,this.kImgArrow.touchEnabled=!1,this.kImgCirle.touchEnabled=!1,A.addChild(this.kImgCirle),A.addChild(this.kImgPoint),A.addChild(this.kImgArrow),A.addChild(this.area),this.pointArr=g,this.area.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this)},g.prototype.moveHand=function(A,g){void 0===g&&(g=1),this.guideType=g,this.area.visible=!0,this.callBack=A;var e=this.pointArr[this.guideStep];switch(this.kImgArrow.visible=!0,this.kImgArrow.touchEnabled=!1,this.kImgArrow.x=e.x,this.kImgArrow.y=e.y,console.log("引导step:",this.guideStep),this.area.x=e.x-this.area.width+300,this.area.y=e.y-this.area.height+300,this.area.alpha=0,g){case 1:this.area.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.kImgArrow.scaleX=this.kImgArrow.scaleY=.8,egret.Tween.get(this.kImgArrow,{loop:!0}).to({scaleX:1.2,scaleY:1.2},500,egret.Ease.quartInOut).to({scaleX:.9,scaleY:.9},500,egret.Ease.quartInOut);break;case 2:var B=this.pointArr[this.guideStep+1];this.area.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this),this.kImgPoint.x=B.x,this.kImgPoint.y=B.y;var t=e.x-B.x,C=e.y-B.y,r=180*Math.atan2(C,t)/Math.PI;this.kImgPoint.visible=!0,this.kImgPoint.rotation=r-90;var w=Math.sqrt(t*t+C*C);this.kImgPoint.height=w,this.kImgPoint.scaleX=w/272,egret.Tween.get(this.kImgArrow,{loop:!0}).to({x:B.x,y:B.y},600).to({x:e.x,y:e.y},200)}},g.prototype.clearHand=function(){switch(console.log("clear hand"),this.kImgArrow.visible=!1,this.kImgPoint.visible=!1,this.kImgCirle.visible=!1,egret.Tween.removeTweens(this.kImgArrow),egret.Tween.removeTweens(this.kImgCirle),this.guideType){case 1:this.guideStep++,this.area.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);break;case 2:this.guideStep+=2,this.area.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this)}this.callBack=null,this.area.visible=!1},g.prototype.onClick=function(){this.callBack()},g.prototype.onTouchBegin=function(A){this.touchStart=new egret.Point(A.stageX,A.stageY)},g.prototype.onMove=function(A){var g=new egret.Point(A.stageX,A.stageY),e=Math.abs(g.x-this.touchStart.x),B=Math.abs(g.y-this.touchStart.y);B/e>0&&B>100&&(console.log("swiper success"),this.callBack())},g}(egret.DisplayObjectContainer);__reflect(GuideStep.prototype,"GuideStep");var McManger=function(A){function g(){var g=null!==A&&A.apply(this,arguments)||this;return g._cach={},g}return __extends(g,A),Object.defineProperty(g,"instance",{get:function(){return this._instance||(this._instance=new g),this._instance},enumerable:!0,configurable:!0}),g.prototype.getMc=function(A){return __awaiter(this,void 0,void 0,function(){var g,e,B,t;return __generator(this,function(C){switch(C.label){case 0:return this._cach[A]?[2,this._cach[A]]:[4,RES.getResAsync(A+"_json")];case 1:return g=C.sent(),[4,RES.getResAsync(A+"_png")];case 2:return e=C.sent(),B=new egret.MovieClipDataFactory(g,e),t=new egret.MovieClip(B.generateMovieClipData()),this._cach[A]=t,[2,t]}})})},g.prototype.getMcAtH5=function(A,g,e,B){return void 0===B&&(B=""),__awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(C){return[2,new Promise(function(C,r){t._cach[A]&&C(new egret.MovieClip(t._cach[A].generateMovieClipData(B))),RES.getResByUrl(e,function(e){var r=new egret.MovieClipDataFactory(g,e),w=new egret.MovieClip(r.generateMovieClipData(B));t._cach[A]=r,C(w)},t,RES.ResourceItem.TYPE_IMAGE)})]})})},g}(egret.DisplayObjectContainer);__reflect(McManger.prototype,"McManger");var ParticleUtil=function(){function A(){}return Object.defineProperty(A,"instance",{get:function(){return this._instance||(this._instance=new A),this._instance},enumerable:!0,configurable:!0}),A.prototype.creatParticle=function(A,g,e,B,t){void 0===e&&(e=0),void 0===B&&(B=0),void 0===t&&(t=0);var C=RES.getRes(A+"_png"),r=RES.getRes(A+"_json"),w=new particle.GravityParticleSystem(C,r);return g.addChild(w),w.x=e,w.y=B,t?w.start(t):w.start(),w},A.prototype.getParticleAtH5=function(A,g,e,B,t,C,r){return void 0===B&&(B=0),void 0===t&&(t=0),void 0===C&&(C=0),void 0===r&&(r=1),__awaiter(this,void 0,void 0,function(){var w=this;return __generator(this,function(c){return[2,new Promise(function(c,n){RES.getResByUrl(e,function(e){var w=new particle.GravityParticleSystem(e,g);A.addChild(w),w.x=B,w.y=t,w.alpha=r,C?w.start(C):w.start(),c(w)},w,RES.ResourceItem.TYPE_IMAGE)})]})})},A}();__reflect(ParticleUtil.prototype,"ParticleUtil");var SoundManager=function(){function A(){var A=this;this.isbgMusicComplete=!1,this.isClickComplete=!1,this._isMusic=!1,this._isEffect=!1,this._voluem=1,this.cs=1,this.bgMusic=new egret.Sound,this.bgMusic.load("resource/Pianoboy.mp3"),this.bgMusic.addEventListener(egret.Event.COMPLETE,function(){A.isbgMusicComplete=!0},this),this.click=new egret.Sound,this.click.load("resource/lianji101.mp3"),this.click.addEventListener(egret.Event.COMPLETE,function(){A.isClickComplete=!0},this)}return Object.defineProperty(A,"Instance",{get:function(){return A._manager||(A._manager=new A),A._manager},enumerable:!0,configurable:!0}),A.prototype.playBgMusic=function(){this.isbgMusicComplete&&this.isMusic&&this.cs&&(this.bgMusic_channel=this.bgMusic.play(0,0),this.cs=0)},A.prototype.stopBgMusic=function(){this.bgMusic_channel&&(this.bgMusic_channel.stop(),this.bgMusic_channel=null,this.cs=1)},A.prototype.playClickEffect=function(){this.isClickComplete&&this.isEffect&&this.click.play(0,1)},A.prototype.setVolume=function(A){this.bgMusic_channel&&(this.bgMusic_channel.volume=A)},Object.defineProperty(A.prototype,"isMusic",{get:function(){var A=egret.localStorage.getItem("isMusic");return"true"!=A&&A?this._isMusic=!1:this._isMusic=!0,this._isMusic},set:function(A){this._isMusic=A,egret.localStorage.setItem("isMusic",A.toString()),A?this.playBgMusic():this.stopBgMusic()},enumerable:!0,configurable:!0}),Object.defineProperty(A.prototype,"isEffect",{get:function(){var A=egret.localStorage.getItem("isEffect");return"true"==A||null==A?this._isEffect=!0:this._isEffect=!1,this._isEffect},set:function(A){this._isEffect=A,egret.localStorage.setItem("isEffect",A.toString())},enumerable:!0,configurable:!0}),Object.defineProperty(A.prototype,"volume",{get:function(){var A=egret.localStorage.getItem("volume");return null==A?this._voluem=1:this._voluem=Number(A),this._voluem},set:function(A){this._voluem=A,egret.localStorage.setItem("volume",A.toString()),this.setVolume(A)},enumerable:!0,configurable:!0}),A}();__reflect(SoundManager.prototype,"SoundManager");var SpecialEffects;!function(A){var g="attribute vec2 aVertexPosition;attribute vec2 aTextureCoord;attribute vec4 aColor;uniform vec2 projectionVector;varying vec2 vTextureCoord;varying vec4 vColor;const vec2 center = vec2(-1.0, 1.0);void main(void) {gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);vTextureCoord = aTextureCoord;vColor = aColor;}",e="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform float brightness;uniform float contrast;varying vec2 vTextureCoord;void main(){vec4 color=texture2D(uSampler,vTextureCoord)*vColor;color.rgb+=brightness;if(contrast>0.0){color.rgb=(color.rgb-0.5)/(1.0-contrast)+0.5;}else{color.rgb=(color.rgb-0.5)*(1.0+contrast)+0.5;}gl_FragColor=color;}",B="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform float hue;uniform float saturation;varying vec2 vTextureCoord;void main(){vec4 color=texture2D(uSampler,vTextureCoord)*vColor;float angle=hue*3.14159265;float s=sin(angle),c=cos(angle);vec3 weights=(vec3(2.0*c,-sqrt(3.0)*s-c,sqrt(3.0)*s-c)+1.0)/3.0;float len=length(color.rgb);color.rgb=vec3(dot(color.rgb,weights.xyz),dot(color.rgb,weights.zxy),dot(color.rgb,weights.yzx));float average=(color.r+color.g+color.b)/3.0;if(saturation>0.0){color.rgb+=(average-color.rgb)*(1.0-1.0/(1.001-saturation));}else{color.rgb+=(average-color.rgb)*(-saturation);}gl_FragColor=color;}",t="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform float amount;varying vec2 vTextureCoord;void main(){vec4 color=texture2D(uSampler,vTextureCoord)*vColor;float average=(color.r+color.g+color.b)/3.0;float mx=max(color.r,max(color.g,color.b));float amt=(mx-average)*(-amount*3.0);color.rgb=mix(color.rgb,vec3(mx),amt);gl_FragColor=color;}",C="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform float exponent;uniform float strength;uniform float texSizeW;uniform float texSizeH;varying vec2 vTextureCoord;void main(){vec2 texSize = vec2(texSizeW,texSizeH);vec4 center=texture2D(uSampler,vTextureCoord)*vColor;vec4 color=vec4(0.0);float total=0.0;for(float x=-4.0;x<=4.0;x+=1.0){for(float y=-4.0;y<=4.0;y+=1.0){vec4 sample=texture2D(uSampler,vTextureCoord+vec2(x,y)/texSize)*vColor;float weight=1.0-abs(dot(sample.rgb-center.rgb,vec3(0.25)));weight=pow(weight,exponent);color+=sample*weight;total+=weight;}}gl_FragColor=color/total;}",r="precision lowp float;varying vec2 vTextureCoord;varying vec4 vColor;uniform sampler2D uSampler;uniform float amount;float rand(vec2 co){return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);}void main(void) {vec4 color=texture2D(uSampler, vTextureCoord) * vColor;float diff=(rand(vTextureCoord)-0.5)*amount;color.r+=diff;color.g+=diff;color.b+=diff;gl_FragColor=color;}",w="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform float amount;varying vec2 vTextureCoord;void main(){vec4 color=texture2D(uSampler,vTextureCoord)*vColor;float r=color.r;float g=color.g;float b=color.b;color.r=min(1.0,(r*(1.0-(0.607*amount)))+(g*(0.769*amount))+(b*(0.189*amount)));color.g=min(1.0,(r*0.349*amount)+(g*(1.0-(0.314*amount)))+(b*0.168*amount));color.b=min(1.0,(r*0.272*amount)+(g*0.534*amount)+(b*(1.0-(0.869*amount))));gl_FragColor=color;}",c="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform float size;uniform float amount;varying vec2 vTextureCoord;void main(){vec4 color=texture2D(uSampler,vTextureCoord)*vColor;float dist=distance(vTextureCoord,vec2(0.5,0.5));color.rgb*=smoothstep(0.8,size*0.799,dist*(amount+size));gl_FragColor=color;}",n="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform float strength;varying vec2 vTextureCoord;uniform float centerX;uniform float centerY;uniform float texSizeW;uniform float texSizeH;float random(vec3 scale,float seed){return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);}void main(){vec2 texSize = vec2(texSizeW,texSizeH);vec2 center = vec2(centerX,centerY);vec4 color=vec4(0.0);float total=0.0;vec2 toCenter=center-vTextureCoord*texSize;float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=0.0;t<=40.0;t++){float percent=(t+offset)/40.0;float weight=4.0*(percent-percent*percent);vec4 sample=texture2D(uSampler,vTextureCoord+toCenter*percent*strength/texSize);sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}",D="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform vec2 delta;uniform float deltaX;uniform float deltaY;varying vec2 vTextureCoord;float random(vec3 scale,float seed){return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);}void main(){vec2 delta = vec2(deltaX,deltaY);vec4 color=vec4(0.0);float total=0.0;float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec4 sample=texture2D(uSampler,vTextureCoord+delta*percent)*vColor;sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}",i="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform float blurRadius;uniform float gradientRadius;uniform float startX;uniform float startY;uniform float endX;uniform float endY;uniform float deltaX;uniform float deltaY;uniform float texSizeW;uniform float texSizeH;varying vec2 vTextureCoord;float random(vec3 scale,float seed){return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);}void main(){vec2 start = vec2(startX,startY);vec2 end = vec2(endX,endY);vec2 delta = vec2(deltaX,deltaY);vec2 texSize = vec2(texSizeW,texSizeH);vec4 color=vec4(0.0);float total=0.0;float offset=random(vec3(12.9898,78.233,151.7182),0.0);vec2 normal=normalize(vec2(start.y-end.y,end.x-start.x));float radius=smoothstep(0.0,1.0,abs(dot(vTextureCoord*texSize-start,normal))/gradientRadius)*blurRadius;for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec4 sample=texture2D(uSampler,vTextureCoord+delta/texSize*percent*radius)*vColor;sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}",s="precision lowp float;varying vec2 vTextureCoord;varying vec4 vColor;uniform sampler2D uSampler;uniform float radius;uniform float angle;uniform float centerX;uniform float centerY;uniform float texSizeW;uniform float texSizeH;void main(){vec2 texSize = vec2(texSizeW,texSizeH);vec2 center = vec2(centerX,centerY);vec2 coord=vTextureCoord*texSize;coord-=center;float distance=length(coord);if(distance<radius){float percent=(radius-distance)/radius;float theta=percent*percent*angle;float s=sin(theta);float c=cos(theta);coord=vec2(coord.x*c-coord.y*s,coord.x*s+coord.y*c);}coord+=center;vec2 result = coord/texSize;if(result.x < 0.0 || result.y < 0.0 || result.x > 1.0 || result.y>1.0){gl_FragColor=vec4(0.0,0.0,0.0,0.0);return;}gl_FragColor=texture2D(uSampler,result)*vColor;vec2 clampedCoord=clamp(coord,vec2(0.0),texSize);if(coord!=clampedCoord){gl_FragColor.a*=max(0.0,1.0-length(coord-clampedCoord));}}",o="precision lowp float;uniform float radius;varying vec4 vColor;uniform float strength;uniform sampler2D uSampler;uniform float centerX;uniform float centerY;uniform float texSizeW;uniform float texSizeH;varying vec2 vTextureCoord;void main(){vec2 center = vec2(centerX,centerY);vec2 texSize = vec2(texSizeW,texSizeH);vec2 coord=vTextureCoord*texSize;coord-=center;float distance=length(coord);if(distance<radius){float percent=distance/radius;if(strength>0.0){coord*=mix(1.0,smoothstep(0.0,radius/distance,percent),strength*0.75);}else{coord*=mix(1.0,pow(percent,1.0+strength*0.75)*radius/distance,1.0-percent);}}coord+=center;vec2 result = coord/texSize;if(result.x < 0.0 || result.y < 0.0 || result.x > 1.0 || result.y>1.0){gl_FragColor=vec4(0.0,0.0,0.0,0.0);return;}gl_FragColor=texture2D(uSampler,result)*vColor;vec2 clampedCoord=clamp(coord,vec2(0.0),texSize);if(coord!=clampedCoord){gl_FragColor.a*=max(0.0,1.0-length(coord-clampedCoord));}}",a="precision lowp float;uniform bool useTextureSpace;uniform sampler2D uSampler;uniform float texSizeW;uniform float texSizeH;varying vec2 vTextureCoord;varying vec4 vColor;uniform float m0;uniform float m1;uniform float m2;uniform float m3;uniform float m4;uniform float m5;uniform float m6;uniform float m7;uniform float m8;void main(){mat3 matrix = mat3(m0,m1,m2,m3,m4,m5,m6,m7,m8);vec2 texSize = vec2(texSizeW,texSizeH);vec2 coord=vTextureCoord*texSize;if(useTextureSpace)coord=coord/texSize*2.0-1.0;vec3 warp=matrix*vec3(coord,1.0);coord=warp.xy/warp.z;if(useTextureSpace)coord=(coord*0.5+0.5)*texSize;vec2 result = coord/texSize;if(result.x < 0.0 || result.y < 0.0 || result.x > 1.0 || result.y>1.0){gl_FragColor=vec4(0.0,0.0,0.0,0.0);return;}gl_FragColor=texture2D(uSampler,result)*vColor;vec2 clampedCoord=clamp(coord,vec2(0.0),texSize);if(coord!=clampedCoord){gl_FragColor.a*=max(0.0,1.0-length(coord-clampedCoord));}}",Q=function(A,g,e){return Math.max(A,Math.min(g,e))},E=function(A,e){return new egret.CustomFilter(g,A,e)},O=function(){function A(A){this.target=A}return A.prototype.dispose=function(){this.uniform=null,this.target.filters=[],this.target=null},A}();__reflect(O.prototype,"IEffect"),A.createEffects=function(A,g){return new g(A)};var u=function(A){function g(g){var B=A.call(this,g)||this;return B.uniform={brightness:0,contrast:0},B.refreshData(),g.filters=[E(e,B.uniform)],B}return __extends(g,A),g.prototype.refreshData=function(A,g){void 0===A&&(A=0),void 0===g&&(g=0),this.uniform.brightness=Q(-1,A,1),this.uniform.contrast=Q(-1,g,1)},g}(O);A.EffectBrightnessContrast=u,__reflect(u.prototype,"SpecialEffects.EffectBrightnessContrast");var I=function(A){function g(g){var e=A.call(this,g)||this;return e.uniform={hue:0,saturation:0},e.refreshData(),g.filters=[E(B,e.uniform)],e}return __extends(g,A),g.prototype.refreshData=function(A,g){void 0===A&&(A=0),void 0===g&&(g=0),this.uniform.hue=Q(-1,A,1),this.uniform.saturation=Q(-1,g,1)},g}(O);A.EffectHueSaturation=I,__reflect(I.prototype,"SpecialEffects.EffectHueSaturation");var x=function(A){function g(g){var e=A.call(this,g)||this;return e.uniform={amount:0},e.refreshData(),g.filters=[E(t,e.uniform)],e}return __extends(g,A),g.prototype.refreshData=function(A){void 0===A&&(A=0),this.uniform.amount=Q(-1,A,1)},g}(O);A.EffectVibrance=x,__reflect(x.prototype,"SpecialEffects.EffectVibrance");var f=function(A){function g(g){var e=A.call(this,g)||this;return e.uniform={exponent:0,texSizeW:0,texSizeH:0},e.refreshData(0,g.width||100,g.height||100),g.filters=[E(C,e.uniform)],e}return __extends(g,A),g.prototype.refreshData=function(A,g,e){void 0===A&&(A=0),this.uniform.exponent=Math.max(0,A),isNaN(g)||(this.uniform.texSizeW=g),isNaN(e)||(this.uniform.texSizeH=e)},g}(O);A.EffectDenoise=f,__reflect(f.prototype,"SpecialEffects.EffectDenoise");var h=function(){function A(){}return A}();__reflect(h.prototype,"EffectUnsharpMask");var l=function(A){function g(g){var e=A.call(this,g)||this;return e.uniform={amount:0},e.refreshData(0),g.filters=[E(r,e.uniform)],e}return __extends(g,A),g.prototype.refreshData=function(A){this.uniform.amount=Q(0,A,1)},g}(O);A.EffectNoise=l,__reflect(l.prototype,"SpecialEffects.EffectNoise");var H=function(A){function g(g){var e=A.call(this,g)||this;return e.uniform={amount:0},e.refreshData(0),g.filters=[E(w,e.uniform)],e}return __extends(g,A),g.prototype.refreshData=function(A){this.uniform.amount=Q(0,A,1)},g}(O);A.EffectSepia=H,__reflect(H.prototype,"SpecialEffects.EffectSepia");var F=function(A){function g(g){var e=A.call(this,g)||this;return e.uniform={size:0,amount:0},e.refreshData(0,0),g.filters=[E(c,e.uniform)],e}return __extends(g,A),g.prototype.refreshData=function(A,g){this.uniform.size=Q(0,A,1),this.uniform.amount=Q(0,g,1)},g}(O);A.EffectVignette=F,__reflect(F.prototype,"SpecialEffects.EffectVignette");var v=function(A){function g(g){var e=A.call(this,g)||this;return e.uniform={strength:0,centerX:0,centerY:0,texSizeW:0,texSizeH:0},e.refreshData(0,g.width/2,g.height/2,g.width,g.height),g.filters=[E(n,e.uniform)],e}return __extends(g,A),g.prototype.refreshData=function(A,g,e,B,t){this.uniform.strength=A,isNaN(g)||(this.uniform.centerX=g),isNaN(e)||(this.uniform.centerY=e),isNaN(B)||(this.uniform.texSizeW=B),isNaN(t)||(this.uniform.texSizeH=t)},g}(O);A.EffectZoomblur=v,__reflect(v.prototype,"SpecialEffects.EffectZoomblur");var G=function(A){function g(g){var e=A.call(this,g)||this;return e.uniform={deltaX:0,deltaY:0},e.uniform2={deltaX:0,deltaY:0},e.refreshData(0),g.filters=[E(D,e.uniform),E(D,e.uniform2)],e}return __extends(g,A),g.prototype.refreshData=function(A){this.uniform.deltaX=A/this.target.width,this.uniform.deltaY=0,this.uniform2.deltaX=0,this.uniform.deltaY=A/this.target.height},g}(O);A.EffectTriangleblur=G,__reflect(G.prototype,"SpecialEffects.EffectTriangleblur");var Y=function(A){function g(g){var e=A.call(this,g)||this;return e.uniform={blurRadius:0,gradientRadius:0,startX:0,startY:0,endX:0,endY:0,deltaX:0,deltaY:0,texSizeW:0,texSizeH:0},e.uniform2={blurRadius:0,gradientRadius:0,startX:0,startY:0,endX:0,endY:0,deltaX:0,deltaY:0,texSizeW:0,texSizeH:0},e.refreshData(0,0,0,0,e.target.width,e.target.height,e.target.width,e.target.height),g.filters=[E(i,e.uniform),E(i,e.uniform2)],e}return __extends(g,A),g.prototype.refreshData=function(A,g,e,B,t,C,r,w){var c=t-e,n=C-B,D=Math.sqrt(c*c+n*n);this.uniform.blurRadius=A,this.uniform.gradientRadius=g,isNaN(e)||(this.uniform.startX=e),isNaN(B)||(this.uniform.startY=this.target.height-B),isNaN(t)||(this.uniform.endX=t),isNaN(C)||(this.uniform.endY=this.target.height-C),isNaN(c)||(this.uniform.deltaX=c/D),isNaN(n)||(this.uniform.deltaY=n/D),isNaN(r)||(this.uniform.texSizeW=r),isNaN(w)||(this.uniform.texSizeH=w),this.uniform2.blurRadius=A,this.uniform2.gradientRadius=g,isNaN(e)||(this.uniform2.startX=e),isNaN(B)||(this.uniform2.startY=this.target.height-B),isNaN(t)||(this.uniform2.endX=t),isNaN(C)||(this.uniform2.endY=this.target.height-C),isNaN(n)||(this.uniform2.deltaX=-n/D),isNaN(c)||(this.uniform2.deltaY=c/D),isNaN(r)||(this.uniform2.texSizeW=r),isNaN(w)||(this.uniform2.texSizeH=w)},g}(O);A.EffectTiltShift=Y,__reflect(Y.prototype,"SpecialEffects.EffectTiltShift");var M=function(A){function g(g){var e=A.call(this,g)||this;return e.uniform={radius:0,centerX:0,centerY:0,angle:0,texSizeW:0,texSizeH:0},e.refreshData(0,0,e.target.width/2,e.target.height/2,e.target.width,e.target.height),g.filters=[E(s,e.uniform)],e}return __extends(g,A),g.prototype.refreshData=function(A,g,e,B,t,C){this.uniform.radius=g,isNaN(A)||(this.uniform.angle=A),isNaN(e)||(this.uniform.centerX=e),isNaN(B)||(this.uniform.centerY=B),isNaN(t)||(this.uniform.texSizeW=t),isNaN(C)||(this.uniform.texSizeH=C)},g}(O);A.EffectSwirl=M,__reflect(M.prototype,"SpecialEffects.EffectSwirl");var N=function(A){function g(g){var e=A.call(this,g)||this;return e.uniform={radius:0,centerX:0,centerY:0,strength:0,texSizeW:0,texSizeH:0},e.refreshData(0,0,e.target.width/2,e.target.height/2,e.target.width,e.target.height),g.filters=[E(o,e.uniform)],e}return __extends(g,A),g.prototype.refreshData=function(A,g,e,B,t,C){this.uniform.radius=g,isNaN(e)||(this.uniform.centerX=e),isNaN(A)||(this.uniform.strength=Q(-1,A,1)),isNaN(B)||(this.uniform.centerY=B),isNaN(t)||(this.uniform.texSizeW=t),isNaN(C)||(this.uniform.texSizeH=C)},g}(O);A.EffectBulgePinch=N,__reflect(N.prototype,"SpecialEffects.EffectBulgePinch");var p=function(A){function g(g){var e=A.call(this,g)||this;return e.uniform={m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m0:0,texSizeW:0,texSizeH:0,useTextureSpace:0},e.refreshData([0,0,e.target.width,0,0,e.target.height,e.target.width,e.target.height],[0,0,e.target.width,0,0,e.target.height,e.target.width,e.target.height],0,e.target.width,e.target.height),g.filters=[E(a,e.uniform)],e}return __extends(g,A),g.prototype.x=function(A,g,e,B,t,C,r,w){var c=e-t,n=B-C,D=r-t,i=w-C;t=A-e+t-r,C=g-B+C-w;var s=c*i-D*n,D=(t*i-D*C)/s,c=(c*C-t*n)/s;return[e-A+D*e,B-g+D*B,D,r-A+c*r,w-g+c*w,c,A,g,1]},g.prototype.y=function(A){var g=A[0],e=A[1],B=A[2],t=A[3],C=A[4],r=A[5],w=A[6],c=A[7];A=A[8];var n=g*C*A-g*r*c-e*t*A+e*r*w+B*t*c-B*C*w;return[(C*A-r*c)/n,(B*c-e*A)/n,(e*r-B*C)/n,(r*w-t*A)/n,(g*A-B*w)/n,(B*t-g*r)/n,(t*c-C*w)/n,(e*w-g*c)/n,(g*C-e*t)/n]},g.prototype.refreshData=function(A,g,e,B,t){var C=this.x.apply(null,A),r=this.x.apply(null,g);return C=this.y(C),this.matrixWarp([C[0]*r[0]+C[1]*r[3]+C[2]*r[6],C[0]*r[1]+C[1]*r[4]+C[2]*r[7],C[0]*r[2]+C[1]*r[5]+C[2]*r[8],C[3]*r[0]+C[4]*r[3]+C[5]*r[6],C[3]*r[1]+C[4]*r[4]+C[5]*r[7],C[3]*r[2]+C[4]*r[5]+C[5]*r[8],C[6]*r[0]+C[7]*r[3]+C[8]*r[6],C[6]*r[1]+C[7]*r[4]+C[8]*r[7],C[6]*r[2]+C[7]*r[5]+C[8]*r[8]],0,B,t)},g.prototype.matrixWarp=function(A,g,e,B){this.uniform.m0=A[0],this.uniform.m1=A[1],this.uniform.m2=A[2],this.uniform.m3=A[3],this.uniform.m4=A[4],this.uniform.m5=A[5],this.uniform.m6=A[6],this.uniform.m7=A[7],this.uniform.m8=A[8],this.uniform.texSizeW=this.target.width,this.uniform.texSizeH=this.target.height,this.uniform.useTextureSpace=0},g}(O);A.EffectPerspective=p,__reflect(p.prototype,"SpecialEffects.EffectPerspective")}(SpecialEffects||(SpecialEffects={}));var AD_TYPE;!function(A){A[A.tap1=1]="tap1",A[A.tap2=2]="tap2",A[A.normal=3]="normal"}(AD_TYPE||(AD_TYPE={}));var GameMain=function(A){function g(){var g=A.call(this)||this;return g.mcArr=[],g.adType=AD_TYPE.normal,g.guideArr=[new egret.Point(460,624),new egret.Point(328,496),new egret.Point(774,650),new egret.Point(900,650),new egret.Point(600,440),new egret.Point(1082,422)],g.kImgTapButton=new eui.Image(main_tap),g.skinName=GameMainDevSkin,g.once(egret.Event.ADDED_TO_STAGE,g.initUI,g),g}return __extends(g,A),Object.defineProperty(g,"instance",{get:function(){return this._instance||(this._instance=new g),this._instance},enumerable:!0,configurable:!0}),g.prototype.initUI=function(){this.kImgMenu1.source=this.kImgMenu2.source=main_alert_bg,this.kImgOrder1.source=main_order,this.kImgOrder2.source=main_coke3,this.kImgXu.source=main_xuxian,this.kImgDrumstick.source=main_drumstick0,this.kImgShu.source=main_cu,this.kImgFan.source=main_cake,this.kImgCoin1.source=this.kImgCoin2.source=main_icon_coin,this.kImgHand.source=main_guide_arrow,this.kImgBg.source=main_bg,this.kImgCoke.source=main_coke3,this.kImgEndBg.source=main_bg3,this.kImgTopic.source=main_reward_bg,this.kImgDisk.source=main_disk,this.kImgLogo1.source=main_logo1,this.kImgLogo2.source=main_logo2,this.kProgress=new ProgressBar,this.kGrpMain.addChild(this.kProgress),this.kGrpMain.setChildIndex(this.kProgress,1),this.kProgress.x=395,this.kProgress.slideDuration=300,this.playStartAni(),this.addEvents()},g.prototype.playStartAni=function(){return __awaiter(this,void 0,void 0,function(){var A,g=this;return __generator(this,function(e){switch(e.label){case 0:return this.kImgShu.scaleX=this.kImgShu.scaleY=this.kImgFan.scaleX=this.kImgFan.scaleY=0,this.geek=new eui.Image(grampa),A=this,[4,McManger.instance.getMcAtH5("laugh",gramma_j,gramma,"laugh")];case 1:return A.aunt=e.sent(),this.aunt.x=50,this.kGrpB.addChild(this.aunt),this.kGrpA.addChild(this.geek),egret.Tween.get(this.kGrpPeople1).to({x:662},500,egret.Ease.sineOut).call(function(){egret.Tween.get(g.kGrpMenu1).to({scaleX:1,scaleY:1},500,egret.Ease.elasticOut);var A=new egret.Shape;A.graphics.beginFill(0,1),A.graphics.drawCircle(0,0,85),A.graphics.endFill(),A.x=442,A.y=642;var e=new Guide;e.init(A,1280,720),g.kGrpAction.addChild(e),g.kImgXu.visible=!0,g.kLbTips.visible=!0,GuideStep.instance.init(g.kGrpGuide,g.guideArr),GuideStep.instance.moveHand(g.touchFirst.bind(g))}),[2]}})})},g.prototype.addEvents=function(){},g.prototype.touchFirst=function(){return __awaiter(this,void 0,void 0,function(){var A,g=this;return __generator(this,function(e){switch(e.label){case 0:return this.kGrpAction.removeChildren(),this.kImgXu.visible=!1,this.kLbTips.visible=!1,GuideStep.instance.clearHand(),this.kGrpFood.visible=!0,this.playSmog(0,this.kGrpFood.x-40,this.kGrpFood.y-80),[4,McManger.instance.getMcAtH5("cishen",cishen_j,cishen,"cishen")];case 1:return A=e.sent(),this.kGrpFood.addChild(A),A.x=-90,A.y=-100,A.scaleX=A.scaleY=2.37,this.qie=A,A.gotoAndPlay(0),this.setProgress(1200,function(){GuideStep.instance.moveHand(g.touchSecond.bind(g)),g.kGrpFood.removeChild(g.qie),g.kImgDrumstick.visible=!0},this.kGrpFood.x-200,this.kGrpFood.y-200),[2]}})})},g.prototype.touchSecond=function(){var A=this;GuideStep.instance.clearHand(),this.clearMc(),egret.Tween.get(this.kGrpFood).to({x:530,y:450},300).call(function(){A.kImgDrumstick.source=main_drumstick_1,A.kImgDisk.visible=!0}),egret.Tween.get(this.kGrpPeople2).to({x:240},300,egret.Ease.sineOut).call(function(){egret.Tween.get(A.kGrpMenu2).to({scaleX:1,scaleY:1},500,egret.Ease.elasticOut),GuideStep.instance.moveHand(A.touchThird.bind(A))}),this.kGrpMain.setChildIndex(this.kImgCoke,this.kGrpMain.getChildIndex(this.kGrpAction)),this.setTimeCallBack(600,function(){egret.Tween.get(A.kImgCoke).to({x:1082,y:442,scaleX:1,scaleY:1},300,egret.Ease.sineOut)}),this.setProgress(600,function(){},this.kImgCoke.x-100,this.kImgCoke.y-100)},g.prototype.touchThird=function(){var A=this,g=new egret.Point(this.kImgFan.x,this.kImgFan.y);GuideStep.instance.clearHand(),egret.Tween.get(this.kImgFan).to({x:g.x,y:g.y,scaleX:1,scaleY:1},300,egret.Ease.getElasticOut).call(function(){GuideStep.instance.moveHand(A.touchFourth.bind(A))})},g.prototype.touchFourth=function(){var A=this,g=new egret.Point(this.kImgShu.x,this.kImgShu.y);GuideStep.instance.clearHand(),egret.Tween.get(this.kImgShu).to({x:g.x,y:g.y,scaleX:1,scaleY:1},300,egret.Ease.getElasticOut).call(function(){GuideStep.instance.moveHand(A.touchFifth.bind(A))})},g.prototype.touchFifth=function(){var A=this;return this.adType===AD_TYPE.tap1?void this.openPlateForm():(this.adType===AD_TYPE.tap2&&this.setTimeCallBack(1e3,this.showButton.bind(this)),GuideStep.instance.clearHand(),void egret.Tween.get(this.kGrpFood).to({x:740,y:180,scaleX:.4,scaleY:.4},300,egret.Ease.sineOut).call(function(){GuideStep.instance.moveHand(A.touchSixth.bind(A)),A.kImgOrder1.source=main_right,A.kImgCoin1.visible=!0,A.kGrpMain.removeChild(A.kGrpFood),A.playFlyCoin(new egret.Point(730,220),new egret.Point(395,0),function(){A.kProgress.value+=50,A.aunt.gotoAndPlay(0,-1),egret.Tween.get(A.kGrpPeople1).wait(800).to({alpha:0},300)})}))},g.prototype.touchSixth=function(){var A=this;return this.adType===AD_TYPE.tap2?void this.openPlateForm():(GuideStep.instance.clearHand(),void egret.Tween.get(this.kImgCoke).to({x:525,y:150,scaleX:.5,scaleY:.5},300,egret.Ease.sineOut).call(function(){A.kImgOrder2.source=main_right,A.kImgOrder2.scaleX=A.kImgOrder2.scaleY=1,A.kImgCoin2.visible=!0,A.kGrpMain.removeChild(A.kImgCoke),A.playFlyCoin(new egret.Point(515,235),new egret.Point(395,0),function(){A.kProgress.value+=50,egret.Tween.get(A.kGrpPeople2).wait(800).to({alpha:0},300).call(function(){A.playEndAni()})})}))},g.prototype.playEndAni=function(){var A=this;this.kLbTopic.visible=!1;var g=new eui.Rect(1280,720,0);g.fillAlpha=.5,this.kGrpAction.addChild(g),this.kGrpEnd.visible=!0,this.playYanhua(),this.playYanhua(),this.playYanhua(),this.playYanhua(),this.playYanhua(),this.playYanhua(),this.playYanhua(),this.playCaidai(400,2e3),this.setTimeCallBack(1500,function(){A.kGrpClose.visible=!0,A.kImgHand.visible=!0,A.kImgHand.x=300,A.kImgHand.y=400,A.kImgLogo2.scaleX=A.kImgLogo2.scaleY=.8,A.kImgLogo1.scaleX=A.kImgLogo1.scaleY=.8,egret.Tween.get(A.kImgHand,{loop:!0}).call(A.playToggleA.bind(A)).wait(300).to({x:872},1500).call(A.playToggleB.bind(A)).wait(300).to({x:372},1500),A.addEventListener(egret.TouchEvent.TOUCH_END,A.openPlateForm,A)
})},g.prototype.playToggleA=function(){egret.Tween.get(this.kImgLogo1).to({scaleX:1,scaleY:1},300).wait(200).to({scaleX:.8,scaleY:.8},100).wait(900)},g.prototype.playToggleB=function(){egret.Tween.get(this.kImgLogo2).to({scaleX:1,scaleY:1},300).wait(200).to({scaleX:.8,scaleY:.8},100).wait(900)},g.prototype.playFei=function(A,g,e){return __awaiter(this,void 0,void 0,function(){var A;return __generator(this,function(B){switch(B.label){case 0:return[4,McManger.instance.getMcAtH5("mc",mc_j,mc,"soil")];case 1:return A=B.sent(),this.kGrpAction.addChild(A),A.x=g,A.y=e,A.gotoAndPlay(0,-1),this.mcArr.push(A),[2]}})})},g.prototype.playSmog=function(A,g,e){return __awaiter(this,void 0,void 0,function(){var A;return __generator(this,function(B){switch(B.label){case 0:return[4,ParticleUtil.instance.getParticleAtH5(this.kGrpAction,smoke_j,smoke,g,e)];case 1:return A=B.sent(),A.alpha=.4,this.mcArr.push(A),[2]}})})},g.prototype.clearMc=function(){var A=this;this.mcArr.forEach(function(g){A.kGrpAction.removeChild(g),g=null}),this.mcArr=[]},g.prototype.setProgress=function(A,g,e,B){return __awaiter(this,void 0,void 0,function(){var t,C=this;return __generator(this,function(r){switch(r.label){case 0:return[4,McManger.instance.getMcAtH5("mc",mc_j,mc,"clock")];case 1:return t=r.sent(),this.kGrpAction.addChild(t),t.x=e,t.y=B,t.frameRate=8e3/A,t.gotoAndPlay(0),t.once(egret.Event.COMPLETE,function(){C.kGrpAction.removeChild(t),g()},this),[2]}})})},g.prototype.setStream=function(A,g,e,B){return __awaiter(this,void 0,void 0,function(){var t,C=this;return __generator(this,function(r){switch(r.label){case 0:return[4,McManger.instance.getMcAtH5("mc",mc_j,mc,"stream")];case 1:return t=r.sent(),this.kGrpAction.addChild(t),t.x=e,t.y=B,t.scaleX=t.scaleY=.5,t.frameRate=24e3/A,t.gotoAndPlay(0),t.once(egret.Event.COMPLETE,function(){C.kGrpAction.removeChild(t),g()},this),[2]}})})},g.prototype.playFlyCoin=function(A,g,e){for(var B=this,t=[],C=20,r=0,w=0;C>w;w++){var c=new eui.Image(main_icon_coin);c.x=A.x-20,c.y=A.y-20,this.kGrpAction.addChild(c),t.push(c)}var n=egret.setInterval(function(){if(egret.Tween.get(t[r]).to({x:g.x,y:g.y},300),r++,20==r){egret.clearInterval(n),e();for(var A=0;A<t.length;A++)egret.Tween.removeTweens(t[A]),B.kGrpAction.removeChild(t[A])}},this,40)},g.prototype.playCaidai=function(A,g){for(var e=this,B=[],t=[main_dai1,main_dai2,main_dai3,main_dai4,main_dai5,main_dai6,main_dai7,main_dai8,main_dai9,main_dai10],C=function(A){var C=new eui.Image(t[Math.floor(10*Math.random())]);C.x=Math.floor(Math.random()*r.stage.width),C.y=0,B.push(C);var w=egret.setTimeout(function(){egret.clearTimeout(w),e.kGrpAction.addChild(C),egret.Tween.get(C).to({rotation:90*Math.random()},300),egret.Tween.get(C).to({y:e.stage.height},800).call(function(){egret.Tween.removeTweens(C),e.kGrpAction.removeChild(C)})},r,g*Math.random())},r=this,w=0;A>w;w++)C(w)},g.prototype.playYanhua=function(){var A=this,g=Math.floor(800*Math.random()),e=[main_yanhua_1,main_yanhua_2,main_yanhua_3],B=egret.setTimeout(function(){egret.clearTimeout(B);var g=A.createPoint(),t=new eui.Image(e[Math.floor(3*Math.random())]);t.anchorOffsetX=102.5,t.anchorOffsetY=96.5,t.scaleX=t.scaleY=0,t.x=g.x,t.y=g.y,A.kGrpAction.addChild(t),egret.Tween.get(t).to({scaleX:2,scaleY:2},1200,egret.Ease.quadOut).to({alpha:0},300).call(function(){egret.Tween.removeTweens(t),A.kGrpAction.removeChild(t)})},this,g)},g.prototype.createPoint=function(){return new egret.Point(.2*this.width+Math.floor(.6*Math.random()*this.width),.2*this.height+Math.floor(.8*Math.random()*this.height))},g.prototype.setTimeCallBack=function(A,g){var e=egret.setTimeout(function(){egret.clearTimeout(e),g()},this,A)},g.prototype.openPlateForm=function(){console.log("平台跳转"),window.dapi&&window.dapi.openStoreUrl(),window.Liftoff&&window.Liftoff.open(),window.mraid&&window.mraid.open(),window.FBPlayableOnCTAClick&&window.FBPlayableOnCTAClick(),parent.postMessage("download","*"),window.ExitApi&&window.ExitApi.exit(),parent.postMessage("complete","*")},g.prototype.showButton=function(){var A=this;this.kImgTapButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openPlateForm,this),this.kGrpGuide.addChild(this.kImgTapButton),this.kImgTapButton.horizontalCenter=0,this.kImgTapButton.verticalCenter=50,this.kImgTapButton.scaleX=this.kImgTapButton.scaleY=0,egret.Tween.get(this.kImgTapButton).to({scaleX:1,scaleY:1},700,egret.Ease.elasticOut).call(function(){egret.Tween.removeTweens(A.kImgTapButton),egret.Tween.get(A.kImgTapButton,{loop:!0}).to({scaleX:1.3,scaleY:1.3},600).to({scaleX:1.1,scaleY:1.1},100)})},g}(eui.Component);__reflect(GameMain.prototype,"GameMain",["eui.UIComponent","egret.DisplayObject"]);
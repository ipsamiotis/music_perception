(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4af6c0be"],{9201:function(t,e,n){},e46f:function(t,e,n){"use strict";n.r(e);var a=n("7a23"),i=Object(a["I"])("data-v-910ab778");Object(a["w"])("data-v-910ab778");var s=Object(a["i"])("head",null,[Object(a["i"])("title",null,"Music Skill Assessment")],-1),r=Object(a["i"])("header",null,[Object(a["i"])("h1",null,"Music Skill Assessment")],-1),l={class:"p-shadow-1",id:"instructions"},o=Object(a["g"])("<h3 data-v-910ab778>Task Instructions</h3><strong data-v-910ab778>Welcome to our study on Music Skills!</strong><br data-v-910ab778><ul data-v-910ab778><li data-v-910ab778>In the following tasks you are asked to fill in <strong data-v-910ab778>questionnaires</strong> regarding your familiarity in music (~8mins).</li><li data-v-910ab778>You will also participate in a <strong data-v-910ab778> skill test</strong> to assess your music skills (~15mins) on different categories.</li><li data-v-910ab778>Finally, you will be asked to fill in a <strong data-v-910ab778>post-test survey</strong> (~3mins).</li></ul><br data-v-910ab778>",5),u=Object(a["h"])(" Make sure you follow the instructions on the tasks, to navigate successfully. "),c=Object(a["i"])("br",null,null,-1),b=Object(a["i"])("br",null,null,-1),d=Object(a["i"])("strong",{style:{color:"red"}},"IMPORTANT:",-1),f=Object(a["h"])(' Please don\'t make use of your browser\'s nagivation buttons ("back", "next"), as your progress will be lost and you will be navigated back to this page. '),m=Object(a["i"])("br",null,null,-1),h=Object(a["i"])("br",null,null,-1),O=Object(a["h"])(" Regarding Privacy: "),j=Object(a["i"])("b",null,[Object(a["i"])("u",null,"This is an anonymous survey.")],-1),p=Object(a["h"])(" Please do not self-identify yourself as responses may be shared publicly. This survey complies with the GDPR (General Data Protection Regulation). "),v={style:{"text-align":"center"}},g=Object(a["i"])("br",null,null,-1),y=Object(a["i"])("br",null,null,-1);Object(a["u"])();var k=i((function(t,e,n,i,k,w){var I=Object(a["B"])("Button");return Object(a["t"])(),Object(a["e"])(a["a"],null,[s,Object(a["i"])("body",null,[r,Object(a["i"])("section",null,[Object(a["i"])("div",l,[o,Object(a["i"])("h1",null,Object(a["E"])(i.state.userId),1),u,c,b,d,f,m,h,O,j,p]),Object(a["i"])("div",v,[g,y,Object(a["i"])(I,{label:"Begin",onClick:e[1]||(e[1]=function(e){i.stopTimer(),i.addDemographics(),t.$router.push({name:"Demographics",params:{userId:i.state.userId}})})})])])])],64)})),w=n("1da1"),I=(n("96cf"),n("bb57")),T=n("bc3a"),M=n.n(T),P={components:{Button:I["a"]},setup:function(){var t=Object(a["x"])({userId:"",introduction:{},timer:null,reactionTime:0});function e(){t.timer=setInterval((function(){t.reactionTime+=10}),10),t.userId=r(6)}function n(){clearInterval(t.timer),t.introduction["time_spent"]=t.reactionTime}function i(){return s.apply(this,arguments)}function s(){return s=Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M.a.post("https://crowdmanager.eu/",{id:t.userId,introduction:t.introduction});case 2:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function r(t){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=n.length,i=0;i<t;i++)e+=n.charAt(Math.floor(Math.random()*a));return e}return Object(a["r"])((function(){setTimeout((function(){e()}))})),{state:t,startTimer:e,stopTimer:n,addDemographics:i,makeid:r}}};n("f051");P.render=k,P.__scopeId="data-v-910ab778";e["default"]=P},f051:function(t,e,n){"use strict";n("9201")}}]);
//# sourceMappingURL=chunk-4af6c0be.49097c8b.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83abf8bc"],{"3a4c":function(e,t,n){},bd47:function(e,t,n){"use strict";n("3a4c")},e46f:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=Object(a["I"])("data-v-77bce7c4");Object(a["w"])("data-v-77bce7c4");var i=Object(a["i"])("head",null,[Object(a["i"])("title",null,"Music Skill Assessment")],-1),r=Object(a["i"])("header",null,[Object(a["i"])("h1",null,"Music Skill Assessment")],-1),s=Object(a["g"])('<div class="p-shadow-1" id="instructions" data-v-77bce7c4><h3 data-v-77bce7c4>Task Instructions</h3><strong data-v-77bce7c4>Welcome to our study on Music Skills!</strong><br data-v-77bce7c4><ul data-v-77bce7c4><li data-v-77bce7c4>In the following tasks you are asked to fill in <strong data-v-77bce7c4>questionnaires</strong> regarding your familiarity in music (~8mins).</li><li data-v-77bce7c4>You will also participate in a <strong data-v-77bce7c4> skill test</strong> to assess your music skills (~15mins) on different categories.</li><li data-v-77bce7c4>Finally, you will be asked to fill in a <strong data-v-77bce7c4>post-test survey</strong> (~3mins).</li></ul><br data-v-77bce7c4> Make sure you follow the instructions on the tasks, to navigate successfully. <br data-v-77bce7c4><br data-v-77bce7c4><strong style="color:red;" data-v-77bce7c4>IMPORTANT:</strong> Please only use <strong data-v-77bce7c4>Mozilla Firefox</strong> or <strong data-v-77bce7c4>Google Chrome</strong> for this study. <br data-v-77bce7c4><br data-v-77bce7c4> Regarding Privacy: <b data-v-77bce7c4><u data-v-77bce7c4>This is an anonymous survey.</u></b> Please do not self-identify yourself as responses may be shared publicly. This survey complies with the GDPR (General Data Protection Regulation). </div>',1),o={style:{"text-align":"center"}},u=Object(a["i"])("br",null,null,-1),l=Object(a["i"])("br",null,null,-1),b={key:0},d={key:0},m={key:1};Object(a["u"])();var f=c((function(e,t,n,c,f,v){var p=Object(a["B"])("Button");return Object(a["t"])(),Object(a["e"])(a["a"],null,[i,Object(a["i"])("body",null,[r,Object(a["i"])("section",null,[s,Object(a["i"])("div",o,[u,l,c.state.isFirefox||c.state.isChrome?(Object(a["t"])(),Object(a["e"])("div",b,[Object(a["i"])(p,{label:"Begin",onClick:t[1]||(t[1]=function(e){return c.groundHogDay()}),disabled:c.state.memory_of_this_place},null,8,["disabled"]),c.state.memory_of_this_place?(Object(a["t"])(),Object(a["e"])("div",d,"Sorry, it appears you had previously accessed this study")):Object(a["f"])("",!0)])):(Object(a["t"])(),Object(a["e"])("div",m," Please use Mozilla Firefox or Chrome in this study "))])])])],64)})),v=n("1da1"),p=(n("96cf"),n("6c02")),h=n("a18c"),y=n("bb57"),g=n("bc3a"),O=n.n(g),j={components:{Button:y["a"]},setup:function(){var e=Object(p["c"])(),t=Object(a["c"])((function(){return e.params.userId})),n=Object(a["x"])({introduction:{},memory_of_this_place:!1,timer:null,isFirefox:"",isChrome:"",reactionTime:0});function c(){n.timer=setInterval((function(){n.reactionTime+=10}),10),i()}function i(){n.isFirefox="undefined"!==typeof InstallTrigger,n.isChrome=!!window.chrome&&(!!window.chrome.webstore||!!window.chrome.runtime)}function r(){return s.apply(this,arguments)}function s(){return s=Object(v["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="",e.prev=1,e.next=4,O.a.get("https://crowdmanager.eu/".concat(t.value));case 4:a=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),a=e.t0.request.status;case 10:return e.prev=10,404!==a&&(n.memory_of_this_place=!0),n.memory_of_this_place||o(),e.finish(10);case 14:case"end":return e.stop()}}),e,null,[[1,7,10,14]])}))),s.apply(this,arguments)}function o(){u(),l(),h["a"].push({name:"Demographics",params:{userId:t.value}})}function u(){clearInterval(n.timer),n.introduction["time_spent"]=n.reactionTime}function l(){return b.apply(this,arguments)}function b(){return b=Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("https://crowdmanager.eu/",{id:t.value,introduction:n.introduction});case 2:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}return Object(a["r"])((function(){setTimeout((function(){c()}))})),{state:n,startTimer:c,stopTimer:u,addDemographics:l,userId:t,groundHogDay:r,enableNext:o}}};n("bd47");j.render=f,j.__scopeId="data-v-77bce7c4";t["default"]=j}}]);
//# sourceMappingURL=chunk-83abf8bc.63241432.js.map
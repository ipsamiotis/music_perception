(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7f457ea"],{"11bf":function(e,t,n){"use strict";n("f5af")},e3ee:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=Object(c["I"])("data-v-9b86c86a");Object(c["w"])("data-v-9b86c86a");var a=Object(c["i"])("body",null,[Object(c["i"])("header",null,[Object(c["i"])("div",{id:"branding"},[Object(c["i"])("h1",null,"Music Skill Assessment")])]),Object(c["i"])("section",null,[Object(c["i"])("h2",{style:{color:"#1E88E5"}},"You have completed most of the study so far!"),Object(c["h"])(" In the following pages, we're going to ask some questions regarding the study. ")]),Object(c["i"])("br")],-1);Object(c["u"])();var i=r((function(e,t,n,r,i,s){var o=Object(c["B"])("Button");return Object(c["t"])(),Object(c["e"])(c["a"],null,[a,Object(c["i"])(o,{label:"Proceed",onClick:t[1]||(t[1]=function(e){return r.enableNext()}),class:"p-button-success"})],64)})),s=n("1da1"),o=(n("96cf"),n("6c02")),u=n("a18c"),l=n("bb57"),b=n("bc3a"),p=n.n(b),f={components:{Button:l["a"]},setup:function(){var e=Object(o["c"])(),t=Object(c["c"])((function(){return e.params.userId})),n=Object(c["x"])({progressReplies:{},timer:null,reactionTime:0});function r(){i(),l(),u["a"].push({name:"DKEffect",params:{userId:t.value}})}function a(){n.timer=setInterval((function(){n.reactionTime+=10}),10)}function i(){clearInterval(n.timer),n.progressReplies["time_spent"]=n.reactionTime}function l(){return b.apply(this,arguments)}function b(){return b=Object(s["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c={"Content-Type":"application/json"},e.next=3,p.a.patch("https://crowdmanager.eu/".concat(t.value),{progressPage:n.progressReplies},{headers:c});case 3:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}return Object(c["r"])((function(){setTimeout((function(){a()}))})),{state:n,enableNext:r,addDemographics:l,startTimer:a,stopTimer:i,userId:t}}};n("11bf");f.render=i,f.__scopeId="data-v-9b86c86a";t["default"]=f},f5af:function(e,t,n){}}]);
//# sourceMappingURL=chunk-a7f457ea.02beeacb.js.map
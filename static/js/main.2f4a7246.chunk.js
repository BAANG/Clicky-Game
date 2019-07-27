(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Archer",image:"assets/img/Archers.jpg",description:"Equipped with a bow and arrow, this warrior provides valuable long-range attacks. May Aim for higher damage..."},{id:2,name:"Bard",image:"assets/img/Bards.jpg",description:"A warrior who uses his voice as a weapon. May use Bardsong to support his allies in battle..."},{id:3,name:"Black Mage",image:"assets/img/BlkMages.jpg",description:"A warrior who uses Black Magicks to channel elemental powers into powerful offensive spells..."},{id:4,name:"Calculator",image:"assets/img/Calculators.jpg",description:"A learned warrior who uses Arithmeticks to analyze natural phenomena and pinpoint magickal attacks..."},{id:5,name:"Chemist",image:"assets/img/Chemists.jpg",description:"An expert in the use of items to recover HP or remove vexing status ailments..."},{id:6,name:"Dancer",image:"assets/img/Dancer.jpg",description:"A warrior who dances across the battlefield, garbed in colorful raiments..."},{id:7,name:"Dragoon",image:"assets/img/Dragoons.jpg",description:"A warrior who may make soaring Jump attacks even in full armor, the dragoon is also a master spearman..."},{id:8,name:"Geomancer",image:"assets/img/Geomancers.jpg",description:"A warrior who uses Geomancy to control powers lying dormant in the natural terrain..."},{id:9,name:"Knight",image:"assets/img/Knights.jpg",description:"A brave and chivalrous warrior of unmatched skill. Uses a knight's sword to unleash the Arts of War..."},{id:10,name:"Orator",image:"assets/img/Orators.jpg",description:"A warrior who participates in battle using Speechcraft. Words, rather than swords, are the orator's weapons..."},{id:11,name:"Mime",image:"assets/img/Mimes.jpg",description:"A warrior who has abandoned his or her own identity, instead mimicking the actions of allies in battle..."},{id:12,name:"Monk",image:"assets/img/Monks.jpg",description:"A warrior, devoted to physical training, whose unarmed attacks are deadly. May use Martial Arts..."},{id:13,name:"Mystic",image:"assets/img/Mystics.jpg",description:"A warrior who uses the Mystic Arts to bend the forces of the cosmos to his or her will..."},{id:14,name:"Ninja",image:"assets/img/Ninjas.jpg",description:"A warrior who uses stealth to be all but invisible. The ninja may also Throw weapons at faraway enemies..."},{id:15,name:"Samurai",image:"assets/img/Samurais.jpg",description:"Following a warrior ethic from a foreign land, the samurai uses Iaido techniques to attack with his or her katana..."},{id:16,name:"Squire",image:"assets/img/Squires.jpg",description:"This job serves as the foundation for all others, forming the first step on the road to becoming a legendary warrior..."},{id:17,name:"Summoner",image:"assets/img/Summoners.jpg",description:"A warrior who may Summon the most powerful of spirits, the beings known as espers..."},{id:18,name:"Thief",image:"assets/img/Thiefs.jpg",description:"Warriors who can steal anything from anyone. Their skill is legendary..."},{id:19,name:"Time Mage",image:"assets/img/TimeMages.jpg",description:"The Time Mage controls time and space. This sorcerer toys with the laws of the universe..."},{id:20,name:"White Mage",image:"assets/img/WhtMages.jpg",description:"A warrior who taps into the powers of the divine, using White Magicks to cast spells of recovery and protection..."}]},,,,function(e,a,t){e.exports=t(24)},,,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(0),i=t.n(s),r=t(2),n=t.n(r),o=(t(16),t(8)),c=t(3),m=t(4),l=t(7),d=t(5),h=t(9),g=(t(17),t(18),t(19),function(e){var a=e.id,t=e.name,s=e.image,r=e.description,n=e.handleUserPicks;return i.a.createElement("div",{className:"col-3 card-cols"},i.a.createElement("div",{className:"card w-100",key:a,"data-id":a,name:t,style:{width:"18rem"}},i.a.createElement("div",{className:"card-body",onClick:n,"data-id":a,name:t},i.a.createElement("img",{className:"card-img-top",src:s,alt:t,"data-id":a,name:t}),i.a.createElement("p",{className:"card-text text-center","data-id":a,name:t},i.a.createElement("strong",{"data-id":a,name:t},"- The ",t," -"),i.a.createElement("hr",null),i.a.createElement("em",{"data-id":a,name:t},'"',r,'"')))))});t(20);var u=function(e){return i.a.createElement("div",{className:"container"},e.children)};t(21);var p=function(e){return i.a.createElement("div",{className:"jumbotron jumbotron-fluid",id:"hero"},e.children)};t(22);var f=function(e){return i.a.createElement("div",{className:"row",id:"info-header"},i.a.createElement("div",{className:"col-4 user-info"},"Made by Christopher Celestino"),i.a.createElement("div",{className:"col-4 user-info text-center"},e.message),i.a.createElement("div",{className:"col-4 user-info text-right"},"Score: ",e.score," | Hi-Score: ",e.hiScore))};t(23);var w=function(e){return i.a.createElement("div",{id:"footer"},e.children)},v=t(6),k=function(e){function a(){var e,t;Object(c.a)(this,a);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={characters:v,userPicks:[],hiScore:0,message:""},t.handleUserPicks=function(e){var a=e.target.getAttribute("name");console.log("Name:",e.target.getAttribute("name")),t.checkPick(a,t.setScore),t.shuffleCards()},t.checkPick=function(e,a){var s=Object(o.a)({},t.state);s.userPicks.includes(e)?(s.message="You've already guessed The ".concat(e,"! Too bad."),s.userPicks=[],t.setState(s)):(s.userPicks.push(e),s.message="You've picked The ".concat(e,"! Good job!"),t.setState(s),console.log(t.state)),a(s,t.message)},t.setScore=function(e){e.userPicks.length>e.hiScore&&(e.hiScore++,t.setState(e))},t.shuffleArray=function(e){var a,t,s;for(s=e.length-1;s>0;s--)a=Math.floor(Math.random()*(s+1)),t=e[s],e[s]=e[a],e[a]=t;return e},t.shuffleCards=function(){t.setState(t.setState.characters=t.shuffleArray(t.state.characters))},t.winConditionMet=function(e){e.userPicks.length===t.characters.length&&(e.message="You win!",e.userPicks=[],t.setState(e))},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(f,{message:this.state.message,hiScore:this.state.hiScore,score:this.state.userPicks.length}),i.a.createElement(p,null,i.a.createElement("h1",{className:"display-1 text-center"},"Final Fantasy Memory Game"),i.a.createElement("p",{className:"lead text-center"},"Click on each character card only ONCE! Test your memory and see how high you can score!")),i.a.createElement(u,null,i.a.createElement("div",{className:"row"},this.state.characters.map(function(a){return i.a.createElement(g,{id:a.id,name:a.name,image:a.image,description:a.description,handleUserPicks:e.handleUserPicks})}))),i.a.createElement(w,null))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.2f4a7246.chunk.js.map
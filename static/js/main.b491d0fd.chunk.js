(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(8),r=a.n(c),i=(a(14),a(1)),s=a(2),l=a(4),d=a(3),u=a(5),m=(a(16),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).updateActiveNoteIndex=function(e){a.props.updateActiveNoteIndex(e)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.notes,a=t.length>0;return o.a.createElement("div",{className:"sidebar"},a&&t.map(function(t,a){return o.a.createElement("div",{key:a,onClick:function(){return e.props.updateActiveNoteIndex(a)},className:a===e.props.activeNoteIndex?"sidenote active":"sidenote"},o.a.createElement("span",null,o.a.createElement("b",null,t.body?t.body.slice(0,12):"New note","...")),o.a.createElement("br",null),o.a.createElement("span",{className:"note-metadata"},t.body.slice(0,30)),o.a.createElement("br",null),o.a.createElement("span",{className:"note-metadata"},t.modified_at.toLocaleDateString()))}))}}]),t}(n.Component)),p=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.note;return o.a.createElement("div",{className:"board"},o.a.createElement("textarea",{autoFocus:!0,value:t?t.body:"",onChange:function(t){return e.props.updateNote(t.target.value)}}))}}]),t}(n.Component),N=a(6),v=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"menubar"},o.a.createElement("button",{className:"action-button",onClick:this.props.addNewNote},o.a.createElement(N.a,{className:"controls"})),o.a.createElement("button",{className:"action-button",onClick:this.props.deleteNote},o.a.createElement(N.b,{className:"controls"})))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[],activeNoteIndex:0},a.updateActiveNoteIndex=function(e){a.setState({activeNoteIndex:e})},a.updateNote=function(e){var t=a.state,n=t.notes;n[t.activeNoteIndex]={body:e,modified_at:new Date},a.setState({notes:n})},a.addNewNote=function(){var e={body:"",modified_at:new Date};a.setState({notes:[e].concat(a.state.notes),activeNoteIndex:0})},a.deleteNote=function(e){var t=a.state,n=t.notes,o=t.activeNoteIndex;n.length&&(n.splice(o,1),a.setState({notes:n,activeNoteIndex:o?o-1:0}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.notes[this.state.activeNoteIndex];return o.a.createElement("div",{className:"App"},o.a.createElement(v,{addNewNote:this.addNewNote,deleteNote:this.deleteNote}),o.a.createElement("div",{className:"main"},o.a.createElement(m,{notes:this.state.notes,updateActiveNoteIndex:this.updateActiveNoteIndex,activeNoteIndex:this.state.activeNoteIndex}),o.a.createElement(p,{note:e,updateNote:this.updateNote})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.b491d0fd.chunk.js.map
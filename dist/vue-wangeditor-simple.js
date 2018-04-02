!function(A,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("wangeditor")):"function"==typeof define&&define.amd?define(["wangeditor"],e):A.main=e(A.wangeditor)}(this,function(A){"use strict";A=A&&A.hasOwnProperty("default")?A.default:A,function(A,e){if("undefined"==typeof document)return e;A=A||"";var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.appendChild(n),n.styleSheet?n.styleSheet.cssText=A:n.appendChild(document.createTextNode(A))}('@font-face{font-family:w-icon;src:url(data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAA1EAAwAAAAADPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABHAAAAYAAAAGA4Zbj9k9TLzIAAAKcAAAAYAAAAGAPEgdsY21hcAAAAvwAAADEAAAAxL7TwtlnYXNwAAADwAAAAAgAAAAIAAAAEGdseWYAAAPIAAAGeAAABnjO8r8caGVhZAAACkAAAAA2AAAANhCeVXdoaGVhAAAKeAAAACQAAAAkB8ID5mhtdHgAAAqcAAAAlAAAAJQiAABCbG9jYQAACzAAAABMAAAATBDoElhtYXhwAAALfAAAACAAAAAgACsAVm5hbWUAAAucAAABhgAAAYaZSgn7cG9zdAAADSQAAAAgAAAAIAADAAAAAQAAAAoAHgAsAAFsYXRuAAgABAAAAAAAAAABAAAAAWxpZ2EACAAAAAEAAAABAAQABAAAAAEACgAAAAEAFAAHACYAkAC0APwBDgEkATwAAQAHAAkACwAMABcAGAAaACQABQAMABgAKAA6AFwAIAAFABYAFAAXABcAIwAHABQAEwAXABQAEQALAB8ACAAUABEAEQAIABUAFwALACIAEAARAAsACAAWAAQADAAUABYAEgAIABgAGAAPABMADQAgAAYACAATAAkACwARAAIABgAUAB4ABgAbABUACAATAAoAHgAHABMAEQAIABYADQALAAQACgAYACYAMgAhAAYAGQATABMACwARACEABgAPABEAGAALABYAHQAFAA8AEQALAAYAHQAKAA8AEQALAAQACwASABUAGAAcAAEABAAfAAYADgAWAA8AEwAQAAEABAAjAAgACwAWABIADwATAAgAEQABAAQAIgAJABwAFwAPABoAHAANAAUABwABAAQAIwACACQAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADqggPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAqAAAACYAIAAEAAYAAQAgAC0AMQAzADcAYQBpAHAAdQB56STpiuoP6lvqb+qC//3//wAAAAAAIAAtADEAMwA3AGEAYwBrAHIAd+kk6YnqD+pb6m/qgf/9//8AAf/j/9f/1P/T/9D/p/+m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) format("woff");font-weight:400;font-style:normal}[class*=" w-icon-"],[class^=w-icon-]{font-family:w-icon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;font-feature-settings:"liga",normal,"dlig";-webkit-font-variant-ligatures:discretionary-ligatures;font-variant-ligatures:discretionary-ligatures}.w-e-droplist{z-index:5}.w-e-menu{z-index:2!important}.w-e-text-container{z-index:1!important}.w-e-text-container .w-e-text h1{font-size:24px;margin:22px 0;font-weight:700}.w-e-text-container .w-e-text h2{font-size:22px;margin:20px 0;font-weight:700}.w-e-text-container .w-e-text h3{font-size:20px;margin:18px 0;font-weight:700}.w-e-text-container .w-e-text h4{font-size:18px;margin:16px 0;font-weight:700}.w-e-text-container .w-e-text h5{font-size:16px;margin:14px 0;font-weight:700}.w-e-text-container .w-e-text table td,.w-e-text-container .w-e-text table th{text-align:center}.w-e-text-container .w-e-text ul li{list-style-type:disc}.w-e-text-container .w-e-text ol li{list-style-type:decimal}.w-e-text-container .w-e-text b{font-weight:800}.w-e-text-container .w-e-text a{color:#2196f3;text-decoration:underline}.w-e-toolbar{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-lines:multiple}.w-icon-enlarge:before{content:"\\e989"}.w-icon-shrink:before{content:"\\e98a"}.w-icon-filter:before{content:"\\ea5b"}.w-icon-clear-formatting:before{content:"\\ea6f"}.w-icon-file-empty:before{content:"\\e924"}.w-icon-file-class-code:before{content:"\\ea81"}.fullscreen-editor{position:fixed!important;height:100%!important;left:0!important;top:0!important;background-color:#fff;z-index:3}.fullscreen-editor,.fullscreen-editor .w-e-toolbar{width:100%!important}.fullscreen-editor .w-e-text-container{width:100%!important;height:95%!important}.code_pannel{position:absolute;top:0;left:50%;z-index:4;height:280px;width:600px;padding:5px 10px;margin-left:-300px;background:#fff;-webkit-box-shadow:1px 1px 8px rgba(0,0,0,.3);box-shadow:1px 1px 8px rgba(0,0,0,.3);display:none;overflow:hidden}.code_pannel #closePannel{position:absolute;top:10px;right:10px;width:15px;height:15px;color:#999;cursor:pointer}.code_pannel #closePannel:hover{color:#000}.code_pannel>h2{width:100%;height:30px;font-size:14px;line-height:30px;color:#333;border-bottom:1px solid #f1f1f1}.code_pannel #pannelInput{width:100%;height:30px;margin-top:5px;padding:0 10px;border:0;border-bottom:1px solid #f1f1f1;background:#fff;outline:0;font-size:14px;line-height:50px}.code_pannel #pannelTextarea{width:100%;height:145px;margin-top:10px;padding:5px;border:1px solid #f1f1f1;background:#fff;outline:0;font-size:14px;line-height:20px}.code_pannel #pannelInput:focus,.code_pannel #pannelTextarea:focus{border-color:#1e88e5}.code_pannel #pannelSubmit{float:right;font-size:14px;color:#1e88e5;border:0;padding:5px 10px;background:#fff;cursor:pointer;border-radius:3px;margin:5px 0}.code_pannel #pannelSubmit:hover{background:#f1f1f1}',void 0);var e={render:function(){var A=this.$createElement;return(this._self._c||A)("div",{attrs:{id:this.id}})},staticRenderFns:[],name:"VueWangeditor",mixins:[{methods:{initFullscreen:function(){var A=this,e='<i title="全屏" class="w-icon-enlarge"></i>',t=!1,n=this.createBtn(e);this.toolbar.appendChild(n),n.addEventListener("click",function(i){A.editorEle.className=t?"":"fullscreen-editor",n.innerHTML=t?e:'<i title="全屏" class="w-icon-shrink"></i>',t=!t},!1)}}},{methods:{initClearStyle:function(){var A=this,e=this.createBtn('<i title="一键过滤文字样式" class="w-icon-filter"></i>');this.toolbar.appendChild(e),e.addEventListener("click",function(e){var t=A.clearStyle();A.editor.cmd.do("insertHTML",t),A.editor.txt.html(t)},!1)},clearStyle:function(){var A=this.textWrap.getElementsByTagName("*");return Array.from(A).map(function(A){A.style&&A.removeAttribute("style"),A.className&&A.removeAttribute("class")}),this.editor.txt.html().replace(/ style=\"(.*?)\"/gi,"").replace(/ style=\'(.*?)\'/gi,"").replace(/ class=\"(.*?)\"/gi,"").replace(/ class=\'(.*?)\'/gi,"").replace(/ lang=\"(.*?)\"/gi,"").replace(/ face=\"(.*?)\"/gi,"").replace(/ size=\"(.*?)\"/gi,"").replace(/ align=\"(.*?)\"/gi,"").replace(/ color=\"(.*?)\"/gi,"").replace(/ border=\"(.*?)\"/gi,"").replace(/<style>[\s\S]*?<\/style>/gi,"").replace(/<o:p>[\s\S]*?<\/o:p>/gi,"").replace(/<!--[\s\S]*?-->/gi,"")}}},{methods:{clearFormat:function(){return this.editor.txt.html().split(/(<[^>]*>([\s\S]*?)|<[^>]*><\/[^>]*>)/).filter(function(A){return""!==A&&!A.includes("</")}).filter(function(A){return!A.includes("<")||A.startsWith("<img")}).map(function(A){return"<p>"+A+"</p>"}).join("")},initClearFormat:function(){var A=this,e=this.createBtn('<i title="一键清除文字格式" class="w-icon-clear-formatting"></i>');this.toolbar.appendChild(e),e.addEventListener("click",function(e){var t=A.clearFormat();A.$emit("input",t),A.editor.txt.html(t)},!1)}}},{methods:{initClearAll:function(){var A=this,e=this.createBtn('<i title="一键清空编辑器" class="w-icon-file-empty"></i>');this.toolbar.appendChild(e),e.addEventListener("click",function(e){A.clearAll()},!1)},clearAll:function(){this.editor.txt.clear(),this.editor.cmd.do("insertHTML","<p><br></p>")}}},{methods:{initInsertCode:function(){var A=this,e=this.createBtn('<i title="插入带类名的代码块" class="w-icon-file-class-code"></i>');this.toolbar.appendChild(e),e.addEventListener("click",function(e){e.stopPropagation(),e.preventDefault();var t=document.querySelector("#codePannel");t?t.style.display="block":A.createPannel(),A.bindEvents()},!1)},bindEvents:function(){var A=this,e=document.querySelector("#codePannel"),t=document.querySelector("#closePannel"),n=document.querySelector("#pannelInput"),i=document.querySelector("#pannelTextarea"),o=document.querySelector("#pannelSubmit");t.addEventListener("click",function(A){A.stopPropagation(),e.style.display="none",n.value="",i.value=""},!1),o.addEventListener("click",function(t){t.stopPropagation(),n.value&&i.value?(A.insertCode(n.value,i.value),e.style.display="none",n.value="",i.value=""):(e.style.display="none",n.value="",i.value="")},!1)},createPannel:function(){var A=document.createElement("div"),e=document.createElement("i"),t=document.createElement("h2"),n=document.createElement("input"),i=document.createElement("textarea"),o=document.createElement("button");A.id="codePannel",e.id="closePannel",n.id="pannelInput",i.id="pannelTextarea",n.setAttribute("placeholder","className"),i.setAttribute("placeholder","code"),o.id="pannelSubmit",o.innerText="插入",t.innerText="插入带类名的代码：",e.className="w-e-icon-close w-e-panel-close",A.appendChild(e),A.appendChild(t),A.appendChild(n),A.appendChild(i),A.appendChild(o),A.className="code_pannel",this.container.appendChild(A),A.style.display="block"},replaceHtmlSymbol:function(A){return null==A?"":A.replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;")},insertCode:function(A,e){this.editor.cmd.do("insertHTML",'<pre class="'+A+'"><code class="'+A+'">'+this.replaceHtmlSymbol(e)+"</code></pre><p><br></p>")}}}],props:{options:{type:Object,default:function(A){return{}}},id:String,initContent:String,value:String},data:function(){return{editor:{}}},watch:{initContent:function(A){this.editor.txt.html(A),this.$emit("input",A),this.$emit("update:text",this.editor.txt.text())}},computed:{editorEle:function(){if(document.querySelector("#"+this.id))return document.querySelector("#"+this.id)},toolbar:function(){if(document.querySelector("#"+this.id+" .w-e-toolbar"))return document.querySelector("#"+this.id+" .w-e-toolbar")},container:function(){if(document.querySelector("#"+this.id+" .w-e-text-container"))return document.querySelector("#"+this.id+" .w-e-text-container")},textWrap:function(){if(document.querySelector("#"+this.id+" .w-e-text"))return document.querySelector("#"+this.id+" .w-e-text")}},methods:{createBtn:function(A){var e=document.createElement("div");return e.className="w-e-menu",e.style.zIndex="10001",e.innerHTML=A,e},initSize:function(){this.options.width&&(this.container.style.width=this.options.width,this.toolbar.style.width=this.options.width),this.options.height&&(this.container.style.height=this.options.height)}},mounted:function(){var e=this;this.editor=new A("#"+this.id),this.editor.customConfig.onchange=function(A){e.$emit("input",A),e.$emit("update:text",e.editor.txt.text())},Object.keys(this.options).map(function(A){e.editor.customConfig[A]=e.options[A]}),this.editor.create(),this.initSize(),this.options.menus&&this.options.menus.includes("clearStyle")&&this.initClearStyle(),this.options.menus&&this.options.menus.includes("clearFormat")&&this.initClearFormat(),this.options.menus&&this.options.menus.includes("clearAll")&&this.initClearAll(),this.options.menus&&this.options.menus.includes("insertCode")&&this.initInsertCode(),this.options.menus&&this.options.menus.includes("fullscreen")&&this.initFullscreen()}};return e.install=function(A){A.component(e.name,e)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(e),e});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLXdhbmdlZGl0b3Itc2ltcGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvZWRpdG9yLnZ1ZSIsIi4uL3NyYy9wbHVnaW5zL2Z1bGxzY3JlZW4uanMiLCIuLi9zcmMvcGx1Z2lucy9jbGVhclN0eWxlLmpzIiwiLi4vc3JjL3BsdWdpbnMvY2xlYXJGb3JtYXQuanMiLCIuLi9zcmMvcGx1Z2lucy9jbGVhckFsbC5qcyIsIi4uL3NyYy9wbHVnaW5zL2luc2VydENvZGUuanMiLCIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIGxhbmc9XCJodG1sXCI+XG4gIDxkaXYgOmlkPVwiaWRcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRSBmcm9tICd3YW5nZWRpdG9yJ1xuaW1wb3J0ICcuL2VkaXRvci5jc3MnXG5pbXBvcnQgeyBmdWxsc2NyZWVuIH0gZnJvbSAnLi9wbHVnaW5zL2Z1bGxzY3JlZW4nXG5pbXBvcnQgeyBjbGVhclN0eWxlIH0gZnJvbSAnLi9wbHVnaW5zL2NsZWFyU3R5bGUnXG5pbXBvcnQgeyBjbGVhckZvcm1hdCB9IGZyb20gJy4vcGx1Z2lucy9jbGVhckZvcm1hdCdcbmltcG9ydCB7IGNsZWFyQWxsIH0gZnJvbSAnLi9wbHVnaW5zL2NsZWFyQWxsJ1xuaW1wb3J0IHsgaW5zZXJ0Q29kZSB9IGZyb20gJy4vcGx1Z2lucy9pbnNlcnRDb2RlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVnVlV2FuZ2VkaXRvcicsXG4gIG1peGluczogW2Z1bGxzY3JlZW4sIGNsZWFyU3R5bGUsIGNsZWFyRm9ybWF0LCBjbGVhckFsbCwgaW5zZXJ0Q29kZV0sXG4gIHByb3BzOiB7XG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogIF8gPT4geyByZXR1cm4ge30gfVxuICAgIH0sXG4gICAgaWQ6IFN0cmluZyxcbiAgICBpbml0Q29udGVudDogU3RyaW5nLFxuICAgIHZhbHVlOiBTdHJpbmdcbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVkaXRvcjoge31cbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaW5pdENvbnRlbnQgKHZhbCkge1xuICAgICAgdGhpcy5lZGl0b3IudHh0Lmh0bWwodmFsKVxuICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWwpXG4gICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6dGV4dCcsIHRoaXMuZWRpdG9yLnR4dC50ZXh0KCkpXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGVkaXRvckVsZSAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH1gKSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH1gKVxuICAgICAgfVxuICAgIH0sXG4gICAgdG9vbGJhciAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH0gLnctZS10b29sYmFyYCkpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuaWR9IC53LWUtdG9vbGJhcmApXG4gICAgICB9XG4gICAgfSxcbiAgICBjb250YWluZXIgKCkge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuaWR9IC53LWUtdGV4dC1jb250YWluZXJgKSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH0gLnctZS10ZXh0LWNvbnRhaW5lcmApXG4gICAgICB9XG4gICAgfSxcbiAgICB0ZXh0V3JhcCAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH0gLnctZS10ZXh0YCkpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuaWR9IC53LWUtdGV4dGApXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY3JlYXRlQnRuIChidG5IdG1sKSB7XG4gICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGJ0bi5jbGFzc05hbWUgPSAndy1lLW1lbnUnXG4gICAgICBidG4uc3R5bGUuekluZGV4ID0gJzEwMDAxJ1xuICAgICAgYnRuLmlubmVySFRNTCA9IGJ0bkh0bWxcbiAgICAgIHJldHVybiBidG5cbiAgICB9LFxuICAgIGluaXRTaXplICgpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMud2lkdGgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLm9wdGlvbnMud2lkdGhcbiAgICAgICAgdGhpcy50b29sYmFyLnN0eWxlLndpZHRoID0gdGhpcy5vcHRpb25zLndpZHRoXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmhlaWdodCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLm9wdGlvbnMuaGVpZ2h0XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLmVkaXRvciA9IG5ldyBFKCcjJyArIHRoaXMuaWQpXG5cbiAgICAvLyBpbml0IGNoYW5nZSBldmVudFxuICAgIHRoaXMuZWRpdG9yLmN1c3RvbUNvbmZpZy5vbmNoYW5nZSA9IGh0bWwgPT4ge1xuICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBodG1sKVxuICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOnRleHQnLCB0aGlzLmVkaXRvci50eHQudGV4dCgpKVxuICAgIH1cblxuICAgIC8vIGluaXQgcHJvcHMgb3B0aW9uc1xuICAgIE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucykubWFwKHByb3BlcnR5ID0+IHtcbiAgICAgIHRoaXMuZWRpdG9yLmN1c3RvbUNvbmZpZ1twcm9wZXJ0eV0gPSB0aGlzLm9wdGlvbnNbcHJvcGVydHldXG4gICAgfSlcblxuICAgIC8vIGNyZWF0ZSB0aGUgZWRpdG9yXG4gICAgdGhpcy5lZGl0b3IuY3JlYXRlKClcblxuICAgIHRoaXMuaW5pdFNpemUoKVxuXG4gICAgLy8gY2xlYXJTdHlsZVxuICAgIGlmICh0aGlzLm9wdGlvbnMubWVudXMgJiYgdGhpcy5vcHRpb25zLm1lbnVzLmluY2x1ZGVzKCdjbGVhclN0eWxlJykpIHtcbiAgICAgIHRoaXMuaW5pdENsZWFyU3R5bGUoKVxuICAgIH1cblxuICAgIC8vIGNsZWFyRm9ybWF0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5tZW51cyAmJiB0aGlzLm9wdGlvbnMubWVudXMuaW5jbHVkZXMoJ2NsZWFyRm9ybWF0JykpIHtcbiAgICAgIHRoaXMuaW5pdENsZWFyRm9ybWF0KClcbiAgICB9XG5cbiAgICAvLyBjbGVhckFsbFxuICAgIGlmICh0aGlzLm9wdGlvbnMubWVudXMgJiYgdGhpcy5vcHRpb25zLm1lbnVzLmluY2x1ZGVzKCdjbGVhckFsbCcpKSB7XG4gICAgICB0aGlzLmluaXRDbGVhckFsbCgpXG4gICAgfVxuXG4gICAgLy8gaW5zZXJ0Q29kZVxuICAgIGlmICh0aGlzLm9wdGlvbnMubWVudXMgJiYgdGhpcy5vcHRpb25zLm1lbnVzLmluY2x1ZGVzKCdpbnNlcnRDb2RlJykpIHtcbiAgICAgIHRoaXMuaW5pdEluc2VydENvZGUoKVxuICAgIH1cblxuICAgIC8vIGZ1bGxzY3JlZW5cbiAgICBpZiAodGhpcy5vcHRpb25zLm1lbnVzICYmIHRoaXMub3B0aW9ucy5tZW51cy5pbmNsdWRlcygnZnVsbHNjcmVlbicpKSB7XG4gICAgICB0aGlzLmluaXRGdWxsc2NyZWVuKClcbiAgICB9XG5cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJleHBvcnQgY29uc3QgZnVsbHNjcmVlbiA9IHtcbiAgbWV0aG9kczoge1xuICAgIGluaXRGdWxsc2NyZWVuICgpIHtcbiAgICAgIGxldCBlbmxhcmdlID0gJzxpIHRpdGxlPVwi5YWo5bGPXCIgY2xhc3M9XCJ3LWljb24tZW5sYXJnZVwiPjwvaT4nXG4gICAgICBsZXQgc2hyaW5rID0gJzxpIHRpdGxlPVwi5YWo5bGPXCIgY2xhc3M9XCJ3LWljb24tc2hyaW5rXCI+PC9pPidcbiAgICAgIGxldCBpc0Z1bGxzY3JlZW4gPSBmYWxzZVxuICAgICAgbGV0IGZ1bGxzY3JlZW5CdG4gPSB0aGlzLmNyZWF0ZUJ0bihlbmxhcmdlKVxuICAgICAgdGhpcy50b29sYmFyLmFwcGVuZENoaWxkKGZ1bGxzY3JlZW5CdG4pXG4gICAgICBmdWxsc2NyZWVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XG4gICAgICAgIHRoaXMuZWRpdG9yRWxlLmNsYXNzTmFtZSA9IGlzRnVsbHNjcmVlbiA/ICcnIDogJ2Z1bGxzY3JlZW4tZWRpdG9yJ1xuICAgICAgICBmdWxsc2NyZWVuQnRuLmlubmVySFRNTCA9IGlzRnVsbHNjcmVlbiA/IGVubGFyZ2UgOiBzaHJpbmtcbiAgICAgICAgaXNGdWxsc2NyZWVuID0gIWlzRnVsbHNjcmVlblxuICAgICAgfSwgZmFsc2UpXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgY2xlYXJTdHlsZSA9IHtcbiAgbWV0aG9kczoge1xuICAgIGluaXRDbGVhclN0eWxlICgpIHtcbiAgICAgIGxldCBjbGVhclN0eWxlQnRuID0gdGhpcy5jcmVhdGVCdG4oJzxpIHRpdGxlPVwi5LiA6ZSu6L+H5ruk5paH5a2X5qC35byPXCIgY2xhc3M9XCJ3LWljb24tZmlsdGVyXCI+PC9pPicpXG4gICAgICB0aGlzLnRvb2xiYXIuYXBwZW5kQ2hpbGQoY2xlYXJTdHlsZUJ0bilcbiAgICAgIGNsZWFyU3R5bGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfID0+IHtcbiAgICAgICAgbGV0IGh0bWwgPSB0aGlzLmNsZWFyU3R5bGUoKVxuICAgICAgICB0aGlzLmVkaXRvci5jbWQuZG8oJ2luc2VydEhUTUwnLCBodG1sKVxuICAgICAgICB0aGlzLmVkaXRvci50eHQuaHRtbChodG1sKVxuICAgICAgfSwgZmFsc2UpXG4gICAgfSxcbiAgICBjbGVhclN0eWxlICgpIHtcbiAgICAgIC8vIGVkaXRvci50eHQuaHRtbCgp6I635Y+W55qE5YaF5a655peg5rOV5riF6ZmkPHN0eWxlPuagh+etvueahOagt+W8j1xuICAgICAgLy8g5omA5Lul6KaB5riF6ZmkPHN0eWxlPuagh+etvlxuICAgICAgLy8gZWRpdG9yLnR4dC5odG1sKCnmnInml7blgJnojrflj5bnmoRIVE1M5Lya5bim5qC35byP77yM5omA5Lul6L+Y5piv5YaN6L+H5ruk5LiA5qyhXG4gICAgICBsZXQgYXJyID0gdGhpcy50ZXh0V3JhcC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpXG4gICAgICBBcnJheS5mcm9tKGFycikubWFwKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5zdHlsZSkge1xuICAgICAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NOYW1lKSB7XG4gICAgICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIOWboOS4uuacieeahHN0eWxl5bGe5oCn5rKh5pyJ6L+H5ruk5Yiw77yM5omA5Lul6KaB55So5LiK6Z2i55qEcmVtb3ZlQXR0cmlidXRl5Y675o6JXG4gICAgICByZXR1cm4gdGhpcy5lZGl0b3IudHh0Lmh0bWwoKS8vIHRleHRXcmFwLmlubmVySFRNTFxuICAgICAgICAgICAgIC5yZXBsYWNlKC8gc3R5bGU9XFxcIiguKj8pXFxcIi9pZywgJycpXG4gICAgICAgICAgICAgLnJlcGxhY2UoLyBzdHlsZT1cXCcoLio/KVxcJy9pZywgJycpXG4gICAgICAgICAgICAgLnJlcGxhY2UoLyBjbGFzcz1cXFwiKC4qPylcXFwiL2lnLCAnJylcbiAgICAgICAgICAgICAucmVwbGFjZSgvIGNsYXNzPVxcJyguKj8pXFwnL2lnLCAnJylcbiAgICAgICAgICAgICAvLyB3b3Jk5paH5qGj5aSN5Yi26L+H5p2l55qE5qC35byPXG4gICAgICAgICAgICAgLnJlcGxhY2UoLyBsYW5nPVxcXCIoLio/KVxcXCIvaWcsICcnKVxuICAgICAgICAgICAgIC5yZXBsYWNlKC8gZmFjZT1cXFwiKC4qPylcXFwiL2lnLCAnJylcbiAgICAgICAgICAgICAucmVwbGFjZSgvIHNpemU9XFxcIiguKj8pXFxcIi9pZywgJycpXG4gICAgICAgICAgICAgLnJlcGxhY2UoLyBhbGlnbj1cXFwiKC4qPylcXFwiL2lnLCAnJylcbiAgICAgICAgICAgICAucmVwbGFjZSgvIGNvbG9yPVxcXCIoLio/KVxcXCIvaWcsICcnKVxuICAgICAgICAgICAgIC5yZXBsYWNlKC8gYm9yZGVyPVxcXCIoLio/KVxcXCIvaWcsICcnKVxuICAgICAgICAgICAgIC5yZXBsYWNlKC88c3R5bGU+W1xcc1xcU10qPzxcXC9zdHlsZT4vaWcsICcnKVxuICAgICAgICAgICAgIC5yZXBsYWNlKC88bzpwPltcXHNcXFNdKj88XFwvbzpwPi9pZywgJycpXG4gICAgICAgICAgICAgLnJlcGxhY2UoLzwhLS1bXFxzXFxTXSo/LS0+L2lnLCAnJylcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBjbGVhckZvcm1hdCA9IHtcbiAgbWV0aG9kczoge1xuICAgIGNsZWFyRm9ybWF0ICgpIHtcbiAgICAgIGxldCBzdHIgPSB0aGlzLmVkaXRvci50eHQuaHRtbCgpXG4gICAgICBsZXQgYXJyID0gc3RyLnNwbGl0KC8oPFtePl0qPihbXFxzXFxTXSo/KXw8W14+XSo+PFxcL1tePl0qPikvKVxuXG4gICAgICAvLyDljrvpmaTnqbrlrZfnrKbkuLLvvIznu5PmnZ/moIfnrb5cbiAgICAgIGxldCBuZXdDb250ZW50ID0gYXJyLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09ICcnICYmICFpdGVtLmluY2x1ZGVzKCc8LycpXG4gICAgICB9KS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIC8vIOWOu+aOiei1t+Wni+agh+etvlxuICAgICAgICByZXR1cm4gIWl0ZW0uaW5jbHVkZXMoJzwnKSB8fCBpdGVtLnN0YXJ0c1dpdGgoJzxpbWcnKVxuICAgICAgfSkubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gYDxwPiR7aXRlbX08L3A+YFxuICAgICAgfSkuam9pbignJylcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0NvbnRlbnQpXG4gICAgICByZXR1cm4gbmV3Q29udGVudFxuICAgIH0sXG4gICAgaW5pdENsZWFyRm9ybWF0ICgpIHtcbiAgICAgIGxldCBjbGVhckZvcm1hdEJ0biA9IHRoaXMuY3JlYXRlQnRuKCc8aSB0aXRsZT1cIuS4gOmUrua4hemZpOaWh+Wtl+agvOW8j1wiIGNsYXNzPVwidy1pY29uLWNsZWFyLWZvcm1hdHRpbmdcIj48L2k+JylcbiAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChjbGVhckZvcm1hdEJ0bilcbiAgICAgIGNsZWFyRm9ybWF0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XG4gICAgICAgIGxldCBmb3JtYXRDb250ZW50ID0gdGhpcy5jbGVhckZvcm1hdCgpXG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgZm9ybWF0Q29udGVudClcbiAgICAgICAgdGhpcy5lZGl0b3IudHh0Lmh0bWwoZm9ybWF0Q29udGVudClcbiAgICAgIH0sIGZhbHNlKVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGNsZWFyQWxsID0ge1xuICBtZXRob2RzOiB7XG4gICAgaW5pdENsZWFyQWxsICgpIHtcbiAgICAgIGxldCBjbGVhckFsbEJ0biA9IHRoaXMuY3JlYXRlQnRuKCc8aSB0aXRsZT1cIuS4gOmUrua4heepuue8lui+keWZqFwiIGNsYXNzPVwidy1pY29uLWZpbGUtZW1wdHlcIj48L2k+JylcbiAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChjbGVhckFsbEJ0bilcbiAgICAgIGNsZWFyQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XG4gICAgICAgIHRoaXMuY2xlYXJBbGwoKVxuICAgICAgfSwgZmFsc2UpXG4gICAgfSxcbiAgICBjbGVhckFsbCAoKSB7XG4gICAgICB0aGlzLmVkaXRvci50eHQuY2xlYXIoKVxuICAgICAgdGhpcy5lZGl0b3IuY21kLmRvKCdpbnNlcnRIVE1MJywgJzxwPjxicj48L3A+JylcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBpbnNlcnRDb2RlID0ge1xuICBtZXRob2RzOiB7XG4gICAgaW5pdEluc2VydENvZGUgKCkge1xuICAgICAgbGV0IGluc2VydENvZGVCdG4gPSB0aGlzLmNyZWF0ZUJ0bignPGkgdGl0bGU9XCLmj5LlhaXluKbnsbvlkI3nmoTku6PnoIHlnZdcIiBjbGFzcz1cInctaWNvbi1maWxlLWNsYXNzLWNvZGVcIj48L2k+JylcbiAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChpbnNlcnRDb2RlQnRuKVxuICAgICAgaW5zZXJ0Q29kZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgcGFubmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvZGVQYW5uZWwnKVxuICAgICAgICBpZiAoIXBhbm5lbCkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlUGFubmVsKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYW5uZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKVxuICAgICAgfSwgZmFsc2UpXG4gICAgfSxcbiAgICBiaW5kRXZlbnRzICgpIHtcbiAgICAgIGxldCBwYW5uZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29kZVBhbm5lbCcpXG4gICAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VQYW5uZWwnKVxuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhbm5lbElucHV0JylcbiAgICAgIGxldCB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYW5uZWxUZXh0YXJlYScpXG4gICAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhbm5lbFN1Ym1pdCcpXG4gICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHBhbm5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICAgICAgdGV4dGFyZWEudmFsdWUgPSAnJ1xuICAgICAgfSwgZmFsc2UpXG4gICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBpZiAoaW5wdXQudmFsdWUgJiYgdGV4dGFyZWEudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmluc2VydENvZGUoaW5wdXQudmFsdWUsIHRleHRhcmVhLnZhbHVlKVxuICAgICAgICAgIHBhbm5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICAgIHRleHRhcmVhLnZhbHVlID0gJydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYW5uZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9ICcnXG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKVxuICAgIH0sXG4gICAgY3JlYXRlUGFubmVsICgpIHtcbiAgICAgIGxldCBwYW5uZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICBsZXQgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIHBhbm5lbC5pZCA9ICdjb2RlUGFubmVsJ1xuICAgICAgY2xvc2UuaWQgPSAnY2xvc2VQYW5uZWwnXG4gICAgICBpbnB1dC5pZCA9ICdwYW5uZWxJbnB1dCdcbiAgICAgIHRleHRhcmVhLmlkID0gJ3Bhbm5lbFRleHRhcmVhJ1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdjbGFzc05hbWUnKVxuICAgICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdjb2RlJylcbiAgICAgIHN1Ym1pdC5pZCA9ICdwYW5uZWxTdWJtaXQnXG4gICAgICBzdWJtaXQuaW5uZXJUZXh0ID0gJ+aPkuWFpSdcbiAgICAgIGgyLmlubmVyVGV4dCA9ICfmj5LlhaXluKbnsbvlkI3nmoTku6PnoIHvvJonXG4gICAgICBjbG9zZS5jbGFzc05hbWUgPSAndy1lLWljb24tY2xvc2Ugdy1lLXBhbmVsLWNsb3NlJ1xuICAgICAgcGFubmVsLmFwcGVuZENoaWxkKGNsb3NlKVxuICAgICAgcGFubmVsLmFwcGVuZENoaWxkKGgyKVxuICAgICAgcGFubmVsLmFwcGVuZENoaWxkKGlucHV0KVxuICAgICAgcGFubmVsLmFwcGVuZENoaWxkKHRleHRhcmVhKVxuICAgICAgcGFubmVsLmFwcGVuZENoaWxkKHN1Ym1pdClcbiAgICAgIHBhbm5lbC5jbGFzc05hbWUgPSAnY29kZV9wYW5uZWwnXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChwYW5uZWwpXG4gICAgICBwYW5uZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9LFxuICAgIHJlcGxhY2VIdG1sU3ltYm9sKGh0bWwpIHtcbiAgICAgIGlmIChodG1sID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC88L2dtLCAnJmx0OycpLnJlcGxhY2UoLz4vZ20sICcmZ3Q7JykucmVwbGFjZSgvXCIvZ20sICcmcXVvdDsnKVxuICAgIH0sXG4gICAgaW5zZXJ0Q29kZSAoY2xhc3NOYW1lLCBjb2RlKSB7XG4gICAgICB0aGlzLmVkaXRvci5jbWQuZG8oJ2luc2VydEhUTUwnLCBgPHByZSBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPjxjb2RlIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0aGlzLnJlcGxhY2VIdG1sU3ltYm9sKGNvZGUpfTwvY29kZT48L3ByZT48cD48YnI+PC9wPmApXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgVnVlV2FuZ2VkaXRvciBmcm9tICcuL2VkaXRvci52dWUnXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5WdWVXYW5nZWRpdG9yLmluc3RhbGwgPSBmdW5jdGlvbiAoVnVlKSB7XG4gIFZ1ZS5jb21wb25lbnQoVnVlV2FuZ2VkaXRvci5uYW1lLCBWdWVXYW5nZWRpdG9yKVxufVxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgd2luZG93LlZ1ZS51c2UoVnVlV2FuZ2VkaXRvcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgVnVlV2FuZ2VkaXRvclxuIl0sIm5hbWVzIjpbInJlbmRlciIsImVubGFyZ2UiLCJpc0Z1bGxzY3JlZW4iLCJmdWxsc2NyZWVuQnRuIiwidGhpcyIsImNyZWF0ZUJ0biIsInRvb2xiYXIiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlZGl0b3JFbGUiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJjbGVhclN0eWxlQnRuIiwiaHRtbCIsIl90aGlzIiwiY2xlYXJTdHlsZSIsImVkaXRvciIsImNtZCIsImRvIiwidHh0IiwiYXJyIiwidGV4dFdyYXAiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImZyb20iLCJtYXAiLCJpdGVtIiwic3R5bGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZXBsYWNlIiwic3BsaXQiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInN0YXJ0c1dpdGgiLCJqb2luIiwiY2xlYXJGb3JtYXRCdG4iLCJmb3JtYXRDb250ZW50IiwiY2xlYXJGb3JtYXQiLCIkZW1pdCIsImNsZWFyQWxsQnRuIiwiY2xlYXJBbGwiLCJjbGVhciIsImluc2VydENvZGVCdG4iLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInBhbm5lbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRpc3BsYXkiLCJjcmVhdGVQYW5uZWwiLCJiaW5kRXZlbnRzIiwiY2xvc2UiLCJpbnB1dCIsInRleHRhcmVhIiwic3VibWl0IiwidmFsdWUiLCJpbnNlcnRDb2RlIiwiY3JlYXRlRWxlbWVudCIsImgyIiwiaWQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lclRleHQiLCJjb250YWluZXIiLCJjb2RlIiwicmVwbGFjZUh0bWxTeW1ib2wiLCJPYmplY3QiLCJTdHJpbmciLCJ2YWwiLCJ0ZXh0IiwiYnRuSHRtbCIsImJ0biIsInpJbmRleCIsIm9wdGlvbnMiLCJ3aWR0aCIsImhlaWdodCIsIkUiLCJjdXN0b21Db25maWciLCJvbmNoYW5nZSIsImtleXMiLCJwcm9wZXJ0eSIsImNyZWF0ZSIsImluaXRTaXplIiwibWVudXMiLCJpbml0Q2xlYXJTdHlsZSIsImluaXRDbGVhckZvcm1hdCIsImluaXRDbGVhckFsbCIsImluaXRJbnNlcnRDb2RlIiwiaW5pdEZ1bGxzY3JlZW4iLCJWdWVXYW5nZWRpdG9yIiwiaW5zdGFsbCIsIlZ1ZSIsImNvbXBvbmVudCIsIm5hbWUiLCJ3aW5kb3ciLCJ1c2UiXSwibWFwcGluZ3MiOiIybFFBWWdCQSwwSEFDUix1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

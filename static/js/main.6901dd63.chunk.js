(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__Yk-os",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__bYAGv"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3jGxy",Modal:"Modal_Modal__2WKGB"}},22:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__udHli"}},23:function(e,t,a){e.exports={Button:"Button_Button__3VCTi"}},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),c=a.n(o),l=a(12),i=a(3),s=a(4),u=a(6),h=a(5),d=a(21),m=a.n(d),g=function(e){var t=e.searchgQuery,a=void 0===t?"":t,n=e.page,r=void 0===n?1:n;return m.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(r,"&image_type=photo&orientation=horizontal&per_page=12&key=19760906-677c9d98dcaf25643c58f07c9")).then((function(e){return e.data.hits}))},b=a(0),p=function(e){return Object(b.jsxs)("svg",{width:e.width,height:e.height,viewBox:"0 0 140 64",xmlns:"http://www.w3.org/2000/svg",fill:e.color,"aria-label":e.label,children:[Object(b.jsx)("path",{d:"M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",attributeName:"fill-opacity",from:"0",to:".5",children:Object(b.jsx)("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1.4s",values:"0.5;1;0.5",calcMode:"linear",repeatCount:"indefinite"})}),Object(b.jsx)("path",{d:"M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",attributeName:"fill-opacity",from:"0",to:".5",children:Object(b.jsx)("animate",{attributeName:"fill-opacity",begin:"0.7s",dur:"1.4s",values:"0.5;1;0.5",calcMode:"linear",repeatCount:"indefinite"})}),Object(b.jsx)("path",{d:"M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"})]})};p.defaultProps={height:80,width:80,color:"green",label:"audio-loading"};var j=p,y=a(7),f=a.n(y),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.changeInput=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:f.a.Searchbar,children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.SearchForm,children:[Object(b.jsx)("button",{type:"submit",className:f.a.SearchFormButton,children:Object(b.jsx)("span",{className:f.a.SearchFormButtonLabel,children:"Search"})}),Object(b.jsx)("input",{onChange:this.changeInput,value:this.state.query,className:f.a.SearchFormInput,type:"text",autoComplete:"off",placeholder:"Search images and photos"})]})})}}]),a}(n.Component),v=a(10),x=a.n(v),S=function(e){var t=e.webformatURL,a=e.openModal,n=e.largeImageURL;return Object(b.jsx)("div",{className:x.a.ImageGalleryItem,children:Object(b.jsx)("img",{onClick:function(){a(n)},src:t,alt:"",className:x.a.ImageGalleryItemImage})})},I=a(22),_=a.n(I),w=function(e){var t=e.gallery,a=e.onClick;return Object(b.jsx)("ul",{className:_.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL;return Object(b.jsx)("li",{children:Object(b.jsx)(S,{webformatURL:n,openModal:a,largeImageURL:r})},t)}))})},k=a(11),M=a.n(k),C=document.querySelector("#modal-root"),L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(b.jsx)("div",{className:M.a.Overlay,onClick:this.handleBackdropClick,children:Object(b.jsx)("div",{className:M.a.Modal,children:this.props.children})}),C)}}]),a}(n.Component),G=a(23),N=a.n(G),B=function(e){var t=e.onClick;return Object(b.jsx)("button",{onClick:t,type:"button",className:N.a.Button,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0451"})},F=(a(47),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={gallery:[],page:1,searchgQuery:"",isLoading:!1,showModal:!1,largeImageURL:"",error:null},e.onChangeQuery=function(t){e.setState({searchgQuery:t,page:1,gallery:[],error:null})},e.fetchGallery=function(){var t=e.state,a={searchgQuery:t.searchgQuery,page:t.page};e.setState({isLoading:!0}),g(a).then((function(t){0!==t.length?(e.setState((function(e){return{gallery:[].concat(Object(l.a)(e.gallery),Object(l.a)(t)),page:e.page+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})):alert("Please, try again...")})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.onModalImg=function(t){e.setState({largeImageURL:t}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){t.searchgQuery!==this.state.searchgQuery&&this.fetchGallery()}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.isLoading,n=e.largeImageURL,r=e.error,o=e.showModal,c=this.toggleModal,l=this.onModalImg,i=t.length>0&&!a;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{onSubmit:this.onChangeQuery}),r&&Object(b.jsx)("h1",{className:"errorTitle",children:"ERROR"}),Object(b.jsx)(w,{gallery:t,onClick:l}),a&&Object(b.jsx)(j,{}),o&&Object(b.jsx)(L,{onClose:c,children:Object(b.jsx)("img",{src:n,alt:""})}),i&&Object(b.jsx)(B,{onClick:this.fetchGallery})]})}}]),a}(n.Component));a(48),a(49);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1oIK7",SearchForm:"Searchbar_SearchForm__1lk7y",SearchFormButton:"Searchbar_SearchFormButton__9ZHSh",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__117zg",SearchFormInput:"Searchbar_SearchFormInput__3MY1z"}}},[[50,1,2]]]);
//# sourceMappingURL=main.6901dd63.chunk.js.map
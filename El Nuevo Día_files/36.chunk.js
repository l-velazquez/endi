(this.webpackJsonp=this.webpackJsonp||[]).push([[36],{363:function(e,t,a){"use strict";t.a=[{type:"Staff",landingPage:!0},{type:"Columnist",landingPage:!0},{type:"Contributor",landingPage:!1},{type:"Freelance",landingPage:!1},{type:"Agency",landingPage:!1},{type:"Brandshare",landingPage:!1}]},483:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(1),i=a.n(o),l=a(4),s=a.n(l),c=a(524),u=function(e){var t={url:e.url,headline:e.headline,showCategory:!1,showSubheadline:!1,showRelatedElements:!1,showDate:e.showDate,date:e.date,showHeadlinePremiumElement:!1};return r.a.createElement("article",{className:"story-tease-beta"},e.showIcon&&r.a.createElement("div",{className:"story-tease-icon"},r.a.createElement("i",{className:"ss-icon"},"📄")),r.a.createElement(c.a,t))};u.defaultProps={url:"",headline:"",showIcon:!1,showDate:!1,date:""},u.propTypes={url:i.a.string,headline:i.a.string,showIcon:i.a.bool,showDate:i.a.bool,date:i.a.string},u.static=!0;var m=u,f=function(e){var t={url:e.url,headline:e.headline,showCategory:!1,showSubheadline:!1,showRelatedElements:!1,showDate:!1,showHeadlinePremiumElement:!1};return r.a.createElement("li",{className:"story-tease-beta"},r.a.createElement(c.a,t))};f.defaultProps={url:"",headline:""},f.propTypes={url:i.a.string,headline:i.a.string},f.static=!0;var p,h=f,d=a(34),y=a(541);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"transform",(function(){return P})),a.d(t,"transformRecents",(function(){return C}));var P=function(e){return e&&e.articles?r.a.createElement("ol",{className:"story-listing"},e.articles.map((function(e,t){return r.a.createElement(h,N({url:e.canonicalUrl,key:t},e))}))):[]},C=function(e){return e&&e.articles?r.a.createElement("ol",{className:"story-listing"},e.articles.map((function(e,t){return r.a.createElement(m,N({key:t,url:e.canonicalUrl,showIcon:!0,showDate:e.displayDate&&e.displayDate.length>0,date:d.b.formatRelativePublishTimeEndi(new Date(e.displayDate))},e))}))):[]},k=s()(p=function(e){function t(){return g(this,t),E(this,w(t).apply(this,arguments))}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),a=t,(n=[{key:"render",value:function(){var e=this.props&&this.props.customFields,t=e.sectionId,a=e.size,n=e.sectionLabel,o=this.props.siteProperties.siteId,i=t&&t.length>0?t:void 0,l=i?"latest-articles-section-v1":"latest-articles-v1",s=i?{website:o,size:a,sectionId:"/".concat(i)}:{website:o,size:a},c=i?{website:o,limit:a,section:i}:{website:o,limit:a},u=[new y.a({label:"+Vistas",contentSource:"live-content-v1",query:c,transform:P}),new y.a({label:"+RECIENTES",contentSource:l,query:s,transform:C})],m=t&&t.length>0&&n&&n.length>0?r.a.createElement("h1",null,"Más en ",n):r.a.createElement("h1",null,"Las Más");return r.a.createElement(y.b,{header:m,items:u})}}])&&v(a.prototype,n),o&&v(a,o),t}(n.Component))||p;k.propTypes={siteProperties:i.a.object,customFields:i.a.shape({sectionId:i.a.string.tag({name:"Section Id",group:"Content"}),sectionLabel:i.a.string.tag({name:"Section Label",group:"Content"}),size:i.a.number.tag({defaultValue:5,name:"Amount of articles:",group:"Content"})})},k.lazy=!0;t.default=k},522:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));function n(e){return(e||"").toLowerCase().includes("en")}},524:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),i=a.n(o),l=a(363),s=a(522),c=function(e){var t=e.category,a=e.categoryUrl,o=e.language,i=e.premium,c=e.url,u=e.headline,m=e.subheadline,f=e.date,p=e.related,h=e.author,d=e.showAuthorElement,y=e.showCategory,b=e.showSubheadline,g=e.showRelatedElements,v=e.showDate,E=e.showHeadlinePremiumElement,w=e.categoryFormat,O=e.isExternalLink,N=e.showPremiumSectionName,P=e.linkType,C=O?"noopener noreferrer":"";return C+=" ".concat(P&&"regular"!==P?P:""),r.a.createElement("div",{className:"story-tease-body"},y&&function(e,t,a){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"premium",i=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0;if(!e)return null;if(t&&o.includes("premium")){var c={color:"#AC7522"},u=Object(s.a)(i)?"For Subscribers":"Para suscriptores";return u=l?e:u,r.a.createElement(n.Fragment,null,r.a.createElement("span",{className:"story-tease-category",style:c},a?r.a.createElement("a",{href:"/para-suscriptores/",style:c},r.a.createElement("i",{className:"material-icons md-12 pos-h2-h3-h4-h5"},"lock"),u):r.a.createElement("span",null,r.a.createElement("i",{className:"material-icons md-12 pos-h2-h3-h4-h5"},"lock"),u)))}return a?r.a.createElement("span",{className:"story-tease-category"},r.a.createElement("a",{href:a,"data-actiontype":"Section"},e)):r.a.createElement("span",{className:"story-tease-category"},e)}(t,i,a,w,o,N),E&&i&&r.a.createElement("i",{className:"material-icons md-12 pos-h1"},"lock"),u&&r.a.createElement("h1",{className:"story-tease-title"},r.a.createElement("a",{href:c,"data-actiontype":"Headline",itemProp:"url",target:O?"_blank":"_self",rel:C.trim()},u)),d&&function(e){if(!e||!e.byline)return null;var t=l.a.find((function(t){return t.type===e.authorType})),a=t&&t.landingPage&&e.status&&e.link?r.a.createElement("a",{href:"/autor/".concat(e.link,"/"),"data-actiontype":"Author"},e.byline):"".concat(e.byline);return r.a.createElement("em",{className:"blog-author-name"},"Por ",a)}(h),b&&m&&r.a.createElement("div",{className:"story-tease-summary"},r.a.createElement("p",null,m)),v&&f&&function(e){return Array.isArray(e)?e.map((function(e,t){return r.a.createElement("p",{key:t,className:"story-tease-date"},e)})):r.a.createElement("p",{className:"story-tease-date"},e)}(f),g&&function(e){if(!e)return null;var t=e.filter((function(e){return e.headline&&e.url||e.headline&&e.canonicalUrl}));return t.length<1?null:r.a.createElement("ul",{className:"story-bullet-list"},t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:e.url||e.canonicalUrl,"data-actiontype":"Related Headline #".concat(t+1)},e.headline))})))}(p))};c.defaultProps={url:"",headline:"",subheadline:"",category:"",categoryUrl:"",language:"",premium:!1,related:[],date:"",contentType:"",author:{},showAuthorElement:!1,showCategory:!0,showSubheadline:!0,showRelatedElements:!0,showDate:!0,showHeadlinePremiumElement:!1,categoryFormat:"premium"},c.propTypes={url:i.a.string,headline:i.a.string,subheadline:i.a.string,category:i.a.string,categoryUrl:i.a.string,language:i.a.string,premium:i.a.bool,related:i.a.array,date:i.a.string,contentType:i.a.string,author:i.a.object,showAuthorElement:i.a.bool,showCategory:i.a.bool,showSubheadline:i.a.bool,showRelatedElements:i.a.bool,showDate:i.a.bool,showHeadlinePremiumElement:i.a.bool,categoryFormat:i.a.string,isExternalLink:i.a.bool,showPremiumSectionName:i.a.bool,linkType:i.a.string},c.static=!0,t.a=c},541:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),i=a.n(o),l=a(4),s=a.n(l),c=function(e){return function(t){if(e){var a=Number.parseInt(t.currentTarget.dataset.index,10);e(a)}}},u=function(e){var t=e.items,a=e.activeIndex,n=e.itemClick;return r.a.createElement("nav",{className:"tabs-menu"},r.a.createElement("ul",null,t.map((function(e,t){var o=t===a?"active":"";return r.a.createElement("li",{key:t,"data-index":t,onClick:c(n)},r.a.createElement("span",{className:o},e.icon,e.label&&r.a.createElement("span",{className:"label"},e.label)))}))))};u.defaultProps={items:[],activeIndex:0,itemClick:null},u.propTypes={items:i.a.array,activeIndex:i.a.number,itemClick:i.a.func};var m=u,f=function(e){var t=e.index,a=e.label,o=e.children,i=e.active,l=e.itemClick,s="tabs-view",u={display:"none"};return i&&(s+=" active",u.display="block"),r.a.createElement(n.Fragment,null,r.a.createElement("a",{href:"#",className:"accordion-trigger","data-index":t,onClick:c(l)},r.a.createElement("span",{className:"label"},a)),r.a.createElement("div",{className:s,"data-template":"story-listing",style:u},r.a.createElement("div",{className:"story-listing"},o)))};f.defaultProps={index:0,label:"",children:null,active:!1,itemClick:null},f.propTypes={index:i.a.number,label:i.a.string,children:i.a.node,active:i.a.bool,itemClick:i.a.func};var p,h=f;function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function v(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return P}));var P=function e(t){N(this,e),this.label=t&&t.label,this.contentSource=t&&t.contentSource,this.query=t&&t.query,this.transform=t&&t.transform,this.icon=t&&t.icon},C=s()(p=function(e){function t(e){var a;N(this,t),(a=E(this,w(t).call(this,e))).tabClick=function(e){if(!a.state.loading){var t=a.state.items[e];if(t)if(t.fetched)a.setState({current:e});else a.setState({current:e,loading:!0}),a.getContent(t.contentSource,t.query).fetched.then((function(n){var r=b({},a.state.items);t.transform?r[e].articles=t.transform(n):r[e].articles=n,r[e].fetched=!0,a.setState({items:r,loading:!1})})).catch((function(e){console.log(e),a.setState({loading:!1})}))}};var n=a.props.items&&a.props.items.map((function(e){return b({articles:[],fetched:!1},e)}));return a.state={current:0,loading:!1,items:Object.assign({},n)},a}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),a=t,(n=[{key:"componentDidMount",value:function(){this.tabClick(0)}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.header,o=t.tabClassName,i=t.headerClassName,l=t.containerClassName||"highlight-box ".concat(a);return r.a.createElement("aside",{className:l},n&&r.a.createElement("div",{className:"highlight-box-header ".concat(i)},n),r.a.createElement("div",{className:"tabs-container ".concat(o," accordion-init tabs-init")},r.a.createElement(m,{items:Object.values(this.state.items),activeIndex:this.state.current,itemClick:this.tabClick}),r.a.createElement("div",{className:"tabs-window"},Object.values(this.state.items).map((function(t,a){return r.a.createElement(h,{key:a,index:a,label:t.label,active:a===e.state.current,itemClick:e.tabClick},t.articles)})))))}}])&&v(a.prototype,n),o&&v(a,o),t}(n.Component))||p;C.defaultProps={className:"",header:null,items:[],tabClassName:"tabs-blue",headerClassName:"",containerClassName:null},C.propTypes={className:i.a.string,header:i.a.node,items:i.a.arrayOf(i.a.instanceOf(P)),tabClassName:i.a.string,headerClassName:i.a.string,containerClassName:i.a.string};t.b=C}}]);
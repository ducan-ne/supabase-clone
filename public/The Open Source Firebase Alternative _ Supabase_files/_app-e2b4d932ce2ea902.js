(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{2962:function(e,t,o){"use strict";o.d(t,{lX:function(){return s},PB:function(){return h}});var n=o(97729),a=o(2784);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r.apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var p={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0,disableGooglebot:!1},l=function(e,t,o){void 0===t&&(t=[]);var n=void 0===o?{}:o,r=n.defaultWidth,i=n.defaultHeight;return t.reduce((function(t,o,n){return t.push(a.createElement("meta",{key:"og:"+e+":0"+n,property:"og:"+e,content:o.url})),o.alt&&t.push(a.createElement("meta",{key:"og:"+e+":alt0"+n,property:"og:"+e+":alt",content:o.alt})),o.secureUrl&&t.push(a.createElement("meta",{key:"og:"+e+":secure_url0"+n,property:"og:"+e+":secure_url",content:o.secureUrl.toString()})),o.type&&t.push(a.createElement("meta",{key:"og:"+e+":type0"+n,property:"og:"+e+":type",content:o.type.toString()})),o.width?t.push(a.createElement("meta",{key:"og:"+e+":width0"+n,property:"og:"+e+":width",content:o.width.toString()})):r&&t.push(a.createElement("meta",{key:"og:"+e+":width0"+n,property:"og:"+e+":width",content:r.toString()})),o.height?t.push(a.createElement("meta",{key:"og:"+e+":height"+n,property:"og:"+e+":height",content:o.height.toString()})):i&&t.push(a.createElement("meta",{key:"og:"+e+":height"+n,property:"og:"+e+":height",content:i.toString()})),t}),[])},c=function(e){var t,o,n,i=[];e.titleTemplate&&(p.templateTitle=e.titleTemplate);var c="";e.title?(c=e.title,p.templateTitle&&(c=p.templateTitle.replace(/%s/g,(function(){return c})))):e.defaultTitle&&(c=e.defaultTitle),c&&i.push(a.createElement("title",{key:"title"},c));var s,h,u=e.noindex||p.noindex||e.dangerouslySetAllPagesToNoIndex,d=e.nofollow||p.nofollow||e.dangerouslySetAllPagesToNoFollow,f=e.disableGooglebot||p.disableGooglebot||e.dangerouslyDisableGooglebot,m="";if(e.robotsProps){var g=e.robotsProps,y=g.nosnippet,b=g.maxSnippet,v=g.maxImagePreview,G=g.maxVideoPreview,k=g.noarchive,E=g.noimageindex,w=g.notranslate,x=g.unavailableAfter;m=(y?",nosnippet":"")+(b?",max-snippet:"+b:"")+(v?",max-image-preview:"+v:"")+(k?",noarchive":"")+(x?",unavailable_after:"+x:"")+(E?",noimageindex":"")+(G?",max-video-preview:"+G:"")+(w?",notranslate":"")}(e.dangerouslyDisableGooglebot&&(p.disableGooglebot=!0),u||d?(e.dangerouslySetAllPagesToNoIndex&&(p.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(p.nofollow=!0),i.push(a.createElement("meta",{key:"robots",name:"robots",content:(u?"noindex":"index")+","+(d?"nofollow":"follow")+m})),f||i.push(a.createElement("meta",{key:"googlebot",name:"googlebot",content:(u?"noindex":"index")+","+(d?"nofollow":"follow")+m}))):(i.push(a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+m})),f||i.push(a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+m}))),e.description&&i.push(a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&i.push(a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){i.push(a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&i.push(a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&i.push(a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&i.push(a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&i.push(a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||e.title)&&i.push(a.createElement("meta",{key:"og:title",property:"og:title",content:(null==(s=e.openGraph)?void 0:s.title)||c}));(null!=(o=e.openGraph)&&o.description||e.description)&&i.push(a.createElement("meta",{key:"og:description",property:"og:description",content:(null==(h=e.openGraph)?void 0:h.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&i.push(a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var O=e.openGraph.type.toLowerCase();i.push(a.createElement("meta",{key:"og:type",property:"og:type",content:O})),"profile"===O&&e.openGraph.profile?(e.openGraph.profile.firstName&&i.push(a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&i.push(a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&i.push(a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&i.push(a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===O&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){i.push(a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&i.push(a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&i.push(a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){i.push(a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===O&&e.openGraph.article?(e.openGraph.article.publishedTime&&i.push(a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&i.push(a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&i.push(a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){i.push(a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&i.push(a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){i.push(a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==O&&"video.episode"!==O&&"video.tv_show"!==O&&"video.other"!==O||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&i.push(a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&i.push(a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){i.push(a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){i.push(a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&i.push(a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&i.push(a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){i.push(a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&i.push(a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(p.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(p.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&i.push.apply(i,l("image",e.openGraph.images,{defaultWidth:p.defaultOpenGraphImageWidth,defaultHeight:p.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(p.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(p.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&i.push.apply(i,l("video",e.openGraph.videos,{defaultWidth:p.defaultOpenGraphVideoWidth,defaultHeight:p.defaultOpenGraphVideoHeight})),e.openGraph.locale&&i.push(a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&i.push(a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&i.push(a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,o,n;i.push(a.createElement("meta",r({key:"meta:"+(null!=(t=null!=(o=null!=(n=e.keyOverride)?n:e.name)?o:e.property)?t:e.httpEquiv)},e)))})),null!=(n=e.additionalLinkTags)&&n.length&&e.additionalLinkTags.forEach((function(e){var t;i.push(a.createElement("link",r({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),i},s=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.title,o=e.titleTemplate,r=e.defaultTitle,i=e.dangerouslyDisableGooglebot,p=void 0!==i&&i,l=e.dangerouslySetAllPagesToNoIndex,s=void 0!==l&&l,h=e.dangerouslySetAllPagesToNoFollow,u=void 0!==h&&h,d=e.description,f=e.canonical,m=e.facebook,g=e.openGraph,y=e.additionalMetaTags,b=e.twitter,v=e.defaultOpenGraphImageWidth,G=e.defaultOpenGraphImageHeight,k=e.defaultOpenGraphVideoWidth,E=e.defaultOpenGraphVideoHeight,w=e.mobileAlternate,x=e.languageAlternates,O=e.additionalLinkTags;return a.createElement(n.default,null,c({title:t,titleTemplate:o,defaultTitle:r,dangerouslySetAllPagesToNoIndex:s,dangerouslySetAllPagesToNoFollow:u,description:d,canonical:f,facebook:m,openGraph:g,additionalMetaTags:y,twitter:b,defaultOpenGraphImageWidth:v,defaultOpenGraphImageHeight:G,defaultOpenGraphVideoWidth:k,defaultOpenGraphVideoHeight:E,mobileAlternate:w,languageAlternates:x,additionalLinkTags:O,dangerouslyDisableGooglebot:p}))},t}(a.Component),h=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.title,o=e.noindex,r=void 0!==o&&o,i=e.nofollow,p=e.robotsProps,l=e.description,s=e.canonical,h=e.openGraph,u=e.facebook,d=e.twitter,f=e.additionalMetaTags,m=e.titleTemplate,g=e.mobileAlternate,y=e.languageAlternates,b=e.additionalLinkTags,v=e.disableGooglebot;return a.createElement(n.default,null,c({title:t,noindex:r,nofollow:i,robotsProps:p,description:l,canonical:s,facebook:u,openGraph:h,additionalMetaTags:f,twitter:d,titleTemplate:m,mobileAlternate:g,languageAlternates:y,additionalLinkTags:b,disableGooglebot:v}))},t}(a.Component)},33394:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o(88520)}])},34986:function(e,t,o){"use strict";o.d(t,{Fg:function(){return i},f6:function(){return p}});var n=o(52322),a=o(2784),r=(0,a.createContext)({isDarkMode:!0,toggleTheme:function(){}}),i=function(){return(0,a.useContext)(r)},p=function(e){var t=e.children,o=(0,a.useState)(!1),i=o[0],p=o[1];(0,a.useEffect)((function(){var e=localStorage.getItem("supabaseDarkMode");p(!e||"true"===e)}),[]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.Provider,{value:{isDarkMode:i,toggleTheme:function(){p(!i)}},children:t})})}},84466:function(e,t,o){"use strict";o.d(t,{i:function(){return n},d:function(){return a}});var n="Supabase",a="The Open Source Alternative to Firebase."},88520:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return m}});var n=o(52322),a=o(84466),r=o(2962),i=o(5632),p=o(2784),l=o(97729),c=function(){var e=(0,i.useRouter)().basePath;return(0,n.jsxs)(l.default,{children:[(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(e,"/favicon/apple-touch-icon.png")}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(e,"/favicon/favicon-32x32.png")}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(e,"/favicon/favicon-16x16.png")}),(0,n.jsx)("link",{rel:"manifest",href:"".concat(e,"/favicon/site.webmanifest")}),(0,n.jsx)("link",{rel:"shortcut icon",href:"".concat(e,"/favicon/favicon.ico")}),(0,n.jsx)("meta",{name:"msapplication-TileColor",content:"#1E1E1E"}),(0,n.jsx)("meta",{name:"msapplication-config",content:"".concat(e,"/favicon/browserconfig.xml")}),(0,n.jsx)("meta",{name:"theme-color",content:"#1E1E1E"}),(0,n.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"".concat(e,"/feed.xml")}),(0,n.jsx)("link",{rel:"icon",type:"image/png",href:"".concat(e,"/favicon/favicon.ico")}),(0,n.jsx)("link",{rel:"apple-touch-icon",href:"".concat(e,"/favicon/favicon.ico")})]})};o(33599);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function h(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){s(e,t,o[t])}))}return e}var u=o(34986);function d(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function f(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){d(e,t,o[t])}))}return e}function m(e){var t=e.Component,o=e.pageProps,l=function(e){return function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return fetch(e,h({method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},referrerPolicy:"no-referrer-when-downgrade",body:JSON.stringify(t)},o)).catch((function(e){console.error("Error at fetchWrapper - post:",e)}))}("https://api.supabase.io/platform/telemetry/page",{referrer:document.referrer,title:document.title,route:e})},s=(0,i.useRouter)();(0,p.useEffect)((function(){var e=function(e){l(e)};return s.events.on("routeChangeComplete",e),function(){s.events.off("routeChangeComplete",e)}}),[s.events]);var d="The Open Source Firebase Alternative | ".concat(a.i),m=(0,i.useRouter)().basePath;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{}),(0,n.jsx)(r.lX,{title:d,description:a.d,openGraph:{type:"website",url:"https://supabase.com/",site_name:"Supabase",images:[{url:"https://supabase.com".concat(m,"/images/og/og-image.jpg"),width:800,height:600,alt:"Supabase Og Image"}]},twitter:{handle:"@supabase",site:"@supabase",cardType:"summary_large_image"}}),(0,n.jsx)(u.f6,{children:(0,n.jsx)(t,f({},o))})]})}},33599:function(){},97729:function(e,t,o){e.exports=o(75913)},5632:function(e,t,o){e.exports=o(93642)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9774,179],(function(){return t(33394),t(93642)}));var o=e.O();_N_E=o}]);
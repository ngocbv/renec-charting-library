(window.webpackJsonp=window.webpackJsonp||[]).push([["symbol-search-dialog"],{"/KDZ":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var s=n("q1tI");class i extends s.PureComponent{constructor(e){super(e),this._handleChange=()=>{this.forceUpdate()},this.state={query:window.matchMedia(this.props.rule)}}componentDidMount(){this._subscribe(this.state.query)}componentDidUpdate(e,t){this.state.query!==t.query&&(this._unsubscribe(t.query),this._subscribe(this.state.query))}componentWillUnmount(){this._unsubscribe(this.state.query)}render(){return this.props.children(this.state.query.matches)}static getDerivedStateFromProps(e,t){return e.rule!==t.query.media?{query:window.matchMedia(e.rule)}:null}_subscribe(e){e.addListener(this._handleChange)}_unsubscribe(e){e.removeListener(this._handleChange)}}},GcSm:function(e,t,n){"use strict";n.r(t);var s=n("PT1i"),i=(n("8+VR"),n("h24c")),r=n("p04v"),a=n("mNbo");n("Kxc7"),n("qFKp");n.d(t,"showDefaultSearchDialog",(function(){return o})),n.d(t,"Components",(function(){return u})),n.d(t,"showSymbolSearchItemsDialog",(function(){return r.a}));!Object(a.isOnMobileAppPage)("any")&&window.matchMedia("(min-width: 602px) and (min-height: 445px)").matches;function o(e){const{defaultValue:t,showSpreadActions:n,source:a,...o}=e,u={...o,showSpreadActions:null!=n?n:Object(i.a)(),onSearchComplete:e=>{s.linking.symbol.setValue(e[0].symbol)}};Object(r.a)({...u,defaultValue:t})}const u={SymbolSearchWatchlistDialogContentItem:null,SymbolSearchWatchlistDialog:null}}}]);
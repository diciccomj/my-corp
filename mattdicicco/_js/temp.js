
var HOSTWIN=window;var GLOBALS=HOSTWIN.GLOBALS;var base=GLOBALS[31];if(base){var baseEl=document.createElement("base");baseEl.href=base;document.head.appendChild(baseEl)}var JS_START_TIME=Date.now();function _B_log(imp,opt_val){var p="imp\x3d"+imp;if(arguments.length>1)p+="\x26val\x3d"+opt_val;_B_logImg_("jsle",p)}var loadTimes=[GLOBALS[0],GLOBALS[1],JS_START_TIME];var loadTimesMap={"fjs":GLOBALS[0],"bjsi":GLOBALS[1],"sjsi":JS_START_TIME};var perfLoadTimesMap={};
function _B_record(opt_Name,opt_onlyMap){var t=(new Date).getTime();if(!opt_onlyMap)loadTimes.push(t);if(opt_Name){loadTimesMap[opt_Name]=t;if(window.top.performance&&window.top.performance.now)perfLoadTimesMap[opt_Name]=window.top.performance.now()}}var _B_thumbStyle_;

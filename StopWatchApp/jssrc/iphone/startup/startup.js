//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "StopWatchApp",
    appName: "StopWatchApp",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.12.134",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "StopWatchApp",
    url: "https://companyabc.konycloud.com/StopWatchApp/MWServlet",
    secureurl: "https://companyabc.konycloud.com/StopWatchApp/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    frmHomeGlobals();
    frmSettingsGlobals();
    frmSubSettingsGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;
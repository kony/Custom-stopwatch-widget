//Form JS File
function frmHome_stopWatch_onClick_seq0() {
    alert("You clicked on stop watch");
};

function frmHome_button214149106640_onClick_seq0(eventobject) {
    var a = frmHome.stopWatch.stopWatch();
    alert(a);
};

function frmHome_button214149106641_onClick_seq0(eventobject) {
    frmHome.stopWatch.startWatch();
};

function addWidgetsfrmHome() {
    var stopWatch = new CustomStopWatch.StopWatch({
        "id": "stopWatch",
        "image": null,
        "isVisible": true,
        "hExpand": true,
        "vExpand": false,
        "textSize": 35,
        "bgTransparancy": 0,
        "onClick": frmHome_stopWatch_onClick_seq0
    }, {
        "widgetAlign": 5,
        "containerWeight": 6,
        "margin": [5, 5, 5, 5],
        "marginInPixel": false,
        "padding": [15, 15, 15, 15],
        "paddingInPixel": false
    }, {
        "widgetName": "StopWatch"
    });
    var button214149106640 = new kony.ui.Button({
        "id": "button214149106640",
        "isVisible": true,
        "text": "Stop Watch",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmHome_button214149106640_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 2, 3, 2],
        "padding": [2, 3, 2, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button214149106641 = new kony.ui.Button({
        "id": "button214149106641",
        "isVisible": true,
        "text": "Start Watch",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmHome_button214149106641_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 2, 3, 2],
        "padding": [2, 3, 2, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmHome.add(
    stopWatch, button214149106640, button214149106641);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "needAppMenu": true,
        "title": "StopWatch",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmHome
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
        "titleBarSkin": "titleBar",
        "titleBarConfig": {
            "renderTitleText": true,
            "titleBarRightSideView": "title",
            "titleBarLeftSideView": "none",
            "closureRightSideView": navigateToSettings,
            "labelRightSideView": "Settings"
        },
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "deprecated": {
            "titleBarBackGroundImage": "blue_pixel.png"
        }
    });
};
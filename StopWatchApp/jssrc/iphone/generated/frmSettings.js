//Form JS File
function frmSettings_hbox21405377548740_onClick_seq0(eventobject) {
    setSubSettings.call(this, "backgroundcolor");
};

function frmSettings_hbox21405377548747_onClick_seq0(eventobject) {
    setSubSettings.call(this, "textcolor");
};

function frmSettings_hbox214053775442994_onClick_seq0(eventobject) {
    setSubSettings.call(this, "topcirclecolor");
};

function frmSettings_hbox214053775445146_onClick_seq0(eventobject) {
    setSubSettings.call(this, "bottomcirclecolor");
};

function addWidgetsfrmSettings() {
    var label21405377546408 = new kony.ui.Label({
        "id": "label21405377546408",
        "isVisible": true,
        "text": "Text Size",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [4, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var tbxTextSize = new kony.ui.TextBox2({
        "id": "tbxTextSize",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 2,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "0 to 35",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbxTrans",
        "focusSkin": "sknTbxTrans"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": true,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false
    });
    var hbox21405377546406 = new kony.ui.Box({
        "id": "hbox21405377546406",
        "isVisible": true,
        "skin": "sknHbxTrans",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 46,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox21405377546406.add(
    label21405377546408, tbxTextSize);
    var line21405377546407 = new kony.ui.Line({
        "id": "line21405377546407",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [4, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var label21405377546703 = new kony.ui.Label({
        "id": "label21405377546703",
        "isVisible": true,
        "text": "Widget transparancy",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [4, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var tbxWidgetTransparancy = new kony.ui.TextBox2({
        "id": "tbxWidgetTransparancy",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "maxTextLength": 3,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "0 to 100",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbxTrans",
        "focusSkin": "sknTbxTrans"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": true,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false
    });
    var hbox21405377546701 = new kony.ui.Box({
        "id": "hbox21405377546701",
        "isVisible": true,
        "skin": "sknHbxTrans",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 46,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox21405377546701.add(
    label21405377546703, tbxWidgetTransparancy);
    var vbox21405377546405 = new kony.ui.Box({
        "id": "vbox21405377546405",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox21405377546405.add(
    hbox21405377546406, line21405377546407, hbox21405377546701);
    var hbox21405377546403 = new kony.ui.Box({
        "id": "hbox21405377546403",
        "isVisible": true,
        "skin": "sknHbxDefault",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 22,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 10, 0, 5],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox21405377546403.add(
    vbox21405377546405);
    var label21405377548742 = new kony.ui.Label({
        "id": "label21405377548742",
        "isVisible": true,
        "text": "Background color",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [4, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 86
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var image2214053775411487 = new kony.ui.Image2({
        "id": "image2214053775411487",
        "isVisible": true,
        "src": "arrow.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var hbox21405377548740 = new kony.ui.Box({
        "id": "hbox21405377548740",
        "isVisible": true,
        "skin": "sknHbxTrans",
        "onClick": frmSettings_hbox21405377548740_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 4, 0, 4],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox21405377548740.add(
    label21405377548742, image2214053775411487);
    var line21405377548745 = new kony.ui.Line({
        "id": "line21405377548745",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [4, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var label21405377548749 = new kony.ui.Label({
        "id": "label21405377548749",
        "isVisible": true,
        "text": "Text color",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [4, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 87
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var image2214053775413376 = new kony.ui.Image2({
        "id": "image2214053775413376",
        "isVisible": true,
        "src": "arrow.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var hbox21405377548747 = new kony.ui.Box({
        "id": "hbox21405377548747",
        "isVisible": true,
        "skin": "sknHbxTrans",
        "onClick": frmSettings_hbox21405377548747_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 4, 0, 4],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox21405377548747.add(
    label21405377548749, image2214053775413376);
    var line214053775442450 = new kony.ui.Line({
        "id": "line214053775442450",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [4, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var label214053775442996 = new kony.ui.Label({
        "id": "label214053775442996",
        "isVisible": true,
        "text": "Top circle Color",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [4, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 87
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var image2214053775442998 = new kony.ui.Image2({
        "id": "image2214053775442998",
        "isVisible": true,
        "src": "arrow.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var hbox214053775442994 = new kony.ui.Box({
        "id": "hbox214053775442994",
        "isVisible": true,
        "skin": "sknHbxTrans",
        "onClick": frmSettings_hbox214053775442994_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 4, 0, 4],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox214053775442994.add(
    label214053775442996, image2214053775442998);
    var line214053775444714 = new kony.ui.Line({
        "id": "line214053775444714",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [4, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var label214053775445148 = new kony.ui.Label({
        "id": "label214053775445148",
        "isVisible": true,
        "text": "Bottom circle color",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [4, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 87
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var image2214053775445150 = new kony.ui.Image2({
        "id": "image2214053775445150",
        "isVisible": true,
        "src": "arrow.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var hbox214053775445146 = new kony.ui.Box({
        "id": "hbox214053775445146",
        "isVisible": true,
        "skin": "sknHbxTrans",
        "onClick": frmSettings_hbox214053775445146_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 4, 0, 4],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox214053775445146.add(
    label214053775445148, image2214053775445150);
    var vbox21405377548738 = new kony.ui.Box({
        "id": "vbox21405377548738",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox21405377548738.add(
    hbox21405377548740, line21405377548745, hbox21405377548747, line214053775442450, hbox214053775442994, line214053775444714, hbox214053775445146);
    var hbox21405377548736 = new kony.ui.Box({
        "id": "hbox21405377548736",
        "isVisible": true,
        "skin": "sknHbxDefault",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 49,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 5, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox21405377548736.add(
    vbox21405377548738);
    frmSettings.add(
    hbox21405377546403, hbox21405377548736);
};

function frmSettingsGlobals() {
    var MenuId = [];
    frmSettings = new kony.ui.Form2({
        "id": "frmSettings",
        "needAppMenu": true,
        "title": "Settings",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmSettings
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
            "titleBarRightSideView": "none",
            "titleBarLeftSideView": "button",
            "imageLeftSideView": "back_ico.png",
            "closureLeftSideView": saveSettings
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
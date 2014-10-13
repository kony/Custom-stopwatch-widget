var gblSettingName = "";
function setSubSettings(settingName)
{
	frmSubSettings.tbxRed.text = "";
	frmSubSettings.tbxGreen.text = "";
	frmSubSettings.tbxBlue.text = "";
	frmSubSettings.show();	
	switch(settingName)
	{
		case "backgroundcolor":
			kony.print("bg color setting ");
			gblSettingName = "backgroundcolor";
			break;
		case "textcolor":
			kony.print("text color setting ");
			gblSettingName = "textcolor";
			break;
		case "topcirclecolor":
			kony.print("top circle color setting ");
			gblSettingName = "topcirclecolor";
			break;
		case "bottomcirclecolor":
			kony.print("Bottom circle color setting ");
			gblSettingName = "bottomcirclecolor";
			break;		
	}
}
function saveSubSettings()
{
	if(frmSubSettings.tbxRed.text != null && frmSubSettings.tbxRed.text != "" && frmSubSettings.tbxGreen.text != null && frmSubSettings.tbxGreen.text != "" && frmSubSettings.tbxBlue.text != null && frmSubSettings.tbxBlue.text != "")
	{   
		var color = [];
		color[0] = frmSubSettings.tbxRed.text;
		color[1] = frmSubSettings.tbxGreen.text;
		color[2] = frmSubSettings.tbxBlue.text;
	
		switch(gblSettingName)
		{
			case "backgroundcolor":
				kony.print("bg color setting done");
				frmHome.stopWatch.bgColor = color;
				break;
			case "textcolor":
				kony.print("text color setting done");
				frmHome.stopWatch.textColor = color;
				break;
			case "topcirclecolor":
				kony.print("top circle color setting done");
				frmHome.stopWatch.foregroundCircleColor = color;
				break;
			case "bottomcirclecolor":
				kony.print("bottom color setting done");
				frmHome.stopWatch.backgroundCircleColor = color;
				break;		
		}	
		frmSettings.show();			
	}
	else
	{
		alert("Please enter the required values");		
		return;
	}
}
function saveSettings()
{
	if(frmSettings.tbxWidgetTransparancy.text != null && frmSettings.tbxWidgetTransparancy.text != "" && frmSettings.tbxTextSize.text != null && frmSettings.tbxTextSize.text != "")
	{
		frmHome.stopWatch.bgTransparancy = frmSettings.tbxWidgetTransparancy.text;
		frmHome.stopWatch.textSize = frmSettings.tbxTextSize.text;
		frmHome.show();
	}
	else
	{
		alert("Please enter the required values");
		return;
	}	
}
function navigateToSettings()
{
	frmSettings.show();
}
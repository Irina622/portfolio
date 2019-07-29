function selectLang(str)
/* Ïåðåãðóæàåì ñòðàíèöó â ñîîòâåòñòâèè ñ âûáðàííûì ÿçûêîì */
{
	var curLoc = new String(window.location.toString());
	
	if (curLoc.search('en') > -1)
		var s = new String(window.location.toString()).replace(/en/g, str);
	else if (curLoc.search('ru') > -1)
		var s = new String(window.location.toString()).replace(/ru/g, str);
	else if (curLoc.search('ua') > -1)
		var s = new String(window.location.toString()).replace(/ua/g, str);
	
	window.location.assign(s);
}

// inspired by google chrome extension Literally 

walk(document.body);

function walk(node) {
	var child, next; 
	switch (node.nodeType) {
		case 1: // element
		case 9: // document
		case 11: // document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling; 
				walk(child); 
				child = next; 
			}
			break; 
		case 3: // text node :D
			handleText(node); 
			break; 
	}
}


function handleText(textNode) 
{
	var v = textNode.nodeValue; 
	v = v.replace(/\bcompletely\b/g, "utterly"); 
	v = v.replace(/\bCompletely\b/g, "Utterly"); 
	v = v.replace(/\bCOMPLETELY\b/g, "UTTERLY");
	v = v.replace(/\btotally\b/g, "utterly"); 
	v = v.replace(/\bTotally\b/g, "Utterly"); 
	v = v.replace(/\bTOTALLY\b/g, "UTTERLY"); 
	v = v.replace(/\bentirely\b/g, "utterly"); 
	v = v.replace(/\bEntirely\b/g, "Utterly"); 
	v = v.replace(/\bENTIRELY\b/g, "UTTERLY"); 

	textNode.nodeValue = v; 
}


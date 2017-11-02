var pins_config = {
	'default':{
		'pinShadow':'#000', //shadow color below the points
		'pinShadowOpacity':'50', //shadow opacity, value, 0-100
	},
	'points':[
	{
		'shape':'rectangle',//choose the shape of the pin circle or rectangle
		'hover':'<b><u>WASHINGTON DC</u></b><br><span style="color: yellow;">*Write text or load images*</span>',//the content of the hover ppup
		'pos_X':587,//location of the pin on X axis
		'pos_Y':182,//location of the pin on Y axis
		'width':14,//width of the pin if rectangle (if circle use diameter)
		'height':14,//height of the pin if rectangle (if circle delete this line)
		'outline':'#FFF',//outline color of the pin
		'thickness':1,//thickness of the line (0 to hide the line)
		'upColor':'#0000FF',//color of the pin when map loads
		'overColor':'#3399ff',//color of the pin when mouse hover
		'downColor':'#00ffff',//color of the pin when clicked 
		//(trick, if you make this pin un-clickable > make the overColor and downColor the same)
		'url':'#',//URL of this pin
		'target':'same_window',//'new_window' opens URL in new window//'same_window' opens URL in the same window //'none' pin is not clickable
		'enable':true,//true/false to enable/disable this pin
        'City':'Washington DC',
	},
    {
		'shape':'circle',
		'hover':'<b><u>Atlanta MRO Supply - Atlanta Campus</u></b><br><span style="color: #bcbcbc;">Street Address:</span><br>&nbsp;7355 Graham Dr., Fairburn, GA 30213<br><span style="color: #bcbcbc;">Telephone:</span><br>&nbsp;(770) 306-5463',
		'pos_X':509,
		'pos_Y':283,
		'diameter':6,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'/education?State=null&City=Atlanta&Classes=null',
		'target':'same_window',
		'enable':true,
        'City':'Atlanta',
	},        
	{
		'shape':'circle',
		'hover':'<b><u>Gem Supply - Kissimmee Campus</u></b><br><span style="color: #bcbcbc;">Street Address:</span><br>&nbsp;2206 N Main St., Kissimmee, FL 34744<br><span style="color: #bcbcbc;">Telephone:</span><br>&nbsp;(407) 933-4008 / (800) 422-9886',
		'pos_X':563,
		'pos_Y':364,
		'diameter':6,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'/education?State=null&City=Kissimmee&Classes=null',
		'target':'same_window',
		'enable':true,
        'City':'Kissimmee',
	},       
    {
		'shape':'circle',
		'hover':'<b><u>Gem Supply - Lakeland Campus</u></b><br><span style="color: #bcbcbc;">Street Address:</span><br>&nbsp;1802 S. Combee Rd., Lakeland, FL 33801<br><span style="color: #bcbcbc;">Telephone:</span><br>&nbsp;(863) 393-9088 / (800) 422-9886',
		'pos_X':559,
		'pos_Y':369,
		'diameter':6,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'/education?State=null&City=Lakeland&Classes=null',
		'target':'same_window',
		'enable':true,
        'City':'Lakeland',
	},    
	{
		'shape':'circle',
		'hover':'<b><u>Gem Supply - Orlando Campus</u></b><br><span style="color: #bcbcbc;">Street Address:</span><br>&nbsp;1312 W Washington St., Orlando, FL 32805<br><span style="color: #bcbcbc;">Telephone:</span><br>&nbsp;(407) 849-6163 / (800) 422-9886',
		'pos_X':562,
		'pos_Y':356,
		'diameter':6,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'/education?State=null&City=Orlando&Classes=null',
		'target':'same_window',
		'enable':true,
        'City':'Orlando',
	},
   {
		'shape':'circle',
		'hover':'<b><u>Gem Supply - Tampa Campus</u></b><br><span style="color: #bcbcbc;">Street Address:</span><br>&nbsp;1007 N Himes Ave., Tampa, FL 33607<br><span style="color: #bcbcbc;">Telephone:</span><br>&nbsp;(813) 877-6677 / (800) 422-9886',
		'pos_X':553,
		'pos_Y':372,
		'diameter':6,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'/education?State=null&City=Tampa&Classes=null',
		'target':'same_window',
		'enable':true,
        'City':'Tampa',
	},
	]
}

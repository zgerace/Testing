// Quick feature detection
function isTouchEnabled() {
	return (('ontouchstart' in window)
		|| (navigator.MaxTouchPoints > 0)
		|| (navigator.msMaxTouchPoints > 0));
}

$(function(){
	addEvent('st_1');addEvent('st_2');addEvent('st_3');addEvent('st_4');addEvent('st_5');addEvent('st_6');addEvent('st_7');addEvent('st_8');addEvent('st_9');addEvent('st_10');addEvent('st_11');addEvent('st_12');addEvent('st_13');addEvent('st_14');addEvent('st_15');addEvent('st_16');addEvent('st_17');addEvent('st_18');addEvent('st_19');addEvent('st_20');addEvent('st_21');addEvent('st_22');addEvent('st_23');addEvent('st_24');addEvent('st_25');addEvent('st_26');addEvent('st_27');addEvent('st_28');addEvent('st_29');addEvent('st_30');addEvent('st_31');addEvent('st_32');addEvent('st_33');addEvent('st_34');addEvent('st_35');addEvent('st_36');addEvent('st_37');addEvent('st_38');addEvent('st_39');addEvent('st_40');addEvent('st_41');addEvent('st_42');addEvent('st_43');addEvent('st_44');addEvent('st_45');addEvent('st_46');addEvent('st_47');addEvent('st_48');addEvent('st_49');addEvent('st_50');
})
$(function(){
	$('#lakes').find('path').attr({'fill':map_config['default']['lakesFill']}).css({'stroke':map_config['default']['lakesOutline']});
	$('#mapshadow').find('path').attr({'fill':map_config['default']['mapShadow']});
});

function addEvent(id,relationId){
	var _obj = $('#'+id);
	var _Textobj = $('#'+id+','+'#'+map_config[id]['iso']);

	$('#'+['text-abb']).attr({'fill':map_config['default']['namesColor']});

	_obj.attr({'fill':map_config[id]['upColor'],'stroke':map_config['default']['borderColor']});
	_Textobj.attr({'cursor':'default'});
	if(map_config[id]['enable'] == true){
		if (isTouchEnabled()) {
			//clicking effect
			_Textobj.on('touchstart', function(e){
				var touch = e.originalEvent.touches[0];
				var x=touch.pageX+10, y=touch.pageY+15;
				var tipw=$('#map-tip-us').outerWidth(), tiph=$('#map-tip-us').outerHeight(), 
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#'+id).css({'fill':map_config[id]['downColor']});
				$('#map-tip-us').show().html(map_config[id]['hover']);
				$('#map-tip-us').css({left:x, top:y})
			})
			_Textobj.on('touchend', function(){
				$('#'+id).css({'fill':map_config[id]['upColor']});
				if(map_config[id]['target'] == 'new_window'){
				}else if(map_config[id]['target'] == 'same_window'){
					City = pins_config['points'][id]['City'];
                    DisplayStateInfo();
				}
			})
		}
		_Textobj.attr({'cursor':'pointer'});
		_Textobj.hover(function(){
			//moving in/out effect
			$('#map-tip-us').show().html(map_config[id]['hover']);
			_obj.css({'fill':map_config[id]['overColor']})
		},function(){
			$('#map-tip-us').hide();
			$('#'+id).css({'fill':map_config[id]['upColor']});
		})
		//clicking effect
		_Textobj.mousedown(function(){
			$('#'+id).css({'fill':map_config[id]['downColor']});
		})
		_Textobj.mouseup(function(){
			$('#'+id).css({'fill':map_config[id]['overColor']});
			if(map_config[id]['target'] == 'new_window'){
			}else if(map_config[id]['target'] == 'same_window'){
                State = map_config[id]['state'];
                DisplayStateInfo();
			}
		})
		_Textobj.mousemove(function(e){
			var x=e.pageX+10, y=e.pageY+15;
			var tipw=$('#map-tip-us').outerWidth(), tiph=$('#map-tip-us').outerHeight(), 
			x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
			y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
			$('#map-tip-us').css({left:x, top:y})
		})
	}	
}


//The pins code
$(function(){
	if($('#pin-shadow').find('path').eq(0).attr('fill') != 'undefined'){
		var pinShadowOpacity = pins_config['default']['pinShadowOpacity'];
		var pinShadowOpacity = parseInt(pinShadowOpacity);
		if (pinShadowOpacity >=100){pinShadowOpacity = 1;}else if(pinShadowOpacity <=0){pinShadowOpacity =0;}else{pinShadowOpacity = pinShadowOpacity/100;}

		$('#pin-shadow').find('path').attr({'fill':pins_config['default']['pinShadow']}).css({'fill-opacity':pinShadowOpacity})
};


	var points_len = pins_config['points'].length;
	if( points_len > 0){
		var xmlns = "http://www.w3.org/2000/svg";
		var tsvg_obj = document.getElementById("map_points");
		var svg_circle,svg_rect;
		for(var i=0;i<points_len;i++){
			if (pins_config['points'][i]['shape']=="circle"){
				svg_circle = document.createElementNS(xmlns, "circle");
				svg_circle.setAttributeNS(null, "cx", pins_config['points'][i]['pos_X']+1);
				svg_circle.setAttributeNS(null, "cy", pins_config['points'][i]['pos_Y']+1);
				svg_circle.setAttributeNS(null, "r", pins_config['points'][i]['diameter']/2);
				svg_circle.setAttributeNS(null, "fill", pins_config['default']['pinShadow']);
				svg_circle.setAttributeNS(null, "style",'fill-opacity:'+pinShadowOpacity);
				svg_circle.setAttributeNS(null, "id",'map_points_shadow_'+i);
				tsvg_obj.appendChild(svg_circle);
				svg_circle = document.createElementNS(xmlns, "circle");
				svg_circle.setAttributeNS(null, "cx", pins_config['points'][i]['pos_X']);
				svg_circle.setAttributeNS(null, "cy", pins_config['points'][i]['pos_Y']);
				svg_circle.setAttributeNS(null, "r", pins_config['points'][i]['diameter']/2);
				svg_circle.setAttributeNS(null, "fill", pins_config['points'][i]['upColor']);
				svg_circle.setAttributeNS(null, "stroke",pins_config['points'][i]['outline']);
				svg_circle.setAttributeNS(null, "stroke-width",pins_config['points'][i]['thickness']);
				svg_circle.setAttributeNS(null, "id",'map_points_'+i);
				tsvg_obj.appendChild(svg_circle);
				dynamicAddEvent(i);
			}
			else if(pins_config['points'][i]['shape']=="rectangle"){
				svg_rect = document.createElementNS(xmlns, "rect");
				svg_rect.setAttributeNS(null, "x", pins_config['points'][i]['pos_X']- pins_config['points'][i]['width']/2+1);
				svg_rect.setAttributeNS(null, "y", pins_config['points'][i]['pos_Y']- pins_config['points'][i]['height']/2+1);
				svg_rect.setAttributeNS(null, "width", pins_config['points'][i]['width']);
				svg_rect.setAttributeNS(null, "height", pins_config['points'][i]['height']);
				svg_rect.setAttributeNS(null, "fill", pins_config['default']['pinShadow']);
				svg_rect.setAttributeNS(null, "style",'fill-opacity:'+pinShadowOpacity);
				svg_rect.setAttributeNS(null, "id",'map_points_shadow_'+i);
				tsvg_obj.appendChild(svg_rect);
				svg_rect = document.createElementNS(xmlns, "rect");
				svg_rect.setAttributeNS(null, "x", pins_config['points'][i]['pos_X']- pins_config['points'][i]['width']/2);
				svg_rect.setAttributeNS(null, "y", pins_config['points'][i]['pos_Y']- pins_config['points'][i]['height']/2);
				svg_rect.setAttributeNS(null, "width", pins_config['points'][i]['width']);
				svg_rect.setAttributeNS(null, "height", pins_config['points'][i]['height']);
				svg_rect.setAttributeNS(null, "fill", pins_config['points'][i]['upColor']);
				svg_rect.setAttributeNS(null, "stroke",pins_config['points'][i]['outline']);
				svg_rect.setAttributeNS(null, "stroke-width",pins_config['points'][i]['thickness']);
				svg_rect.setAttributeNS(null, "id",'map_points_'+i);
				tsvg_obj.appendChild(svg_rect);
				dynamicAddEvent(i);
			}
		}
	}
});

function dynamicAddEvent(id){
	var obj = $('#map_points_'+id);

	if(pins_config['points'][id]['enable'] == true){
		if (isTouchEnabled()) {
			obj.on('touchstart', function(e){
				var touch = e.originalEvent.touches[0];
				var x=touch.pageX+10, y=touch.pageY+15;
				var tipw=$('#map-tip-us').outerWidth(), tiph=$('#map-tip-us').outerHeight(),
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#'+id).css({'fill':pins_config['points'][id]['downColor']});
				$('#map-tip-us').show().html(pins_config['points'][id]['hover']);
				$('#map-tip-us').css({left:x, top:y})
			})
			obj.on('touchend', function(){
				$('#'+id).css({'fill':pins_config['points'][id]['upColor']});
				if(pins_config['points'][id]['target'] == 'new_window'){
					window.open(pins_config['points'][id]['url']);
				}else if(pins_config['points'][id]['target'] == 'same_window'){
					City = pins_config['points'][id]['City'];
                    DisplayCityInfo();
				}
			})
		}
		obj.attr({'cursor':'pointer'});
		obj.hover(function(){
			$('#map-tip-us').show().html(pins_config['points'][id]['hover']);
			obj.css({'fill':pins_config['points'][id]['overColor']})
		},function(){
			$('#map-tip-us').hide();
			obj.css({'fill':pins_config['points'][id]['upColor']});
		})
		//clicking effect
		obj.mousedown(function(){
			obj.css({'fill':pins_config['points'][id]['downColor']});
		})
		obj.mouseup(function(){
			obj.css({'fill':pins_config['points'][id]['overColor']});
			if(pins_config['points'][id]['target'] == 'new_window'){	
			}else if(pins_config['points'][id]['target'] == 'same_window'){
				City = pins_config['points'][id]['City'];
                DisplayCityInfo();
			}
		})
		obj.mousemove(function(e){
				var x=e.pageX+10, y=e.pageY+15;
				var tipw=$('#map-tip-us').outerWidth(), tiph=$('#map-tip-us').outerHeight(), 
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#map-tip-us').css({left:x, top:y})
		})
	}	
}





//code for allowing customers to choose their location

//Definining all variables used later
   var City;
   var State;
   var PannelCode;
   var template;
   var check;
   var checkGrad;
   var NewText; 
   var allClasses = ['Carpet Care', 'Floor Care', 'EVS', 'ISSA CITS Master', 'ISSA CITS 101'];
   var placeholder;
   var gradTemplate;
   var gradText;
   var gradImport;
   var gradClose = '</tbody></table>';   
   var gradInfo = '<table class="table table-bordered center"><thead><tr><th style="width:33%">Grad Name</th><th style="width:33%">Class Attended</th><th style="width:33%">Date of Completion</th></tr></thead><tbody>';
   
    
//Sets the paramater Variables for all other functions to be called later
function SetParams(){
      check = 0;
      checkGrad = 0;
      NewText = "";
      gradTemplate = ""; 
}
    

//Graduate Information
function AvailableGradState(){
    $.getJSON( '/js/JSON/Graduates.json', function(data) { 
            Information = data.Graduates;
            $("#GraduateTitle").html(State + " ACE Technicians");
            for(i = 0; i < Information.length; i++){
               if(Information[i].State == State || Information[i].UniversityState == State){
                  loopgrads();
               }else{
                  nograds();
               }
            }
         })
} 

function AvailableGradCity(){
    $.getJSON( '/js/JSON/Graduates.json', function(data) { 
            Information = data.Graduates;
            $("#GraduateTitle").html(City + " ACE Technicians");
            for(i = 0; i < Information.length; i++){
               if(Information[i].City == City || Information.University == City){
                  loopgrads();
               }else{
                  nograds();
               }
            }
         })
}  

function specificGrad(GradID){
    SetParams();
    $.getJSON( '/js/JSON/Graduates.json', function(data) { 
            Information = data.Graduates;
            for(i = 0; i < Information.length; i++){
               if(Information[i].ID == GradID){
                   $("#GraduateTitle").html(Information[i].Name);
                   LoopSpeciifcGrad();               
               }
            }
         })  
}

function LoopSpeciifcGrad(){
    for(ii = 0; ii < allClasses.length; ii++){
        var placeholder = $(Information[i]).attr(allClasses[ii]);
        if(typeof placeholder != typeof undefined && typeof placeholder != typeof false){
            var gradID = Information[i].ID;
            var gradSpeciifc = '<div class="center"><a onclick="ResetGrads()">View All ' + Information[i].State + ' Graduates</a></div><table class="table table-bordered center"><thead><tr><th style="width:50%">Class Attended</th><th style="width:50%">Date of Completion</th></tr></thead><tbody>';
            
            gradImport = '<tr><td>' + allClasses[ii] + '</td><td>' + placeholder + '</td></tr>';
            gradTemplate += gradImport;
            gradText = gradSpeciifc + gradTemplate + gradClose;
        }
        if(ii == allClasses.length - 1){
            $("#gradInfo").html(gradText);  
        }
    }
}  

function loopgrads(){
    for(ii = 0; ii < allClasses.length; ii++){
        var placeholder = $(Information[i]).attr(allClasses[ii]);
        if(typeof placeholder != typeof undefined && typeof placeholder != typeof false){
            var gradID = Information[i].ID;
            console.log(City);
            console.log(Information[i].Name);
            console.log(State);
            gradImport = '<tr><td><a onclick="specificGrad(' + gradID + ')">' + Information[i].Name + '</a></td><td>' + allClasses[ii] + '</td><td>' + placeholder + '</td></tr>';
            
            gradTemplate += gradImport;
            gradText = gradInfo + gradTemplate + gradClose;
            
            if(i == Information.length - 1){
            $("#gradInfo").html(gradText);      
            }
    }
  }
}   
   

function nograds(){
   checkGrad++
   if(checkGrad == Information.length){
      gradText = "<div class='center'><h2 class='panel-heading'><div>There are currently no certified ACE Technicians in this Area!</h2></div>";
      $("#gradInfo").html(gradText);
   }else if(i == Information.length - 1){
      $("#gradInfo").html(gradText);
   }
}  

    


//Class information for the designated State 
function AvailableClassState(){
    $.getJSON( '/js/JSON/classes.json', function(data) { 
            Information = data.Courses;
            $("#ClassesTitle").html(State + " Classes");
            for(i = 0; i < Information.length; i++){
               if(Information[i].State == State){
                  loopOptions();
               }else{
                  noOptions();
               }
            }
         })
}  

function AvailableClassCity(){
    $.getJSON( '/js/JSON/classes.json', function(data) { 
            Information = data.Courses;
            $("#ClassesTitle").html(City + " Classes");
            for(i = 0; i < Information.length; i++){
               if(Information[i].Location == City){
                  loopOptions();
               }else{
                  noOptions();
               }
            }
         })
}  

   
function loopOptions(){
    HTMLlink = $.ajax({
       type: "GET",
       url: Information[i].Html,
       dataType: "html",
       async: false    
    }).responseText;
    PannelCode = Information[i].Month + "-" + Information[i].Day + Information[i].Location.replace(/\s/g, '');
    
   template = "<div class='panel panel-default center'><div class='panel-heading'><a href='#" + PannelCode + "' data-toggle='collapse'><div><h2 class='blue bold'>" + Information[i].Title + "</h2><h4 class='blue'>" + Information[i].Location + " - " + Information[i].Month + " " + Information[i].Day + "</h4></div></a></div><div id='" + PannelCode + "' class='panel-body collapse main-font'><div><img width='' src='images/Training-Photos/" + Information[i].Picture + "'></div><iframe frameborder='0' width='100%' height='400' src='https://impactflow.com/widgets/tickets/" + Information[i].Link + "'></iframe>" + HTMLlink + "<iframe frameborder='0' width='100%' height='400' src='https://impactflow.com/widgets/tickets/" + Information[i].Link + "'></iframe></div></div></div>"; 
   
   NewText += template;
   if(i == Information.length - 1){
      $("#classInfo").html(NewText);
   }
}   
   
function noOptions(){
   check++
   if(check == Information.length){
      NewText = "<div class='panel panel-default center'><h2 class='panel-heading'><div>No available classes at this time Please either submit a request or contact us at 888-999-6059</h2></div>";
      $("#classInfo").html(NewText);
   }else if(i == Information.length - 1){
      $("#classInfo").html(NewText);
   }
}  

function ResetGrads(){
    SetParams();
    AvailableGradState();
}

function DisplayStateInfo(){
      SetParams();
      AvailableClassState();
      AvailableGradState();
   };

function DisplayCityInfo(){
      SetParams();
      AvailableClassCity();
      AvailableGradCity();
   };
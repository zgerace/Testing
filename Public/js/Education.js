$(document).ready(function(){

//Defining Variables   
var State = getUrlParameter('State');
var City = getUrlParameter('City');
var Classes = getUrlParameter('Classes');
var StateStatus = false;   
var cityStatus = false;
var classesStatus = false;  
var check = 0;
var informaiton;
var NewText = "";  
var Options;    
var data;
var PannelCode;
var template; 
var HTMLlink;
   
   
   
//Difining Functions used later  
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
   
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
       
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];           
           break
        }
    }
};   
   
function loopOptions(){
    HTMLlink = $.ajax({
       type: "GET",
       url: informaiton[i].Html,
       dataType: "html",
       async: false    
    }).responseText;
    PannelCode = informaiton[i].Month + "-" + informaiton[i].Day + informaiton[i].Location.replace(/\s/g, '');
    
   
   template = "<div class='panel panel-default center'><div class='panel-heading'><a href='#" + PannelCode + "' data-toggle='collapse'><div><h2 class='blue bold'>" + informaiton[i].Title + "</h2><h4 class='blue'>" + informaiton[i].Location + " - " + informaiton[i].Month + " " + informaiton[i].Day + "</h4></div></a></div><div id='" + PannelCode + "' class='panel-body collapse main-font'><div><img width='' src='images/Training-Photos/" + informaiton[i].Picture + "'></div><iframe frameborder='0' width='100%' height='400' src='https://impactflow.com/widgets/tickets/" + informaiton[i].Link + "'></iframe>" + HTMLlink + "<iframe frameborder='0' width='100%' height='400' src='https://impactflow.com/widgets/tickets/" + informaiton[i].Link + "'></iframe></div></div></div>"; 
   
   NewText += template;
   if(i == informaiton.length - 1){
      $("#Information").html(NewText);
   }
}   
  
   
function noOptions(){
   check++
   if(check == informaiton.length){
      NewText = "<div class='panel panel-default center'><h2 class='panel-heading'><div>No available classes at this time Please either submit a request or contact us at 888-999-6059</h2></div>";
      $("#Information").html(NewText);
   }else if(i == informaiton.length - 1){
      $("#Information").html(NewText);
   }
}   
   
   function Proccess(){
      if(City != "null" && Classes != "null" && Classes != "All Classes"){
         $.getJSON( '/js/JSON/classes.json', function(data) { 
            informaiton = data.Courses;
            $("#title").html(City + ", " + Classes + " Classes");
            for(i = 0; i < informaiton.length; i++){
               if(informaiton[i].Location == City && informaiton[i].Course == Classes){
                  loopOptions();
               }else{
                  noOptions();
               }
            }
         })
      }else if(City == "null" && State != "null" && Classes != "null" && Classes != "All Classes"){
            $.getJSON( '/js/JSON/classes.json', function(data) {
            informaiton = data.Courses;
            $("#title").html(State + ", " + Classes + " Classes");
            for(i = 0; i < informaiton.length; i++){
               if(informaiton[i].State == State && informaiton[i].Course == Classes){
                  loopOptions();
               }else{
                  noOptions();
               }
            }
         })
      }else if((City != "null") && (Classes == "null" || Classes == "All Classes")){
            $.getJSON( '/js/JSON/classes.json', function(data) {
            informaiton = data.Courses;   
            $("#title").html(City + " Classes");   
            for(i = 0; i < informaiton.length; i++){
               if(informaiton[i].Location == City){
                  loopOptions();
               }else{
                  noOptions();
               }
            }
         })
      }else if((City == "null" && State == "null") && (Classes != "null" && Classes != "All Classes")){
            $.getJSON( '/js/JSON/classes.json', function(data) {
            informaiton = data.Courses;   
            $("#title").html("A.C.E. " + Classes + " Classes");
            for(i = 0; i < informaiton.length; i++){
               if(informaiton[i].Course == Classes){
                  loopOptions();
               }else{
                  noOptions();
               }
            }
         })
      }else if((City == "null" && State != "null") && (Classes == "null" || Classes == "All Classes")){
            $.getJSON( '/js/JSON/classes.json', function(data) {
            informaiton = data.Courses;   
            $("#title").html(State + " Classes");
            for(i = 0; i < informaiton.length; i++){
               if(informaiton[i].State == State){
                  loopOptions();
               }else{
                  noOptions();
               }
            }
         })
      }else if((City == "null" && State == "null") && (Classes != "null" || Classes == "All Classes")){
            $.getJSON( '/js/JSON/classes.json', function(data) {
            informaiton = data.Courses;   
            $("#title").html("All Classes");
            for(i = 0; i < informaiton.length; i++){
               if(informaiton[i].classes != "null"){
                  loopOptions();
               }else{
                  noOptions();
               }
            }
         })
      }
       
   }
   Proccess();
   
   function onPageSelect(){
      check = 0;
      NewText = "";
      Proccess();
   }
   
   
   $("#CitySelection").change(function(){
      City = $("#CitySelection").val();
      onPageSelect();
   });
   
   $("#StateSelection").change(function(){
      State = $("#StateSelection").val();
      onPageSelect();
   });
   
   $("#ClassSelection").change(function(){
      Classes = $("#ClassSelection").val();
      onPageSelect();
   });
   
});
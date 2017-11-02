      var StateClass = document.getElementById('State');
      var FL = ['Kissimmee', 'Lakeland', 'Orlando', 'Tampa, Port Canaveral'];
      var GA = ['Atlanta'];

$(StateClass).change(function(){             
      var value = $(this).val();
      var State = $('#State').val();
      var City = $('#City').val();
      var CityClass = 
      $('#City').children('option').each(function(){
         $(this).attr('value');
      });
      
         if(State === 'Florida'){
               $('#City').children('option').each(function(){
                  var Current = $(this).attr('value');
                  for(i = 0; i < GA.length; i++){
                     if(Current == GA[i] || Current === "hidden"){
                        $(this).attr('hidden', 'hidden');
                        break
                     }else if(Current != "hidden"){
                        $(this).removeAttr('hidden', 'hidden');
                     }
                  }
               });
            }
         else if(State === 'Georgia'){
            $('#City').children('option').each(function(){
                  var Current = $(this).attr('value');
                  for(i = 0; i < FL.length; i++){
                     if(Current == FL[i] || Current === "hidden"){
                        $(this).attr('hidden', 'hidden');
                        break
                     }else{
                        $(this).removeAttr('hidden', 'hidden');
                     }
                  }
               });
         }
   });   

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};



function LiveClass(){
   var State = $('#State').val();
   var City = $('#City').val();
   var Classes = $('#Class').val();
   var URL = "http://academyofcleaning.com/education?State=" + State + "&City=" + City + "&Classes=" + Classes;
   
   window.location.href = URL;
}
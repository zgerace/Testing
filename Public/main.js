$(document).ready(function(){
	$('.delecteUser').on('click', delecteUser);
});

function deleteUser(){
	var confirmation = confrim('Are You Sure?');

	if(confirmation){
		$.ajax({
			type: 'DELETE',
			url: '/users/delete/' + $(this).data('id');
		}).done(function(response){			
		});
		window.location.replace('/')
	}else{
		return false;
	}
}
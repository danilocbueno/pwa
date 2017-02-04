//quando o evento for disparado
$(document).on('pageload', function(){
	//evento foi disparado
	$(".dropdown-button").dropdown(); //inicia dropdown
	$('.tabs').tabs(); //inicia abas
	$('.modal').modal({
		dismissible: false,
		complete: function() { 
	      $(document).trigger('modalclose');
	    }
	});
});
/*
if ('serviceWorker' in navigator) {  
  navigator.serviceWorker.register('service-worker.js');
}

*/
jQuery(document).ready(function($) {
	jQuery (".post_aleatorios_sumario").css("display", "none");
	
	jQuery ("#post_aleatorios_contenedor").hover(
	
		function () {
		if (jQuery(".post_aleatorios_sumario").is(":hidden")) {
		jQuery(".post_aleatorios_sumario").slideDown("slow");
		}
		},
		function () {
		jQuery(".post_aleatorios_sumario").slideUp("slow");
		}
	);	
});	

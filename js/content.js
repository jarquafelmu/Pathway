$(document).ready(function() {
	//adjust_sideNav();
	define_offcanvas_datatoggle();
	set_affix_values();
});

function adjust_sideNav () {
	var sideNav = 'ul.pf-sidenav > li:has(ul.nav)';
	assign_carets(sideNav + ' > a');
	//assign_dropdown_behavior(sideNav);
}

function assign_carets(target) {
	$(target).each(function() {
		var htmlString = $(this).html();
		$(this).html("<span class='caret'></span> " + htmlString);
	});
}

function assign_dropdown_behavior(target) {
	$(target).each(function() {
		$(this).click(function() {
			$(this).toggleClass('active');
		});
	});
}

function define_offcanvas_datatoggle () {
	$('[data-toggle=offcanvas]').click(function() {
		$('.row-offcanvas').toggleClass('active');
	});
}

function set_affix_values () {
	/*$('#sub_nav').affix({
			offset: { top: $('#sub_nav').offset().top }
	});*/
	
	$('#sideNav').affix({
	offset: {
		top: 200
		, bottom: function () {
				return (this.bottom = $('footer').outerHeight(true))
			}
		}
	});
	
	/*$('#ToggleSubNav').affix({
	offset: {
		top: 100
		, bottom: function () {
				return (this.bottom = $('footer').outerHeight(true))
			}
		}
	})*/
	/*$('#sideNav').affix({
			offset: { top: $('#sideNav').offset().top }
	});​ */
	
	//$('#nav-wrapper').height($("#sub_nav").height());
}
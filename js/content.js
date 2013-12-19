$(document).ready(function() {
	set_sidebar_height();
	define_offcanvas_datatoggle();
	set_affix_values();
});

function set_sidebar_height () {
	var page = $(document).outerHeight(true);	
	var footer = $('footer').outerHeight(true);
	var header = $('header').outerHeight(true);
	var sideBarHeight = page - header - footer;
	
	$('#sidebar').height(sideBarHeight);
}

function showHeight( element, height ) {
	alert("The height for the " + element + " is " + height + "px.");
}

/*function adjust_sideNav () {
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
}*/

function define_offcanvas_datatoggle () {
	$('[data-toggle=offcanvas]').click(function() {
		$('.row-offcanvas').toggleClass('active');
	});
}

function set_affix_values () {
	if (!$('#sideNav').hasClass('NoAffix')) {
		$('#sideNav').affix({		
			offset: {
				top: 100, 
			}
		});
	}
	/*$('#ToggleSubNav').affix({
	offset: {
		top: 100
		, bottom: function () {
				return (this.bottom = $('footer').outerHeight(true))
			}
		}
	})*/
}
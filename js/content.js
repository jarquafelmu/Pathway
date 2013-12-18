$(document).ready(function() {
	//adjust_sideNav();
	/*define_offcanvas_datatoggle();*/
	set_affix_values();
	set_sidebar_height();
});

function set_sidebar_height () {
	var footer = $('footer').outerHeight(true);
	var header = $('header').outerHeight(true);
	var page = $(document).outerHeight(true);	
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
}

function define_offcanvas_datatoggle () {
	$('[data-toggle=offcanvas]').click(function() {
		$('.row-offcanvas').toggleClass('active');
	});
} */

function set_affix_values () {
	/*$('#sub_nav').affix({
			offset: { top: $('#sub_nav').offset().top }
	});*/
	var top = "Sidebar Top: " + $('#sidebar').offset().top;
	var bottom = "Footer: " + $('footer').outerHeight(true);
	var header = "header: " + $('header').outerHeight(true);
	//alert(top + "\n" + bottom + "\n" + header);
	$('#sideNav').affix({		
		offset: {
			top: 100, 
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
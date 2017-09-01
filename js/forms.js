jQuery(function() {
	jQuery('input[type=submit]').click(sendData);
});

function sendData(e) {
	e.preventDefault();
	jQuery.ajax({
		url: 'https://formspree.io/zhytenko@ukr.net',
		method: 'POST',
		data: {
			name: jQuery('#name').val(),
			mail: jQuery('#mail').val(),
			msg: jQuery('#msg').val()
		},
		dataType: 'json'
	}).done(function() {
		jQuery('form')[0].reset();
		jQuery('#thanks').show();
	});
}

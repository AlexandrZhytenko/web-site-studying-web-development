$(function () {
    $('input[type=submit]').click(sendData);
});

function sendData(e) {
    e.preventDefault();
    $.ajax({
		url: 'https://formspree.io/zhytenko@ukr.net',
		method: 'POST',
		data: {
		name: $('#name').val(),
		mail: $('#mail').val(),
		msg: $('#msg').val()
		},
		dataType: 'json'}).done(function() {
		    $('form')[0].reset();
		    $('#thanks').show();
		});
}
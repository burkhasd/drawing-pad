$(document).ready(function() {
	function createGrid(size) {
		for (var i = 0; i < size; i++) {
			var newRow = $('<div class="row"></div>');
			$('#container').append(newRow);
		}
		for (var j = 0; j < size; j++) {
			var newColumn = $('<div class="column"></div>');
			$('.row').append(newColumn);
		}
	}

	function colorChange() {
		$(document).on('mouseover', '.column', function() {
			$(this).css('background-color', '#b9def7');
		});
	}

	function colorSelect() {
		$(document).on('click', '#colorPicker', function() {
			alert($colorMenu);
		})
	}




	var originalSize = 16;
	createGrid(originalSize);


	colorChange();
	colorSelect();

});


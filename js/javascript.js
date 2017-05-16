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

	function pixelResize(gridWidth) {		//resize pixels to fit grid
		var pixelSize = (960 - gridWidth) / gridWidth;
		$('.column').css('height', pixelSize + 'px');
		$('.column').css('width', pixelSize + 'px');
		$('#container').css('width', (gridWidth * (pixelSize + 2)) + 'px');
	}

	function colorChange() {
		$(document).on('mouseover', '.column', function() {
			$(this).css('background-color', '#b9def7');
		});
	}

	function colorSelect() {
		$(document).on('mouseover', '#colorPicker', function() {
			var color = $('#colorPicker').css('background-color');
			console.log(color);
		})
	}




	var originalSize = 16;
	createGrid(originalSize);

	pixelResize(originalSize);


	colorChange();
	colorSelect();

});


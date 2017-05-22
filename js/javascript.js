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
		pixelResize(size);
	}

	function pixelResize(gridWidth) {		//resize pixels to fit grid
		var pixelSize = (960 - gridWidth) / gridWidth;
		$('.column').css('height', pixelSize + 'px');
		$('.column').css('width', pixelSize + 'px');
		$('#container').css('width', (gridWidth * (pixelSize + 2)) + 'px');
	}

	function draw() {
		$(document).on('mouseover', '.column', function() {
			$(this).css('background-color', '#b9def7');
		});
	}

	$('#sizePicker').on('click', function() {
		var newSize = prompt("Enter a side length", "16");

		if (newSize === null) {
			return;
		} else {			
		$('#container').empty();
		createGrid(newSize);
		}
	});

	$('#reset').on('click', function() {
		$('.column').css('background-color', '#f2f2f2');
	});


	var originalSize = 16;
	createGrid(originalSize);

	pixelResize(originalSize);


	draw();


});

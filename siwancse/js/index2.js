var $body = $('body');
var $progressBar = $('progress');
var $animContainer = $('.animation-container');
var value = 0;
var transitionEnd = 'webkitTransitionEnd transitionend';
var end =0;
/**
 * Resets the form back to the default state.
 * ==========================================
 */
function formReset() {
	value = 0;
	$progressBar.val(value);
    $('form input').not('button').val('').removeClass('hasInput');
    $("#A").val("A");
	$("#B").val("B");
	$("#C").val("C");
	// $('.js-form-step').removeClass('left leaving');
	// $('.js-form-step').not('.js-form-step[data-step="1"]').addClass('hidden waiting');
	// $('.js-form-step[data-step="1"]').removeClass('hidden');
	// $('.form-progress-indicator').not('.one').removeClass('active');
	
	// $animContainer.css({
	// 	'paddingBottom': $('.js-form-step[data-step="1"]').height() + 'px'
	// });
	var $currentForm = $(this).parents('.js-form-step');
		showEndForm($currentForm);
		$('.js-form-step[data-step="1"]').addClass("hidden");
	return false;
}

/**
 * Sets up the click handlers on the form. Next/reset.
 * ===================================================
 */
function setupClickHandlers() {

	// Show next form on continue click
	$('button[type="submit"]').on('click', function(event) {
			event.preventDefault();
			var $currentForm = $(this).parents('.js-form-step');
			showNextForm($currentForm);
	});

	// Reset form on reset button click
	
	$('.js-end').on('click', function() {
		document.getElementById('form-step-3').submit();
		var $currentForm = $(this).parents('.js-form-step');
		showEndForm($currentForm);
		$('.form-final').html('<strong>感謝您填復餐敘與會資料，有任何問題也歡迎與我們聯繫！<br>聯絡人：&nbsp;<a href="mailto:ss910034@gmail.com">蕭廷瑞</a>先生 0975-752165<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:lphuang@cse.nsysu.edu.tw">黃莉萍</a>小姐 0939-194128</strong><br><br><img src="Taipei.png" width="100%">');
	});
	$('.js-reset').on('click', function() {
		//formReset();
		var $currentForm = $(this).parents('.js-form-step');
		showBackForm($currentForm);
	});
	
	return false;
}
function showEndForm($currentForm) {
	var currentFormStep = parseInt($currentForm.attr('data-step')) || false;
	var $nextForm = $('.js-form-step[data-step="' + (currentFormStep + 4) + '"]');

	console.log('Current step is ' + currentFormStep);
	console.log('The next form is # ' + $nextForm.attr('data-step'));

	$body.addClass('freeze');

	// Ensure top of form is in view
	$('html, body').animate({
		scrollTop : $progressBar.offset().top
	}, 'fast');

	// Hide current form fields
	$currentForm.addClass('leaving');
	setTimeout(function() {
		$currentForm.addClass('hidden');
	}, 500);
	
	// Animate container to height of form
	$animContainer.css({
		'paddingBottom' :  '500px'
	});  

	// Show next form fields
	$nextForm.removeClass('hidden')
					 .addClass('coming')
					 .one(transitionEnd, function() {
						 $nextForm.removeClass('coming waiting');
					 });

	// Increment value (based on 4 steps 0 - 100)
	value += 99;

	// Reset if we've reached the end
	if (value >= 100) {
		formReset();
	} else {
		$('.form-progress')
			.find('.form-progress-indicator.active')
			.next('.form-progress-indicator')
			.addClass('active');
		$('.form-progress')
			.find('.form-progress-indicator.active')
			.next('.form-progress-indicator')
			.next('.form-progress-indicator')
			.addClass('active');
		$('.form-progress')
			.find('.form-progress-indicator.active')
			.next('.form-progress-indicator')
			.next('.form-progress-indicator')
			.next('.form-progress-indicator')
			.addClass('active');

		// Set progress bar to the next value
		$progressBar.val(value);
	}

	// Update hidden progress descriptor (for a11y)
	$('.js-form-progress-completion').html($progressBar.val() + '% complete');

	$body.removeClass('freeze');

	return false;
}
function showBackForm($currentForm) {
	var currentFormStep = parseInt($currentForm.attr('data-step')) || false;
	var $nextForm = $('.js-form-step[data-step="' + (currentFormStep - 1) + '"]');

	console.log('Current step is ' + currentFormStep);
	console.log('The next form is # ' + $nextForm.attr('data-step'));

	$body.addClass('freeze');

	// Ensure top of form is in view
	$('html, body').animate({
		scrollTop : $progressBar.offset().top
	}, 'fast');

	// Hide current form fields
	$currentForm.addClass('waiting');
	setTimeout(function() {
		$currentForm.addClass('hidden');
	}, 500);
	
	// Animate container to height of form
	$animContainer.css({
		'paddingBottom' : $nextForm.height() + 'px'
	});  

	// Show next form fields
	$nextForm.removeClass('hidden')
					 .addClass('coming')
					 .one(transitionEnd, function() {
						 $nextForm.removeClass('coming leaving');
					 });

	// Increment value (based on 4 steps 0 - 100)
	value -= 33;

	// Reset if we've reached the end
	if (value >= 100) {
		formReset();
	} else {
		$('.form-progress')
			.find('.form-progress-indicator.active')
			.next('.form-progress-indicator')
			.removeClass('active');

		// Set progress bar to the next value
		$progressBar.val(value);
	}

	// Update hidden progress descriptor (for a11y)
	$('.js-form-progress-completion').html($progressBar.val() + '% complete');

	$body.removeClass('freeze');

	return false;
}
/**
 * Shows the next form.
 * @param - Node - The current form.
 * ======================================
 */
function showNextForm($currentForm) {
	var currentFormStep = parseInt($currentForm.attr('data-step')) || false;
	var $nextForm = $('.js-form-step[data-step="' + (currentFormStep + 1) + '"]');

	console.log('Current step is ' + currentFormStep);
	console.log('The next form is # ' + $nextForm.attr('data-step'));

	$body.addClass('freeze');

	// Ensure top of form is in view
	$('html, body').animate({
		scrollTop : $progressBar.offset().top
	}, 'fast');

	// Hide current form fields
	$currentForm.addClass('leaving');
	setTimeout(function() {
		$currentForm.addClass('hidden');
	}, 500);
	
	// Animate container to height of form
	$animContainer.css({
		'paddingBottom' : $nextForm.height() + 'px'
	});  

	// Show next form fields
	$nextForm.removeClass('hidden')
					 .addClass('coming')
					 .one(transitionEnd, function() {
						 $nextForm.removeClass('coming waiting');
					 });

	// Increment value (based on 4 steps 0 - 100)
	value += 33;

	// Reset if we've reached the end
	if (value >= 100) {
		formReset();
	} else {
		$('.form-progress')
			.find('.form-progress-indicator.active')
			.next('.form-progress-indicator')
			.addClass('active');

		// Set progress bar to the next value
		$progressBar.val(value);
	}

	// Update hidden progress descriptor (for a11y)
	$('.js-form-progress-completion').html($progressBar.val() + '% complete');

	$body.removeClass('freeze');

	return false;
}

/**
 * Sets up and handles the float labels on the inputs.
 =====================================================
 */
function setupFloatLabels() {
	// Check the inputs to see if we should keep the label floating or not
	$('form input').not('button').on('blur', function() {

		// Different validation for different inputs
		switch (this.tagName) {
			case 'SELECT':
				if (this.value > 0) {
					this.className = 'hasInput';
				} else {
					this.className = '';
				}
				break;

			case 'INPUT':
				if (this.value !== '') {
					this.className = 'hasInput';
				} else {
					this.className = '';
				}
				break;

			default:
				break;
		}
	});
	
	return false;
}

/**
 * Gets the party started.
 * =======================
 */
function init() {
	formReset();
	setupFloatLabels();
	setupClickHandlers();
}

init();
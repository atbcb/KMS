//expanding sections container

$(document).ready (function () {

$(".trigger").on("click", function (e) {
var id = this.id;
var $content = $(this).next (".content");
//var expanded = $content.is(":visible");
var expanded = $content.hasClass ("shown");

$($content).slideToggle();

// change text indicator
$(this).find (".textIndicator")
.text (
(expanded)? " + " : " - "
); // close text indicator

// change class/status of content
if (expanded) {
$content.removeClass ("shown");
$content.addClass ("hidden");

} else {
$content.removeClass ("hidden");
$content.addClass ("shown");
} // if


}); // click .trigger



}); // close expanding sections container







$("#btn10").click(function() {
  alert( "Handler for .click() called." );
});


//Checkboxes show or hide classes in one function

$(function () {
    $(".checkboxFilter").change(function () {
		var x = $(this).attr("id");
        if ($(this).is(":checked")) {
			$("." + x).show();
            } else {
			$("." + x).hide();
			};
    });
});

//Checkboxes show or hide Subheadings

$(function () {
    $(".subHeadingsFilter").click(function () {
            if ($(this).is(":checked")) {
                $("h3, h4, h5, h6").show();
            } else {
                $("h3, h4, h5, h6").hide();
            }
        });
    });

//Select All sub checkboxes
$(function () {
	$("#allStandards").click(function () {
		if(this.checked) {
			// Iterate each checkbox
			$('.subCheck').each(function() {
				var x = $(this).attr("id");
				this.checked = true;
				$("h3, h4, h5, h6").show();
        		$("." + x).show();				
			});
			
		} else {
			$('.subCheck').each(function() {				
				var x = $(this).attr("id");
				this.checked = false;
				$("h3, h4, h5, h6").hide();
				$("." + x).hide();
			});
		}
	});
});

  

//Load functions


//load KMS function


function loadABAKMS()
{
  var x = document.getElementById("mainContent").querySelectorAll("h2, h3, h4, h5, h6");
  var i;
  for (i = 0; i < x.length; i++) {
    var idtag = x[i].getAttribute("id");
    // console.log(idtag);
	
	prefix = "aba-";
	secnum = idtag.replace(prefix,'');
	// console.log(secnum);

	var a = {
		"id": "kms-"+secnum,
		"class": "kms"
	};
  
	var kmsbox = $("<div>", a);
	//kmsbox.html("<p style=\"color:green\">KMS LOCATION for " + secnum + "</p>");

	var n = $("#"+idtag).nextAll("h1, h2, h3, h4, h5, h6").first()[0];
	//console.log(n);
	$(kmsbox).insertBefore( n ); 
   	};
	console.log("KMS sections boxes loaded!");
  
  
	var e = document.getElementById("mainContent").querySelectorAll(".exceptions");
	for (i = 0; i < e.length; i++) {
		var idtag = e[i].getAttribute("id");
		//console.log(idtag);
		
		if (idtag) {
			prefix = "aba-";
			secnum = idtag.replace(prefix,'');
			//console.log(secnum);

			var a = {
				"id": "kms-"+secnum,
				"class": "kms"
			};
		  
			var kmsbox = $("<div>", a);
			//kmsbox.html("<p style=\"color:green\">KMS LOCATION for Exception " + idtag + "</p>");

			var n = $("#"+idtag).after(kmsbox);
			//console.log(n);
		};
	};
	console.log("KMS exceptions boxes loaded!");
	
	// section 103
	
	
};




//load guides v2 function
function loadGuide()
{
	var y;
	for (y in kmsABA.guide) {
		//console.log(kmsABA.guide[y].id);

		var j;
		for (j in kmsABA.guide[y].section) {
			//check for KMS div box, alert if missing
			var kmsNum = "kms-" + kmsABA.guide[y].section[j];
			//console.log(kmsNum);
			if (document.getElementById(kmsNum) == null) {
				//alert("Error loading. Section " + kmsNum + " not found."); 
				console.log("Error loading. Section " + kmsNum + " not found.");
			}

			//check for guide box within KMS, create guide box with title if missing
			var secnum = "guide-" + kmsABA.guide[y].section[j];
			
			

			//if no guide box in kms box, create and give title
			if (document.getElementById(secnum) == null) {
				jQuery('<div/>', {
				"id": secnum,
				"class": "guide" //this class name used by checkbox filters
				}).appendTo('#' + kmsNum);

				jQuery('<p/>', {
				"class": "kmsBoxTitle", //this class name used by checkbox filters
				"text": "Guides"
				}).appendTo('#' + secnum);		
			}; // close if no guide box
			
				
			var guideID = kmsABA.guide[y].id;
			var content = kmsABA.guide[y].content;
			
			var entry = jQuery('<div/>', {"id": "guide-" + guideID, "class": "entry"});
			
			var contentText = jQuery('<p/>', {"html": content});
			
			contentText.appendTo(entry);

			// Add source link to guide content
			var source =  kmsABA.guide[y].guideSource;
			if (source) {
				var contentLink = jQuery('<a/>', {"href": source, "text": "Source", "class": "sourceLink"});
				var contentSource = jQuery('<p/>', {"html": contentLink, "class": "source"});
			};

			if (contentSource) {
				contentSource.appendTo(entry);
			};
			// End add source

			if (kmsABA.guide[y].imageFile) {
				for (i in kmsABA.guide[y].imageFile) {
					var img = kmsABA.guide[y].imageFile[i];
					var imgFolder = "images/KMS/ADA-ABA/";
					var alt = "";
					var imgSrc = imgFolder + img;
					
					if (kmsABA.guide[y].imageAlt) {
					  var alt = kmsABA.guide[y].imageAlt[i];						
					}	else {					
						//alert("Error loading Alt tag for " + kmsABA.guide[y].id + " " + img + " in " + secnum);
						console.log("Error loading Alt tag. KMS ID# " + kmsABA.guide[y].id);
						};
					
					var imgLink = jQuery('<a/>', {
						"href": imgSrc,
						"target": "_blank"
						});
					
					var contentImg = jQuery('<img/>', {
						"src": imgSrc,
						"alt": alt
						});
						
					contentImg.appendTo(imgLink);		
					imgLink.appendTo(entry);				
				};
			}; 

			entry.appendTo('#' + secnum);
		} // close j iter
	} // close y iter
	console.log("All guides successfully loaded!");
};
  
   
   


//load faqs function
function loadFAQ()
{
	var y;
	for (y in kmsABA.FAQ) {
		//console.log(kmsABA.FAQ[y].id);

		var j;
		for (j in kmsABA.FAQ[y].section) {
			//check for KMS div box, alert if missing
			var kmsNum = "kms-" + kmsABA.FAQ[y].section[j];
			//console.log(kmsNum);
			if (document.getElementById(kmsNum) == null) {
				//alert("Error loading. Section " + kmsNum + " not found."); 
				console.log("Error loading. Section " + kmsNum + " not found.");
			}

			//check for FAQ box within KMS, create FAQ box with title if missing
			var secnum = "faq-" + kmsABA.FAQ[y].section[j];
			
			

			//if no FAQ box in kms box, create and give title
			if (document.getElementById(secnum) == null) {
				jQuery('<div/>', {
				"id": secnum,
				"class": "faq" //this class name used by checkbox filters
				}).appendTo('#' + kmsNum);

				jQuery('<p/>', {
				"class": "kmsBoxTitle", //this class name used by checkbox filters
				"text": "FAQs"
				}).appendTo('#' + secnum);		
			}; // close if no faq box
			
				
			var faqID = kmsABA.FAQ[y].id;
			var contentQ = kmsABA.FAQ[y].question;
			var contentA = kmsABA.FAQ[y].answer;	
			
			var entry = jQuery('<div/>', {"id": faqID, "class": "entry", "aria-live": "polite"});
			
			var question = jQuery('<button/>', {"id": "faqQ-" + faqID, "class": "faqQ trigger usa-accordion__button button-padding-0", "style": "background-color: inherit"});
			
			var questionText = jQuery('<p/>', {"html": contentQ});

			var indicator = jQuery('<span/>', {"class": "textIndicator right", "text": " + "});
			
			indicator.appendTo(questionText);
			questionText.appendTo(question);
			question.appendTo(entry);
			
			var answer = jQuery('<div/>', {"id": "faqA-" + faqID, "class": "faqA content"});
			
			var answerText = jQuery('<p/>', {"html": contentA});
			
			answerText.appendTo(answer);

			// Add source link to FAQ content
			var source =  kmsABA.FAQ[y].guideSource;
			if (source) {
				var contentLink = jQuery('<a/>', {"href": source, "text": "Source", "class": "sourceLink"});
				var contentSource = jQuery('<p/>', {"html": contentLink, "class": "source"});
			};

			if (contentSource) {
				contentSource.appendTo(answer);
			};
			// End add source
			
			if (kmsABA.FAQ[y].imageFile) {
				for (i in kmsABA.FAQ[y].imageFile) {
					var img = kmsABA.FAQ[y].imageFile[i];
					var imgFolder = "images/KMS/ADA-ABA/";
					var alt = "";
					var imgSrc = imgFolder + img;
					
					
					if (kmsABA.FAQ[y].imageAlt) {
					  var alt = kmsABA.FAQ[y].imageAlt[i];						
					}	else {
						//alert("Error loading Alt tag for " + kmsABA.FAQ[y].id + " " + img + " in " + secnum);
						console.log("Error loading Alt tag. KMS ID# " + kmsABA.FAQ[y].id);
						};
					
					
					var imgLink = jQuery('<a/>', {
						"href": imgSrc,
						"target": "_blank"
						});
					
					var answerImg = jQuery('<img/>', {
						"src": imgSrc,
						"alt": alt
						});
						
					answerImg.appendTo(imgLink);		
					imgLink.appendTo(answer);
								
				};
			}; 
			
			answer.appendTo(entry);
			entry.appendTo('#' + secnum);
		} // close j iter
	} // close y iter
	console.log("All FAQs successfully loaded!");
}; //close loadFAQ


//load clarifications function
function loadClarification()
{
	var y;
	for (y in kmsABA.clarification) {
		//console.log(kmsABA.clarification[y].id);

		var j;
		for (j in kmsABA.clarification[y].section) {
			//check for KMS div box, alert if missing
			var kmsNum = "kms-" + kmsABA.clarification[y].section[j];
			//console.log(kmsNum);
			if (document.getElementById(kmsNum) == null) {
				//alert("Error loading. Section " + kmsNum + " not found."); 
				console.log("Error loading. Section " + kmsNum + " not found.");
			}

			//check for clarification box within KMS, create clarification box with title if missing
			var secnum = "clarification-" + kmsABA.clarification[y].section[j];
			
			

			//if no clarification box in kms box, create and give title
			if (document.getElementById(secnum) == null) {
				jQuery('<div/>', {
				"id": secnum,
				"class": "clarification" //this class name used by checkbox filters
				}).appendTo('#' + kmsNum);

				jQuery('<p/>', {
				"class": "kmsBoxTitle", //this class name used by checkbox filters
				"text": "Clarifications"
				}).appendTo('#' + secnum);		
			}; // close if no clarification box
			
				
			var clarificationID = kmsABA.clarification[y].id;
			
			var entry = jQuery('<div/>', {"id": "clarification-" + clarificationID, "class": "entry"});
			
			if (kmsABA.clarification[y].content) {
				var content = kmsABA.clarification[y].content;
						
				var contentText = jQuery('<p/>', {"html": content});
					
				contentText.appendTo(entry);
					
				if (kmsABA.clarification[y].imageFile) {
					for (i in kmsABA.clarification[y].imageFile) {
						var img = kmsABA.clarification[y].imageFile[i];
						var imgFolder = "images/KMS/ADA-ABA/";
						var alt = "";
						
						if (kmsABA.clarification[y].imageAlt) {
						  var alt = kmsABA.clarification[y].imageAlt[i];						
						}	else {					
							//alert("Error loading Alt tag for " + kmsABA.clarification[y].id + " " + img + " in " + secnum);
							console.log("Error loading Alt tag for File: " + img + " in " + secnum);
							};
						
						var contentImg = jQuery('<img/>', {"src": imgFolder + img, "alt": alt});
						contentImg.appendTo(entry);				
					};
				}; 
			};
			
			
			if (kmsABA.clarification[y].question) {
				var contentQ = kmsABA.clarification[y].question;
				var contentA = kmsABA.clarification[y].answer;	
				
				var entry = jQuery('<div/>', {"id": clarificationID, "class": "entry", "aria-live": "polite"});
				
				var question = jQuery('<button/>', {"id": "Q-" + clarificationID, "class": "trigger usa-accordion__button button-padding-0", "style": "background-color: inherit"});
				
				var questionText = jQuery('<p/>', {"html": contentQ});

				var indicator = jQuery('<span/>', {"class": "textIndicator right", "text": " + "});
				
				indicator.appendTo(questionText);
				questionText.appendTo(question);
				question.appendTo(entry);
				
				var answer = jQuery('<div/>', {"id": "A-" + clarificationID, "class": "faqA content"});
				
				var answerText = jQuery('<p/>', {"html": contentA});
				
				answerText.appendTo(answer);
				
					if (kmsABA.clarification[y].imageFile) {
						for (i in kmsABA.clarification[y].imageFile) {
							var img = kmsABA.clarification[y].imageFile[i];
							var imgFolder = "images/KMS/ADA-ABA/";
							var alt = "";
							
							if (kmsABA.clarification[y].imageAlt) {
							  var alt = kmsABA.clarification[y].imageAlt[i];						
							}	else {					
								//alert("Error loading Alt tag for " + kmsABA.clarification[y].id + " " + img + " in " + secnum);
								console.log("Error loading Alt tag for File: " + img + " in " + secnum);
								};
							
							var contentImg = jQuery('<img/>', {"src": imgFolder + img, "alt": alt});
							contentImg.appendTo(answer);				
						};
					}; 
					
				answer.appendTo(entry);
			};
			
			entry.appendTo('#' + secnum);
		} // close j iter
	} // close y iter
	console.log("All clarifications successfully loaded!");
}; // close loadClarification



  



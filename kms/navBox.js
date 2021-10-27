//load navBox function
function loadNavBox()
{
	var y;
	for (y in navBox) {
		//console.log(navBox[y].id);
		if (navBox[y].scoping[0]) {
		var navBoxID = "navBox-" + navBox[y].id;
		//console.log(secnum);
		
		var entry = jQuery('<div/>', {
				"id": navBoxID,
				"class": "navBox" //this class name used by checkbox filters
				});
				
		var title = jQuery('<p/>', {
				"class": "navBoxTitle", //
				"text": "Scoping Sections:"
				});

		title.appendTo(entry);

			
		var aList = jQuery('<ul/>', {"class": "navBoxList"});
	
		for (i in navBox[y].scoping) {
				//create List item
				var aListItem = jQuery('<li/>');
				
				var s = navBox[y].scoping[i];
				var ref = "#ada-" + s;
				var section = s.replace(/_/g,".");
				
				//create link
				var aLink = jQuery('<a/>', {
					"href": ref,
					"html": section
				});
				//console.log(aLink);
				aLink.appendTo(aListItem);				
				//console.log(aListItem);
				
				
				//create label
				if (navBox[y].scopingLabel) {
					var label = navBox[y].scopingLabel[i];
					//console.log(label);
					var aLabel = jQuery('<span/>', {
					"html": " " + label + " "
					});
					
					aLabel.appendTo(aListItem);
				};	
				//console.log(aListItem);
				
				aListItem.appendTo(aList);
			};
			aList.appendTo(entry);
			
			var idtag = "ada-"+navBox[y].section;
			var n = $("#"+idtag).nextAll("h1, h2, h3, h4, h5, h6, p, div").first()[0];
			//console.log(n);
		
			$(entry).insertBefore( n ); 
			}; // close if iter
			}; // close y iter
	console.log("All Nav Boxes successfully loaded!");
};// load navBox





//load Mapping function
function loadMapBox()
{
	var y;
	for (y in navBox) {
		//console.log(navBox[y].id);

		if (navBox[y].ref[0]) {

		var navBoxID = "mapping-" + navBox[y].id;
		//console.log(secnum);
		
		var entry = jQuery('<div/>', {
				"id": navBoxID,
				"class": "mapBox", //this class name used by checkbox filters
				//"text": "Mapping:"
				});
				
		var title = jQuery('<button/>', {
				"class": "navBoxTitle trigger usa-accordion__button button-padding-0",
				"style": "background-color: inherit",
				"text": "Mapping:"
				});
		
		var indicator = jQuery('<span/>', {
				"class": "textIndicator right",
				"text": " + "
				});

		indicator.appendTo(title);
		title.appendTo(entry);

		var map = jQuery('<div/>', {"id": "map-" + navBoxID, "class": "map content hidden"});
			
					
		var aList = jQuery('<ul/>', {"class": "navBoxList"});
	
		for (i in navBox[y].ref) {
				//create List item
				var aListItem = jQuery('<li/>');
				
				var s = navBox[y].ref[i];
				var ref = "#ada-" + s;
				var section = s.replace(/_/g,".");
				
				//create link
				var aLink = jQuery('<a/>', {
					"href": ref,
					"html": section
				});
				//console.log(aLink);
				aLink.appendTo(aListItem);				
				//console.log(aListItem);
				
				
				//create label
				if (navBox[y].label) {
					var label = navBox[y].label[i];
					//console.log(label);
					var aLabel = jQuery('<span/>', {
					"html": " (" + label + ")"
					});
					
					aLabel.appendTo(aListItem);
				};	
				//console.log(aListItem);
				
				aListItem.appendTo(aList);
			};
			aList.appendTo(map);
			map.appendTo(entry);
			
			var idtag = "ada-"+navBox[y].section;
			var n = $("#"+idtag).nextAll("h1, h2, h3, h4, h5, h6, p, div").first()[0];
			//console.log(n);
		
			$(entry).insertBefore( n ); 

			}; // close if mapping reference not null
			}; // close y iter
	console.log("All Mapping Boxes successfully loaded!");
};// load navBox




var navBox= 

[
 {
   "id": "001",
   "law": "ADA",
   "section": "102",
   "scoping": [],
   "scopingLabel": [],
   "ref": [
      "308_1",
      "505_4",
      "602_2",
      "604_1",
      "604_8_1_1",
      "604_8_1_4",
      "604_9",
      "606_2x4",
      "606_2x5",
      "609_4",
      "902_1",
      "902_4"
   ],
   "label": [
      "Table of reach ranges for children (in advisory)",
      "Recommendations for height of handrails for children (in advisory)",
      "Exception for clear floor space for drinking fountains for children",
      "Water closets and toilet compartments may comply with requirements for children (exception)",
      "Requirements for size of accessible toilet compartments for children ",
      "Requirements for toe clearance in accessible toilet compartments for children ",
      "Water closets and toilet compartments for children",
      "Exception for knee clearance at a sink for children",
      "Permitted parallel approach to sink used by children ",
      "Height of grab bars for children ",
      "Dining and work surfaces may comply with children's requirements (exception)",
      "Dining and work surfaces for children"
   ]
},
 {
   "id": "002",
   "law": "ADA",
   "section": "304",
   "scoping": [],
   "scopingLabel": [],
   "ref": [
      "603_2_1",
      "612_3",
      "803_2",
      "805_2",
      "806_2_6",
      "807_2_1",
      "808_2",
      "809_2_2",
      "1002_3",
      "1005_5",
      "1008_4_1",
      "1010_1"
   ],
   "label": [
      "Required in toilet and bathing rooms",
      "Required in saunas and steam rooms",
      "Required in dressing, fitting, and locker rooms",
      "Required in rooms in medical and long-term care facilities",
      "Required in guest rooms with mobility features",
      "Required in holding and housing cells",
      "Required in courtrooms, areas accessed by ramps or lifts",
      "Required in all rooms on accessible route in residential dwelling units",
      "Requirements for load and unload areas for amusement rides",
      "Requirement for fishing piers and platforms",
      "Requirement in play areas",
      "Required in shooting facilities with firing positions"
   ]
},
 {
   "id": "003",
   "law": "ADA",
   "section": "307",
   "scoping": [
      "204"
   ],
   "scopingLabel": [
      "Protruding Objects"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "004",
   "law": "ADA",
   "section": "309",
   "scoping": [
      "205"
   ],
   "scopingLabel": [
      "Operable Parts"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "005",
   "law": "ADA",
   "section": "404",
   "scoping": [
      "206_4",
      "206_5"
   ],
   "scopingLabel": [
      "Accessible Entrances",
      "Accessible Doors and Gates"
   ],
   "ref": [
      "216_6",
      "224_1_2"
   ],
   "label": [
      "Signage for Entrances",
      "Transient Lodging"
   ]
},
 {
   "id": "006",
   "law": "ADA",
   "section": "407",
   "scoping": [
      "206_6"
   ],
   "scopingLabel": [
      "Elevators"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "007",
   "law": "ADA",
   "section": "408",
   "scoping": [
      "206_6"
   ],
   "scopingLabel": [
      "Elevators"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "008",
   "law": "ADA",
   "section": "409",
   "scoping": [
      "206_6"
   ],
   "scopingLabel": [
      "Elevators"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "009",
   "law": "ADA",
   "section": "410",
   "scoping": [
      "206_7"
   ],
   "scopingLabel": [
      "Platform Lifts"
   ],
   "ref": [
      "207_2"
   ],
   "label": [
      "Means of Egress"
   ]
},
 {
   "id": "010",
   "law": "ADA",
   "section": "502",
   "scoping": [
      "208"
   ],
   "scopingLabel": [
      "Parking Spaces"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "011",
   "law": "ADA",
   "section": "502_6",
   "scoping": [
      "216_5"
   ],
   "scopingLabel": [
      "Signage"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "012",
   "law": "ADA",
   "section": "503",
   "scoping": [
      "209"
   ],
   "scopingLabel": [
      "Passenger Loading Zones"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "013",
   "law": "ADA",
   "section": "504",
   "scoping": [
      "210"
   ],
   "scopingLabel": [
      "Stairs"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "014",
   "law": "ADA",
   "section": "505",
   "scoping": [
      "210",
	  "403_6",
      "405_8",
      "504_6"
   ],
   "scopingLabel": [
      "Stairs",
	  "Walking Surfaces",
      "Ramps",
      "Stairs"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "015",
   "law": "ADA",
   "section": "602",
   "scoping": [
      "211"
   ],
   "scopingLabel": [
      "Drinking Fountains"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "016",
   "law": "ADA",
   "section": "603",
   "scoping": [
      "213"
   ],
   "scopingLabel": [
      "Toilet Rooms and Bathing Rooms"
   ],
   "ref": [
      "216_8"
   ],
   "label": [
      "Signage"
   ]
},
 {
   "id": "017",
   "law": "ADA",
   "section": "604",
   "scoping": [
      "213_3_1",
      "213_3_2",
      "213_3_7"
   ],
   "scopingLabel": [
      "Toilet Compartments",
      "Water Closets",
      "Coat Hooks and Shelves"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "018",
   "law": "ADA",
   "section": "605",
   "scoping": [
      "213_3_3"
   ],
   "scopingLabel": [
      "Urinals"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "019",
   "law": "ADA",
   "section": "606",
   "scoping": [
      "212_3",
      "213_3_4"
   ],
   "scopingLabel": [
      "Sinks (not in toilet and bathing facilities)",
      "Lavatories"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "020",
   "law": "ADA",
   "section": "607",
   "scoping": [
      "213_3_6"
   ],
   "scopingLabel": [
      "Bathing Facilities"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "021",
   "law": "ADA",
   "section": "608",
   "scoping": [
      "213_3_6"
   ],
   "scopingLabel": [
      "Bathing Facilities"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "022",
   "law": "ADA",
   "section": "609",
   "scoping": [],
   "scopingLabel": [],
   "ref": [
      "604_5",
      "604_8_1_5",
      "604_8_2_3",
      "607_4",
      "608_3",
      "1009_4_5"
   ],
   "label": [
      "For water closets",
      "For wheelchair-accessible toilet compartments",
      "For ambulatory toilet compartments",
      "For bathtubs",
      "For showers",
      "For transfer walls in swimming pools"
   ]
},
 {
   "id": "023",
   "law": "ADA",
   "section": "611",
   "scoping": [
      "214"
   ],
   "scopingLabel": [
      "Washing Machines and Clothes Dryers"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "024",
   "law": "ADA",
   "section": "612",
   "scoping": [
      "241"
   ],
   "scopingLabel": [
      "Saunas and Steam Rooms"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "025",
   "law": "ADA",
   "section": "702",
   "scoping": [
      "215"
   ],
   "scopingLabel": [
      "Fire Alarm Systems"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "026",
   "law": "ADA",
   "section": "703",
   "scoping": [
      "216"
   ],
   "scopingLabel": [
      "Signs"
   ],
   "ref": [
      "810_4",
      "810_6"
   ],
   "label": [
      "Bus Signs",
      "Rail Station Signs"
   ]
},
 {
   "id": "027",
   "law": "ADA",
   "section": "704",
   "scoping": [
      "217"
   ],
   "scopingLabel": [
      "Telephones"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "028",
   "law": "ADA",
   "section": "704_4",
   "scoping": [
      "217_4"
   ],
   "scopingLabel": [
      "TTYs"
   ],
   "ref": [
      "216_9"
   ],
   "label": [
      "Signage for TTYs"
   ]
},
 {
   "id": "029",
   "law": "ADA",
   "section": "705",
   "scoping": [
      "406_8",
      "810_5_2"
   ],
   "scopingLabel": [
      "DOT requirements for curb ramps",
      "DOT requirements for platform boarding edges"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "030",
   "law": "ADA",
   "section": "706",
   "scoping": [
      "219"
   ],
   "scopingLabel": [
      "Assistive Listening Systems"
   ],
   "ref": [
      "216_10"
   ],
   "label": [
      "Signage"
   ]
},
 {
   "id": "031",
   "law": "ADA",
   "section": "707",
   "scoping": [
      "220"
   ],
   "scopingLabel": [
      "Automatic Teller Machines and Fare Machines"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "032",
   "law": "ADA",
   "section": "708",
   "scoping": [
      "230"
   ],
   "scopingLabel": [
      "Two-Way Communication Systems"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "033",
   "law": "ADA",
   "section": "802",
   "scoping": [
      "221"
   ],
   "scopingLabel": [
      "Assembly Areas"
   ],
   "ref": [
      "206_2_4x2",
      "206_2_6",
      "206_2_7",
      "210_1x3",
      "216_1x1",
      "405_1",
      "505_2",
      "505_3",
      "505_10x2"
   ],
   "label": [
      "Accessible route not required to fixed seating without required wheelchair spaces",
      "Where circulation path connects performance area and seating area, accessible route required",
      "Press boxes in assembly areas must be on an accessible route",
      "Assembly area aisle stairs ",
      "Signs for seat and row designations in assembly areas not required to comply",
      "Exception for aisle ramps in assembly areas",
      "Exception for handrails on aisle ramps in assembly areas",
      "Exception for continuity of handrails on aisle ramps in assembly areas",
      "Exception for handrail extensions on ramps in assembly areas"
   ]
},
 {
   "id": "034",
   "law": "ADA",
   "section": "803",
   "scoping": [
      "222",
      "225_2_1"
   ],
   "scopingLabel": [
      "Dressing, Fitting, and Locker Rooms",
      "Lockers"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "035",
   "law": "ADA",
   "section": "804",
   "scoping": [
      "212"
   ],
   "scopingLabel": [
      "Kitchens, Kitchenettes, and Sinks"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "036",
   "law": "ADA",
   "section": "805",
   "scoping": [
      "223"
   ],
   "scopingLabel": [
      "Medical Care and Long-Term Care Facilities"
   ],
   "ref": [
      "208_2_1",
      "208_2_2",
      "209_3",
      "217_4_6"
   ],
   "label": [
      "Parking for Hospital Outpatient Facilities",
      "Parking for Rehabilitation and Physical Therapy Outpatient Facilities",
      "Passenger Loading Zones",
      "TTYs"
   ]
},
 {
   "id": "037",
   "law": "ADA",
   "section": "806",
   "scoping": [
      "224"
   ],
   "scopingLabel": [
      "Transient Lodging"
   ],
   "ref": [
      "206_2_3x5",
      "206_5_3",
      "206_7_6",
      "215_4",
      "229_1x2",
      "608_4 "
   ],
   "label": [
      "Multi-story Guest Rooms",
      "Entrances and doors for guest rooms not required to provide mobility features",
      "Platform Lifts  ",
      "Fire Alarm Systems",
      "Windows in guest rooms without mobility features",
      "Folding seat in roll-in showers"
   ]
},
 {
   "id": "038",
   "law": "ADA",
   "section": "807",
   "scoping": [
      "232",
      "231_3"
   ],
   "scopingLabel": [
      "Detention and Correctional Facilities",
      "Holding Cells in Judicial Facilities"
   ],
   "ref": [
      "203_7",
      "206_2_3x3",
      "206_4_9",
      "207_1x2",
      "210_1x1",
      "216_1x4",
      "217_4_8",
      "217_5x1"
   ],
   "label": [
      "Common Use Areas exception",
      "Multi-Story Facilities exceptions",
      "Entrances for Inmates or Detainees",
      "Areas of Refuge",
      "Stairs",
      "Exception for signs not in public use areas",
      "TTYs",
      "Exception for TTY Shelves"
   ]
},
 {
   "id": "039",
   "law": "ADA",
   "section": "808",
   "scoping": [
      "231"
   ],
   "scopingLabel": [
      "Judicial Facilities"
   ],
   "ref": [
      "206_2_4x1",
      "206_7_4"
   ],
   "label": [
      "Vertical access to raised courtroom stations",
      "Platform Lifts"
   ]
},
 {
   "id": "040",
   "law": "ADA",
   "section": "809",
   "scoping": [
      "233"
   ],
   "scopingLabel": [
      "Residential Dwelling Units"
   ],
   "ref": [
      "203_8",
      "206_2_3x4",
      "206_4_6",
      "206_5_4",
      "206_6x2",
      "206_7_6",
      "208_2_3",
      "208_3_2",
      "215_5",
      "216_5x2",
      "228_2",
      "229_1x1"
   ],
   "label": [
      "Common Use Areas exception",
      "Multi-Story Facilities exceptions",
      "Entrances",
      "Doors",
      "Elevators",
      "Platform Lifts",
      "Scoping for Parking Spaces",
      "Location of Parking Spaces",
      "Fire Alarm Systems",
      "Parking Space signage exception",
      "Mailboxes ",
      "Windows"
   ]
},
 {
   "id": "041",
   "law": "ADA",
   "section": "810",
   "scoping": [
      "218",
      "209_2_2",
      "209_2_3"
   ],
   "scopingLabel": [
      "Transportation Facilities",
      "Bus Loading Zones",
      "On-Street Bus Stops"
   ],
   "ref": [
      "206_4_4",
      "217_4_7"
   ],
   "label": [
      "Entrances",
      "TTYs"
   ]
},
 {
   "id": "042",
   "law": "ADA",
   "section": "811",
   "scoping": [
      "225",
      "804_5"
   ],
   "scopingLabel": [
      "Storage",
      "Kitchen Storage Shelves"
   ],
   "ref": [
      "220_1"
   ],
   "label": [
      "Bins provided at Automatic Teller and Fare Machines"
   ]
},
 {
   "id": "043",
   "law": "ADA",
   "section": "902",
   "scoping": [
      "226"
   ],
   "scopingLabel": [
      "Dining and Work Surfaces"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "044",
   "law": "ADA",
   "section": "903",
   "scoping": [
      "612_2",
      "803_4",
      "807_2_2"
   ],
   "scopingLabel": [
      "Saunas and Steam Rooms",
      "Dressing, Fitting, and Locker Rooms",
      "Holding Cells and Housing Cells"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "045",
   "law": "ADA",
   "section": "904",
   "scoping": [
      "227"
   ],
   "scopingLabel": [
      "sales and service"
   ],
   "ref": [
      "216_11"
   ],
   "label": [
      "Signage for Check-Out Aisles"
   ]
},
 {
   "id": "046",
   "law": "ADA",
   "section": "1001",
   "scoping": [],
   "scopingLabel": [],
   "ref": [
      "204_1x1",
      "206_2_2",
      "206_7_9",
      "221_2_1_4",
      "221_2_3",
      "221_4",
      "302",
      "303_1x2"
   ],
   "label": [
      "Area of sport activity - protruding objects",
      "Area of sport activity – within a site",
      "Area of sport activity – platform lifts to team or player seating",
      "Team or player seating",
      "Team or player seating – lines of sight dispersion",
      "Team or player seating – designated aisle seats",
      "Area of sport activity – floor or ground surface",
      "Area of sport activity – changes in level"
   ]
},
 {
   "id": "047",
   "law": "ADA",
   "section": "1002",
   "scoping": [
      "234"
   ],
   "scopingLabel": [
      "Amusement Rides"
   ],
   "ref": [
      "206_2_9",
      "206_7_7",
      "216_12"
   ],
   "label": [
      "Accessible Routes",
      "Platform Lifts  ",
      "Signs"
   ]
},
 {
   "id": "048",
   "law": "ADA",
   "section": "1003",
   "scoping": [
      "235"
   ],
   "scopingLabel": [
      "Recreational Boating Facilities"
   ],
   "ref": [
      "206_2_10",
      "206_7_10"
   ],
   "label": [
      "Accessible Routes",
      "Platform Lifts  "
   ]
},
 {
   "id": "049",
   "law": "ADA",
   "section": "1004",
   "scoping": [
      "236"
   ],
   "scopingLabel": [
      "Exercise Machines and Equipment"
   ],
   "ref": [],
   "label": []
},
 {
   "id": "050",
   "law": "ADA",
   "section": "1005",
   "scoping": [
      "237"
   ],
   "scopingLabel": [
      "Fishing Piers and Platforms"
   ],
   "ref": [
      "206_2_14"
   ],
   "label": [
      "Accessible Routes"
   ]
},
 {
   "id": "051",
   "law": "ADA",
   "section": "1006",
   "scoping": [
      "238"
   ],
   "scopingLabel": [
      "Golf Facilities"
   ],
   "ref": [
      "206_2_15"
   ],
   "label": [
      "Accessible Routes"
   ]
},
 {
   "id": "052",
   "section": "1007",
   "scoping": [
      "239"
   ],
   "scopingLabel": [
      "Miniature Golf Facilities"
   ],
   "ref": [
      "206_2_16"
   ],
   "label": [
      "Accessible Routes"
   ]
},
 {
   "id": "053",
   "law": "ADA",
   "section": "1008",
   "scoping": [
      "240"
   ],
   "scopingLabel": [
      "Play Areas"
   ],
   "ref": [
      "204_1x2",
      "206_2_17",
      "206_7_8",
      "210_1x4"
   ],
   "label": [
      "Protruding Objects",
      "Accessible Routes",
      "Platform Lifts",
      "Stairs"
   ]
},
 {
   "id": "054",
   "law": "ADA",
   "section": "1009",
   "scoping": [
      "242"
   ],
   "scopingLabel": [
      "Swimming Pools, Wading Pools, and Spas"
   ],
   "ref": [
      "203_14"
   ],
   "label": [
      "Exception for Raised Diving Boards and Diving Platforms"
   ]
},
 {
   "id": "055",
   "law": "ADA",
   "section": "1010",
   "scoping": [
      "243"
   ],
   "scopingLabel": [
      "Shooting Facilities"
   ],
   "ref": [],
   "label": []
}
]
var bio = {
	"name" : "Nitya Jha",
	"role" : "Web Developer",
	"contacts":{
		"mobile": "+91-9670207555",
		"email": "nityajha2312@gmail.com",
		"github": "nityajha",
		"twitter": "@nityajha",
		"location": "Varanasi"
	},
	"skills" : ["awesomeness", " programming", " time management", " team work"],
	"welcomeMessage" : "Hello! I'm interested to develop my skills as a Web Developer.",
	"bioPic": "images/fry.jpg"
	};

function displayBio(){
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(bio.welcomeMessage);
	$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
	$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#header").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	if(bio.skills.length>0){
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
}
displayBio();

$("#mapDiv").append(googleMap);

var education = {
	"schools":[ {
		"name":"Pranveer Singh Institute of Technology",
		"location":"Kanpur",
		"degree":"Bachelor of Technology",
		"majors":"Electronics and Communication Engineering",
		"dates":"22-8-2013 to 29-5-2017" } ],
	"onlineCourses":[ {
		"title":"Front End Web Development Nanodegree Course",
		"school": "Udacity",
		"dates":"In progress" } ]
	}

function displayEducation(){
	for(var i=0; i<education.schools.length; i++){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
		$(".education-entry").append(formattedName);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry").append(formattedLocation);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$(".education-entry").append(formattedDegree);
		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
		$(".education-entry").append(formattedMajors);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$(".education-entry").append(formattedDates); }
	for(var j=0; j<education.onlineCourses.length; j++){
		$("#education").append(HTMLonlineClasses);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
		$(".education-entry").append(formattedTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
		$(".education-entry").append(formattedOnlineSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
		$(".education-entry").append(formattedDates);
		}
}
displayEducation();


var work = {
	"jobs":[ {
		"employer":"Self-employed",
		"title":"Myself",
		"location":"Varanasi",
		"dates":"In progress",
		"description":"No need"} ]
	}
function displayWork(){
	for(var i=0; i<work.jobs.length; i++){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);		
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();

var projects = {
	"projects":[ { 
		"title":"Glove Mouse",
		"dates":"22-10-2016 to 29-5-2017",
		"description":"In this project, an attempt is made to translate very normal hand gestures into the motion of the mouse pointer. The mouse will be a hand mounted device that maps the movement of the hand of the user onto the mouse pointer of the computer, having all the standard functionalities as that of a computer mouse, i.e., left click and right click.",
		"images": ["images/model.jpg" ,"images/circuit.jpg","images/diagram.jpg"]  } ]
}

function displayProject(){
	for(var i=0; i<projects.projects.length; i++){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);
		projects.projects[i].images.forEach(function (image){
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images));});		
//if(projects.projects.images.length > 0){
		//	$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects.images[0]));}
	}
}
displayProject();
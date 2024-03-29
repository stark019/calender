"use strict";
		var calendar = document.getElementById("calendar");
		var mainDate = new Date();
		var year = mainDate.getFullYear();
		var currentYear = mainDate.getFullYear();
		var month = mainDate.getMonth();
		var febMnth = 1;
		var months = [{name:"January", days:31}, {name:"February", days:febDays(year)}, {name:"March", days:31}, {name:"April", days:30}, {name:"May", days:31}, {name:"June", days:30}, {name:"July", days:31},{name:"August", days:31}, {name:"September", days:30}, {name:"October", days:31}, {name:"November", days:30}, {name:"December", days:31}];
		var weeks = ["Sunday", "Monday", "Tueaday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var monthName = "";
		var monthDays = 0;
		var innerHTML = "";
		var monthNumbers = "";

		var dayActive = "";
		var currentDate = mainDate.getDate();
		var currentMonth = mainDate.getMonth();
		var currentYear = mainDate.getFullYear();

		//console.log(months);
		monthsPrint(year, month);
		
		function febDays(year) {
			if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
                return 29;
            } else {
                return 28;
            }
		}

		function monthsPrint(year, month) {
			var months = [{name:"January", days:31}, {name:"February", days:febDays(year)}, {name:"March", days:31}, {name:"April", days:30}, {name:"May", days:31}, {name:"June", days:30}, {name:"July", days:31},{name:"August", days:31}, {name:"September", days:30}, {name:"October", days:31}, {name:"November", days:30}, {name:"December", days:31}];
			for(var i=0; i<12; i++) {
				monthName = months[i].name;
				monthDays = months[i].days;
				if(month==i) {
					var shoWClass="showClass";
				} else {
					var shoWClass="hideClass";
				}/*"+monthDays+" "+monthNumbers+"*/
				innerHTML+="<div class='"+shoWClass+"' id='myTable'><div class='year'>"+year+"</div><div id='monthName' class='month "+shoWClass+"'><a class='btn' id='prevYear' onclick='prevYear();'> - </a> "+monthName+" <a class='btn' id='nextYear' onclick='nextYear();'> + </a></div> <div class='weeks'>";
				weekPrint();
				innerHTML+="</div>";
				daysPrint(i);
				innerHTML+="</div>";
				
			}
			calendar.innerHTML = innerHTML;
			printDateFormat(months);
			//splitTable();
		}
		
		/*function splitTable() {
			for(var i=0; i<12; i++) {
				var x=$("#myTable-"+i+" tr td");
				//console.log(x);
				x.each(function() {
					if(($(this).index())%7==0) {
					}
				});
			}
			
		}*/
		
		function weekPrint() {
			for(var k=0; k<weeks.length; k++) {
				innerHTML+="<span>"+weeks[k].substring(0,3)+"</span>";
			}
		}
		function daysPrint(i) {
			for (var j=1; j<=monthDays; j++) {
				//var day = j;
				var currentDay = new Date((i+1) +", "+j+", "+ year);
				var monthStart = new Date((i+1)+","+1+", "+year);
				var n = currentDay.getDay();
				var s =monthStart.getDay();
				var totalDays = 7-s;
				//var totalTds = (s+monthDays);
				var dayActive = "";
				var disabled = "";
				//console.log(totalTds);
				/*+new Date((i+1) +", "+j+", "+ year)+*/
				if(j==1) {
					var myClass= "first";
					for(var l=0; l<s; l++) {
						if(s!=0) {
							innerHTML+="<span></span>";
						}	
					}
					
				} /*else if(j==(8-s) || j%7==0) {
					innerHTML+="</tr><tr>";
				}*/ else {
				var myClass = "";
				var myTd = "";
				}
				/*if(j%7==0) {
					innerHTML+="</tr><tr>";
				}*/
				/*+weeks[n].substring(0,3)+*/
				if(currentYear == year) {
					if( i==currentMonth && j<currentDate) {
						dayActive = "prevDay";
						disabled = "disabled";
					} else if(i>currentMonth) {
						dayActive = "forwardDay";
						disabled = "";
					} else if(i<currentMonth) {
						dayActive = "prevDay";
						disabled = "disabled";
					} else if(j==currentDate) {
						dayActive = "dayActive";
						disabled = "";
					}
				} else if(year<currentYear) {
					dayActive = "prevDay";
				}
				innerHTML+="<span data-day='"+j+"/"+(month+1)+"/"+year+"' class='"+myClass+" "+dayActive+"'><button id='eachDay' "+disabled+">"+j+"</button></span>";
				//addCurrendDateClass(i, j);
				
				/*if(totalTds%7 == 0) {
					 {
					 	innerHTML+="</tr><tr>";
					 }
				}*/

			}
		}

		function addCurrendDateClass(i, j) {
			var dayActive = "";
			var currentDate = mainDate.getDate();
			var currentMonth = mainDate.getMonth();
			var currentYear = mainDate.getFullYear();
			if(currentMonth == i) {
				/*if(currentMonth == i) {
					if(currentDate==j) {
						dayActive = "dayActive";
					} else
						dayActive = "";
				}*/
				if( i<=currentMonth && j<currentDate) {
					dayActive = "prevDay";
				} else if(currentDate==j) {
					dayActive = "dayActive";
				} else {
					dayActive = "forwardDay";
				}
			}
		}


		function nextYear() {
			//year++;
			month++;
			if(month>11) {
				month=0;
				year++;
			}
			innerHTML="";
			monthsPrint(year, month);
			if($("#dateValue").val()!='') {
				$( "span[data-day='"+$("#dateValue").val()+"']" ).addClass("selected");
			}
		}
		function prevYear() {
			month--;
			if(month<0) {
				month=11;
				year--;
			}
			innerHTML="";
			monthsPrint(year, month);
			if($("#dateValue").val()!='') {
				$( "span[data-day='"+$("#dateValue").val()+"']" ).addClass("selected");
			}
		}
		function printDateFormat(months) {
			$("button").each(function() {
				$(this).click(function() {
					$("button").parent().removeClass("selected");
					$(this).parent().addClass("selected");
					$("#dateValue").val($(this).html()+"/"+(month+1)+"/"+year);
				});
			});	
		}
	// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}
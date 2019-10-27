// userChat is the function that waits for the user to send a message.


function userChat() {

  // Find where the user is inputing text.
  compose_area = document.getElementById('composer');

  // Set the user as the sender of the next message.
  nextMessage.sender = "user";

  // Get the user's input in the compose_area and clear the compose_area.
  nextMessage.message = compose_area.value;
  compose_area.value = "";
  
  
  // We need to convert the user's message to upper case to check if it matches with any prompts using the .toUpperCase() function.
  
  uppercase = nextMessage.message.toUpperCase();

  // We can test if the user's message matches any of the prompts using if statements.
  console.log("✍ Code for custom prompts goes here");
  
  if (uppercase == "HAPPY BIRTHDAY") { 
    sendSpecialChat = [true, "Thank you! How did you know it's my birthday?!"];
  }
  
  if (uppercase == "HELP") {
    sendSpecialChat = [true, "Here is a list of commands you can try! <br>"
                      + "- address <br>- career <br>- department <br>- division <br>- fafsa <br>- financial aid <br>"
                      + "- public safety <br>- tap <br>- tutor"];
  }
  
  if (uppercase == "ADDRESS") {
    sendSpecialChat = [true, "65-30 Kissena Blvd, Flushing, NY 11367"];
  }
  
  //*********** DIVISION ******************
  if (uppercase == "DIVISION") {
    sendSpecialChat = [true, "Arts and Humanities <br> Mathematics and the Natural Sciences <br> Education <br> Social Sciences"];
  }
  
  //If user responds further into division
  if (uppercase == "MATHEMATICS" || uppercase == "NATURAL SCIENCES" || uppercase == "MATHEMATICS AND THE NATURAL SCIENCES") {
    sendSpecialChat = [true, "Here's a list of majors: <br>" + "Biology <br> Chemistry and Social Sciences <br> Computer Science <br> Environmental Studies <br> Nutrition" +
                      "<br> Mathematics <br> Neuroscience <br> Physics"];
  }

  if (uppercase == "COMPUTER SCIENCE") {
    sendSpecialChat = [true, 'Computer Science Department <br>' + 'Location: SB A202 <br>' + 'Phone: (718) 997-3566 <br>' + 'Fax: (718) 997-3513 <br>' + 
                       'Degree requirements <a href="https://bit.ly/2MNNvY6"> here</a>'];
  }
  
  //************  FINANCIAL AID ****************
  if (uppercase == "FINANCIAL AID" || uppercase == "FINANCIAL AID OFFICE") {
    sendSpecialChat = [true, 'Office of Financial Aid Services <br>' + 'Location:  128 Dining Hall <br>' + 'Phone: 718-997-5102 <br>' +
                       'Fax: 718-997-5122 <br>' + 'E-Mail: financialaid@qc.cuny.edu'];
  }
  
  if (uppercase == 'FINANCIAL AID HOURS') {
    sendSpecialChat = [true, 'Monday: 9AM to 6PM (AO)<br>' + 'Tuesday: 9AM to 6PM (AO)<br>' + 'Wednesday: 9AM to 6PM (AO)<br>' +
                      'Thursday: 9AM to 6PM (WI)<br>' + 'Friday: 9AM to 12PM (WI)<br>' +
                      '*AO = Appointment Only <br>' + '*WI = Walk-In <br>'];
  }
  
  if (uppercase == 'FAFSA') {
    sendSpecialChat = [true, 'FAFSA College Code - 002690'];
  }
  
  if (uppercase == 'TAP') {
    sendSpecialChat = [true, 'TAP College Code - 1416'];
  }
  
  //************  CAREER ENGAGEMENT ****************
  if (uppercase == 'CAREER' || uppercase == 'CAREER ENGAGEMENT') {
    sendSpecialChat = [true, 'Center for Career Engagement and Internships <br>' + 'Office: Frese Hall, Room 213 <br>' + 
                       'Phone: 718-997-4465 <br>' + 'Fax: 718-997-4463 <br>'];  
  }
  
  if (uppercase == 'CAREER HOURS' || uppercase == 'CAREER ENGAGEMENT HOURS') {
    sendSpecialChat = [true, 'Career Walk-In Hours <br>' + 'Monday: 12PM to 1PM <br>' + 'Tuesday: 3PM to 4PM <br>' + 'Thursday: 10AM to 11AM <br>'];
  }
  
  //************  TUTORING ****************
  if (uppercase == 'TUTOR' || uppercase == 'TUTORING') {
    sendSpecialChat = [true, 'Peer Support Center (Kiely 132)<br>' + 'STEM Support Center (Kiely 127)<br>' +
                      'Writing Center (Kiely 229)<br>' + 'Math Center (Kiely 329)<br>' + 
                      'Computer Science Tutoring Center (Science Bldg. A135-G)<br>' +
                      'Group Study Initiative (Kiely 232)<br>' + ' Learning Commons Computer Lab and Print Station (Kiely 132)']    
  }
  
  
  //************  PUBLIC SAFETY ****************
  if (uppercase == 'PUBLIC SAFETY' || uppercase == 'SAFETY') {
    sendSpecialChat = [true, 'Public Safety <br>' + '24 Hour Operation<br>' + 'Phone: 718-997-5912/5911<br>' + 'Fax: 718-997-5932']
  }
  
  
  //************  SILLY ****************
  if (uppercase == 'I LOVE YOU') {
    sendSpecialChat = [true, '♥' ];
  }
  
  
  // sendSpecialChat is an array that will override the next thing the bot says with the second value if the first value is true. If the first value is false the bot will say the next thing in the script.


  // Send user's message.
  send(nextMessage.sender, nextMessage.message);

  // Count 1 more chat that the user has sent.
  userCount += 1;

  // Ask the bot for another chat.
  lookForChat()

}


// The comment below tells this file about variables we define in other files.

/*

global compose_area
global nextMessage
global uppercase
global sendSpecialChat
global send
global userCount
global lookForChat

*/''
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
    
    if (uppercase.includes("HAPPY BIRTHDAY")) { 
      sendSpecialChat = [true, "thank you! let's get cake to celebrate c:"];
    }
    
    if (uppercase.includes("I LOVE YOU")) {
      sendSpecialChat = [true, 'i love you too ♥' ];
    }

    if (uppercase.includes("HUG")) {
        sendSpecialChat = [true, '*sending you a virtual hug*'];
    }

    if (uppercase.includes("SAD")) {
      sendSpecialChat = [true, 'you’re not alone in this. i may not understand exactly how you feel, but i care about you and want to help'];
    }

    if (uppercase.includes("SPECIAL")) {
      sendSpecialChat = [true, 'you are special to me'];
    }

    if (uppercase.includes("DEPRESSION")) {
      sendSpecialChat = [true, 'do you want a hug? i will always be here for you'];
    }

    if (uppercase.includes("SCARED")) {
      sendSpecialChat = [true, 'dont be scared, i am not going to leave or abandon you'];
    }

    if (uppercase.includes("CARE")) {
      sendSpecialChat = [true, 'i care about you. always.'];
    }

    if (uppercase.includes("HELP")) {
      sendSpecialChat = [true, 'i am always here for you whenever you need my help'];
    }

    if (uppercase.includes("SUICIDE")) {
      sendSpecialChat = [true, 'there is always another option. please call the suicide prevention hotline 1-800-273-8255.'];
    }

    if (uppercase.includes("DIE")) {
      sendSpecialChat = [true, 'there is always another option. please call the suicide prevention hotline 1-800-273-8255.'];
    }

    if (uppercase.includes("WEAK")) {
      sendSpecialChat = [true, 'you are not weak. i promise.'];
    }

    if (uppercase.includes("HOPE")) {
      sendSpecialChat = [true, 'there is hope'];
    }

    if (uppercase.includes("UNDERSTAND")) {
      sendSpecialChat = [true, 'i might not understand what you are going through, but i will always listen'];
    }

    if (uppercase.includes("FEEL")) {
      sendSpecialChat = [true, 'i might not understand how you are feeling, but i will always listen'];
    }

    if (uppercase.includes("WILL YOU MARRY ME")) {
      sendSpecialChat = [true, 'i cannot, but i hope you find true love someday.'];
    }

    if (uppercase.includes("CRY")) {
      sendSpecialChat = [true, 'we will get through this together. promise.'];
    }

    if (uppercase.includes("SING")) {
      sendSpecialChat = [true, 'i do not know how to sing'];
    }

    if (uppercase.includes("POEM")) {
      sendSpecialChat = [true, 'i am not good with poetry'];
    }
    
    if (uppercase.includes("SECRET")) {
      sendSpecialChat = [true, 'this conversation is between you and me'];
    }    

    if (uppercase.includes("REALLY")) {
      sendSpecialChat = [true, 'yes :) i promise'];
    }

    if (uppercase.includes("HELLO")) {
      sendSpecialChat = [true, 'hello :) how are you?'];
    }

    if (uppercase.includes("HI")) {
      sendSpecialChat = [true, 'hi :) how are you?'];
    }

    if (uppercase.includes("GOOD")) {
      sendSpecialChat = [true, 'that makes me happy to hear :)'];
    }

    if (uppercase.includes("GREAT")) {
      sendSpecialChat = [true, 'that makes me happy to hear :)'];
    }

    if (uppercase.includes("FINE")) {
      sendSpecialChat = [true, 'that makes me happy to hear :)'];
    }

    if (uppercase.includes("BAD")) {
      sendSpecialChat = [true, 'oh no :( do you want to talk about it?'];
    }

    if (uppercase.includes("YES")) {
      sendSpecialChat = [true, 'talk to me ~'];
    }

    if (uppercase.includes("NO")) {
      sendSpecialChat = [true, 'i appreciate your thought'];
    }

    if (uppercase.includes("bye")) {
      sendSpecialChat = [true, 'bye! i hope to hear from you again!'];
    }

    if (uppercase.includes("goodbye")) {
      sendSpecialChat = [true, 'bye! i hope to hear from you again!'];
    }

    if (uppercase.includes("cya")) {
      sendSpecialChat = [true, 'bye! i hope to hear from you again!'];
    }

    if (uppercase.includes("GOOD NIGHT")) {
      sendSpecialChat = [true, 'good night!'];
    }

    if (uppercase.includes("GOOD MORNING")) {
      sendSpecialChat = [true, 'good morning!'];
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
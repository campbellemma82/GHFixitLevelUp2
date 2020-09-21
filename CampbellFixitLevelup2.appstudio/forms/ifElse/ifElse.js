let firstName = prompt('Enter in your first name')
let userState = prompt('Enter in your state in the format of 2 uppercase letters')
let userTemp = prompt('Enter the temperate in Farenheit degrees')
let userArray = [firstName, userState, userTemp];

let messages = ["wear a warm coat, hat, scarf, and gloves", "wear a warm coat but you won't need a hat, scarf, or gloves", "wear a less heavy coat", "wear a light jacket and a smile!"]

if(userState == 'NE' && userTemp <= 32) {
NSB.MsgBox(firstName + "," + messages[0])
} else if(userState == 'NE' && userTemp > 32 && userTemp <= 50) {
  NSB.MsgBox(firstName + "," + messages[1]
} else if (userState == 'FL' && userTemp <= 50 && userTemp >= 32) {
  NSB.MsgBox(firstName + "," + messages[2])
} else if(userState == 'FL' && userTemp > 50 && userTemp <= 70) {
  NSB.MsgBox(firstName + "," + messages[3])
  }

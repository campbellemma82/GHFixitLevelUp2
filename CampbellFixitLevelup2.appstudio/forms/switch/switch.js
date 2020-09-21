let userFirstName = prompt('Enter in your first name')
let userStateLetters = prompt('Enter in your state in the format of 2 uppercase letters')
let usersTemp = prompt('Enter the temperature in degrees Farenheit')

let usersArray = [userFirstName, userStateLetters, usersTemp]

let userMessages = ["wear a warm coat, hat, scarf, and gloves", "wear a warm coat but you won't need a hat, scarf, or gloves", "wear a less heavy coat", "wear a light jacket and a smile!"]

switch(usersTemp, userStateLetters) {
case(usersTemp < 32 && userStateLetters == "NE"):
  NSB.MsgBox(userFirstName + "," + "wear a warm coat, hat, scarf, and gloves.")
  break; 
case(usersTemp >= 32 && usersTemp < 50 && userStateLetters == "NE"):
  NSB.MsgBox(userFirstName + "," + "wear a warm coat but you won't need a hat, scarf, or gloves.")
  break; 
case(usersTemp >= 32 && usersTemp < 50 && userStateLetters == "FL"):
  NSB.MsgBox(userFirstName + "," + "wear a less heavy coat")
  break; 
case(usersTemp >= 50 && usersTemp < 70 && userStateLetters == "FL"):
  NSB.MsgBox(userFirstName + "," + "wear a light jacket and a smile!")
  break; 
  default: 
  NSB.MsgBox(userFirstName + "," + "I do not know what you should wear.")
  }
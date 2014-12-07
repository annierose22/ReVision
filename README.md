ReVision
===========

  This file is a user's manual for the CS50 project ReVision, by Natalia Wojcik and Michael Genecin.
It is in the form of a chrome extension which can be loaded to Google Chrome as specified on this
webpage https://developer.chrome.com/extensions/getstarted#unpacked, after you have unzipped the
zip drive we have provided for you. This extension assists in making websites more readable for people
who struggle with dyslexia.

  Once you have loaded the chrome extension to your browser, you should see the ReVision logo, the iris of
an eye with an 'a' in the center, appear in the upper left of your browser. If you click on the icon, the
popup for actually executing the extension will appear, allowing you to manipulate the font and background
of any given website you are on.

  By clicking on the 'Change Font' dropdown menu, you may select the font that is easiest for you to read,
with Dyslexie font (designed by Christian Boer) as it is a font specifically designed and shown to be
easier for dyslexics to read. You must press 'Set Font' after you select your font in order to have it
actually change. Studies have also shown that the font color and background can influence the ease with which
dyslexics can read a webpage. For example, unlike most people who prefer the high contrast of a white background
and blackt text, dyslexics prefer lower contrasts such as creme and black, or white and blue. These, as well as
other variations that have been shown to be helpful, have been provided as preset options in the dropdown menu
under 'Change Theme' (again, you must press 'Set Color' in order for the changes to appear on the webpage).
If you would like to change or add to the preset options, simply add an 'if' condition with the hex value of the
colors you choose to popup.js.

  And should our preset options not appeal or need tweaking to the specific needs of each person, we have provided
two color graphs (obtained from http://colpick.com/plugin), one for selecting the font color and one for selecting
the background color. Additionally,some studies have also shown that font size is also an important element
for some dyslexics, and so we have provided a dropdown menu that allows you to alter the font ('Change Font Size').
Again, you must press'Set Font Size'in order to view the changes on yoru webpage.

  Lastly, to restore your webpage to its original appearance, simply refresh your page. As suggested by Github,
a LICENSE.md and README.md file have been provided.

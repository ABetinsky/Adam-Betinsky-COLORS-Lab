# Adam-Betinsky-COLORS-Lab
This repository contains all of the files build the "COLORS Lab" website. The "COLORS LAB" website was an assignment for my Processes of Object Oriented Software Development class (COP 4331C) with Dr. Aashish Yadavally at The University of Central Florida in Orlando, FL in January 2026.

Check out my implemtation of the website at https://betinsky-colorslab.com

## What is the "COLORS LAB"?
The COLORS Lab is a website that helps you to practice using the LAMP Stack in a real-world scenatrio. The website itself represents a dictionary of colors that can be added and searched by a user. Although a user can't make their own account (per the specifications of the original assignment), two test accounts were provided to use the website's functionality (you could always add more to your implementation if you wish).

The user experience of the website is as follows:

1. The user types in the DNS address of the website, in which they are redirected to the home screen.

2. The user is presented with a login page on the home screen. They must login with the username and password from one of the provided test accounts, or they will NOT be able to access the main portions of the website. Once a username and password is entered, they can click the "Do It" button to see if their login was successful or not.

3. Once a user successfully accesses one of the two test accounts, they have 3 options:
 
  A. They can add a new color to the dictionary by typing it in to the appropiate text box, and then hitting the "Add Color" button. (NOTE: If the user adds a color that has been previously added, it will duplicate the original color).

  B. They can search a color to see if it has previously been added to the dictionary by typing a color into the appropriate text box and then clicking the "Search Color" button. The website does support partial matching, so it's possible to get more than one color to appear in the search results. For example, if the colors "Blue" and "Black" were previously added to the dictionary, and the user search for the color "Bl", the website would return "Blue" and "Black" at the same time. 

  C. They can return to the home page by clicking the "Log Out" button. Once the button is pressed, they will be redirected to the home page. Should a user want to add or search colors again, they must re login by following the above steps again. 

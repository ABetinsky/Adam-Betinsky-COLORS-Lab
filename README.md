# Adam-Betinsky-COLORS-Lab
This repository contains all of the files build the "COLORS Lab" website. The "COLORS LAB" website was an assignment for my Processes of Object Oriented Software Development class (COP 4331C) with Dr. Aashish Yadavally at The University of Central Florida in Orlando, FL in January 2026.

Check out my implemtation of the website at https://betinsky-colorslab.com

## What is the "COLORS LAB"?
The COLORS Lab is a website that helps you to practice using the LAMP Stack in a real-world scenatrio. The website itself represents a dictionary of colors that can be added and searched by a user. Although a user can't make their own account (per the specifications of the original assignment), two test accounts were provided to use the website's functionality (you could always add more to your implementation if you wish).

The user experience of the website is as follows:

1. The user types in the DNS address of the website, in which they are redirected to the home screen.

2. The user is presented with a login page on the home screen. They must login with the username and password from one of the provided test accounts, or they will NOT be able to access the main portions of the website. Once a username and password is entered, they can click the "Do It" button to see if their login was successful or not.

3. Once a user successfully accesses one of the two test accounts, they have 3 options:
 
    - They can add a new color to the dictionary by typing it in to the appropiate text box, and then hitting the "Add Color" button. Although the website is supposed to represent a dictionary of colors, any string can technically be added. (NOTE: If the user inputs a string that has been previously added, it will duplicate the original string).

    - They can search a color to see if it has previously been added to the dictionary by typing a color into the appropriate text box and then clicking the "Search Color" button. The website does support partial matching, so it's possible to get more than one color to appear in the search results. For example, if the colors "Blue" and "Black" were previously added to the dictionary, and the user search for the color "Bl", the website would return "Blue" and "Black" at the same time. 

    - They can return to the home page by clicking the "Log Out" button. Once the button is pressed, they will be redirected to the home page. Should a user want to add or search colors again, they must re login by following the above steps again. 


## Technologies Used

The following technologies are used in implementing the website:

- The LAMP Stack - That is: Linux, Apache, MySQL, PHP
- DigitalOcean (For cloud hosting on a server. Note that you can host the website on any LAMP server. It doesn't have to strictly be DigitalOcean)
- HTML
- CSS
- JavaScript
- Git
- GitHub

It's important to also note that some parts of this website contain code and/or were implemented based on instructions written by ChatGPT 5.2, an AI platform by Open AI (specifically, the PHP files and web browser security rule support). Please read the AI disclosures in the main directory of this repository to learn more.

## High-level Setup Instructions
To implemt the website on your own, follow the steps listed in the "Getting Started with LAMP" document in the "providedDocumentationAndTestFiles" directory of this repository. However, for ease, the overview of those steps are:

1. Setup a cloud server to digitally host your website, and ensure it has LAMP Stack functionality. DigitalOcean is a great website that can do this, but there are others that work as well. Make sure to note the IP address that is generated for your website and the root password that you create. 

    - NOTE: This step will likely include a small cost.

2. Use a website to purchase a domain for your website. You can name it whatever you like. 

    - NOTE: This step will likely include a small cost. 

3. Use your domain purchasing or cloud server website to setup the DNS settings for your website. Specifically, setup your domain to point to the IP address listed in step 1.

4. SSH into the root of the server using the password you made in step 1. Rename  the "testIndex.html" file from the "providedDocumentationAndTestFiles" of this repository to "index.html". Then, put the file into the "/var/www/html" directory of your website.

5. Wait a few minutes, and test that the above steps worked by seeing if the "testIndex.html" file loads when you go to your website on the internet. This may take up to 30 minutes or longer to fully work. DO NOT PROCEED until the prior steps are working. If you encounter issues, make sure to retrace your steps.

    - NOTE: By default, the website only include HTTP support and NOT HTTPS support. On some internet browsers (like Google Chrome), you need to add HTTPS support to meet the security requirements of the browser. To do this, use Certbot while SSH'd into the root of your server. You can find instructions on how to do this via a quick google search. 

6. While SSH'd into the root of your server, access mySQL and create the COP4331 databse as described in the document mentioned above.

7. While SSH'd into the root of your server, copy all of the non-testing directories in this repository (that is, copy the "api", and "public" directories) into the "/var/www/html" directory. Tools like PuTTY can make this easier, but you can always use simple bash commands like "scp". Leave the directories as is.

8. In order to avoid posting user passwords on the internet, the PHP files use a configuration file titled "config.php" that is hidden in this repository. As such, you will need to add one into your "/var/www/html/api" directory to ensure the website functions correctly. The contents of this file should look like:

```php
<?php
$DB_HOST = "localhost";
$DB_USER = "your_username";
$DB_PASS = "your_password";
$DB_NAME = "COP4331";
?>

```

9. You've now completed the High-level Setup for the website! If you'd like, feel free to go back and add additional users to the website (as the default are 2 premade ones). Make sure to test everything and see if it works. If you encounter any issues, please reference the document mentioned at the start of this portion.

## How to run and access the website

Once you've setup the website, you can access it in 3 simple steps:

1. Ensure that your cloud server is active.

2. Go to your website's domain in the internet browser of your choice.

3. Have fun on the website!

## Assumptions, Limitations and AI Usage

 This website is licensed under an Apache 2.0 license (I figured it was the best to use since the LAMP stack uses Apache).

 As mentioned above, it's important to also note that some parts of this website contain code and/or were implemented based on instructions written by ChatGPT 5.2, an AI platform by Open AI (specifically, the PHP files and web browser security rule support). Please read the AI disclosures in the main directory of this repository to learn more.

To use and implement the website, it is assumed that:

- You have a strong internet connection.

- You have properly set everything up properly on the website.

The following limitations can be observed for the website:

- The accounts on this website are pre-defined. There is no way to add another account without modifying the database (mySQL) and PHP files.

- There is no E-mail authentication for each account. This means that if someone were to figure out the username and password of a user you defined, they can access the account.

- There is no way to ensure duplicate strings inputted into the dictionary don't show up more than once. Perhaps this is a feature that could be added later.

### Website made by Adam Betinsky in January 2026 using the instructions provided. GitHub Repository made in February 2026.

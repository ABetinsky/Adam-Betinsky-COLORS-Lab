```markdown
## AI Assistance Disclosure
This project was developed with assistance from generative AI tools:
- **Tool**: ChatGPT 5.2 (By OpenAI)
- **Dates**: February 15th, 2026
- **Scope**: I was working on building this repository when I noticed that the assignment mentioned "You must not commit passwords, API keys, or server-specific configuration files." I had a feeling that the php files did have user passwords that could be publicly shown (as they mentioned the configuration of the default user), which would violate this requirement. I provided ChatGPT my 3 php files to see if this was true.
- **Use**: ChatGPT did see that the php files contained passwords, as I suspected. I showed it the issue I was facing (via a screenshot of the assignment). It suggested that I put the user passwords in a separate file that I can call and use its parameters in within the main 3 api files. Furthermore, it stated that I could then put this separate file in my .gitignore file, which would essentially allow the API to function, while also preventing the user passwords from residing publicly on the internet. Although ChatGPT provided me the code to do this, I was sure to examine it to understand how it works. This separate file is called "config.php" and won't be shown on the GitHub repository, based on the above description. I'm glad I was able to figure out a quick, yet well-working solution to this issue!

All AI-generated code was reviewed, tested, and modified to meet
assignment requirements. Final implementation reflects my understanding
of the concepts.

Adam Betinsky - 2/15/2025 - 12:08 PM

```


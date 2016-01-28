#Lab Tasks

For lab tasks from here on out, questions that require exploration and responding to on this markdown page will be in bolded text. You should respond to them directly within this markdown file. Markdown is effectively a plaintext, lighweight markup language that is designed to be converted into HTML; more simply, it's some text and symbols you can put into a document that will turn into pretty HTML.
Tasks that specify work to do without a written response will be bulleted.
If you're ever confused about what you need to do for a given task, ask.

## Part #1: exploring the node.js project
Study the project you have cloned. Run it according to the instrucitons in the README, including running the tests. Answer the following questions by editing this file.  This will give you a chance to play with markdown.

> Protip: Using Google to gain additional knowledge or support your conjectures about how something works is great! It's important that you think about everything and come to an understanding, though, so don't use Google as a scapegoat to get the questions done quickly or you will regret it!

#####What is the purpose of app.js? Explain what happens when a user is trying to access a page "kittens", when a user is trying to access the page "petForm", and when the user submits a form on "petForm". Explain what a "route" is.

>  app.js is used for routing... and stuff. When trying to access the "kittens" page, the user is routed to "Page under construction." When trying to access "petForm" it routes to petForm.html. When the user submits a form on "petForm" it updates the console log with the new information. A route is when the browser sends a request to the web server and server returns something based on the request.

#####What is the contents of the "public" folder? What is each of the html files there and how are they referenced in app.js?

> The contents are the coding files. The html files here are about.html, index.html, and petForm.html. In app.js is calling these by their links and sending the html pages to the browser when requested (except for kittens which sends "Page under Construction").

#####In your project change the message that appears when the user is trying to access the page "kittens". Describe what you did and how it worked.

> We changed the message in res.send in app.js and had to restart the node server to see our changes..

#####Also change the message that a user sees when they are trying to find a page that doesn't exist.
> Changed it!
#####Describe what happens when you submit a form on petForm page. What are the form parameters in petForm? What is the method for the form? Where is the form submission handled in the project? How are parameters extracted? How is the resulting message generated? How is this different from accessing the page petForm the first time (to see the form)?

>When you submit a form on petForm page, the browser sends a request to the server which returns the displayed name you typed in and the length of the pet name. The form parameters are name, type, width, placeholder. The method for form is "post". The form submission is handled in app.post('/petForm', function(req, res) in app.js. The parameters are extracted from petForm.html. The resulting message are generated from the res.send in app.post. It is different because the submission updates the console where as the request to see the pet form page only returns information.

#####Where is client-side Javascript defined? Name file(s) in which it is used.
> It is defined in petForm and is used in app.js

#####Where is server-side Javascript helper file defined? Where can it be used? Add a function to it and experiment with where you can call this function.
> It is defined in app.js. It can be used in any of the html pages.

#####What is the purpose of package.json file? What's in it, and what does it mean?

>  file contains meta data about your app or module. Most importantly, it includes the list of dependencies to install from npm when running npm install. Got definition from https://github.com/vigetlabs/gulp-starter/wiki/What-is-package.json%3F

#####What's in .gitgnore file? What's the purpose of it?

> It informs git of which of which files are necessary and which ones it can ignore. The purpose is to avoid committing unnecessary files.

## Part #2: exploring testing

#####Find the testing file, describe where it is located and what it is testing. Run karma (the testing engine) as specified in the Readme and describe results. Do not edit any files at this time.

> The testing file is clientJavascript.spec.js and is located under the javascript folder (under the public folder). Results had one test fail and that was the one that was supposed to fail (expected 'kittens' to be 'not Kittens!').

#####After having set up Travis CI with your forked project, play around the page for your project (build history, settings, branches, etc) and describe at least 3 features you think would be useful when troubleshooting a broken project.

>Build history is incredibly useful because you can look at past commits/tests and see when a test failed. For example, if something failed after your last commit, you can go back and see what you changed in the commit to make it fail. Current is useful for seeing the most recent tests in a clearer format. The ability to limit concurrent jobs (under settings) might be nice for working in larger organizations.

#####What was the build status of your project right after you got everything set up? Use Travis to find any problems, and describe what failed, if anything. (Which files, what lines, why did failure occur, etc.)

>Build status was failing! The problem was that a test failed--it expected 'kittens' to be 'Not Kittens!'

#####Fix any problems described in the previous question. Describe how you fixed them. Push your fix to GitHub and post a link to the passing build (from build history) here.

>We added a new function called returnNotKittens in clientJavascript.js and then changed the test that should fail to test that should pass AND changed the function that it called to returnNotKittens. (THIS IS A TEST)

- Study jasmine testing syntax. Think of a Javascript function, describe its behavior by writing tests for it (this is test-driven development, or TDD). Add the function, run the tests. (Actually do this. Don't forget to commit your changes!)

## Part #3: adding a GPA calculator

- Add a page to the project (don't forget to add it to git) that has a form for letter grades and credits for three classes.

- In TDD fashion, add tests for functions needed to compute the GPA and then implement the functions themselves. Note, however, that karma doesn't work with exports, so after you have tested the functions, you would need to create copies of them that you are exporting. This is awkward and will be fixed in subsequent node setups. Also make sure to add the file that you are testing to karma.conf.js.

- Add a route to app.js to display the GPA on the resulting page.

- Add the basic html to the send so that the GPA is displayed as an html page. Don't add too much: later we will be using various libraries to take care of generating html.

- As you are working, don't forget to change drivers in pair-programming, practice TDD, write comments, and make frequent commits. As before, at the end just push all the changes to github.


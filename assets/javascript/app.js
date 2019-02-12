$(document).ready(function () {
    //functions for materialize
    $(".dropdown-trigger").dropdown({
        alignment: 'left',
        coverTrigger: false,
        inDuration: 200,
        outDuration: 400
    });
    //populating content
    function populateIntro() {
        var introTitle = $("<p id='intro-headText'><span class='blue-text'>Hi</span>!</p>");
        var profilepic=$("<img id='profile-pic' src='assets/images/Sheetz.jpeg'</img>");
        var introContent = $("<p id='intro-text'>I'm <span class='blue-text'>Sheetal</span>.<br><span class='blue-text'>A new·bie full stack web developer and Automation Engineer over a span of 8 years</span>. <br>Currently seeking Full Stack Development roles</p>");
        var introDiv = $("<div class='content'></div>");
        introDiv.attr("value", 1);
        introDiv.append(introTitle).append(profilepic).append(introContent);
        return introDiv;
    }

    function populateAbout() {
        var aboutTitle = $("<p id='about-headText'><span class='blue-text'>About Me</span>:</p>");
        var aboutContent = $("<p id='about-text'>I graduated from National University with Master's degree.I come with 8 years’ experience as Software QA Engineer.I wanted to switch gears and get my hands dirty with development.I really like coding and problem solving.</p>");
        var aboutContentdetail=$("<p id='about-detail'>As a QA Engineer coding in C# and Java always fascinated me.Day to day interactions with developers always bought out the curiosity to know the other side of how things are actually built.My goal is to work for a company which helps me to enhance my Front End and Back -End coding skills which I have learnt.Ultimately I want to grow as a good Full-Stack Developer in the company and a developer which my team totally relies on and proud about.</p>");
        var aboutDiv = $("<div class='content'></div>");
        aboutDiv.attr("value", 2);
        aboutDiv.append(aboutTitle).append(aboutContent).append(aboutContentdetail);
        return aboutDiv;
    }

    function populateContact() {
        var contactTitle = $("<p id='contact-headText' class='blue-text'>Contact Me:</p>");
        var contactDescription=$("<p id='contact-desc' class='black-text'>I'm available for hire and mainly looking for Full Stack developer positions</p>");
        var contactContent1 = $("<p class='contact-text' class='left-align'>Social Media: </p>");
        var contactContent2 = $("<p class='contact-text' class='left-align' style='padding-bottom: 5%'>Email: <br><span class='blue-text'><a href='mailto:sheetal.srikumar@gmail.com'>sheetal.srikumar@gmail.com</a></span></p>")
        var imgrow = $("<div class='row'></div>");
        var githubImgDiv=$("<div class='col s6'><a href='https://github.com/bssheetal' target='_blank'><img class='responsive-img ourImage' src='assets/images/githublogo.jpg'></a></div>");
        var linkedinImgDiv=$("<div class='col s6'><a href='https://www.linkedin.com/in/sheetalbs/' target='_blank'><img class='responsive-img ourImage' src='assets/images/linkedinlogo.jpg'></a></div>");
        imgrow.append(githubImgDiv).append(linkedinImgDiv);
        var contactDiv = $("<div class='content'></div>");
        contactDiv.attr("value",4);
        contactDiv.append(contactTitle).append(contactDescription).append(contactContent1).append(imgrow).append(contactContent2);
        return contactDiv;
    }

    function populatePortfolio() {
        var portfolioTitle = $("<p id='portfolio-headText' class='blue-text'>Portfolio</p>");
        //make cards from materialize card
        var projcard1 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/Hive.PNG'><span style='font-size:1.40em;' class='card-title white-text blue'>The Hive</span></div><div class='card-content'><p class='card-textcontent'>A social application which connects new residents to local activities & professional opportunities built using jquery,Firebase,HTML5 & CSS </p></div><a style='font-size:1.40em;padding:10px;' class='blue-text' href='https://sababorj.github.io/Hive/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/bssheetal/Hive' target='_blank'>GitHub</a></p></div></div>");
        var projcard2 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/Giftastic.PNG'><span style='font-size:1.40em;' class='card-title white-text blue'>Giftastic App</span></div><div class='card-content'><p class='card-textcontent'>Random gif generator with dynamically added user input buttons Uses Giphy's REST API called using AJAX </p></div><a style='font-size:1.40em;padding:10px;' class='blue-text' href='https://bssheetal.github.io/giphygenerator/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/bssheetal/giphygenerator' target='_blank'>GitHub</a></p></div></div>");
        var projcard3 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/TrainScheduler.PNG'><span style='font-size:1.40em;' class='card-title white-text blue'>TrainScheduler</span></div><div class='card-content'><p class='card-textcontent'>Firebase backed train schedule application. It uses HTML, CSS and jQuery to render the schedule and admin panel on the web page.</p></div><a style='font-size:1.40em;padding:10px;' class='blue-text' href='https://bssheetal.github.io/TrainScheduler/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/bssheetal/TrainScheduler' target='_blank'>GitHub</a></p></div></div>");
        var projcard4 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/bootcampoutfitters.png'><span style='font-size:1.40em;' class='card-title white-text blue'>Bootcamp Outfitters</span></div><div class='card-content'><p class='card-textcontent'>Application allows users to be able to geosearch for hiking trails & supplying data back to user such as maps,built using JQuery,Handlebars &Sequelize</p></div><a style='font-size:1.40em;padding:10px;' class='blue-text' href='https://bootcampoutfitters.herokuapp.com/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/bssheetal/Bootcampoutfitters' target='_blank'>GitHub</a></p></div></div>");
        var projcard5 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/Mobetta.png'><span style='font-size:1.40em;' class='card-title white-text blue'>MoBetta</span></div><div class='card-content'><p class='card-textcontent'>Facial & speech recognition app which tells user their current emotions and allows them todo various activities built using React,Express,Mongo and Node</p></div><a style='font-size:1.40em;padding:10px;' class='blue-text' href='https://mo-betta.herokuapp.com/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 13px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/bssheetal/Mo-Betta' target='_blank'>GitHub</a></p></div></div>");
        var cardrow = $("<div class='row'></div>");
        cardrow.append(projcard1).append(projcard2).append(projcard3);
        var cardrow2 = $("<div class='row'></div>");
        cardrow2.append(projcard4).append(projcard5);
        var portfolioDiv = $("<div class='content'></div>");
        portfolioDiv.attr("value",3);
        portfolioDiv.append(portfolioTitle).append(cardrow);
        portfolioDiv.append(cardrow2);
        return portfolioDiv;
    }

    function changeDiv(cValue,valueNew,newDiv){
        if(cValue != valueNew){
            $("div[value=" + cValue + "]").fadeOut(1000,function(){
                newDiv.fadeIn(500);
            });
        }
    }
    var currentValue = 1;
    var intro = populateIntro();
    var about = populateAbout();
    var portfolio = populatePortfolio();
    var contact = populateContact();
    $("#attachDiv").append(intro).append(about).append(portfolio).append(contact);
    //when user first loads page, only show intro
    
    about.hide();
    portfolio.hide();
    contact.hide();
    //click functions
    $("#homePage").click(function(){
        changeDiv(currentValue,1,intro);
        currentValue = 1;
    })
    $("#topTitle").click(function(){
        $("#homePage").trigger('click');
    })
    $("#aboutPage").click(function(){
        changeDiv(currentValue,2,about);
        currentValue = 2;
    })
    $("#portfolioPage").click(function(){
        changeDiv(currentValue,3,portfolio);
        currentValue = 3;
    })
    $("#contactPage").click(function(){
        changeDiv(currentValue,4,contact);
        currentValue = 4;
    })
})
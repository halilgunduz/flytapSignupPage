var SignUpPage = require('../Pages/SignUp.page.js');
var FlytagData= require('../TestData/FlytagData.json');
var Registration1= require('../Pages/Registration1.page.js');


describe('Sign Up', ()=>{

    var EC=protractor.EcpectedConditions;

    describe('1)As a user, I should be able to see sign up page and functionalities of it', ()=>{

        
        beforeAll(function(){
            browser.waitForAngularEnabled(false);
            browser.get("https://www.flytap.com/en-us/sign-up/benefits");
            browser.sleep(2000);
            var x=$(".btn.btn-close.js-hideIntent");
            if(x.isDisplayed()){x.click();}
        });

        it('should verify title and header',()=>{
            expect(browser.getTitle()).toBe("Sign up - Benefits | TAP Air Portugal");
            expect(SignUpPage.signUpHeader.getText()).toBe("Sign up - Benefits");
        });

        it('should verify login header and button',()=>{
            expect(SignUpPage.loginHeader.getText()).toBe("Already a TAP Client?");
            browser.executeScript('window.scrollTo(674, 594);').then(function() {
                SignUpPage.loginButton.click();
            });
            browser.sleep(3000);
            $(".ipt-mask #login-pass-account-modal").sendKeys("aaa");
            browser.get("https://www.flytap.com/en-us/sign-up/benefits");
            browser.sleep(4000);
        });

        // xit('should verify register buttons',()=>{
        //     browser.sleep(1000);
        //     browser.executeScript("arguments[0].click();",SignUpPage.signUpRegisterButton1);
        //     browser.sleep(2000);
        //     expect(browser.getCurrentUrl()).toBe("https://www.flytap.com/en-us/sign-up?RegistrationType=Victoria");
        //     browser.sleep(2000);
        //     browser.get("https://www.flytap.com/en-us/sign-up/benefits");
        //     browser.sleep(2000);
        //     browser.executeScript("arguments[0].click();",SignUpPage.signUpRegisterButton2);
        //     browser.sleep(2000);
        //     expect(browser.getCurrentUrl()).toBe("https://www.flytap.com/en-us/sign-up?RegistrationType=TAP");
        //     browser.sleep(1500);
        // });

    });









    describe('As a user, I should be able to see benefits table properly',()=>{

        beforeAll(function(){
            browser.waitForAngularEnabled(false);
            browser.get("https://www.flytap.com/en-us/sign-up/benefits");
            browser.sleep(2000);
        });

        it('should verify that the benefits table exist on sign up page', ()=>{
            SignUpPage.tablesRows.get(0).getCssValue('color').then(function(cl){
                console.log(cl);
            });
        });

        it('should verify benefits table headers', ()=>{
            SignUpPage.tableHeaders.getText().then(function(text){
                for(let i=0; i<text.length; i++){
                    expect(text[i]).toEqual(FlytagData.headers[i].header);
                }
            })
        });

        it('should verify second and third column', ()=>{
            SignUpPage.tableDatas.each(function(item){
                expect(item.getTagName()).toBe('img');
            });
        });

        it('Header should match with json data', ()=>{
            let row= element.all(by.xpath("//div[@class='desktop-only']/div/table/tbody/tr/th"));
            row.getText().then(function(text){
                for(let i=3; i<text.length; i++){
                    expect(text[i]).toBe(FlytagData.tableHeaders[i-3]);
                }
            });
        });

    });






    describe('As a user, I sould be able to to register when I fill everyting properly on the registration page', ()=>{
        
        beforeAll(function(){
            browser.waitForAngularEnabled(false);
            browser.get("https://www.flytap.com/en-us/sign-up?RegistrationType=Victoria");
            browser.sleep(1000);
            // var x=$(".btn.btn-close.js-hideIntent");
            // if(x.isDisplayed()){x.click();}
        });
        
        it('Buttons should be exist on top of registration form',()=>{
            expect(Registration1.facebookButton.isDisplayed()).toBe(true).then(function(){
            
                expect(Registration1.googleButton.isDisplayed()).toBe(true);
             });
        });

        it('Should verify title',()=>{
            expect(browser.getTitle()).toEqual("TAP Account - Registration | TAP Air Portugal");
        });

        it('Should verify header',()=>{
            expect(Registration1.subHeader.getText()).toEqual("Enter your personal information");
        });

        it('Should verify the first field header and label of the first text box', ()=>{
            expect(Registration1.firstHeader.getText()).toEqual("Access information");
            expect(Registration1.firstLabel.getText()).toEqual("E-mail:");
        });

        it('Should verify info button of the first field', ()=>{
            browser.executeScript("arguments[0].click();",Registration1.firstInfoButton).then(function(){
                expect(Registration1.firstInfoText.isDisplayed()).toBe(true);
            });
        });

        it('Should verify error of the first text box',()=>{
            Registration1.emailBox.sendKeys(protractor.Key.TAB);
            browser.sleep(1000);
            expect($("#email-error").getText()).toEqual("Required field.");
            Registration1.emailBox.sendKeys("abc");
            browser.sleep(1000);
            Registration1.emailBox.sendKeys(protractor.Key.TAB);
            browser.sleep(1000);
            expect($("#email-error").getText()).toEqual("Invalid email address.");
        });

        it('Should verify the second field header and labels of text boxes', ()=>{
            var labels=element.all(by.xpath("//div[@class='page-section wrap site-register form-2']/fieldset[2]/div[2]/div"));
    
            for(let i=0; i<4; i++){
                browser.sleep(1000);
                labels.get(i).element(by.xpath("label")).getText().then(function(text){
                    expect(text).toBe(FlytagData.secondLabels[i]);
                })
            }
        });

        it('Should verify info button of the second field',()=>{
            browser.executeScript("arguments[0].click();",Registration1.secondInfoButton).then(function(){
                expect(Registration1.secondInfoText.isDisplayed()).toBe(true);
            });
        });

        it('Dropdown buttons should give error if nothing selected', ()=>{
            browser.executeScript("arguments[0].scrollIntoView();", $("#email"));
            Registration1.secondDrop1.click();
            Registration1.secondDrop2.click();
            browser.sleep(1000);
            expect($("#Salutation-error").getText()).toEqual("Required field.");
            Registration1.secondDrop3.click();
            expect($("#birthdate-error").getText()).toEqual("Invalid date.");
        });

        it('First and last name box should give error if boxes didn’t filled properly',()=>{
            browser.executeScript("arguments[0].scrollIntoView();", $("#email"));
            Registration1.firstNameBox.sendKeys(protractor.Key.TAB).then(function(){
                expect($("#firstnameR-error").getText()).toEqual("Required field.");
            });
            Registration1.firstNameBox.sendKeys("a").then(function(){
                expect($("#lastnameR-error").getText()).toEqual("Required field.");
                expect($("#firstnameR-error").getText()).toEqual("Please enter at least 2 characters.");
            });
            
            Registration1.lastNameBox.sendKeys("a").then(function(){
                expect($("#lastnameR-error").getText()).toEqual("Please enter at least 2 characters.");
            });
            
            browser.sleep(2000);
        });

        fit('contact info should be filled properly',()=>{
            browser.executeScript("arguments[0].scrollIntoView();", Registration1.secondDrop2).then(()=>{
                browser.sleep(500);
                Registration1.contactRadioMobile();
            });
            $("#phoneCoun").click();
            browser.sleep(1000);
            $$("#phoneCoun option").count().then(num=>{
                console.log(num);
            })
            $$("#phoneCoun option").get(219).click();
            browser.sleep(1000);
        })

    });




});
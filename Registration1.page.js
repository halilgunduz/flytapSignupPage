
var Registration1=function(){
    this.facebookButton=$("#btnFacebook>span>span");
    this.googleButton=$("#btnGoogleRegister>span>span");
    this.subHeader=$(".site-register.form-2 .txt-subtitle");
    this.firstHeader=$(".first .legend");
    this.firstLabel=$(".first .field-group .ipt-label");
    this.firstInfoButton= $(".first .tooltip-btn.tooltip-4");
    this.firstInfoText=$(".first #for-tooltip-4 .tooltip-body");
    this.emailBox=$("#registerEmailBox #email");
    this.secondHeader=$(".form-2 .first .legend");
    this.secondInfoButton=element(by.xpath("//div[@class='page-section wrap site-register form-2']/fieldset[2]/div/div/button"));
    this.secondInfoText=element(by.xpath("//div[@class='page-section wrap site-register form-2']/fieldset[2]/div/div/button/div/div/div[2]"));
    this.secondDrop1=$$("#Salutation").first();
    this.secondDrop2=$$("#day-1").first();
    this.secondDrop3=$$("#month-1").first();
    this.secondDrop4=$$("#year-1").first();
    this.firstNameBox=$("#firstnameR");
    this.lastNameBox=$("#lastnameR");
    this.contactRadioMobile=function(){
        let button=$("#TelephoneTypeMobile");
        button.click();
    }
}

module.exports=new Registration1();
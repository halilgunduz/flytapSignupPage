
var SignUpPage= function(){
    this.signUpButton=$('.link-icn-new-customer');
    this.tableHeaders=element.all(by.xpath("//div[@class='desktop-only']/div/table/tbody/tr[1]/th"));
    this.tablesRows= element.all(by.xpath("//div[@class='desktop-only']/div/table/tbody/tr"));
    this.tableDatas=$$(".desktop-only .static-table .row-group-even .ico");
    this.signUpHeader=$(".wrap-section.page-section h1");
    this.loginHeader=$(".page-footer div h3");
    this.loginButton=$("#js-show-modal-full-login>span>span");
    this.signUpRegisterButton1=$(".buttons-wrapper>ul>li>a>span>span");
    this.signUpRegisterButton2=element(by.xpath("//div[@class='buttons-wrapper less-margin-top']/ul/li[2]/a/span/span"));
    
}

module.exports=new SignUpPage();
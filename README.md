# spfxwithelevateaccess

1) Generate APP Id and APP Secret Using 
    URL:- <SitecollectionURL>/_layouts/appregnew.aspx
    [Appregnew](/imagesForREADME/Appregnew.PNG)
    Provide access:- <SitecollectionURL>/_layouts/appinv.aspx
    [Appinv](/imagesForREADME/Appinv.PNG)

 2) Create an Power Automate Flow zip file is attached with the project in the folder
    [Link to Flow](/MSFlow/FetchTokenClientID_20200415051908.zip)

    [Flow](/imagesForREADME/Flow.PNG)
    
    Body of the Flow should be in the below format

    Body:- grant_type=client_credentials&client_id=<clientId>@<tenantId>&client_secret=<clientSecret>&resource=00000003-0000-0ff1-ce00-000000000000/<SharePoint site Domain>@<tenantId>

 3) Use the Bearer token obtained from the Power Automate to fetch the data from SharePoint




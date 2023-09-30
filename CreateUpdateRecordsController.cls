public with sharing class CreateUpdateRecordsController {
    @AuraEnabled
   public static String saveRecords(String customerName,String email,String mobile,String status,String recordId){

    if(String.isBlank(recordId)){
    Customer__c cust = new Customer__c();
    cust.Name = customerName;
    cust.Email__c = email;
    cust.Active__c = status;
    cust.Mobile__c = mobile;
    if(cust!=null){
        insert cust;
    }
    return cust.Id;
   }else{
    Customer__c cust = new Customer__c();
    cust.Id = recordId;
    cust.Name = customerName;
    cust.Email__c = email;
    cust.Active__c = status;
    cust.Mobile__c = mobile;
    if(cust!=null){
        //update cust;
        delete cust;
    }
    return cust.Id;
}
}
}
import { LightningElement } from 'lwc';
import saveRecords from '@salesforce/apex/CreateUpdateRecordsController.saveRecords';

export default class CreateUpdateDeleteRecordsComponent extends LightningElement {
    customerName;
    email;
    mobile;
    status;
    isLoading = false;
    recordId;

    customerStatus = [
        { label: 'Active', value: 'Active' },
        { label: 'In Active', value: 'inActive' }
    ];

    get options() {
        return [
            { label: 'Active', value: 'Active' },
            { label: 'In Active', value: 'inActive' }
        ];
    }

    //getting records on change
    handleChange(event){
        let eventName = event.target.name;
        if(eventName=='customerName'){
            this.customerName = event.target.value;
        }else if(eventName=='email'){
            this.email = event.target.value;
        }else if(eventName=='mobile'){
            this.mobile = event.target.value;
        }else if(eventName=='active'){
            this.status = event.detail.value;
        }
        console.log('---customerName--',this.customerName);
        console.log('--- email--',this.email);
        console.log('--- mobile--',this.mobile);
        console.log('--- status---',this.status);
    }

    handleSave(){
        this.isLoading = true;
        saveRecords({customerName:this.customerName,email:this.email,mobile:this.mobile,status:this.status,recordId:this.recordId})
        .then(result=>{
            this.isLoading = false;
            this.recordId = result;
            console.log('--- customer id--',result);
        })
        .catch(error=>{
            console.error('--- error--',error);
        })
    }
}
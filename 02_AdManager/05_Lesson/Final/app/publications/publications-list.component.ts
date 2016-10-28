import {Component} from '@angular/core';

@Component({
    selector:'am-publicationList',
    templateUrl:'app/publications/publications-list.component.html',
    styleUrls:['app/publications/publications-list.component.css']
})

export class PublicationListComponent{
    fontColor="red";
    selectedPublication:any;
    publications:any[]=[
    {
        "ID": "c7bd9a71-a1a4-4d39-ab91-be966512bd0e",
        "IsActiveRecord": true,
        "Name": "Herald",
        "TypexCD": "Local",
        "LanguagexCD": "English",
        "CommissionRateForAdvertisments": 0.15,
        "CommisionRateForClassifieds": 0.059,
        "Ratings":4
    },
        {
        "ID": "c7bd9a71-a1a4-4d39-ab91-be966512bd0f",
        "IsActiveRecord": true,
        "Name": "Navind Times",
        "TypexCD": "Local",
        "LanguagexCD": "English",
        "CommissionRateForAdvertisments": 0.15,
        "CommisionRateForClassifieds": 0.059,
        "Ratings":2.5
    },
    {
        "ID": "1806b70c-e47a-4c0b-835c-a88926d9723a",
        "IsActiveRecord": true,
        "Name": "Times of India (Goa Edition)",
        "TypexCD": "National",
        "LanguagexCD": "English",
        "CommissionRateForAdvertisments": 0.25,
        "CommisionRateForClassifieds": 0.050,
        "Ratings":3
    },
    {
        "ID": "f42e2305-2c1e-4173-8e3b-b908283b57a6",
        "IsActiveRecord": false,
        "Name": "Times of India (Mumbai Edition)",
        "TypexCD": "National",
        "LanguagexCD": "English",
        "CommissionRateForAdvertisments": 0.15,
        "CommisionRateForClassifieds": 0.10,
        "Ratings":5
    },
    {
        "ID": "f42e2305-2c1e-4173-8e3b-b908283b57a7",
        "IsActiveRecord": true,
        "Name": "Times of India (Bangalore Edition)",
        "TypexCD": "National",
        "LanguagexCD": "English",
        "CommissionRateForAdvertisments": 0.15,
        "CommisionRateForClassifieds": 0.10,
        "Ratings":3
    }
];

onRowClick(publication){
    console.log("Row clicked "+publication.Name);
    this.selectedPublication=publication;
    
}
}
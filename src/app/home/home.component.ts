import { Component, OnInit } from '@angular/core';
import { jsonSchema } from '../schema/jsonSchema';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;
  constructor() { }

  ngOnInit(): void {
    this.title = 'ang-clarity'
  }

  name = 'Angular 6';
  jsonFormOptions = {
    loadExternalAssets: false,
  };
  schema = {
    "type": "object",
    "properties": {
      "first_name": { "type": "string" },
      "last_name": { "type": "string" },
      "address": {
        "type": "object",
        "properties": {
          "street_1": { "type": "string" },
          "street_2": { "type": "string" },
          "city": { "type": "string" },
          "state": {
            "type": "string",
            "enum": [ "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE",
                "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA",
                "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS",
                "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND",
                "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD",
                "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY" ]
          },
          "zip_code": { "type": "string" }
        }
      },
      "birthday": { "type": "string" },
      "notes": { "type": "string" },
    },
    "required": [ "last_name" ]
  };

  layout = [ "*" ];

  submittedFormData;
  onSubmit(data: any) {
    this.submittedFormData = data;
  }

   showFormSchemaFn($event) {
    console.log($event);
  }

  showFormLayoutFn($event) {
    console.log($event);
  }

}

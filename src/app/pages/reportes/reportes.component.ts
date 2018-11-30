import { Component, OnInit } from '@angular/core';
// import AWS = require('aws-sdk');


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
/* 
  fileEvent(fileInput: any) {
    const AWSService = AWS;
    const region = '<insert your region here>';
    const bucketName = '<insert your bucket name>';
    const IdentityPoolId = '<insert your identity pool id>';
    const file = fileInput.target.files[0];
  
    AWSService.config.update({
      region: region,
      credentials: new AWSService.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
      })
    });
  
  //adds the S3 service, make sure the api version and bucket are correct
    const s3 = new AWSService.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: bucketName}
    });
  
  //I store this in a variable for retrieval later
    this.image = file.name;
  
    s3.upload({ Key: file.name, Bucket: bucketName, Body: file, ACL: 'public-read'}, function (err, data) {
     if (err) {
       console.log(err, 'there was an error uploading your file');
     }
   });
  } */

}

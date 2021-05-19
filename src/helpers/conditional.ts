// /*
//   FIRST_OF_EVERY_MONTH,
//   LAST_OF_EVERY_MONTH,
//   CUSTOM_OF_EVERY_MONTH,
//   TODAY,
//   CUSTOM_DATE
// */

// const a = {
//     "tenantName": "Sandeep Kumar",
//     "landLordName": "Krishna Reddy",
//     "landLordPan": "EKTYM5684P",
//     "panCard": "BGLRM0076S",
//     "aadharCard": "5600 2315 6987",
//     "address": "Blessed 70, Near Pragathi Sports Club, Anjappa Layout,  B Narayanapura, Mahadevapura, Bengaluru, Karnataka, 560048",
//     "fromDate": "01-01-2021",
//     "toDate": "01-06-2021",
//     "issuedDate": "12-May-2021",
//     "issuedDateType": "CUSTOM_OF_EVERY_MONTH",
//     "issuedDateValue": "05",
//     "receiptDate": "January-2021",
//     "email": "",
//     "amount": "13000"
//   };

//   const findMonth = (month) => {
//     const months = {
//       "01":"Jan",
//       "02":"Feb",
//       "03":"Mar",
//       "04":"Apr",
//       "05":"May",
//       "06":"Jun",
//       "07":"Jul",
//       "08":"Aug",
//       "09":"Sep",
//       "10":"Oct",
//       "11":"Nov",
//       "12":"Dec"
//     }
//     return  months[month];
//   };

//   const findIssuedDate = (type,value) => {
//     switch(type){
//       case "FIRST_OF_EVERY_MONTH" : {
//         return "01";
//       }
//       case "LAST_OF_EVERY_MONTH" : {
//         return "01";
//       }
//       case "CUSTOM_OF_EVERY_MONTH" : {
//         return value;
//       }
//     }
//   }

//   console.log(a.fromDate,a.toDate)
//   const fromMonth = a.fromDate.substring(3,5);
//   const toMonth =  a.toDate.substring(3,5);

//   const numberOfReceipts = Number(toMonth)-Number(fromMonth);
//   console.log(numberOfReceipts)
//   console.log(findMonth("02"))

export const template = (data: any, buffer: any) => {

  return `
    <!DOCTYPE html>
    <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://fonts.googleapis.com/css?family=Cinzel|Montserrat&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      </head>
  
      <style>
        body {
          top: 0;
          left: 0;
        } 
    
        .main {
          padding:0;
          margin:2%;
          font-size:1rem;
          height:174mm;
          min-height:174mm;
          max-height:174mm;
        }
    
        .container-vertical-one {
          margin:0;
          border:1px solid #f17831 !important;
          height:30mm;
          min-height:30mm;
          max-height:30mm;
          width:100%;
          min-width:100%;
          max-width:100%;
        }
    
        .container-vertical-one-horizontal-one {
          width:25%;
          min-width:25%;
          max-width:25%;
          padding-left:3%;
          float:left;
          margin-top:0;
          border-right : 1px solid #f17831 !important;  height:30mm;
          min-height:30mm;
          max-height:30mm;
        }

        .container-vertical-one-horizontal-two {
          width:40%;
          min-width:40%;
          max-width:40%;
          margin-left:25%;
          font-size:1rem;
          font-family: Arial, Helvetica, sans-serif;
          height:30mm;
          min-height:30mm;
          max-height:30mm;
        }

        .container-vertical-one-horizontal-three {
          width:35%;
          min-width:35%;
          max-width:35%;
          padding-left:4.5%;
          padding-top:1.5%;
          border-left : 1px solid #f17831 !important;
          float:right;    
          height:30mm;
          min-height:30mm;
          max-height:30mm;
        }

        .container-vertical-one-horizontal-two-companyName {
          background-color: #f17831 !important;
          color : #fff !important;
          text-transform: uppercase;
          font-size:1.2rem;
          font-weight:bold;
          padding-left:2%;
          letter-spacing:2px;
        }

        .container-vertical-one-horizontal-two-companyAddress {
          padding-left:2%;
          font-family: Arial, Helvetica, sans-serif;
          font-size:1.1rem;
        }

        .container-vertical-one-horizontal-two-companyGst {
          padding-left:2%;
          font-family: Arial, Helvetica, sans-serif;
          font-size:1.2rem;
          padding-top:1%;
        }

        .container-vertical-two {
          border-left:1px solid #f17831 !important;
          border-right:1px solid #f17831 !important;
          margin: 0;
          height:114mm;
          min-height:114mm;
          max-height:114mm;
        }

        .container-vertical-three {
          border:1px solid #f17831 !important;
          margin: 0;
          height:30mm;
          min-height:30mm;
          max-height:30mm;
        }

        .container-vertical-three-horizontal-one{
          float:left;
          margin-top:0;
          border-right : 1px solid #f17831 !important;  
          height:30mm;
          min-height:30mm;
          max-height:30mm;
          width:50%;
          min-width:50%;
          max-width:50%;
        }

        .container-vertical-three-horizontal-two{
          float:right;
          margin-top:0;
          height:30mm;
          min-height:30mm;
          max-height:30mm;
          width:50%;
          min-width:50%;
          max-width:50%;
        }

        .container-vertical-three-horizontal-one-top, .container-vertical-three-horizontal-two-top{
          background-color: #f17831 !important;
          color : #fff !important;
          text-transform: uppercase;
          font-size:1.2rem;
          font-weight:bold;
          padding-left:2%;
          letter-spacing:2px;
        }

        .container-vertical-three-horizontal-one-center{
          font-size:1rem;
          padding-left:2%;
          padding-top:2%;
          font-family: Arial, Helvetica, sans-serif;
        }

        .container-vertical-three-horizontal-two-center{
          font-size:1rem;
          padding-left:2%;
          font-family: Arial, Helvetica, sans-serif;
        }

        .container-vertical-three-horizontal-one-bottom, .container-vertical-three-horizontal-two-bottom{
          font-size:1rem;
          padding-left:2%;
          padding-top:2%;
          text-transform: uppercase;
          font-family: Arial, Helvetica, sans-serif;
        }

        .container-vertical-three-horizontal-two-top-one-name{
          float:left;  
          font-size:1rem;
          padding-top:1%;
          padding-left:2%;
          text-transform: uppercase;
          font-family: Arial, Helvetica, sans-serif;
          border-right : 1px solid #f17831 !important;  
          border-bottom : 1px solid #f17831 !important;  
          width:50%;
          min-width:50%;
          max-width:50%;
          height:6mm;
          min-height:6mm;
          max-height:6mm;
        }

        .container-vertical-three-horizontal-two-top-one-mobile{
          float:right; 
          font-size:1rem;
          padding-left:2%;
          padding-top:1%;
          text-transform: uppercase;
          border-bottom : 1px solid #f17831 !important;  
          font-family: Arial, Helvetica, sans-serif;
          width:50%;
          min-width:50%;
          max-width:50%;
          height:6mm;
          min-height:6mm;
          max-height:6mm;
        }

        .container-vertical-two-horizontal-one{
          border-right : 1px solid #f17831 !important;  
          float:left;
          height:114mm;
          min-height:114mm;
          max-height:114mm;
          width:45%;
          min-width:45%;
          max-width:45%;
          display:flex;
          flex-direction:column;
        }

        .container-vertical-two-horizontal-two {
          float:right;
          height:114mm;
          min-height:114mm;
          max-height:114mm;
          width:55%;
          min-width:55%;
          max-width:55%;
        }

        .container-vertical-two-horizontal-one-top {
          height:40mm;
          min-height:40mm;
          max-height:40mm;
          float:top;
        }
        .container-vertical-two-horizontal-one-bottom {
          height:40mm;
          min-height:40mm;
          float:bottom;
          max-height:40mm;
        }

        .container-vertical-two-horizontal-one-bottom-most{
          border : 1px solid #f17831 !important;  
          height:34mm;
          min-height:34mm;
          max-height:34mm;
        }

        .container-vertical-two-horizontal-one-top-heading, .container-vertical-two-horizontal-one-bottom-heading{
          background-color: #f17831 !important;
          color : #fff !important;
          text-transform: uppercase;
          font-size:1.2rem;
          font-weight:bold;
          padding-left:2%;
          padding-top:1%;
          letter-spacing:2px;
          height:7mm;
          min-height:7mm;
          max-height:7mm;
        }

        .container-vertical-two-horizontal-one-top-name, .container-vertical-two-horizontal-one-bottom-name{
          font-size:1rem;
          padding-left:2%;
          padding-top:2%;
          font-family: Arial, Helvetica, sans-serif;
          height:6mm;
          min-height:6mm;
          max-height:6mm;
        }

        .container-vertical-two-horizontal-one-top-address, .container-vertical-two-horizontal-one-bottom-address{
          font-family: Arial, Helvetica, sans-serif;
          font-size:1rem;
          padding-left:2%;
          padding-top:2%;
          height:20mm;
          min-height:20mm;
          max-height:20mm;
        }

        .container-vertical-two-horizontal-one-top-others, .container-vertical-two-horizontal-one-bottom-others{
          height:8mm;
          min-height:8mm;
          max-height:8mm;
        }

        .container-vertical-two-horizontal-one-top-others-pincode, .container-vertical-two-horizontal-one-bottom-others-pincode{
          float:left;  
          font-size:1rem;
          padding-left:2%;
          text-transform: uppercase;
          font-family: Arial, Helvetica, sans-serif;
          border-right : 1px solid #f17831 !important;  
          border-top : 1px solid #f17831 !important;  
          width:50%;
          min-width:50%;
          max-width:50%;
          padding-top:1.5%;
          height:8mm;
          min-height:8mm;
          max-height:8mm;
        }

        .container-vertical-two-horizontal-one-top-others-mobile, .container-vertical-two-horizontal-one-bottom-others-mobile{
          float:right;  
          font-size:1rem;
          padding-left:2%;
          text-transform: uppercase;
          font-family: Arial, Helvetica, sans-serif;
          border-right : 1px solid #f17831 !important;  
          border-top : 1px solid #f17831 !important;  
          width:50%;
          min-width:50%;
          max-width:50%;
          padding-top:1.5%;
          height:8mm;
          min-height:8mm;
          max-height:8mm;
        }

        .container-vertical-two-horizontal-two-top {
          height:64mm;
          min-height:64mm;
          max-height:64mm;
          float:top;
        }

        .container-vertical-two-horizontal-two-bottom {
          border-top : 1px solid #f17831 !important;  
          height:50mm;
          min-height:50mm;
          max-height:50mm;
          float:bottom;
        }

        .container-vertical-two-horizontal-two-bottom-left {
          height:50mm;
          min-height:50mm;
          max-height:50mm;
          float:left;
          border-right : 1px solid #f17831 !important;  
          width:36.5%;
          min-width:36.5%;
          max-width:36.5%;
        }

        .container-vertical-two-horizontal-two-bottom-right {
          height:50mm;
          min-height:50mm;
          max-height:50mm;
          float:right;
          width:63.5%;
          min-width:63.5%;
          max-width:63.5%;
        }

        table {
          margin: 0;
          padding:0;
          width:100%;
          min-width:100%;
          max-width:100%;
          height:50mm;
          min-height:50mm;
          max-height:50mm;
        }

        .charges-table-heading-one {
          border-right : 1px solid white !important;
          border-left : 1px solid white !important;
          border-bottom : 1px solid #f17831 !important;
          width:50%;
          min-width:50%;
          max-width:50%;
          height:5.5mm;
          min-height:5.5mm;
          padding-left:2%;
          max-height:5.5mm;
          font-family: Arial, Helvetica, sans-serif;
          background-color: #f17831 !important;
          color : #fff !important;
          font-size:1.2rem;
          text-transform: uppercase;
          letter-spacing:2px;

        }

        .charges-table-heading-two {
          border-bottom : 1px solid #f17831 !important;
          width:50%;
          min-width:50%;
          max-width:50%;
          height:5.5mm;
          min-height:5.5mm;
          max-height:5.5mm;
          padding-left:5%;
          font-family: Arial, Helvetica, sans-serif;
          background-color: #f17831 !important;
          color : #fff !important;
          font-size:1.2rem;
          text-transform: uppercase;
          letter-spacing:2px;

        }

        .charges-table-body-one{
          border-right : 1px solid #f17831 !important;
          border-bottom : 1px solid #f17831 !important;
          width:50%;
          min-width:50%;
          max-width:50%;
          height:5.5mm;
          min-height:5.5mm;
          max-height:5.5mm;
          padding-left:2%;
          font-family: Arial, Helvetica, sans-serif;
          font-size:1.1rem;
          letter-spacing:1px;

        }

        .charges-table-body-two{
          border-bottom : 1px solid #f17831 !important;
          width:50%;
          min-width:50%;
          max-width:50%;
          height:5.5mm;
          min-height:5.5mm;
          max-height:5.5mm;
          padding-left:2%; 
          font-family: Arial, Helvetica, sans-serif;
          letter-spacing:1px;
          font-size:1.1rem;
        }

        .more-info-actual-weight-heading, .more-info-charged-weight-heading, .more-info-total-weight-heading, .more-info-total-cbm-heading {
          padding-left:2%;
          text-transform: uppercase;
          border-bottom : 1px solid #f17831 !important;  
          font-family: Arial, Helvetica, sans-serif;
          background-color: #f17831 !important;
          color : #fff !important;
          font-size:1.2rem;
          float:top;
          height:6.25mm;
          min-height:6mm;
          max-height:6mm;
          font-weight:bold;
          letter-spacing:2px;


        }

        .more-info-actual-weight-body, .more-info-charged-weight-body, .more-info-total-weight-body , .more-info-total-cbm-body{
          font-size:1.2rem;
          padding-left:2%;
          font-family: Arial, Helvetica, sans-serif;
          float:bottom;
          height:6.25mm;
          min-height:6.25mm;
          max-height:6.25mm;
          text-align:center;
        }

        table{
          table-layout: fixed
        }

        .items-table-heading-one{
          border-left : 1px solid white !important;
          border-bottom : 1px solid #f17831 !important;
          width:36.5%;
          min-width:36.5%;
          max-width:36.5%;
          height:7mm;
          min-height:7mm;
          padding-left:2%;
          max-height:7mm;
          font-family: Arial, Helvetica, sans-serif;
          background-color: #f17831 !important;
          color : #fff !important;
          font-size:1.2rem;
          text-transform: uppercase;
          letter-spacing:2px;
        }

        .items-table-heading-two{
          border-left : 1px solid white !important;
          border-bottom : 1px solid #f17831 !important;
          height:7mm;
          min-height:7mm;
          padding-left:2%;
          max-height:7mm;
          font-family: Arial, Helvetica, sans-serif;
          background-color: #f17831 !important;
          color : #fff !important;
          font-size:1.2rem;
          text-transform: uppercase;
          letter-spacing:2px;
          width:13.5%;
          min-width:13.5%;
          max-width:13.5%;
        }

        .items-table-heading-three, .items-table-heading-four, .items-table-heading-five {
          border-left : 1px solid white !important;
          border-bottom : 1px solid #f17831 !important;
          height:7mm;
          min-height:7mm;
          padding-left:2%;
          max-height:7mm;
          font-family: Arial, Helvetica, sans-serif;
          background-color: #f17831 !important;
          color : #fff !important;
          font-size:1.2rem;
          text-transform: uppercase;
          letter-spacing:2px;
          width:12%;
          min-width:12%;
          max-width:12%;
        }

        .items-table-heading-six {
          border-left : 1px solid white !important;
          border-bottom : 1px solid #f17831 !important;
          height:7mm;
          min-height:7mm;
          padding-left:1%;
          max-height:7mm;
          font-family: Arial, Helvetica, sans-serif;
          background-color: #f17831 !important;
          color : #fff !important;
          font-size:1.2rem;
          text-transform: uppercase;
          letter-spacing:2px;
          width:14%;
          min-width:14%;
          max-width:14%;
        }

        .items-table-body-row{
          width:100%;
          min-width:100%;
          max-width:100%;
        }

        .items-table-body-one {
          border-top : 1px solid #f17831 !important;
          border-right : 1px solid #f17831 !important;
          width:36.5%;
          min-width:36.5%;
          max-width:36.5%;
          height:7.125mm;
          max-height:7.125mm;
          min-height:7.125mm;
          padding-left:2%;
          font-family: Arial, Helvetica, sans-serif;
          font-size:1.1rem;
          text-transform: uppercase;
          letter-spacing:1px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;  
          display: table-cell;  
        }

        

        .items-table-body-two{
          border-left : 1px solid #f17831 !important;
          border-top : 1px solid #f17831 !important;
          height:7.125mm;
          min-height:7.125mm;
          padding-left:2%;
          max-height:7.125mm;
          font-family: Arial, Helvetica, sans-serif;
          font-size:1.1rem;
          width:13.5%;
          min-width:13.5%;
          max-width:13.5%;
        }

        .items-table-body-three, .items-table-body-four, .items-table-body-five {
          border-left : 1px solid #f17831 !important;
          border-top : 1px solid #f17831 !important;
          height:7.125mm;
          min-height:7.125mm;
          padding-left:2%;
          max-height:7.125mm;
          font-family: Arial, Helvetica, sans-serif;
          font-size:1.1rem;
          width:12%;
          min-width:12%;
          max-width:12%;
        }

        .items-table-body-six {
          border-left : 1px solid #f17831 !important;
          border-top : 1px solid #f17831 !important;
          height:7.125mm;
          min-height:7.125mm;
          padding-left:2%;
          max-height:7.125mm;
          font-family: Arial, Helvetica, sans-serif;
          font-size:1.1rem;
          width:14%;
          min-width:14%;
          max-width:14%;
        }

        .container-vertical-two-horizontal-one-bottom-most-goods-cost{
          float:left;  
          font-size:1rem;
          padding-left:2%;
          text-transform: uppercase;
          font-family: Arial, Helvetica, sans-serif;
          border-right : 1px solid #f17831 !important;  
          border-bottom : 1px solid #f17831 !important;  
          width:50%;
          min-width:50%;
          max-width:50%;
          padding-top:1.5%;
          height:7mm;
          min-height:7mm;
          max-height:7mm;
        }

        .container-vertical-two-horizontal-one-bottom-most-total-cost{
          float:left;  
          font-size:1rem;
          padding-left:2%;
          text-transform: uppercase;
          font-family: Arial, Helvetica, sans-serif;
          border-right : 1px solid #f17831 !important;  
          border-bottom : 1px solid #f17831 !important;  
          width:50%;
          min-width:50%;
          max-width:50%;
          padding-top:1.5%;
          height:7mm;
          min-height:7mm;
          max-height:7mm;
        }

        .container-vertical-two-horizontal-one-bottom-most-top{
          float:top;
        }

        .container-vertical-two-horizontal-one-bottom-most-bottom{
          padding-top:4%;
          float:bottom;
        }

        .container-vertical-two-horizontal-one-bottom-most-bottom-remarks{
          padding-left:2%;
          font-family: Arial, Helvetica, sans-serif;
          font-size:1.1rem;
          height:27mm;
          min-height:27mm;
          max-height:27mm;
          letter-spacing:1px;
        }

      </style>
  
      <body>
        
          <div class="main" >

            <div class="container-vertical-one">
              
              <div class="container-vertical-one-horizontal-one">
                <img width="150" height="100" src=${data.companyLogoUrl} alt="logo" />
              </div>
              
              <div class="container-vertical-one-horizontal-three">
                <img src="data:image/png;base64,${buffer}" width="250" height="80" alt="Barcode" />
              </div>

              <div class="container-vertical-one-horizontal-two">
                <div class="container-vertical-one-horizontal-two-companyName">SmartShip Innovative Solutions Pvt LTD </div> <br />
                <div class="container-vertical-one-horizontal-two-companyAddress">Registered Office: ${data.companyAddress}</div>
                <div class="container-vertical-one-horizontal-two-companyGst">GSTIN: ${data.companyGst}</div>
              </div>
              
            </div>

            <div class="container-vertical-two">

              <div class="container-vertical-two-horizontal-one">

                <div class="container-vertical-two-horizontal-one-top">
                  <div class="container-vertical-two-horizontal-one-top-heading">
                    Consignor (From)
                  </div>
                  <div class="container-vertical-two-horizontal-one-top-name">
                    Name : ${data.consignorName}
                  </div>
                  <div class="container-vertical-two-horizontal-one-top-address">
                     Address : ${data.consignorAddress}
                  </div>
                  <div class="container-vertical-two-horizontal-one-top-others">
                    <div class="container-vertical-two-horizontal-one-top-others-pincode">
                      Pincode :  ${data.consignorPincode}
                    </div>
                    <div class="container-vertical-two-horizontal-one-top-others-mobile">
                      Mobile :  ${data.consignorMobileNo}
                    </div>
                  </div>
                </div>
                
                <div class="container-vertical-two-horizontal-one-bottom">
                  <div class="container-vertical-two-horizontal-one-bottom-heading">
                    Consignee (To)
                  </div>
                  <div class="container-vertical-two-horizontal-one-bottom-name">
                    Name : ${data.consigneeName}
                  </div>
                  <div class="container-vertical-two-horizontal-one-bottom-address">
                     Address : ${data.consigneeAddress}
                  </div>
                  <div class="container-vertical-two-horizontal-one-bottom-others">
                    <div class="container-vertical-two-horizontal-one-bottom-others-pincode">
                      Pincode :  ${data.consigneePincode}
                    </div>
                    <div class="container-vertical-two-horizontal-one-bottom-others-mobile">
                      Mobile :  ${data.consigneeMobileNo}
                    </div>
                  </div>
              </div>

              <div class="container-vertical-two-horizontal-one-bottom-most">
                <div class="container-vertical-two-horizontal-one-bottom-most-top">
                  <div class="container-vertical-two-horizontal-one-bottom-most-goods-cost">
                  Goods Value :₹ ${data.goodsValue}
                  </div>
                  <div class="container-vertical-two-horizontal-one-bottom-most-total-cost">
                    Total Cost :₹ ${data.totalAmount}
                  </div>
                </div>
                
                <div class="container-vertical-two-horizontal-one-bottom-most-bottom">
                  <div class="container-vertical-two-horizontal-one-bottom-most-bottom-remarks">
                    Remarks : 
                  </div>
                </div>
              </div>

              </div>

              <div class="container-vertical-two-horizontal-two">
                <div class="container-vertical-two-horizontal-two-top">
                <table>
                <tr>
                  <th class="items-table-heading-one">Item</th>
                  <th class="items-table-heading-two">Qty</th>
                  <th class="items-table-heading-three">L</th>
                  <th class="items-table-heading-four">B</th>
                  <th class="items-table-heading-five">H</th>
                  <th class="items-table-heading-six">Wt(Kgs)</th>
                </tr>
                
                ${data.itemDetails.map((item: any)=>{
                  return`
                    <tr class="items-table-body-row">
                      <td class="items-table-body-one">${item.itemName}</td>
                      <td class="items-table-body-two">${item.qty}</td>
                      <td class="items-table-body-three">${item.length}</td>
                      <td class="items-table-body-four">${item.breadth}</td>
                      <td class="items-table-body-five">${item.height}</td>
                      <td class="items-table-body-six">${item.weight}</td>
                    </tr>
                  `;
                }).join(" ")}

              </table>
                </div>
                <div class="container-vertical-two-horizontal-two-bottom">

                  <div class="container-vertical-two-horizontal-two-bottom-left">
                    <div class="more-info-actual-weight-heading">Actual Weight</div>
                    <div class="more-info-actual-weight-body">${data.actualWeight} Kgs</div>
                    <div class="more-info-charged-weight-heading">Charged Weight</div>
                    <div class="more-info-charged-weight-body"></div>
                    <div class="more-info-total-weight-heading">Total Weight</div>
                    <div class="more-info-total-weight-body">${data.totalWeight} Kgs</div>
                    <div class="more-info-total-cbm-heading">Total CBM</div>
                    <div class="more-info-total-cbm-body">${data.totalCbm} Kgs</div>
                  </div>

                  <div class="container-vertical-two-horizontal-two-bottom-right">
                    
                    <table>
                      <tr>
                        <th class="charges-table-heading-one">Charges</th>
                        <th class="charges-table-heading-two">Amount</th>
                      </tr>
                      <tr>
                        <td class="charges-table-body-one">Freight</td>
                        <td class="charges-table-body-two">₹</td>
                      </tr>
                      <tr>
                        <td class="charges-table-body-one">Fuel</td>
                        <td class="charges-table-body-two">₹</td>
                      </tr>
                      <tr>
                        <td class="charges-table-body-one">Fov/Ins</td>
                        <td class="charges-table-body-two">₹</td>
                      </tr>
                      <tr>
                        <td class="charges-table-body-one">Others</td>
                        <td class="charges-table-body-two">₹</td>
                      </tr>
                      <tr>
                      <td class="charges-table-body-one">Hamli</td>
                      <td class="charges-table-body-two">₹</td>
                    </tr>
                    <tr>
                      <td class="charges-table-body-one">Sub Total</td>
                      <td class="charges-table-body-two">₹</td>
                    </tr>
                    <tr>
                      <td class="charges-table-body-one">GST</td>
                      <td class="charges-table-body-two">₹</td>
                    </tr>
                    <tr>
                      <td class="charges-table-body-one">Total</td>
                      <td class="charges-table-body-two">₹</td>
                    </tr>
                    </table>
                  </div>
                </div>
              </div>

            </div>

            <div class="container-vertical-three">

              <div class="container-vertical-three-horizontal-one">
                <div class="container-vertical-three-horizontal-one-top">
                  Shippers Agreement 
                </div>
                <div class="container-vertical-three-horizontal-one-center">
                  I/We Certify that the content of the package handed over to us are correctly declared and do not contain any item prohibited/restricted for carriage.
                </div>
                <div class="container-vertical-three-horizontal-one-bottom">
                 Consignor Signature : 
                </div>
              </div>

              <div class="container-vertical-three-horizontal-two">
                <div class="container-vertical-three-horizontal-two-top">
                  Acknowledgement / Proof Of Delivery
                </div>
                <div class="container-vertical-three-horizontal-two-top-one">
                  <div class="container-vertical-three-horizontal-two-top-one-name">
                    Name : 
                  </div>
                  <div class="container-vertical-three-horizontal-two-top-one-mobile">
                    Mobile : 
                  </div>
                </div>
                <div class="container-vertical-three-horizontal-two-center">
                  I/We have recieved cargo in good and intact condition.
                </div>
                <div class="container-vertical-three-horizontal-two-bottom">
                  Consignee Signature : 
                </div>
              </div>

            </div>

          </div>
        
      </body>
    </html>
    `;
};
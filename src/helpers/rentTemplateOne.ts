export const template = (data: any[]) => {

  return `
    <!DOCTYPE html>
    <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://fonts.googleapis.com/css?family=Cinzel|Montserrat&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      </head>
  
      <style>
        body {
          top: 0;
          left: 0;
          font-size: 100%;
        } 

        html{
          zoom: 0.5;
        }

        @media print {
          .pagebreak-div {
              display:block;
              page-break-inside: avoid;
              page-break-before: auto;
          }
        }
    
        .main {
          padding:0;
          margin:3%;
          font-size:1rem;
          height:290mm;
          min-height:290mm;
          max-height:290mm;
        }

        .container {
          height:80mm;
          min-height:80mm;
          max-height:80mm;
          width:100%;
          min-width:100%;
          max-width:100%;
          border:2px solid #392f5a;
          margin-top:7mm;
          box-sizing:border-box;
          display:inline-block;
        }

        .container-horizontal-one{
          height:20mm;
          min-height:20mm;
          max-height:20mm;
          margin-top:3mm;
        }

        .container-horizontal-two{
          margin-top:3mm;
          height:36mm;
          min-height:36mm;
          max-height:36mm;
          font-size:1.4rem;
          font-family: Arial, Helvetica, sans-serif;
        }

        .container-horizontal-three{
          height:15mm;
          min-height:15mm;
          max-height:15mm;
        }

        .container-horizontal-one-vertical-one{
          height:20mm;
          min-height:20mm;
          max-height:20mm;
          float:left;
          width:80%;
          min-width:80%;
          max-width:80%;
        }

        .container-horizontal-one-vertical-two{
          height:20mm;
          min-height:20mm;
          max-height:20mm;
          float:right;
          width:20%;
          min-width:20%;
          max-width:20%;
        }

        .container-horizontal-one-vertical-one-top {
          font-size:2rem;
          font-family: Arial, Helvetica, sans-serif;
          letter-spacing:2px;
          text-transform: uppercase;
        }

        .container-horizontal-one-vertical-one-bottom {
          font-size:1.5rem;
          font-family: Arial, Helvetica, sans-serif;
        }

        .container-horizontal-one-vertical-two-top {
          font-size:1.4rem;
          font-family: Arial, Helvetica, sans-serif;
          letter-spacing:2px;
          text-transform: uppercase;
        }

        .container-horizontal-one-vertical-two-bottom{
          font-size:1.5rem;
          font-family: Arial, Helvetica, sans-serif;
        }

        .container-horizontal-three-vertical-one{
          float : left;
        }

        .container-horizontal-three-vertical-one-top{
          float : top;
          font-size:1.4rem;
          font-family: Arial, Helvetica, sans-serif;
        }

        .container-horizontal-three-vertical-one-bottom{
          float : bottom;
          font-size:1.2rem;
          font-family: Arial, Helvetica, sans-serif;
        }

      </style>
  
      <body>
        
          <div class="main" >
          ${data.map((dataItem: any, i: number) => {
    return `
            
            <div class="container pagebreak-div" >
              <div class="container-horizontal-one">
                <div class="container-horizontal-one-vertical-one">
                
                  <div class="container-horizontal-one-vertical-one-top">
                    <strong> Rent Receipt </strong>
                  </div>
                  <div class="container-horizontal-one-vertical-one-bottom">
                    ${dataItem.receiptDate}
                  </div>

                </div>
                <div class="container-horizontal-one-vertical-two">
                  <div class="container-horizontal-one-vertical-two-top">
                    <strong> Receipt No: ${i + 1}</strong>
                  </div>
                  <div class="container-horizontal-one-vertical-two-bottom">
                    Date : ${dataItem.issuedDate}
                  </div>
                </div>
              </div>

              <div class="container-horizontal-two">
                Received sum of INR Rs. <strong> ${dataItem.amount} </strong> from <strong> ${dataItem.tenantName}</strong> towards the rent of property
                located at <strong> ${dataItem.address} </strong> for the period from <strong> ${dataItem.fromDate} </strong> to <strong> ${dataItem.toDate} </strong>
              </div>

              <div class="container-horizontal-three">
                <div class="container-horizontal-three-vertical-one">
                  <div class="container-horizontal-three-vertical-one-top">
                    <strong> ${dataItem.landLordName}</strong>
                  </div>
                  <div class="container-horizontal-three-vertical-one-bottom">
                    Signature : 
                  </div>
                </div>
              </div>

            </div>

            `;
  }).join(" ")}
          </div>
        
      </body>
    </html>
    `;
};
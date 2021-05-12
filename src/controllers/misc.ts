import { Request, Response } from "express";
import * as pdf from "html-pdf";
import { template } from "../helpers/rentTemplateOne";

let count = 0;

export const sendEmail = async (req: Request, res: Response) => {
    res.json({
        msg: "Hi"
    });
};

export const generatePdf = async (req: Request, res: Response) => {
    const data: any[] = [
        {
            tenantName: "Sandeep Kumar",
            landLordName: "Krishna Reddy",
            panCard: "BGLRM0076S",
            aadharCard: "5600 2315 6987",
            address: "Blessed 70, Near Pragathi Sports Club, Anjappa Layout, B Narayanapura, Mahadevapura, Bengaluru, Karnataka, 560048",
            fromDate: "01-Jan-2021",
            toDate: "31-Jan-2021",
            issuedDate: "12-May-2021",
            receiptDate: "January-2021",
            email: "",
            amount: "13000"
        },
        {
            tenantName: "Sandeep Kumar",
            landLordName: "Krishna Reddy",
            panCard: "BGLRM0076S",
            aadharCard: "5600 2315 6987",
            address: "Blessed 70, Near Pragathi Sports Club, Anjappa Layout, B Narayanapura, Mahadevapura, Bengaluru, Karnataka, 560048",
            fromDate: "01-Feb-2021",
            toDate: "28-Feb-2021",
            issuedDate: "12-May-2021",
            receiptDate: "February-2021",
            email: "",
            amount: "13000"
        },
        {
            tenantName: "Sandeep Kumar",
            landLordName: "Krishna Reddy",
            panCard: "BGLRM0076S",
            aadharCard: "5600 2315 6987",
            address: "Blessed 70, Near Pragathi Sports Club, Anjappa Layout, B Narayanapura, Mahadevapura, Bengaluru, Karnataka, 560048",
            fromDate: "01-Mar-2021",
            toDate: "31-Mar-2021",
            issuedDate: "12-May-2021",
            receiptDate: "March-2021",
            email: "",
            amount: "13000"
        },
        {
            tenantName: "Sandeep Kumar",
            landLordName: "Krishna Reddy",
            panCard: "BGLRM0076S",
            aadharCard: "5600 2315 6987",
            address: "Blessed 70, Near Pragathi Sports Club, Anjappa Layout, B Narayanapura, Mahadevapura, Bengaluru, Karnataka, 560048",
            fromDate: "01-Apr-2021",
            toDate: "31-Apr-2021",
            issuedDate: "12-May-2021",
            receiptDate: "April-2021",
            email: "",
            amount: "13000"
        },
        {
            tenantName: "Sandeep Kumar",
            landLordName: "Krishna Reddy",
            panCard: "BGLRM0076S",
            aadharCard: "5600 2315 6987",
            address: "Blessed 70, Near Pragathi Sports Club, Anjappa Layout, B Narayanapura, Mahadevapura, Bengaluru, Karnataka, 560048",
            fromDate: "01-May-2021",
            toDate: "31-May-2021",
            issuedDate: "12-May-2021",
            receiptDate: "May-2021",
            email: "",
            amount: "13000"
        }
    ];
    count = count + data.length;
    const pdfCreate = await pdf.create(template(data), {
        height: "297mm", width: "210mm", timeout: 120000
    });
    const nameToPdf = Date.now();

    pdfCreate.toFile(`src/csv/${nameToPdf}.pdf`, (err: any) => {
        if (err) {
            console.log(err, "pdf err");
            res.send(Promise.reject());
        }
        res.sendFile(`csv/${nameToPdf}.pdf`, { root: "src" });
        console.log(`PDF Generated For  ${data.length} Receipts`);
        console.log(`${count} Receipts  Generated So far`);
    });

};

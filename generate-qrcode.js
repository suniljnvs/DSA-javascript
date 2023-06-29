const fs = require("fs");
const moment = require('moment')
const QRcode = require("qrcode");
const path = require('path');


function getseries(quantity) {
    num = "";
    if (quantity) {
        var noLength = quantity.length;
        if (noLength == 0 || noLength == 1) {
            num = "00000";
        } else if (noLength == 2) {
            num = "0000";
        } else if (noLength == 3) {
            num = "000";
        } else if (noLength == 4) {
            num = "00";
        } else if (noLength == 5) {
            num = "0";
        }
    }

    return num;

}


app.post('/qrcode', async function (req, res) {
    var user_id = req.body.user_id;
    var location_id = req.body.location_id;
    var qr_quantity = req.body.quantity;

    var today = new Date();
    var curMonth = today.getMonth(); //get current month
    var curYears = today.getFullYear(); //get current month
    var fiscalYr = "";
    if (curMonth > 3) {
        fiscalYr = today.getFullYear().toString() + "-" + (today.getFullYear() + 1);
    } else {
        fiscalYr = (today.getFullYear() - 1).toString() + "-" + (today.getFullYear() + 1);
    }

    var quantitydata = await db.query("SELECT SUM(quantity) AS reward_quantity from reward_points where user_id =? AND location_id =?", [user_id, location_id]);
    var quantityre = quantitydata[0][0].reward_quantity;

    var seriesno = await getseries(quantityre);
    var fromnumber = seriesno + (parseInt(quantityre) + 1);
    var tonumber = seriesno + (parseInt(quantityre) + qr_quantity);

    var series = fromnumber + "-" + tonumber;
    var serialNumber = curYears + "X" + fromnumber + " to " + tonumber;

    [row] = await db.query("INSERT INTO reward_points set user_id =? , location_id =? , quantity =?, series =?, serial_number =?", [user_id, location_id, qr_quantity, series, serialNumber]);

    reward_id = row.insertId;

    if (reward_id) {
        var imagecount = parseInt(quantityre) + 1;

        for (let i = 0; i < qr_quantity; i++) {
            var imagename = curYears + "X" + seriesno + imagecount;

            if (!fs.existsSync('images/barcode')) {
                fs.mkdirSync('images/barcode', { recursive: true });
            }
            var imagename1 = `${imagename}.png`

            // QR code generate
            QRcode.toFile(path.join('images/barcode', `${imagename1}`), `${imagename1}`, (err) => {
                if (err) throw err;
            });

            await db.query("INSERT INTO barcode set reward_id = ?, serial_number = ?, year =?, image = ?", [reward_id, imagename, fiscalYr, imagename1])

            imagecount += 1;

        }

    }

    return res.send({status : true, message : "Barcode Generated successfully"})

})



// generate pdf 

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Barcode PDF</title>
    <style>
        /* Define your CSS styles for the PDF */
        body {
            font-family: Arial, sans-serif;
            border : 1px solid #ccc;


        }
        .card {
            width: 170px;
            height: 170px;
            margin: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            text-align: center;
        }

    </style>
</head>
<body>
    <!-- I want to 12 image in page with 3 column in php to modified the below code -->

    <div style="margin: 10px; display: block;">
        <table width="100%" >
            @php
                $pageNumber = 1; // initialize page number
            @endphp
            @foreach($dataaaa as $key => $imagePath)
                @if($key % 12 == 0)
                    @if($key != 0)
                        </table> <!-- Close the previous table -->
                        @php
                            $pageNumber++; // increment page number
                        @endphp
                    @endif
                    <!-- @if($pageNumber == 1)
                        <h1 align="center">My Heading</h1>
                    @endif -->
                    <div style="margin: 10px; display: block;">
                        <table width="100%" >
                @endif
                @if ($key % 3 == 0)
                    @if ($key > 0)
                        </tr>
                    @endif
                    <tr>
                @endif
                <td colspan="3" style="text-align: center;">
                    <div class="card">
                        <img src="{{ $imagePath['imagePath'] }}" style="margin-top: 10px;margin-bottom: 10px; width: 150px; height : 150px;" >

                    </div>
                </td>
                @if (($key + 1) % 3 == 0)
                    </tr>
                    @if (($key + 1) % 12 == 0)
                    @endif
                @endif
            @endforeach
        </table>
    </div>
</body>
</html>

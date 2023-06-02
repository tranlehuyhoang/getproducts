import { User } from "../database/data.js"
import { Chatroom } from "../database/data.js";
import { Online } from "../database/data.js";
import https from 'https';


export async function getLink(req, res) {
    try {
        const { link } = req.body;
         
        const encodedUrl = encodeURIComponent(link);
        const options = {
            hostname: 'shopee.vn',
            path: '/api/v4/pages/get_category_tree',
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
                'Referer': encodedUrl,
                'X-Requested-With': 'XMLHttpRequest',
                'X-Shopee-Language': 'vi',
                'X-Api-Source': 'pc'
            }
        };

        const req1 = https.request(options, (res1) => {
            console.log(`statusCode: ${res1.statusCode}`);
            let data = '';
            res1.on('data', (d) => {
                data += d;
            });
            res1.on('end', () => {
                console.log(data)
                res.status(200).json({ data: JSON.parse(data) });
            });
        });
        req1.on('error', (error) => {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while retrieving the link' });
        });
        req1.end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while retrieving the link' });
    }
}
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000


axios.get('https://www.bmkg.go.id/')
    .then((response) => {
        let $ = cheerio.load(response.data);
        let articles = [];

        $('#meteorologi-geofisika').each((index, element) => {
            articles.push({
                tanggal: $(element).find('div div div.col-md-4.md-margin-bottom-10 div.gempabumi-home-bg.margin-top-13 div div.col-md-6.col-xs-6.gempabumi-detail.no-padding ul li:nth-child(1) span').text().trim(),
				kekuatan: $(element).find('div div div.col-md-4.md-margin-bottom-10 div.gempabumi-home-bg.margin-top-13 div div.col-md-6.col-xs-6.gempabumi-detail.no-padding ul li:nth-child(2)').text().trim(),
			    kedalaman: $(element).find('div div div.col-md-4.md-margin-bottom-10 div.gempabumi-home-bg.margin-top-13 div div.col-md-6.col-xs-6.gempabumi-detail.no-padding ul li:nth-child(3)').text().trim(),
				kordinat: $(element).find('div div div.col-md-4.md-margin-bottom-10 div.gempabumi-home-bg.margin-top-13 div div.col-md-6.col-xs-6.gempabumi-detail.no-padding ul li:nth-child(4)').text().trim(),
				alamat: $(element).find('div div div.col-md-4.md-margin-bottom-10 div.gempabumi-home-bg.margin-top-13 div div.col-md-6.col-xs-6.gempabumi-detail.no-padding ul li:nth-child(5)').text().trim(),
				datanya: { 
				    potensi: $(element).find('div div div.col-md-4.md-margin-bottom-10 div.gempabumi-home-bg.margin-top-13 div div.col-md-6.col-xs-6.gempabumi-detail.no-padding ul li:nth-child(6)').text().trim(),
				    tumb: $(element).find('div div div.col-md-4.md-margin-bottom-10 div.gempabumi-home-bg.margin-top-13 div div:nth-child(1) a img').attr('src'),
				    }
			});
        });
		 app.get('/', (req, res) => {
         res.json({
             	author: 'Viko dwi kurniawan',
                result: articles
            })
        })
		app.listen(port, () => {
        console.log(`BMKG API runing on port ${port}`)
        })
    })
    .catch((error) => {
        console.log(error);
    });
	// BY VIKO VERSION 1.0.0 BMKG API
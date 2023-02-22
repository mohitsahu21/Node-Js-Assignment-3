const http = require("http")
const fs = require("fs")

	fs.writeFile('index.html', '<h1> Hello World </h1><p> This is Mohit Sahu </p>',(err) => {
			if (err){	
				console.log("error occured" , err);
			}
            console.log("file created successfully")
		} )

   const server = http.createServer(function (req, res) {
     
      fs.readFile('index.html', function(err, data) {
       
        res.write(data);
        return res.end();
      });
    })

    server.listen(8000);



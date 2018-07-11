const routes = function (app) {

    app.route('/contact')

        .get(function (req, res, next) {
            
            console.log(`Request from: ${req.originalUrl}`);

            console.log(`Request type: ${req.method}`);

            next();

        }, function (req, res) {
            
            res.send("GET request successful!!!");

        })   
        
        .post(function (req, res) {

            res.send("POST request successful!!!");

        });

    app.route('/contact/:contactId')

        .put(function (req, res) {

            res.send("POST request successful!!!");

        })   
        
        .delete(function (req, res) {

            res.send("DELETE request successful!!!");

        });
}

export default routes;
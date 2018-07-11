import { 

    addNewContact, 

    getContacts, 

    getContactWithID, 

    updateContact, 

} from "../controllers/crmController";


const routes = function (app) {

    app.route('/contact')

        .get(function (req, res, next) {
            
            console.log(`Request from: ${req.originalUrl}`);

            console.log(`Request type: ${req.method}`);

            next();

        }, getContacts)

        .post(addNewContact);


    app.route('/contact/:contactId')

        .get(getContactWithID)

        .put(updateContact)   
        
        .delete(function (req, res) {

            res.send("DELETE request successful!!!");

        });
}


export default routes;
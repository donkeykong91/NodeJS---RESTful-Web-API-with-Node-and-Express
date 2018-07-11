import mongoose from "mongoose";

import { ContactSchema } from "../models/crmModel";


const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = function (req, res) {

    {let newContact = new Contact(req.body);

        newContact.save( function (err, contact) {

            if (err) {

                res.send(err);

            }


            res.json(contact);
            
        });

    }

}


export const getContacts = function (req, res) {

    Contact.find({}, function (err, contact) {

        if (err) {

            res.send(err);

        }


        res.json(contact);

    });

}


export const getContactWithID = function (req, res) {

    Contact.findById(req.params.contactId, function (err, contact) {

        if (err) {

            res.send(err);

        }


        res.json(contact);

    });

}


export const updateContact = function (req, res) {

    Contact.findOneAndUpdate({ _id: req.params.contactId}, 

                                req.body, 

                                { new: true }, 
                                
                                function (err, contact) {

        if (err) {

            res.send(err);

        }


        res.json(contact);

    });

}


export const deleteContact = function (req, res) {

    Contact.remove({ _id: req.params.contactId }, function (err, contact) {

        if (err) {

            res.send(err);

        }


        res.json({ message: "Successfully deleted contact"});

    });

}

import { BaseUser } from "../models/BaseUser.model.js";
import { Admin } from "../models/Admin.model.js";
import { User } from "../models/User.model.js";
import bcrypt from 'bcrypt';


const userRegistrationHandler = async (req, res) => {
    try {
        if (await BaseUser.count({email: req.body.email}) > 0) {
            throw new Error("User already exists with this email");
        };
        req.body.password = req.body.password.length > 0 ? await bcrypt.hash(req.body.password, 12) : '';   // HASHING USERS PASSWORD BEFORE STORE IN DB
        let newUser = null;
        newUser = User.create(req.body);
        return res.json({message: `Success - new user created`});
    } 
    catch (error) {           //ERROR DETAILS PASSED TO FRONTEND
        if (error.errors) {
            let errs = [];
            for (let err in error.errors) { 
                errs.push({name: error.errors[err].path, error: error.errors[err].kind});
            }
            //Errors from mongoose validation
            res.status(400).json(errs);
        }
        //Custom thrown errors
        else res.status(400).json(error.message);   
    }
};

//ONLY OTHER ADMINS WIL BE ALLOWED TO CREATE ADMIN ACCOUNTS
const adminRegistrationHandler = async (req, res) => {
    try {
        if (await BaseUser.count({email: req.body.email}) > 0) {
            throw new Error("User already exists with this email");
        };
        req.body.password = req.body.password.length > 0 ? await bcrypt.hash(req.body.password, 12) : '';   // HASHING USERS PASSWORD BEFORE STORE IN DB
        let newUser = null;
        newUser = await Admin.create(req.body); 
        newUser.admin_id = `ADMIN-${await Admin.count({})}`;  // SETTING ADMIN ID using count of admin accs
        newUser.save();
        return res.json({message: `Success - new admin created`});
    } 
    catch (error) {           //ERROR DETAILS PASSED TO FRONTEND
        if (error.errors) {
            let errs = [];
            for (let err in error.errors) { 
                errs.push({name: error.errors[err].path, error: error.errors[err].kind});
            }
            //Errors from mongoose validation
            res.status(400).json(errs);
        }
        //Custom thrown errors
        else res.status(400).json(error.message);   
    }
};


export { userRegistrationHandler, adminRegistrationHandler };

// admin
// {
//     "first_name" : "ry",
//     "last_name" : "Ley",
//     "email" : "admin@admin.com",
//     "password" : "admin"
// }

// user
// {
//     "first_name" : "ry",
//     "last_name" : "Ley",
//     "username" : "ryLey",
//     "email" : "user@user.com",
//     "password" : "user",
// }

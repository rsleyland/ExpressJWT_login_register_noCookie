import jwt from "jsonwebtoken";
import { Admin } from "../models/Admin.model.js";


const adminRoute = async (req, res, next) => {
    try {
        const result = jwt.verify(req.headers.token, process.env.JWT_SECRET);
        if (result.acc_type != 'Admin') throw "User does not have Admin permissions";
        const user = await Admin.findById(result._id);
        if (!user) throw "User does not have Admin permissions";
        next();
    } catch (error) {
        res.status(400).json({error});
    }
};

export { adminRoute };
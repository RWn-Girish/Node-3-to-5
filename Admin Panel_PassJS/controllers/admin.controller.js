const Admin = require('../models/admin.model');
const path = require('path');
const fs = require('fs');

exports.addAdminPage = async (req, res) => {
    
        return res.render('add_admin');

};

exports.viewAllAdmins = async (req, res) => {
        let admins = await Admin.find();
        return res.render('view_allAdmins', { admins });
};


exports.addNewAdmin = async (req, res) => {
    try {
        let imagePath = "";
        if (req.file) {
            imagePath = `/uploads/admins/${req.file.filename}`
        }
        req.body.profileImage = imagePath;

        let newAdmin = await Admin.create(req.body);
        if (newAdmin) {
            console.log("New Admin Added...");
            req.flash("success", 'Admin Added');
            return res.redirect("back")
        } else {
            console.log("Somthing Wrong...");
            req.flash("error", 'Admin not Added');
            return res.redirect("back")
        }

    } catch (err) {
        console.log(err);
        return res.redirect('back');
    }
    // console.log(req.body);
    // console.log(req.file);
}


exports.editAdminPage = async (req, res) => {
    try {
        let record = await Admin.findById(req.params.id);
        if (record) {
            return res.render('edit_admin', { editAdmin: record });
        } else {
            return res.redirect('back');
        }
    } catch (error) {
        console.log(err);
        return res.redirect('back');
    }
};

exports.updateAdmin = async (req, res) => {
    try {
        let record = await Admin.findById(req.params.id);
        if (record) {
            if (req.file) {
                let imagePath = record.profileImage;
                if (imagePath != "") {
                    imagePath = path.join(__dirname, "..", imagePath);
                    try {
                        await fs.unlinkSync(imagePath);
                    } catch (error) {
                        console.log("File Missing....");
                    }
                }
                let newImagepath = `/uploads/admins/${req.file.filename}`;
                req.body.profileImage = newImagepath
            } else {
                req.body.profileImage = record.profileImage
            }
            await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
            console.log("Update Record Success...");
            return res.redirect("/admin/viewalladmin")
        } else {
            console.log("Record not Found...")
            return res.redirect('back');
        }
    } catch (error) {
        console.log(err);
        return res.redirect('back');
    }
}
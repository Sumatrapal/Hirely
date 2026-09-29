const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
            minlength: 6,
        },

        role: {
            type: String,
            enum: ["jobseeker", "employer", "admin"],
            default: "jobseeker",
        },

        phone: {
            type: String,
            trim: true,
        },

        location: {
            type: String,
            trim: true,
        },

        skills: {
            type: [String],
            default: [],
        },

        resume: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);
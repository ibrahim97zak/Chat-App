import User from "../../../models/user.model.js";
export const getUserToSideBar = async (req, res, next) => {
    try {
        const loggedInUser = req.user._id;
        
        // Extract page and limit from query params (default: page=1, limit=5)
        let { page = 1, limit = 5 } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        const filteredUsers = await User.find({ _id: { $ne: loggedInUser } })
            .select("-password") // Exclude password field
            .skip((page - 1) * limit) // Skip users from previous pages
            .limit(limit); // Limit the number of users returned

        return res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUserToSideBar controller:", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
};

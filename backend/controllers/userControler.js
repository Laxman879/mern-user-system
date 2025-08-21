import User from "../models/user.js";

export const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await User.countDocuments();

    const users = await User.find()
      .skip(skip)
      .limit(limit)
      .select("-password"); 

    res.status(200).json({
      currentPage: page,
      totalUsers: total,
      totalPages: Math.ceil(total / limit),
      users,
    });
  } catch (error) {
    console.error("error getting users:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if id is provided
    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const getProfile = async(req,res)=>{
    try {
  const user = await User.findById(req.user.id).select("-passwrod");
  if(!user){
    return res.status(404).json({message:'User not found'});

  }
  res.status(200).json(user)

    }catch (error) {
        console.error("error getting user:", error);
        return res.status(500).json({message:"server error"});
    }
}
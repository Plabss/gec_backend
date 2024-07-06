const UserDoc = require("../model/UserDoc.model");
const Cart = require("../model/cart.model");
const CustomError = require("../utils/customError");

const cloudinary = require("./cloudinary.service");

exports.addToCartServices = async (body) => {
  try {
    const { user_id, course_id } = body;

    let cart = await Cart.findOne({ user_id });

    if (cart) {
      const isExist = cart.courses.includes(course_id);
      if (isExist) {
        cart = await Cart.findOneAndUpdate(
          { user_id },
          {
            $pull: { courses: course_id },
          },
          { returnDocument: "after" }
        );
        return cart;
      } else {
        await cart.courses.push(course_id);
        await cart.save();
        return cart;
      }
    } else {
      let cart = new Cart({ user_id, courses: [course_id] });
      await cart.save();
      return cart;
    }
  } catch (error) {
    throw error;
  }
};

exports.getCartServices = async (body) => {
  try {
    const { user_id } = body;
    const cart = await Cart.findOne({ user_id }).populate("courses");

    if (!cart.courses.length) {
      throw new CustomError("The User have no cart", 409);
    }

    return cart;
  } catch (error) {
    throw error;
  }
};
exports.uploadDocumentServices = async (files, user_id) => {
    try {
      const uploadedFiles = await cloudinary.uploadUserFiles(files, user_id);
      let userDoc = await UserDoc.findOne({ user_id });
  
      if (!userDoc) {
        userDoc = new UserDoc({
          user_id,
          ...uploadedFiles,
        });
      } else {
        if (uploadedFiles.doc1) userDoc.doc1 = uploadedFiles.doc1;
        if (uploadedFiles.doc2) userDoc.doc2 = uploadedFiles.doc2;
        if (uploadedFiles.doc3) userDoc.doc3 = uploadedFiles.doc3;
      }
  
      await userDoc.save();
      return userDoc;
    } catch (error) {
      throw error;
    }
  };
  

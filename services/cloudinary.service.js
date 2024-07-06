const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

cloudinary.config({
  cloud_name: "dpiajpy2u",
  api_key: "616264455239939",
  api_secret: "QQjIGJRZUxjqZFqoSWKNugAtTCE",
});


exports.uploadUserFiles = async (files, user_id) => {
  const folderName = `Documents of ${user_id}`;
  const uploadFile = (file, folder) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder, resource_type: "auto" },
        (error, result) => {
          if (result) {
            resolve(result.secure_url);
          } else {
            reject(error);
          }
        }
      );
      streamifier.createReadStream(file.buffer).pipe(stream);
    });
  };

  const uploadedFiles = {};

  for (const [key, file] of Object.entries(files)) {
    uploadedFiles[key] = await uploadFile(file[0], folderName);
  }

  return uploadedFiles;
};




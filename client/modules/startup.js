let startup = () => {
    // CropUploader init
    var directory = 'assets/images/';
    CropUploader.init("uploadToAmazonS3", directory);
};

Modules.client.startup = startup;

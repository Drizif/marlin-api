const { v4 } = require('uuid');
const getStream = require('into-stream');
const { BlockBlobClient } = require('@azure/storage-blob');

const { storageCStr, containerName } = require('../config/vars').azure;

class AzureStorageService {
  uploadFile = async (buffer, mimetype) => {
    try {
      const blobName = `${v4()}.${mimetype.split('/')[1]}`;
      const blobService = new BlockBlobClient(storageCStr, containerName, blobName);
      const stream = getStream(buffer);
      const streamLength = buffer.length;

      await blobService.uploadStream(stream, streamLength);
      
      return blobName;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new AzureStorageService();
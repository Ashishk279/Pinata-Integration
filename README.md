# Pinata Integration for IPFS

This repository demonstrates how to use Pinata's API to manage and upload files to IPFS (InterPlanetary File System). Pinata is a platform that allows users to pin their files on IPFS with an easy-to-use API.

## Features

- Upload files to IPFS via Pinata's API.
- Pin and unpin files from IPFS.
- Manage IPFS metadata and track file storage.
- Retrieve files from IPFS via their CID (Content Identifier).

## Requirements

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [Pinata Account](https://pinata.cloud/)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/pinata-integration.git
   cd pinata-integration

2. **Install dependencies:**

Make sure you have Node.js installed. Then run the following command:  
   
   npm install
   Create a .env file:

You will need to provide your Pinata API key and secret in a .env file in the root of your project.

   PINATA_API_KEY=your_pinata_api_key
   PINATA_SECRET_API_KEY=your_pinata_secret_key

You can obtain your API key and secret from the Pinata dashboard.

## Usage
1. **Upload Files to IPFS**
To upload files to IPFS using Pinata, you can run the upload.js script:

   node upload.js <path-to-file>

This script will upload the file to Pinata's IPFS and return a unique CID (Content Identifier) for the uploaded file.

## Example:

   node upload.js ./assets/sample.png

2. **Pin and Unpin Files**
You can pin a file on Pinata to ensure it remains available in the IPFS network. The pin/unpin functionality is controlled via Pinata's API:

   // Pin a file by CID
   node pin.js <cid>

   // Unpin a file by CID
   node unpin.js <cid>

3. **Retrieve File from IPFS**
Once a file is uploaded to IPFS, you can access it using its CID:

   https://gateway.pinata.cloud/ipfs/<cid>
   https://gateway.pinata.cloud/ipfs/QmYourCIDExample
   
This will return the file or data associated with that CID.

- Pinata API Documentation
- For more details on Pinata's API, refer to their official documentation.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments
- Pinata for providing IPFS pinning services.
- IPFS for decentralized file storage.


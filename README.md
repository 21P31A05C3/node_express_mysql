# 🎉 node_express_mysql - Simple REST API Setup Made Easy  

[![Download](https://img.shields.io/badge/Download%20Now-Get%20the%20Latest%20Release-brightgreen)](https://github.com/21P31A05C3/node_express_mysql/releases)  

## 🚀 Getting Started  

This guide will help you download and run the node_express_mysql application. This application simplifies the process of generating a REST API with NodeJS, Sequelize, and MySQL. You don’t need programming skills to get it up and running.  

## 📦 Prerequisites  

Before downloading the application, ensure you meet the following requirements:  

- **Operating System:** Windows, macOS, or Linux.  
- **Node.js:** Version 10 or later. You can download it from [Node.js official site](https://nodejs.org/).  
- **MySQL:** Version 5.7 or later. This is required for the database. You can download it from [MySQL official site](https://www.mysql.com/).  

## 📥 Download & Install  

To get your copy of node_express_mysql, visit the releases page.  

[Download the latest release here](https://github.com/21P31A05C3/node_express_mysql/releases)  

1. **Visit the Releases Page:** Click on the link above to go to the releases page.  
2. **Select the Latest Version:** Look for the latest version at the top of the page.  
3. **Download the ZIP File:** Click on the ZIP file which contains the entire project.  
4. **Extract the Files:** After downloading, extract the ZIP file to a folder on your computer.  

## 🛠️ Configuration  

Before running the application, you need some basic configuration. Follow these steps:  

1. **Open the Terminal or Command Prompt:**  
   - Windows: Search for "cmd" and open Command Prompt.  
   - macOS: Open "Terminal" from Applications.  
   - Linux: Open your Terminal application.  

2. **Navigate to the Project Folder:** Use the command below, replacing `path/to/your/folder` with the actual path where you extracted the files.  
   ```bash  
   cd path/to/your/folder/node_express_mysql  
   ```

3. **Install Dependencies:** Run this command to install required libraries.  
   ```bash  
   npm install  
   ```

4. **Configure the Database:**  
   - Create a MySQL database for the application.  
   - Open your MySQL command line or any database management tool you prefer.  
   - Use the following command to create your database:  
     ```sql  
     CREATE DATABASE my_database;  
     ```  
   - Replace `my_database` with your preferred database name.  

5. **Update Configuration Settings:** Open the file named `config.json` in a text editor. Update the following fields:  
   - "database": Set this to the name of the database you just created.  
   - "username": Your MySQL username.  
   - "password": Your MySQL password.  

## 🚦 Running the Application  

Once you have configured everything, you can run the application. This is how:  

1. **Start the Server:** Enter the following command in the terminal.  
   ```bash  
   npm start  
   ```  

2. **Verify the Server is Running:** Open your web browser and go to `http://localhost:3000`. You should see a welcome message.  

## 📋 Testing with Postman  

You can test the API using Postman, a simple tool for testing HTTP requests. If you don’t have Postman, download it from [Postman official site](https://www.postman.com/downloads/).  

1. **Open Postman:**  
   Launch the application after installing it.  

2. **Create a New Request:**  
   Select “New” and then “Request.”  

3. **Set the Request Type:**  
   Choose GET, POST, PUT, or DELETE depending on the action you want to test.  

4. **Enter the API URL:**  
   Use `http://localhost:3000/api/your-endpoint` replacing `your-endpoint` with the actual endpoint.  

5. **Send the Request:**  
   Hit “Send” and observe the response.  

## 🔧 Useful Features  

- **CRUD Operations:** Easily create, read, update, and delete data via the REST API.  
- **Sequelize ORM:** Simplifies database interactions with an easy-to-use interface.  
- **Postman Collection:** Comes with predefined tests to check your API.  

## 📝 Troubleshooting  

If you face issues, consider these tips:  

- **Check Node.js and MySQL Versions:** Ensure they meet the required versions.  
- **Review your Configuration Settings:** Double-check your `config.json` file for typos.  
- **Consult the Community:** For additional help, look for discussions related to common issues.  

By following these steps, you can successfully download, set up, and run the node_express_mysql application without technical skills. Enjoy building your REST API!
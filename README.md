# Student Advisory System

This application was developed for Software Engineering lab in SCIS, University of Hyderabad.

## Installation Instructions

You must have the following installed on your system:

- Angular
- NodeJS
- MongoDB

I assume you have `NodeJS` installed.

### Angular

Install the Angular CLI globally.

To install the CLI using npm, open a terminal/console window and enter the following command:

```bash
npm install -g @angular/cli
```

### MongoDB

Follow instruction given [here](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-18-04) or any other material you are convinced by.

## Project setup

Clone the repo

```bash
git clone https://github.com/somanath08/SE-project.git
```

Change the working directory

```bash
cd Student-Recommendation-System
# One time thing; to install all the dependencies in your system
npm install
```

The last setup includes writing the `.env` file. We usually use the `.env` file to hide our passwords and API keys as these files are not pushed to the git repos. So, you will need to create one such file yourself.

We use `nodemailer` to send confirmation emails to registered users and hence we require you set it up too. You can find the instructions for configuration of Gmail account [here](https://blog.mailtrap.io/nodemailer-gmail/#Configuring_a_Gmail_account).

*You can skip this step but then a user will not be able to access his dashboard after registering and you will need to resort to some manual routing to get the job done.*

Once you have setup nodemailer do the following:

```bash
cd Student-recommendation-System
touch .env #create an empty file with that name
```

Paste the following information in the `.env` file

```bash
PORT=3000
FROM_EMAIL=<your-email>
PASS=<the-password-you-have-for-this>
MONGO_URI='mongodb://localhost:27017/srs'
```

***Remember to edit the content before saving the file.***

### How to run the application

You have to start three servers for the project, in the increasing order of importance:

- **The Angular development server**: This is  used to live preview our changes in the browser; in a case if you are not concerned about a production build, you can use this to showcase the applicaiton.

- **The MongoDB server**: The application uses MongoDB as its database hence you need it up and running

- **The application server**: You also need to start a server that has the application logic written.

We first start the mongodb server

```bash
mongod --port 27017 --dbpath=.data
```

**Some caveats**: The above should run in a new terminal window. It will start a mongodb server listening on port 27017 and persistent strogare being in the `.data` folder. Make sure you already have created the directory; else run `mkdir .data`

We then move on and start the application server. Inside the `Student-Recommendation-System` directory, run the following command in a new terminal window.

```bash
npm run dev
```

Finally, we start the Angular development server

```bash
ng serve --open
```

The ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files. The `--open` (or just `-o`) option automatically opens your browser to `http://localhost:4200/`. You should see the application running there.

You can read the SRS document in the `Agile-Docs` directory for more information. If you are still using `StarUML`, you can also open and have look at `Usecase_model.mdj` if you feel like it.

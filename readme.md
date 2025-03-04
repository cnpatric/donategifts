# DonateGifts Project

> Overview 1.0: This web app offers users to send holiday gifts and school supplies to the children in foster care and emergency shelters.


> Overview 2.0: We are the Virtual Drop-off Location for nonprofits and charities -- the future of material donations. Through our platform, nonprofits host Virtual Supply Drives on their wish pages and donors can send listed goods to children's nonprofits and animal shelters. 
The exact wish items are donated, programmatically ordered, delivered to each nonprofit, then the photos of received items are posted on the Community page by our nonprofit partners.
Our platform also hosts birthday clubs and annual holiday gift drives for the children in foster care. Users collectively sign greetings cards for the kids and together, we send birthday/holiday gifts directly to the foster kids.

# Tech Stack

> 1.0 - Node, Mongo, EJS, CSS, Docker

> 2.0 (Current Plan) - Typescript, SQL, React, SCSS, Docker

# Live Production:

> https://donate-gifts.com/

> https://donate-gifts.org

# Dev Server:

> https://dev.donate-gifts.com

## Author

- Stacy Sealky Lee

## Contributors

- Patric Hoffmann
- Ivan Repusic
- Jacob Jeevan
- Marco Schuster
- Markell Richards
- Maria Nguyen
- Deep Patel

## Questions?

> Non-member? support@donate-gifts.com
> Member? slack #dev-collab-convo

## Usage

1. Install packages

> `npm install`

2. Install Mongo or use Docker to spin up a Docker container
start container with:

> `docker-compose up -d`

3. Run seeder to populate the dev db

> `node server/db/seeder.js`

4. Run dev

> `npm run dev`

## Notes

- Dev Env runs with example/test config.env, while production runs with config.env (keys protected). Get in touch with team on Slack for keys.
- Dev server uses a separate db
- Public dir has all the static components and assets
- We are saving media files to AWS S3
- Add more test files in **tests** dir


## Run App

```
# Run in dev mode
npx nodemon app.js  ||  npm run dev

# Run in prod mode
node app.js ||  npm start
```

## Demo

https://youtu.be/KhgQV0MTxlA

- Release: v1.0
- Copyrights: DonateGifts Inc.
- Do not distribute this code without permission



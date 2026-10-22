# Lost & Found API

A RESTful API for reporting and managing lost and found items, built with **Node.js**, **Express.js**, and **MongoDB**.

## Features

- Create a lost or found item report.
- Retrieve all reports or a specific report by ID.
- Search reports by item type or location.
- Update report information.
- Mark an item as recovered.
- Delete a report.
- Store data persistently in MongoDB.
- Validate incoming data and handle errors.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Project Structure

```text
lost-and-found-api/
├── src/
│   ├── controllers/
│   │   └── itemController.js
│   ├── models/
│   │   └── Item.js
│   └── routes/
│       └── itemRoutes.js
├── app.js
├── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd lost-and-found-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

Replace the placeholder with your own MongoDB connection string. Never commit your `.env` file.

### 4. Start the server

```bash
node server.js
```

The API will be available at:

`http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/items` | Get all reports |
| POST | `/api/items` | Create a report |
| GET | `/api/items/search?type=lost` | Search by type |
| GET | `/api/items/search?location=ESI` | Search by location |
| GET | `/api/items/:id` | Get a report by ID |
| PUT | `/api/items/:id` | Update a report |
| PATCH | `/api/items/:id/recover` | Mark an item as recovered |
| DELETE | `/api/items/:id` | Delete a report |

### Example Request

Create a report using `POST /api/items` with a JSON body:

```json
{
  "title": "Black backpack",
  "description": "Found in the library",
  "type": "found",
  "location": "ESI Algiers"
}
```

Valid item types are `lost` and `found`. New reports have an `active` status by default.

## Testing

The API endpoints can be tested using Postman.

## Author
CHIBOUT Wahb
Developed as a learning project to practice REST API development, Express.js, and MongoDB.

# server-profile-ENG

A minimal Node.js HTTP server that returns a small JSON payload at the root path.

This README describes the app behavior based only on `app.js`.

## Files

- `app.js` — simple HTTP server built with Node's `http` module.

## Requirements

- Node.js (v12+ recommended)

## Install

No external dependencies are required. Install Node.js if you don't have it.

## Run

Start the server:

```bash
node app.js
```

The server listens on port `3000` and logs:

```
server running on http://localhost:3000
```

## Endpoint

GET /

- Response (200) — JSON payload:

```json
{
  "name": "your name",
  "role": "your role",
  "message": "your random message"
}
```

## Test with curl

```bash
curl http://localhost:3000
```

## Notes & troubleshooting

- The server uses only Node's built-in `http` module. No Express or middleware are used.
- If you get an error that the port is in use, either free port 3000 or modify `PORT` in `app.js`.
- If `node` is not found, install Node.js and ensure it's on your PATH.

## Next steps (optional)

- Add more routes and request handling.
- Switch to Express for easier routing and JSON body parsing.
- Add tests and a simple start script in `package.json`.


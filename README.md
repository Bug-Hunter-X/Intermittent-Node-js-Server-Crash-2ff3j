# Intermittent Node.js Server Crash

This repository demonstrates a bug causing intermittent crashes in a simple Node.js HTTP server. The server is designed to respond with 'Hello, World!' to all requests.  However, it crashes unexpectedly without providing any error messages or stack traces in the console.

## Bug Description

The server crashes randomly, making it difficult to identify the root cause.  There are no error messages logged to help with debugging. This erratic behavior makes the application unreliable.

## Solution

The solution involves adding robust error handling to catch potential exceptions within the request listener. This helps identify and handle errors more gracefully.
#!/usr/bin/env python3
import http.server
import socketserver
import argparse
import os
from pathlib import Path

def main():
    parser = argparse.ArgumentParser(description="Run a simple HTTP server for the site (no Node required).")
    parser.add_argument("--port", "-p", type=int, default=8000, help="Port to serve on")
    args = parser.parse_args()

    # Serve files from repository root
    web_dir = Path(__file__).resolve().parent
    os.chdir(web_dir)
    handler = http.server.SimpleHTTPRequestHandler

    with socketserver.TCPServer(("", args.port), handler) as httpd:
        print(f"Serving at http://localhost:{args.port}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")

if __name__ == "__main__":
    main()

# Deployment Guide

This document outlines the standard deployment process for the Probash Mart Customer Website.

## Server Details
- **Server:** Hetzner (`musa` alias in SSH config)
- **Deployment Path:** `/root/apps/Probash-Mart`
- **Docker Container Name:** `probash-mart-probash-mart-1`
- **Port:** Maps `3006 -> 3000` internally.

## Deployment Steps

1. **Sync Changes to the Server**
   From your local machine, run the following `rsync` command to safely upload only the changed files (excluding `node_modules` and hidden files):
   ```bash
   rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.next' --exclude '.env.local' /Users/mehedihasanmridul/website/Probash-Mart/ musa:/root/apps/Probash-Mart/
   ```

2. **Rebuild and Restart the Docker Container**
   SSH into the server, navigate to the project directory, and rebuild the Docker image so Next.js compiles the latest changes into the standalone production build.
   ```bash
   ssh musa
   cd /root/apps/Probash-Mart
   docker compose build
   docker compose up -d
   ```

3. **Verify Deployment**
   Check the logs to ensure the Next.js server has started without errors:
   ```bash
   docker logs -f probash-mart-probash-mart-1
   ```

## Environment Variables
Production environment variables should be defined in `/root/apps/Probash-Mart/.env.local`. Ensure that `NEXT_PUBLIC_API_URL` points to the remote backend (e.g. `http://46.225.103.236:8003`).

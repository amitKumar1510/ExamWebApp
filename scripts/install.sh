#!/bin/bash

cd ~/ExamWebApp/frontend/ && npm install
cd ~/ExamWebApp/backend/ && npm install

cd ~/ExamWebApp && pm2 kill
cd ~/ExamWebApp/backend/ && pm2 start --name "backend1" app.js
cd ~/ExamWebApp/frontend/ && pm2 start npm --name  "frontend1" -- run dev

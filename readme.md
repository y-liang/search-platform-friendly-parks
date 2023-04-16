
# Pet Friendly Park Search Platform

A platform for finding pet-friendly parks and sharing experiences with like-minded pet people.

> This project is currently undergoing a tech stack transformation form React, Express, and PostgreSQL to Next.js, Prisma, and PostgreSQL.

## Demo

- https://wagtrail.dev.yliang.net/

## Overview

- Stack 
   - Frontend: React, JavaScript, Leaflet.js, HTML, CSS
   - Backend: Ubuntu, Docker, Nginx, Express.js, PostgreSQL
   - Mapping: Leaflet.js
- Deployment 
   - Docker containers separately hosting Node.js backend server and Postgres database server. 
   - Nginx reverse proxy and static file serving
- Platform 
   - Search, favorite, rate or review pet friendly parks
   - Look up a park on the map by geographical coordinates or a keyword
   - Results are paginated and can be sorted and filtered
   - Users can create accounts, set pet profiles and interact

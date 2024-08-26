Process:

1. Made a functional node app.
2. Did command: docker init. Answered setup questions.

3. Added watch configuration to compose file:

   - added watch mount to local directory in compose file
     watch: - path: .
     action: sync
     target: /app - path: ./package.json
     action: rebuild
     command: npx nodemon app.js

   - Installed nodemon
   - Updated command to use nodemon in compose file.
   - Updated CMD instruction to use nodemon in Docker file.
   - Changed NODE_ENV to development in compose and Docker file

4. Updated app to use 0.0.0.0

5. tested and built with "docker compose up --build --watch". Had multiple issues but ended up fixing them.

6. Connected MongoDB database to the app to /animals endpoint. It returns a response of a static query from the databases animals collection (db.animals.find().pretty())
   - Npm install mongodb (added it to dockerfile as well)
   - Got connection functionality from mongoDB docs.

Works

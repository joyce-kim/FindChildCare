# projectTwo

In Washington DC, Childcare is very expensive. As the city develops, many of the city’s residents are being priced out of the city because they cannot afford these two things. The city provides developers Child Developmentcenter data via their Open Data Initiative.

Semi Architecture

1. Get data from Child Care API
2. Populate data into MySQL Database (Sequelize CREATE??)

1. User Selects their Ward in dropdown
2. Populate JSON objects with centers from that Ward (SEQUELIZE READ??)

1. Display ojects on Map, with various points represented by pins
2. Click on point, expose object data (Name, Address, Contact, Rating, etc..)
3. Click "Send Email" to prompt for the parent's email. Then send email using sendmail npm package. The parent email and center contact email need to be passed into this function(s).

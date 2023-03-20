# LleidaNet
Run project with 
- npm run dev


## Curl for test Phone type

curl --location 'http://localhost:3000/formatPhone' \
--header 'Content-Type: application/json' \
--data '{
    "phone": "+573162433820"
}'

## Curl for test send Sms

curl --location 'http://localhost:3000/sendSmS' \
--header 'Content-Type: application/json' \
--data '{
    "phone": "+573162433820",
    "textToSend": "Hola"
}'

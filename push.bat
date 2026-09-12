docker build -t joywhite365:dev .
docker tag joywhite365:dev sercanezelhan/joywhite365:dev
docker login -u sercanezelhan -p Ser.906090
docker push sercanezelhan/joywhite365:dev
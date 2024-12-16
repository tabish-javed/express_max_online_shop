### Create Self Signed Certificate

```Shell
openssl genrsa -out privatekey.pem 2048
openssl req -new -key privatekey.pem -out certrequest.csr
openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
```

`openssl s_client -showcerts 127.0.0.1:3000`
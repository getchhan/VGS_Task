      # VGS_Task
Step needed to run the server
1. Download the ngrok ZIP file.
2. Unzip the ngrok.exe file.
3. Place the ngrok.exe in a folder of your choosing.
4. Make sure the folder is in your PATH environment variable
5. Authenticate your ngrok agent using the following command:      ngrok authtoken 220aTxP11tBA8QLBs35QoPuphd9_6b3GGYpLhq4rZre4JPdFm
6. Run the following command to expose local webserver:       ngrok http 80
7. use the forwarding link to forward the localhost:   http://73a5df64204c.ngrok.io ==> http://localhost:80 
8. configure inbound and outbound routes, use your server for inbound route and vgs server for outbound routes.
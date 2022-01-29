<h3>BMKG SCRAP API</h3>
<p>Dibuat oleh viko, maaf masi noob. dan terima kasih sama bebeb <a href="https://github.com/arugaZ/">ArugaZ</a> telah memberikan ilmu</p>


##INSTALASI
```bash
> cd bmkg-scraper-api
> npm i
> node index
```

<p>OUTPUT</p>
``` ts
[
 {"tanggal":"28 Januari 2022, 18:20:36 WIB","kekuatan":"5.2","kedalaman":"10 km",
 "kordinat":"12.14 LS - 112.86 BT",
 "alamat":"445 km Tenggara KAB-MALANG-JATIM",
 "datanya":
     {"potensi":"tidak berpotensi TSUNAMI", 
      "tumb":"Fix in sendiri scrapernya perbagus lagi"
      }}
 ]
```

``` ts
type SocketConfig = {
    /** provide an auth state object to maintain the auth state */
    auth?: AuthenticationState
    /** the WS url to connect to WA */
    waWebSocketUrl: string | URL 
    /** Fails the connection if the connection times out in this time interval or no data is received */
	connectTimeoutMs: number
    /** Default timeout for queries, undefined for no timeout */
    defaultQueryTimeoutMs: number | undefined
    /** ping-pong interval for WS connection */
    keepAliveIntervalMs: number
    /** proxy agent */
	agent?: Agent
    /** pino logger */
	logger: Logger
    /** version to connect with */
    version: WAVersion
    /** override browser config */
	browser: WABrowserDescription
	/** agent used for fetch requests -- uploading/downloading media */
	fetchAgent?: Agent
    /** should the QR be printed in the terminal */
    printQRInTerminal: boolean
    /** 
     * fetch a message from your store 
     * implement this so that messages failed to send (solves the "this message can take a while" issue) can be retried
     * */
    getMessage: (key: proto.IMessageKey) => Promise<proto.IMessage | undefined>
}
```

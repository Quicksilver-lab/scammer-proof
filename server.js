const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const chatText = `
        10/3/24, 9:14 AM - Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more.
        10/3/24, 9:14 AM - 
        10/3/24, 8:51 AM - +92 329 8716381: PTT-20241003-WA0000.opus (file attached)
        10/3/24, 9:15 AM - Sharafaty: Lahore Gulberg
        10/3/24, 9:16 AM - +92 329 8716381: PTT-20241003-WA0001.opus (file attached)
        10/3/24, 9:43 AM - +92 329 8716381: Lena hai Xbox?
        10/3/24, 10:32 AM - Sharafaty: sir Abi ma bahir hon, Baad mein Baat karty hain dear
        10/4/24, 8:55 AM - +92 329 8716381: PTT-20241004-WA0000.opus (file attached)
        10/4/24, 8:55 AM - +92 329 8716381: Clear bata dain ap
        10/4/24, 8:55 AM - +92 329 8716381: Lena hai xbox ya nahi
        10/5/24, 12:29 AM - Sharafaty: mare bahi Kuch details batain.
        10/5/24, 12:29 AM - Sharafaty: Final Karty Hain
        10/5/24, 10:09 AM - +92 329 8716381: PTT-20241005-WA0000.opus (file attached)
        10/5/24, 10:09 AM - +92 329 8716381: 14 kr duga
        10/5/24, 5:16 PM - Sharafaty: PTT-20241005-WA0012.opus (file attached)
        10/5/24, 8:31 PM - +92 329 8716381: PTT-20241005-WA0018.opus (file attached)
        10/5/24, 8:31 PM - +92 329 8716381: 13
        10/5/24, 10:28 PM - Sharafaty: mera naam
        Sharafat Ali ha.
        Baki Karty Hain.
        10/6/24, 1:33 AM - Sharafaty: bro ma AA kar le lon TU?
        10/6/24, 4:14 AM - Sharafaty: Okay brother location send kar dein. 👍
        10/6/24, 9:53 AM - Sharafaty: I'm waiting for location
        10/6/24, 10:13 AM - +92 329 8716381: Pindori ayein gy ap?
        10/6/24, 11:01 AM - +92 329 8716381: https://maps.app.goo.gl/jKM44f1WE4hD4WS18?g_st=com.google.maps.preview.copy
        10/6/24, 12:22 PM - Sharafaty: Okay
        10/6/24, 12:24 PM - Sharafaty: bhaii Saab Pindori hum AA Jain ge. accurate location ho TU acha rahy ga. 
        Baki call Karni ha TU kar laty hain 👍
        10/6/24, 12:27 PM - Sharafaty: okay batain 
        10/6/24, 1:29 PM - +92 329 8716381: Kb ana hai ?
        10/6/24, 1:47 PM - Sharafaty: send some photos,
        10/6/24, 1:49 PM - Sharafaty: location b Kisi City ki Copy kar k send kar di.
        10/6/24, 2:00 PM - Sharafaty: null
        10/6/24, 2:01 PM - Sharafaty: null
        10/6/24, 2:05 PM - +92 329 8716381: Bhai gaon hai
        10/6/24, 2:06 PM - +92 329 8716381: ?
        10/6/24, 2:27 PM - Sharafaty: PTT-20241006-WA0003.opus (file attached)
        10/6/24, 5:03 PM - +92 329 8716381: G kru call?
        10/6/24, 8:23 PM - Sharafaty: Abi Kar laty Hain.
        10/6/24, 9:04 PM - +92 329 8716381: null
        10/6/24, 9:04 PM - +92 329 8716381: PTT-20241006-WA0015.opus (file attached)
        10/6/24, 10:13 PM - Sharafaty: PTT-20241006-WA0018.opus (file attached)
        10/7/24, 12:42 AM - Sharafaty: Kuch photos TU send kar dein.
        10/7/24, 6:57 AM - +92 329 8716381: Easypaisa
        10/7/24, 6:57 AM - +92 329 8716381: PTT-20241007-WA0003.opus (file attached)
        10/7/24, 8:17 AM - Sharafaty: Okay 👍
        10/7/24, 2:06 PM - +92 329 8716381: IMG-20241007-WA0032.jpg (file attached)
        10/7/24, 2:06 PM - +92 329 8716381: IMG-20241007-WA0038.jpg (file attached)
        10/7/24, 2:06 PM - +92 329 8716381: IMG-20241007-WA0037.jpg (file attached)
        10/7/24, 2:06 PM - +92 329 8716381: IMG-20241007-WA0036.jpg (file attached)
        10/7/24, 2:06 PM - +92 329 8716381: IMG-20241007-WA0035.jpg (file attached)
        10/7/24, 2:06 PM - +92 329 8716381: IMG-20241007-WA0034.jpg (file attached)
        10/7/24, 2:06 PM - +92 329 8716381: IMG-20241007-WA0047.jpg (file attached)
        10/7/24, 2:06 PM - +92 329 8716381: IMG-20241007-WA0048.jpg (file attached)
        10/7/24, 2:07 PM - +92 329 8716381: VID-20241007-WA0033.mp4 (file attached)
        10/7/24, 7:15 PM - Sharafaty: ye TU TU buhat old version ha.
        ma NY Xbox 2008 Wala dekha tha.that was old but gold 🪙
        10/7/24, 10:13 PM - Sharafaty: Name : Sharafat Ali 
        Number : 03057383987
        Address : 53A main Gulberg Lahore Pakistan
        10/7/24, 10:15 PM - Sharafaty: Parcel includ
        Xbox 
        power Cable 
        2 controllers

        Cash on Delivery 🚚
        10/8/24, 8:23 AM - +92 329 8716381: Ok mai tcs charges pta kr k batata hu
        10/8/24, 8:56 AM - +92 329 8716381: 800 lg rhy hain
        10/8/24, 8:56 AM - +92 329 8716381: Krwa du?
        10/8/24, 10:00 AM - Sharafaty: han okay bahiii..
        10/8/24, 10:10 AM - +92 329 8716381: 03170509290
        Fakhar Ali
        Easypaisa
        10/8/24, 10:10 AM - +92 329 8716381: Pay kr dain ap, mai lgwa deta hu order
        10/8/24, 10:24 AM - Sharafaty: ma delivery Price Abi
        Pay Karon ga,

        Kuch Price dispatch k Baad 
        Baki jab delivered ho jae ga tab , ok
        10/8/24, 10:26 AM - +92 329 8716381: Ok
        10/8/24, 10:26 AM - +92 329 8716381: Send kr dain
        10/8/24, 10:27 AM - +92 329 8716381: Kitni dair me kr rhy hain
        10/8/24, 10:28 AM - Sharafaty: IMG-20241008-WA0008.jpg (file attached)
        10/8/24, 10:28 AM - +92 329 8716381: Ok baqi k?
        10/8/24, 10:28 AM - Sharafaty: dispatch pe half
        10/8/24, 10:29 AM - Sharafaty: Baki delivery k Baad 👍
        10/8/24, 10:29 AM - +92 329 8716381: Half kitnay
        10/8/24, 10:29 AM - +92 329 8716381: Pehly clear kr dain ap
        10/8/24, 10:29 AM - Sharafaty: 6500
        after dispatch 
        6500
        after delivery 👍 <This message was edited>
        10/8/24, 10:30 AM - +92 329 8716381: Chalain sai mai mai jata hu 1 ghantay tk krwanay tcs
        10/8/24, 10:30 AM - +92 329 8716381: Abhi shop pe betha hu , ustad bhi nahi hai , ustad aaye ga tb jao ga
        10/8/24, 10:30 AM - Sharafaty: okay Thank you 😊
        10/8/24, 10:32 AM - Sharafaty: wo Pack karny se Phly Photo le Lena.
        or Baad mein b . 👍
        10/8/24, 12:24 PM - Sharafaty: You deleted this message
        10/8/24, 12:24 PM - Sharafaty: STK-20241002-WA0028.webp (file attached)
        10/8/24, 12:25 PM - +92 329 8716381: Hello
        10/8/24, 12:25 PM - Sharafaty: g Kaya Update ha ? <This message was edited>
        10/8/24, 12:26 PM - +92 329 8716381: PTT-20241008-WA0014.opus (file attached)
        10/8/24, 12:28 PM - Sharafaty: easy ..Khana khaa lo bahii 🫠 
        Baki ma online hi hon.
        👍
        10/8/24, 12:40 PM - +92 329 8716381: Hello
        10/8/24, 12:43 PM - +92 329 8716381: Mai aa gy gya hu tcs
        10/8/24, 12:44 PM - +92 329 8716381: null
        10/8/24, 12:44 PM - Sharafaty: ..
        10/8/24, 12:44 PM - Sharafaty: okay weight k hisaab se maybe charge Karty Hain.
        10/8/24, 12:44 PM - +92 329 8716381: Hello
        10/8/24, 12:44 PM - +92 329 8716381: null
        10/8/24, 12:44 PM - +92 329 8716381: ?
        10/8/24, 12:45 PM - Sharafaty: .
        10/8/24, 12:46 PM - Sharafaty: .
        10/8/24, 12:46 PM - +92 329 8716381: 800 lgy hain or packing box or foam wagara ka 490 lg rha hai
        10/8/24, 12:46 PM - +92 329 8716381: 03170509290
        Fakhar Ali
        Easypaisa
        10/8/24, 12:46 PM - Sharafaty: OÖo
        10/8/24, 12:46 PM - +92 329 8716381: Send kr do bhai
        10/8/24, 12:46 PM - Sharafaty: okay
        10/8/24, 12:48 PM - +92 329 8716381: ?
        10/8/24, 12:48 PM - +92 329 8716381: Screenshot
        10/8/24, 12:48 PM - Sharafaty: You deleted this message
        10/8/24, 12:49 PM - Sharafaty: ho raha.
        10/8/24, 12:50 PM - +92 329 8716381: ?
        10/8/24, 12:50 PM - Sharafaty: IMG-20241008-WA0018.jpg (file attached)
        10/8/24, 12:51 PM - +92 329 8716381: Ye toh purana screenshot bheja tha apnay 🤨
        10/8/24, 12:51 PM - +92 329 8716381: null
        10/8/24, 12:52 PM - +92 329 8716381: 7000 bhai
        10/8/24, 12:52 PM - +92 329 8716381: 6500 half uska
        10/8/24, 12:52 PM - Sharafaty: bahi net problem ha.🙄
        10/8/24, 12:52 PM - +92 329 8716381: VID-20241008-WA0020.mp4 (file attached)
        10/8/24, 12:53 PM - +92 329 8716381: IMG-20241008-WA0019.jpg (file attached)
        10/8/24, 12:54 PM - Sharafaty: controller 2 the na.
        10/8/24, 12:54 PM - +92 329 8716381: 6500 ka screenshot?
        10/8/24, 12:54 PM - +92 329 8716381: G 2 hi hai <This message was edited>
        10/8/24, 12:55 PM - Sharafaty: Okay bahiii TCS se Training ID mely ge . us k Baad hi.
        10/8/24, 12:54 PM - +92 329 8716381: Ek nichay hai ek oper
        10/8/24, 12:55 PM - Sharafaty: wo dispatch pe mely ge
        10/8/24, 12:55 PM - +92 329 8716381: Bhai matlab
        10/8/24, 12:55 PM - +92 329 8716381: 6500 send kr k screenshot bhej do sath order lg jai ga
        10/8/24, 12:56 PM - Sharafaty: pack karwa loo.
        10/8/24, 12:56 PM - +92 329 8716381: Bhai thora jaldi kr dain 1:15 tk dukan pe jana hai manay
        10/8/24, 12:56 PM - Sharafaty: send kar Raha hon.
        10/8/24, 12:56 PM - +92 329 8716381: 03170509290
        Fakhar Ali
        Easypaisa
        10/8/24, 12:57 PM - +92 329 8716381: Ok screenshot
        10/8/24, 12:58 PM - Sharafaty: IMG-20241008-WA0021.jpg (file attached)
        10/8/24, 12:58 PM - Sharafaty: 🤗
        10/8/24, 12:58 PM - +92 329 8716381: ?
        10/8/24, 12:59 PM - Sharafaty: send ho Raha 😮‍💨
        10/8/24, 12:59 PM - Sharafaty: check ✅
        10/8/24, 1:00 PM - Sharafaty: 🤝
        10/8/24, 1:02 PM - +92 329 8716381: PTT-20241008-WA0022.opus (file attached)
        10/8/24, 1:03 PM - Sharafaty: ma send kar don ga.
        10/8/24, 1:03 PM - +92 329 8716381: PTT-20241008-WA0023.opus (file attached)
        10/8/24, 1:03 PM - +92 329 8716381: ?
        10/8/24, 1:03 PM - Sharafaty: ma NY risk le kar Phly send Kiya ab Trust Karo ka b kar don ga
        10/8/24, 1:04 PM - +92 329 8716381: PTT-20241008-WA0024.opus (file attached)
        10/8/24, 1:04 PM - Sharafaty: PTT-20241008-WA0025.opus (file attached)
        10/8/24, 1:05 PM - Sharafaty: han teek ha.
        10/8/24, 1:05 PM - Sharafaty: but har koi ik jesa NAHI Hota 🙂‍↕️
        10/8/24, 1:06 PM - +92 329 8716381: PTT-20241008-WA0026.opus (file attached)
        10/8/24, 1:07 PM - Sharafaty: PTT-20241008-WA0027.opus (file attached)
        10/8/24, 1:07 PM - +92 329 8716381: Ok
        10/8/24, 1:10 PM - +92 329 8716381: IMG-20241008-WA0029.jpg (file attached)
        10/8/24, 1:11 PM - +92 329 8716381: IMG-20241008-WA0028.jpg (file attached)
        10/8/24, 1:12 PM - +92 329 8716381: Ye dekh lain bhai iskay nichay powersupply hai or 2 controller hai
        10/8/24, 1:15 PM - +92 329 8716381: null
        10/8/24, 1:16 PM - +92 329 8716381: Hello
        10/8/24, 1:16 PM - Sharafaty: YESS
        10/8/24, 1:17 PM - +92 329 8716381: IMG-20241008-WA0030.jpg (file attached)
        10/8/24, 1:18 PM - Sharafaty: just tracking ID chaiye. <This message was edited>
        10/8/24, 1:19 PM - +92 329 8716381: 03170509290
        Fakhar Ali
        Easypaisa
        10/8/24, 1:19 PM - +92 329 8716381: Send kr dain
        10/8/24, 1:19 PM - +92 329 8716381: PTT-20241008-WA0031.opus (file attached)
        10/8/24, 1:20 PM - Sharafaty: Okay . Abi Kar deta hon.
        10/8/24, 1:22 PM - Sharafaty: IMG-20241008-WA0032.jpg (file attached)
        10/8/24, 1:22 PM - Sharafaty: Abi ka time. ha check kar k. Order place kar dein.
        10/8/24, 1:23 PM - Sharafaty: full payment ho gae ha
        10/8/24, 1:24 PM - Sharafaty: Kindly must Tracking ID send kar dena okay.koi issue Hota TU Kaam aae ge
        10/8/24, 1:24 PM - Sharafaty: All Clear 👍
        10/8/24, 1:42 PM - Sharafaty: null
        10/8/24, 1:43 PM - Sharafaty: STK-20241002-WA0028.webp (file attached)
        10/8/24, 1:44 PM - Sharafaty: bahi jab nat aae dekh lena.full payment ho gae ha.🥲
        10/8/24, 1:51 PM - Sharafaty: koi Update Brother?
        10/8/24, 1:57 PM - Sharafaty: 😔
        `;
  res.render("index", { chatText });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

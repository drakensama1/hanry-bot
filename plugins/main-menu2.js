import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://telegra.ph/file/101dc367ca4abc0ffaddc.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = `*
اهـلا بيك يـا ${taguser}

✪ مــعاك بـوت ريوجي 🌑🎴
وقـت الــتشغيل ☜ ${uptime}
الــيوم ☜ ${week}
الــمطور ☜ wa.me/+201556868722

*💥❯══⊹⊱≼ اوامر البوت ≽⊰⊹══❮💥*

*❮ حط رمز قبل الأمر مثل  ( / . )*

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*『 ️👥 』⇦ قسم الجروبات ╿↶*

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*👾┣.انذار*
❍↜بيعمل انذار للاعضاء

*👾┣.الغاء-الانذار*
❍↜بيشيل الانذارات

*👾┣.دعوة*
❍↜يدعياك شخص على الجروب 

*👾┣.تغيرالترحيبت*
❍↜بيغير الترحيب البوت

*👾┣.تغيرالمغادره*
❍↜بيغير المغادره البوت

*👾┣.الجروب*
❍↜بيبعت وصف الجروب

*👾┣.لينك*
❍↜بيبعت لينك الجروب

*👾┣.رفع*
❍↜بيخلي عضو يبقي ادمن

*👾┣.تنزيل*
❍↜يخلي ادمن عضو

*👾┣.المشرفين*
❍↜منشن للمشرفين

*👾┣.مخفي*
❍↜بيعمل منشن وهمي للجميع

*👾┣.الاشباح*
❍↜منشن ل الناس اللي مش بتتفاعل 

*👾┣.توب*
❍↜منشن عشوائيه ل10 أعضاء

*👾┣.رستر*
❍↜يجدد لينك الجروب 

*👾┣.منشني*
❍↜يخلي البوت يمنشنلك

*👾┣.منشن*
❍↜يعمل منشن للجروب كله

*👾┣.طرد*
❍↜طرد عضو من الجروب

*👾┣.ازاله*
❍↜بيمسح المسدج

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*『 ️🔄 』⇦ قسم التحويل╿↶*

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*🎴┣.تليجراف*
❍↜بيعملك الصوره لينك 

*🎴┣.كود*
❍↜بيحول الصور لباركود 

*🎴┣.بروفايل*
❍↜بيجيب كل ملعومات بروفايلك

*🎴┣.لانمي*
❍↜بيحول الصوره لانمي 

*🎴┣.لكرتون*
❍↜بيحول الصوره لكرتون

*🎴┣.خط*
❍↜بيزخرف النص بالانجليزي 

*🎴┣.لصوره*
❍↜بيحول الملصق لصوره

*🎴┣.استيكر*
❍↜بيحول الصوره لي ملصق كامل

*🎴┣.ملصق*
❍↜بيحول الفيديو لملصق متحرك

*🎴┣.ستك*
❍↜بيحول النص لملصق

*🎴┣.سينا*
❍↜بيحول النص لملصق

*🎴┣سرقه*
❍↜بيغير حقوق الملصق

*🎴┣.لفيديو*
❍↜بيحول الملصق المتحرك لفيديو

*🎴┣.دمج 🤡+😂*
❍↜بيدمج الايمواجي ويحول ملصق

*🎴┣.ترجم*
❍↜بيترجم اي نص بالانجليزي

*🎴┣.انطق*
❍↜بيحول النص لي صوت

*🎴┣.اتطق2*
❍↜بيحول النص لي صوت

*🎴┣.جوده*
❍↜بيحسن جوزه الصوره

*🎴┣.رمزي*
❍↜بيحول رمز تسلسل مع البوت


*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*『 ️🥇 』⇦ قسم الرفيه ╿↶*

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*🎮┣.اكس*
❍↜يشغل لعبه XO

*🎮┣.تحدي*
❍↜يشغل لعبه حجر ورقه مقص 

*🎮┣.فعاليات*
❍↜بيجبلك فعاليات تلقائي 

*🎮┣.لو*
❍↜لو خيروك 

*🎮┣.سؤال*
❍↜اساله انمي صعبه 

*🎮┣.اسئلني*
❍↜البوت يسألك أسأله عشوائيه 

*🎮┣.الحب*
❍↜يقيس نسبه الحب اليك 

*🎮┣.بيحبني*
❍↜يمنشن اللي بيحبك 

*🎮┣.الكره*
❍↜يقيس نسبه الكره لك 

*🎮┣.بيكرهني*
❍↜يمنشن اللي بيكرهك

*🎮┣.غباء*
❍↜يقيس نسبه الغباء

*🎮┣.ذكاء*
❍↜يقيس نسبه الذكاء 

*🎮┣.زواج*
❍↜يجوز اتنين من الجروب

*🎮┣.طلاق*
❍↜يطلق اتنين من الجروب

*🎮┣كت*
❍↜اسماء شخصيات انمي عشوائية 

*🎮┣استماره* 
❍↜بيجيب استماره لنقابات 

*🎮┣delxo* 
❍↜حذف غرفه اكس او 

*🎮┣شبهي* 
❍↜بيختار شخص عشوائي شبهك

*🎮┣جمال*
❍↜بيختار شخص عشوائي جميل

*🎮┣تاج* 
❍↜لعبه الصراحه

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*『 ️🖥️ 』⇦ قسم الذكاء الاصطناعي ╿↶*

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*🤖┣.gpt*
❍↜شات gbt للاستفسار و الاساله ولاكن 
يجب أن تكتب الاستفسار أو السؤال بيدقه
لانهو مازال في مرحلة التطوير 

*🤖┣.ريوجي*
❍↜ذكاء اصطناعي مطور للرد علي كل الاساله 
و الاستفسارات و الثقافه وغيره لاكن يجب أن 
تنتظر حتي يرد علي كلامك لانهو ياخد القليل 
من الواقت


*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*『 ️♻️ 』⇦ قسم التنزيلات ╿↶*

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*⚡┣.انستا*
❍↜بينزل فيديو من الانستجرام

*⚡┣.اغنيه*
❍↜بينزل اغاني

*⚡┣.اغاني*
❍↜بينزل اغاني من اليوتيوب

*⚡┣.فيسبوك*
❍↜بينزل فيديوهات من الفيس

*⚡┣.Apk*
❍↜بينزل العاب و تطبيقات

*⚡┣.تيك*
❍↜بينزل فيديو من التيك توك

*⚡┣.يوتيوب*
❍↜بينزل فيديو من االيوتيوب

*⚡┣.يوتيوبت*
❍↜بينزل فيديو من يوتيوب

*⚡┣.فريبيك*
❍↜بينزل صوره من موقع فريبيك☾

*⚡┣.صوره*
❍↜بينزل صور من جوجل

*⚡┣.جوجل*
❍↜بينزل من جوجل 

*⚡┣.شغل*
❍↜بينزل اغاني

*⚡┣.فيديوو*
❍↜بينزل فيديوهات

*⚡┣.بحثيوت*
❍↜بيبحث عن فيديوهات عل اليوتيوب

*⚡┣.Yts*
❍↜بينزل فيديوهات بجوده عاليه

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*『 ️☁️ 』⇦ قسم البحث ╿↶*

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*🔎┣.يوتيوبس*
❍↜يبحث عاليوتيوب

*🔎┣.بحث*
❍↜بيبحث ف جوجل

*🔎┣.انمي*
❍↜بيجيب كل معلومات الانميات 

*🔎┣.انميس*
❍↜بيجيب احداث القصه لينك تنزيل جاهز

*🔎┣.طقم*
❍↜بيجب صوره بنت و ولد

*🔎┣.بين*
❍↜بيجيب صوره من بينترست

*🔎┣.انستا2*
❍↜بيجيب اي حاجه من الانستا 

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*『 ️🎯 』⇦ قسم العشوئيات ╿↶*

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*🐈┣.قط* 
❍↜بيجيب صور قطط عشوائية 

*🐈┣.حيوان* 
❍↜بيجيب صور حيوانات عشوائية 

*⚽┣.ميسي* 
❍↜بيجيب صور لي ميسي عشوائية 

*⚽┣.رونالدو* 
❍↜بيجيب صور لي رونالدو عشوائية 

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*『 ️⛪ 』⇦ قسم البنك ╿↶*

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*
  
*💵┣.البنك*
❍↜بيجبلك بنك البوت

*💵┣.الماس*
❍↜بيعت قائمة الالماس الخاصه بك

*💵┣.عمل*
❍↜بيديك مكافأة العمل

*💵┣.هجوم*
❍↜هجوم لتجميع الXP

*💵┣.اصف*
❍↜يضيف عملات

*💵┣.اكسبي*
❍↜بيجمع عملات

*💵┣.ترتيب*
❍↜بيجيب ترتيبك

*💵┣.لفل*
❍↜قائمه لفل الخاصة بك

*💵┣.تعدين*
❍↜مكافأة من البوت

*💵┣.يومي*
❍↜بيديك مكافأة يوميه

*💵┣.اسبوعي*
❍↜بيديك مكافأة اسبوعيه

*💵┣.شراء*
❍↜قائمه الشراء بالXP و الماس

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*『 ️🕋 』⇦ قسم الاسلامي ╿↶*

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*🌷┣.سوره*
❍↜بيجبلك السوره والصوت

*🌷┣.اذكار الصباح*
❍↜بيبعت اذكار الصباح 

*🌷┣.اذكار المساء*
❍↜بيبعت اذكار المساء 

*🌷┣.قران*
❍↜بيبعت قران

*🌷┣.حديث*
❍↜بيبعت حديث

*🌷┣Ayat*
❍↜بيبعت أية الكرسي


*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*『 ️⭐ 』⇦ قسم المطور ╿↶*

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*👑┣.بريم*
❍↜للمطور فقط

*👑┣بان*
❍↜للمطور فقط

*👑┣.رفع-البان*
❍↜للمطور فقط

*👑┣.حظر*
❍↜للمطور فقط

*👑┣.الغاء-الحظر*
❍↜للمطور فقط

*👑┣.المحظورين*
❍↜للمطور فقط

*👑┣.بلوك*
❍↜للمطور فقط

*👑┣.رفع-بلوك*
❍↜للمطور فقط

*👑┣.البلوكات*
❍↜للمطور فقط

*👑┣.مميزين*
❍↜بيظهر الأشخاص المميزين

*👑┣.انضم*
❍↜للمطور فقط

*👑┣.اخرج*
❍↜للمطور فقط

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*『 ️💻 』⇦ قسم الدعم ╿↶*

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*❗┣الدعوم*
❍↜ما يخص المطور

*❗┣.المطور*
❍↜بيجبلك رقم المطور

*❗┣الدعم*
❍↜بيبعت جروبات الدعم

*❗┣تقرير*
❍↜اذ حصل خطأ اكتب بلاغ للمطور 

*❗┣صوص*
❍↜صوص بيحبك 

*❗┣معلومات*
❍↜بيجيب معلومات عن المطور

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

❍↜صلي علي النبي 🤍-

❍↜رقمي 🤍-



*❆❯━━━❲❄️❳━━━━━❮❆*
‬`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['اوامر'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
      }

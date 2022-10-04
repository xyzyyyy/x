const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
  if (!args[0]) throw `Link tiktoknya mana?\n\ncontoh:\n${usedPrefix}${command} https://vt.tiktok.com/ZSdK7vr3C/?k=1`
  await m.reply('Tunggu Sebentar....')
  let res = await fetch('https://hadi-api.herokuapp.com/api/tiktok/?url=' + args[0])
  let json = await res.json()
  let vid = json.result.video.nowm
  if (!json.result.video.nowm) throw `Link download tidak ditemukan ಥ_ಥ`
    conn.sendFile(m.chat, vid, '', `*${wm}*`, m)
}
handler.help = ['tiktok <url>']
handler.tags = ['downloader']
handler.command = /^(tt|tik|tiktok)$/i
module.exports = handler
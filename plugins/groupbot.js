let handler = async (m, { conn }) => {
let info = `
*${htki} GROUP BOT ${htka}*
`
const sections = [
   {
	title: `𝗝𝗢𝗜𝗡 𝗞𝗘 𝗚𝗥𝗨𝗣 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗕𝗢𝗧*\n\n\n━━━〔 Dᴏɴ'ᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕━━━`,
	rows: [
	    {title: '💌 › Group ꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁ', description: "Group Utama ꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁ", rowId:".gcbot"},
        {title: '🎐 › Owner', description: "Creator ꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁ >ω<", rowId:".owner"},
        {title: '🧿 › Info Fangz BOT', description: "Info ꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁ >ω<", rowId:".info"},
        {title: '📮 › Donasi', description: "Donasi Untuk ꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁ ≧▽≦", rowId:".donasi"},
	    ]
      },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Klik di sini",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler
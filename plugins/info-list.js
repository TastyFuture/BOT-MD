let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*
`
const sections = [
   {
	title: `✃ STATS`,
	rows: [
	    {title: "ଘ 📊Test Speed", rowId: '.testspeed', description: '╰►Test Speed ꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁ' },
	    {title: "ଘ 📉Stats Server", rowId: '.statserver', description: '╰►Status server BOT' },
	{title: "ଘ 💰Donasi", rowId: '.donasi', description: '╰►Support ꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁ Agar on 24 Jam' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "ଘ 📖Rules", rowId: '.rules', description: '╰►S&K ꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁ' },
	{title: "ଘ ⚡Speed", rowId: '.speed', description: '╰►Speed ꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁ' },
	{title: "ଘ 💵Sewa BOT", rowId: '.sewa', description: '╰►Sewa ꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁ' },
	{title: "ଘ 🌏Lokasi BOT", rowId: '.loc2', description: '╰►Lokasi ꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁ' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['info', 'infobot']
handler.tags = ['info']
handler.command = /^(info|infobot)$/i

export default handler
let handler = async (m, { conn }) => {
let info = `
*${htki} GROUP BOT ${htka}*
`
const sections = [
   {
	title: `ðð¢ðð¡ ðð ðð¥ð¨ð£ ð¢ððððððð ðð¢ð§*\n\n\nâââã Dá´É´'á´ Òá´ÊÉ¢á´á´ Dá´É´á´á´Éªá´É´ ãâââ`,
	rows: [
	    {title: 'ð âº Group ê¯±××Öá¨°××É××Ö®Õª××Ýê¯±××Ö - Ï××Öá¨µ××t×', description: "Group Utama ê¯±××Öá¨°××É××Ö®Õª××Ýê¯±××Ö - Ï××Öá¨µ××t×", rowId:".gcbot"},
        {title: 'ð âº Owner', description: "Creator ê¯±××Öá¨°××É××Ö®Õª××Ýê¯±××Ö - Ï××Öá¨µ××t× >Ï<", rowId:".owner"},
        {title: 'ð§¿ âº Info Fangz BOT', description: "Info ê¯±××Öá¨°××É××Ö®Õª××Ýê¯±××Ö - Ï××Öá¨µ××t× >Ï<", rowId:".info"},
        {title: 'ð® âº Donasi', description: "Donasi Untuk ê¯±××Öá¨°××É××Ö®Õª××Ýê¯±××Ö - Ï××Öá¨µ××t× â§â½â¦", rowId:".donasi"},
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
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ð Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler
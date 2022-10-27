let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('*Sukses Menghidupkan ꯱ׁׅ֒ᨰׁׅɑׁׅ֮ժׁׅ݊꯱ׁׅ֒ - ϐׁׅ֒ᨵׁׅtׁ ✅*')
}
handler.command = /^(boton)$/i
handler.owner = true

handler.group = true
handler.admin = true

export default handler
let badwordRegex = /bajingan|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|(k|ng)e?nto?(t|d)|jembut|col(i|mek?)|dick|bitch/i // tambahin sendiri

export function before(m, { isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)
    console.log(isBadword)

    if (chat.antiBadword && isBadword) {
        user.warning += 1
        this.sendButton(m.chat, `*📮ᴛᴏxɪᴄ ᴛᴇʀᴅᴇᴛᴇᴋꜱɪ !*
あ Warning: ${user.warning} / 5 ┊

[❗] Jika warning mencapai 5 kamu akan *dibanned+kick*

Anda hanya bisa meminta Owner untuk membuka banned-nya !\n\n🌸 Bot By Syakata

“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`, wm, [['🎀CEK WARN', '.cekdosa'], ['🎐AUTHOR BOT', '.owner']], m)
        if (user.warning >= 5) {
            user.banned = true
            if (m.isGroup) {
                if (isBotAdmin) {
                	this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
                   //this.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
                }
            }
        }
    }
    return !0
}



// jasa buat by Fokusdotid (Fokus ID)
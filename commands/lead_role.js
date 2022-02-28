const Discord = require('discord.js')
module.exports = {
    name: "리드",
    execute(message){
        if(!message.mentions.members.first()) return message.channel.send("유저 ID를 입력해 주세요")
        const user = message.mentions.members.first()
        user.roles.add("685146719951781983")
    }
}
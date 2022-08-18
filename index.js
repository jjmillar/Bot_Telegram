// const { Telegraf } = require('telegraf');
const { Composer } = require('micro-bot');

// const bot = new Telegraf('5537954512:AAGpZub10GXYaESwkpv0h2stL5bWp3lQL5A');
const bot = new Composer();


bot.start((ctx) => {
        ctx.reply('Hola' + ' ' + ctx.from.first_name);     
});

bot.help((ctx) => {
        ctx.reply('Escribe /helio o /bot');    
});

bot.on('new_chat_members', (ctx) => {
        ctx.reply('Bienvenido ' + ctx.from.first_name + ' al grupo de telegram de Muramasa BJJ. Respeto ante todo y usemos el grupo para hacer crecer nuestro Jiujitsu\n' + 'Si necesitas mas información, solo escribe mi nombre y te ayudaré en lo que pueda.');
});

// bot.url((ctx) => {
//         ctx.reply('Buen video ' + ctx.from.first_name);
// });

bot.hears(['Gracias helio'], ctx => {
        ctx.reply('❤️');
});

bot.hears(['Despertaste helio', 'despertaste helio'], ctx => {
    ctx.reply('Ahora trabajo 24/7');
});

bot.hears(['Wena helio','Wena Helio', 'wena helio'], ctx => {
    ctx.reply('Wena wena' + ctx.from.first_name);
});

//MENU PRINCIPAL

bot.command(["helio","bot","Helio", "Oie Helio"], (ctx) => {
    ctx.deleteMessage()
    ctx.reply("Hola " + ctx.from.first_name + ' ' + '.Pincha los botones de abajo para ayudarte en lo que pueda.\n' + 'Para no spamear el chat, favor de hacer click en el boton SALIR cuando ya no me necesites mas.\n', {
        reply_markup: {
            inline_keyboard: [
                [ { text: "Horarios", callback_data: "btn-horarios" }, { text: "Eventos", callback_data: "btn-eventos" } ],
                [ { text: "Facebook", url: "https://www.facebook.com/muramasabjj" }, { text: "Instagram", url: "https://www.instagram.com/muramasa_bjj" } ],
                [ { text: "Playlist Spotify", url:"https://open.spotify.com/playlist/4PQ5KrbS64CaRjFXdzeJDP?si=b3af847cfe5143d0" } ],
                [ { text: "Salir", callback_data: "btn-salir" } ],
            ]
        }
    })
});

//BOTÓN HORARIOS

bot.action('btn-horarios', (ctx) => {
    ctx.deleteMessage() 
    ctx.reply('Lunes: 21:00-23:00 / Gi / Clase de Fundamentales del BJJ\n' + 'Martes: 20:00-22:00 / NoGi / Clase de BJJ y Grappling\n' + 'Jueves: 20:00-22:00 / Gi / Clase avanzada', {
        reply_markup: {
            inline_keyboard: [
                [ { text: "Atrás", callback_data: "btn-back-menu" } ],
                [ { text: "Salir", callback_data: "btn-salir" } ],
            ]
        }
    })
});

//BOTÓN EVENTOS

bot.action('btn-eventos', (ctx) => {
    ctx.deleteMessage() 
    ctx.reply('27 de Agosto torneo de Grappling en ED HQ, reglas ADCC. La info está fijada en el chat!!.\n', {
        reply_markup: {
            inline_keyboard: [
                [ { text: "Atrás", callback_data: "btn-back-menu" } ],
                [ { text: "Salir", callback_data: "btn-salir" } ],
            ]
        }
    })
});


//BOTÓN BACK A MENÚ

bot.action("btn-back-menu", (ctx) => {
    ctx.deleteMessage()
    ctx.reply("Hola " + ctx.from.first_name + ' ' + '.Pincha los botones de abajo para ayudarte en lo que pueda.\n' + 'Para no spamear el chat, favor de hacer click en el boton SALIR cuando ya no me necesites mas.\n', {
        reply_markup: {
            inline_keyboard: [
                [ { text: "Horarios", callback_data: "btn-horarios" }, { text: "Eventos", callback_data: "btn-eventos" } ],
                [ { text: "Facebook", url: "https://www.facebook.com/muramasabjj" }, { text: "Instagram", url: "https://www.instagram.com/muramasa_bjj" } ],
                [ { text: "Playlist Spotify", url:"https://open.spotify.com/playlist/4PQ5KrbS64CaRjFXdzeJDP?si=b3af847cfe5143d0" } ],
                [ { text: "Salir", callback_data: "btn-salir" } ],
            ]
        }
    })
});

//BOTÓN SALIR
bot.action('btn-salir', (ctx) => {
    ctx.deleteMessage()
    // ctx.reply('❤️')
    // setTimeout(() => {console.log("1 Segundo esperado");}, 2000);
});

bot.hears(['/helio', '/bot', 'helio', '/helio@HelioGBot', '/bot@HelioGBot'], ctx => {
    ctx.deleteMessage();
});

// bot.launch();
module.exports = bot;

//afternoon-oasis-13635
//https://afternoon-oasis-13635.herokuapp.com/
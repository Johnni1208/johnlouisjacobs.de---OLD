

module.exports = {
    

    modules: [
        '@nuxtjs/axios',
    ],

    generate:{
        subFolders: false,
        fallback: true
    },

    transition: {
        enterActiveClass: 'animated fadeInUp',
        leaveActiveClass: 'animated fadeOutDown',
    },

    loading: {
        color: '#5D52F8'
    },
    
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'author', name: 'author', content: 'John-Louis Jacobs' },
            { hid: 'description', name: 'description', content: 'Dies ist die Webseite von John-Louis Jacobs, einem jungen Programmierer.' },
            { hid: 'keywords', name: 'keywords', content: 'John-Louis Jacobs, johnlouis jacobs'},
            { name:"theme-color", content:"#5D52F8"},
            { name:"msapplication-navbutton-color", content:"#5D52F8"},
            { name:"apple-mobile-web-app-status-bar-style", content:"#5D52F8"}
        ],
        link: [
            { rel:'apple-touch-icon', sizes:'57x57', href:'/favicons/appl e-icon-57x57.png'},
            { rel:'apple-touch-icon', sizes:'60x60', href:'/favicons/apple-icon-60x60.png'},
            { rel:'apple-touch-icon', sizes:'72x72', href:'/favicons/apple-icon-72x72.png'},
            { rel:'apple-touch-icon', sizes:'76x76', href:'/favicons/apple-icon-76x76.png'},
            { rel:'apple-touch-icon', sizes:'114x114', href:'/favicons/apple-icon-114x114.png'},
            { rel:'apple-touch-icon', sizes:'120x120', href:'/favicons/apple-icon-120x120.png'},
            { rel:'apple-touch-icon', sizes:'144x144', href:'/favicons/apple-icon-144x144.png'},
            { rel:'apple-touch-icon', sizes:'152x152', href:'/favicons/apple-icon-152x152.png'},
            { rel:'apple-touch-icon', sizes:'180x180', href:'/favicons/apple-icon-180x180.png'},
            { rel:'icon', type:'image/png', sizes:'192x192', href:'/favicons/android-icon-192x192.png'},
            { rel:'icon', type:'image/png', sizes:'32x32', href:'/favicons/favicon-32x32.png'},
            { rel:'icon', type:'image/png', sizes:'96x96', href:'/favicons/favicon-96x96.png'},
            { rel:'icon', type:'image/png', sizes:'16x16', href:'/favicons/favicon-16x16.png'},
            { rel:'manifest', href:'/favicons/manifest.json'},
            
        ]
    },
    css: [
        
        'animate.css/animate.css',
        '@fortawesome/fontawesome-free/css/all.css',
        'bulma/css/bulma.min.css',
        '~/css/main.scss'
    ]
}
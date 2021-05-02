const products = [
    {
        "id": 1,
        "sku": "ebd5d1db-c135-45ea-88be-04b3337dce03",
        "name": "Macbook Pro 16 - 2020",
        "description": "Procesador de 6 núcleos a 2,6 GHz, 512 GB de espacio de almacenamiento AMD Radeon Pro 5300M",
        "details": "Procesador Intel Core i7 de 6 núcleos a 2,6 GHz de novena generación \n Turbo Boost de hasta 4,5 GHz \n AMD Radeon Pro 5300M con memoria gráfica GDDR6 de 4 GB \n Memoria DDR4 de 16 GB a 2666 MHz \n512 GB de almacenamiento SSD \nPantalla Retina de 16' con True Tone \nTeclado mágico \nTouch Bar y Touch ID \nCuatro puertos Thunderbolt 3",
        "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16touch-space-select-201911_GEO_EMEA_LANG_DE?wid=892&hei=820&&qlt=80&.v=1573151654525",
        "price": 2630.95,
        "available": 5
    },
    {
        "id": 2,
        "sku": "ebd5d1db-c135-45ea-88be-04b3337dce02",
        "name": "Iphone 12 pro Max",
        "description": "128GB - Color Plata",
        "details": "Pantalla Super Retina XDR de 6,7 pulgadas (17 cm de diagonal). \n Escudo de cerámica que puede soportar más que cualquier vidrio de teléfono inteligente. \n5G para descargas súper rápidas y transmisión de la más alta calidad. \n A14 Bionic, el chip más rápido en un teléfono inteligente \n Sistema de cámara profesional con lente ultra gran angular, gran angular y telefoto de 12 MP, rango de zoom óptico 5x, modo nocturno, fusión profunda, Smart HDR 3, Apple ProRAW, DolbyVisio 4K \n Escáner LiDAR para mejores experiencias de RA, retratos en modo nocturno. \n Cámara frontal TrueDepth de 12 MP con modo nocturno, grabación 4K Dolby Vision HDR \n Protección contra el agua IP68 líder en la industria \n Admite accesorios MagSafe para un acoplamiento sencillo y una carga inalámbrica más rápida.\n iOS con nuevos widgets en la pantalla de inicio, la nueva biblioteca multimedia de aplicaciones, clips de aplicaciones y más.",
        "image":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-silver-hero?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604021658000",
        "price": 1259,
        "available": 20
    },
    {
        "id": 3,
        "sku": "ebd5d1db-c135-45ea-88be-04b3337dce01",
        "name": "XIAOMI Mi Note 10 lite",
        "description": "XIAOMI Mi Note 10 lite 128 GB Glacier White Dual SIM",
        "details": "sistema operativo Android 10 + MIUI 11 \n procesador Qualcomm® Snapdragon ™ 730G \n Frecuencia de reloj del procesador hasta 2,2 GHz \nDiagonal de la pantalla 16,43 cm / 6,47 pulgadas \n Capacidad de almacenamiento 128 GB \n ranura para tarjetas de memoria No \n Tamaño de RAM 6 GB",
        "image":"https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/_/0/_0000_6941059641636_003.png",
        "price": 399,
        "available": 0
    },
    {
        "id": 4,
        "sku": "ebd5d1db-c135-45ea-88be-04b3337dce25",
        "name": "Samsung Curved Smart 4K UHD",
        "description": "55 pulgadas Class RU7300 Curved Smart 4K UHD TV (2019)",
        "details": "Procesador 4K UHD: potente procesador 4K UHD optimiza el rendimiento de tu televisor mejorando cada espectáculo, temporada y escena con calidad de imagen 4K. \n Detalles mejorados con HDR: profundidad de detalle 4K con alto rango dinámico que te permite ver tonos de color que revelan más detalles que el HDTV puede ofrecer.\n Purcolor revela espectros de color: millones de tonos de color revelan una imagen vibrante y realista que la HDTV convencional no puede crear.\n Características de Smart TV: guía universal simple en pantalla para encontrar contenido en streaming y programas de televisión en vivo, OneRemoteA para controlar todos los dispositivos compatibles, ampliabilidad de altavoces inteligentes con compatibilidad Alexa y Google Assistant, y más. \nDiseño de pantalla curvada: entra en la acción con el potenciador de profundidad automático en televisores curvados para una visualización inmersiva. Consumo máximo de energía: 160. \nTipo de fuente de alimentación: eléctrica con cable. \n Tecnología de conectividad: HDMI. \nComponentes incluidos: cable de alimentación.",
        "image":"https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/uhd-tv/ru7300/gallery/01_RU7300-L-Perspective-Black-031519.jpg?$product-details-jpg$",
        "price": 499,
        "available": 1
    },
    {
        "id": 5,
        "sku": "ebd5d1db-c135-45ea-88be-04b3337dce50",
        "name": "Teclado Gamer Roccat Vulcan 120 aimo",
        "description": "Roccat Vulcan 120 - mechanical gaming keyboard, AIMO LED single key illumination, Roccat titanium switches, aluminum surface, multimedia keys, palm rest, tactile switch, silver",
        "details": "Interruptores Roccat Titan - Innovadores interruptores mecánicos, táctiles, silenciosos y suaves, diseño único con teclas reducidas, recorrido de 1,8 mm y tiempo de rebote reducido \n Iluminación AIMO - Iluminación RGB de una sola tecla con efectos de iluminación LED configurables en 16,8 millones de colores y efecto AIMO ajustable (soporta la sincronización entre múltiples dispositivos AIMO) \n Diseño de alta calidad y duradero - Materiales robustos e interruptores resistentes al polvo, acabado de aluminio anodizado \n Anti-fantasmas avanzados con NRKO - rotación completa de n teclas, cada pulsación de tecla se registra \n Reposamanos removible - montaje magnético, diseño ergonómico para un largo tiempo de juego \n",
        "image":"https://images-na.ssl-images-amazon.com/images/I/81jQoWXIJkL._AC_SL1500_.jpg",
        "price": 159,
        "available": 14
    }
]

export default products;

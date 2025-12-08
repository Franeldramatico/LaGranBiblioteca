// Función helper para generar HTML de sobre
function createEnvelopeHTML(id, imageSrc, title, description, delay = 0) {
    return `
        <div class="relative" data-aos="zoom-in" ${delay ? `data-aos-delay="${delay}"` : ''}>
            <div id="envelope-${id}" class="envelope-container cursor-pointer" onclick="openEnvelope(${id})">
                <!-- Sobre cerrado -->
                <div class="envelope-closed">
                    <div class="envelope-flap"></div>
                    <div class="envelope-body"></div>
                    <div class="envelope-seal">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gothic-red-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <p class="text-center mt-4 font-cinzel text-gothic-text">Click para revelar</p>
                </div>
                <!-- Contenido revelado -->
                <div class="envelope-content hidden">
                    <div class="bg-gothic-gray border-2 border-gothic-red rounded-sm shadow-2xl overflow-hidden">
                        <div class="h-64 overflow-hidden">
                            <img src="${imageSrc}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="${title}">
                        </div>
                        <div class="p-6 text-center space-y-3">
                            <p class="text-gothic-muted font-crimson text-sm italic">${title}</p>
                            <div class="flex gap-3 justify-center flex-wrap">
                                <button onclick="showContext(event, '${title}', '${description}')" class="px-4 py-2 border border-gothic-purple text-gothic-text text-sm font-cinzel hover:bg-gothic-purple hover:text-white transition-colors rounded-sm">
                                    Contexto
                                </button>
                                <a href="${imageSrc}" download class="inline-block px-4 py-2 border border-gothic-red text-gothic-text text-sm font-cinzel hover:bg-gothic-red hover:text-white transition-colors rounded-sm">
                                    Descargar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

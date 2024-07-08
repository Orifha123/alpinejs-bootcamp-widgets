
function greet(neighbourName){
    return {
        neighbourName: neighbourName,
        currentLanguage: 'en',
        translations: {
            en: 'Hello',
            fr: 'Bonjour',
            es: 'Hola'
        },
        get greeting() {
            return `${this.translations[this.currentLanguage]}, ${this.neighbourName}`;
        }
    };
}

 
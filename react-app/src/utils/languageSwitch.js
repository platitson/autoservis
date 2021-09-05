import translations from "./translations";

export function Translation() {
    if (!localStorage.getItem('language')) {
        localStorage.setItem('language', 'EN');
    };
};

Translation.prototype.translate = function (key) {
    const language = localStorage.getItem('language');
    return translations[language.toLowerCase()][key];
};

Translation.prototype.init = function () {
    Array.from(document.querySelectorAll("[data-key]")).forEach(element => {
        element.innerHTML = this.translate(element.dataset['key']);
    })
};

Translation.prototype.initPassTranslationEventListener = function () {
    window.addEventListener("passTranslation", ({ detail }) => {
        localStorage.setItem('language', detail);
        this.init();
    })
}
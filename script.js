// Yıl otomatik güncelleme
document.getElementById('yil').textContent = new Date().getFullYear();

// Dil değiştirme sistemi
const langSwitch = document.querySelector('.lang-switch');
let currentLang = 'tr';

function switchLanguage() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    langSwitch.textContent = currentLang === 'tr' ? 'EN' : 'TR';
    
    // Tüm çevirilebilir elementleri seç
    const elements = document.querySelectorAll('[data-tr][data-en]');
    
    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLang}`);
    });

    // Başlıkları güncelle
    if (currentLang === 'en') {
        document.title = "Necip Ali TUTMAZ — Personal Website";
        document.querySelector('meta[name="description"]').content = 
            "Necip Ali's personal website: About, projects, posts, certificates and contact.";
    } else {
        document.title = "Necip Ali TUTMAZ — Kişisel Web Sitesi";
        document.querySelector('meta[name="description"]').content = 
            "Necip Ali'nin kişisel web sitesi: Hakkımda, projeler, yazılar, sertifikalar ve iletişim.";
    }
}

// Kart hover efektleri
for (const el of document.querySelectorAll('.card')){
    el.addEventListener('mousemove', (e)=>{
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        el.style.background = `radial-gradient(300px 200px at ${x}px ${y}px, rgba(122,162,247,.08), rgba(255,255,255,.01))`;
    });
    el.addEventListener('mouseleave', ()=>{
        el.style.background = 'linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.01))';
    });
}

// Dil değiştirme butonuna tıklama 
if (langSwitch) {
    langSwitch.addEventListener('click', switchLanguage);

}

// Sertifikalar için göster/gizle fonksiyonu

const showMoreCerts = document.getElementById('showMoreCerts');
const hiddenCerts = document.querySelectorAll('.hidden-cert');
let isExpanded = false;

showMoreCerts.addEventListener('click', () => {
    hiddenCerts.forEach(cert => {
        cert.style.display = isExpanded ? 'none' : 'block';
    });
    
    showMoreCerts.textContent = isExpanded ? 'Tüm Sertifikalar →' : '← Daha Az Göster';
    isExpanded = !isExpanded;
});
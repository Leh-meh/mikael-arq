document.addEventListener("DOMContentLoaded", function () {
  // ====== Textarea e WhatsApp ======
  const textarea = document.getElementById('projectIdea');
  const charCount = document.getElementById('charCount');
  const maxChars = 500;
  const button = document.getElementById('sendWhatsappBtn');
  const phoneNumber = '5511968412005';

  function capitalizeSentencesExceptAllCaps(text) {
    const sentences = text.match(/[^.!?]+[.!?]?/g) || [];
    return sentences.map(sentence => {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
    }).join(' ');
  }

  if (textarea && charCount) {
    textarea.addEventListener('input', () => {
      const remaining = maxChars - textarea.value.length;
      charCount.textContent = `${remaining} caracteres restantes`;
    });
  }

  if (button) {
    button.addEventListener('click', () => {
      let message = textarea.value.trim();
      if (message === '') {
        alert("Por favor, escreva sua ideia de projeto antes de enviar.");
        return;
      }
      if (message.length < 50) {
        alert("Por favor, escreva pelo menos 50 caracteres sobre sua ideia de projeto.");
        return;
      }
      message = capitalizeSentencesExceptAllCaps(message);
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, '_blank');
    });
  }

  // ====== Fade-in ======
  window.addEventListener("load", () => {
    document.body.classList.add("fade-in");
  });

  // ====== Scrollspy ======
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
        link.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      } else {
        link.classList.remove("active");
      }
    });
  });

  // ====== Atualiza anos de experiência automaticamente ======
  const anoInicio = 2022;
  const anoAtual = new Date().getFullYear();
  const anosExpElem = document.getElementById("anos-experiencia");
  if (anosExpElem) anosExpElem.textContent = anoAtual - anoInicio;

  // ====== Toggle Habilidades ======
  const toggleSkillsBtn = document.getElementById('toggleSkills');
  const extraSkills = document.querySelectorAll('.skill-item.extra');
  if (toggleSkillsBtn) {
    toggleSkillsBtn.addEventListener('click', () => {
      extraSkills.forEach(skill => {
        skill.style.display = skill.style.display === 'block' ? 'none' : 'block';
      });
      toggleSkillsBtn.textContent = toggleSkillsBtn.textContent === 'Ler mais' ? 'Ler menos' : 'Ler mais';
    });
  }

  // ====== Toggle Educação ======
  const toggleEduBtn = document.getElementById('btn-ver-mais');
  const extraEdu = document.querySelectorAll('.education-box.extra-card');
  if (toggleEduBtn) {
    toggleEduBtn.addEventListener('click', () => {
      extraEdu.forEach(card => {
        card.style.display = card.style.display === 'block' ? 'none' : 'block';
      });
      toggleEduBtn.textContent = toggleEduBtn.textContent === 'Ver mais' ? 'Ver menos' : 'Ver mais';
    });
  }
});

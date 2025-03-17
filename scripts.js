const events = [
    {
        id: 1,
        title: "Semana do Software 2025",
        date: "12/05",
        time: "10:00",
        location: "Salão de Eventos",
        type: "tech",
        description:
            "Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400",
    },
    {
        id: 2,
        title: "Workshop de IoT",
        date: "12/01",
        time: "08:00",
        location: "Laboratório CS&I",
        type: "tech",
        description:
            "Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400",
    },
    {
        id: 3,
        title: "Festa dos Alunos 2025",
        date: "18/05",
        time: "19:00",
        location: "Área Esportiva do Inatel",
        type: "cultural",
        description:
            "Venha comemorar a melhor Festa dos Alunos de todos os tempos!",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400",
    },
    {
        id: 4,
        title: "Feira de Oportunidades",
        date: "04/05",
        time: "10:00",
        location: "Salão de Eventos",
        type: "academic",
        description:
            "Venha conhecer empresas e projetos com destaque na área da engenharia.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400",
    },
];

function fillEvents(events) {
    const carousel = document.querySelector(".carousel");

    events.forEach((ev) => {
        const eventContainer = document.createElement("div");
        eventContainer.classList.add("card");

        eventContainer.innerHTML = `
            <img src="${ev.image}" alt="${ev.title}">
            <div class="info">
                <h3>${ev.title}</h3>
                <p>${ev.description}</p>
                <p>
                    <i class="bi bi-calendar-event"></i> ${ev.date} às ${ev.time} 
                    <i class="bi bi-geo-alt-fill"></i> ${ev.location}
                </p>
            </div>
        `;

        carousel.appendChild(eventContainer);
    });
}

fillEvents(events);

let currentIndex = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < events.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

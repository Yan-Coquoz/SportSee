function hourOfTheDay() {
    return new Date().getHours();
}

/**
 * Selon le moment de la journée, retourne bonjour ou bonsoir
 * @returns {string}
 */
export function renderHello() {
    const hour = hourOfTheDay();
    if (hour >= 17 || hour < 5) {
        return "Bonsoir";
    }
    return "Bonjour";
}

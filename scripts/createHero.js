import { createElement } from "./helper.js"

export const createHero = () => {
    const section = createElement('section', {
        className: 'hero'
    });
    const container = createElement('div', {
        className: 'container hero__container'
    });

    section.append(container);

    const title = createElement('h1', {
        className: 'hero__title',
        textContent: 'WishList'
    });

    const descr = createElement('p', {
        className: 'hero__descr',
        innerHTML: 'Никогда не&nbsp;поздно поставить новую цель или обрести новую мечту...',
    });

    const listSteps = createElement('ol', {
        className: 'hero__steps steps',
    });

    [
        'создайте список желаний',
        'Поделитесь ссылкой с&nbsp; друзьями',
        'Получите желанный подарок',
    ].forEach(text => {
        const step = createElement('li', {
            className: 'steps__item',
            innerHTML: text,
        });

        listSteps.append(step)
    })

    container.append(title, descr, listSteps);

    return section;
}
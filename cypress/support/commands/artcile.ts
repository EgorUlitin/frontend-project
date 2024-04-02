import { Article } from '../../../src/entities/Article';

const defaultarticle = {
    title: 'Testing article',
    subtitle: 'testing',
    img: 'https://www.mirea.ru/upload/iblock/7cf/vvp_rf2018_1.jpg',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['ECONOMICS'],
    blocks: [],
};

export const createArtcile = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'zxc' },
            body: article ?? defaultarticle,
        })
        .then((res) => res.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'zxc' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArtcile(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}

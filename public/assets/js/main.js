'use strict';

console.log('>> Ready :)');

// html-js variables
const filterChips = document.querySelector('.js_filter_chips');
const filterBtn = document.querySelector('.js_filter_btn');
const cardsCompanies = document.querySelector('.js_cards_companies');
const cardWebsite = document.querySelector('.js_card_website')

// global variables
let dataCompanies = [];
// collect server data
fetch(
  `https://challenges-asset-files.s3.us-east-2.amazonaws.com/jobMadrid/companies.json`
)
  .then((response) => response.json())
  .then((data) => {

    dataCompanies = data.map((aData) => {
      return {
        id: aData.id,
        name: aData.name === null ? 'unknown' : aData.name,
        founded: aData.founded === null ? 'unknown' : aData.founded,
        industry: aData.industry === null ? aData.id : aData.industry,
        size: aData.size === null ? 'unknown' : aData.size,
        website: aData.website === null ? 'unknown' : aData.website,
      };
    });

    renderCards()

    return dataCompanies;
  })

  .catch((error) => {
    console.log(error);
  });

// render cards companies

function renderCards() {
  for (const dataCompanie of dataCompanies) {

    let id = dataCompanie.id;
    let name = dataCompanie.name;
    let founded = dataCompanie.founded;
    let industry = dataCompanie.industry;
    let size = dataCompanie.size;
    let website = dataCompanie.website;

    const newArticleCard = document.createElement('article');
    const newDivTitle = document.createElement('div');
    const newH2Name = document.createElement('h2');
    const newParagraphYear = document.createElement('p');
    const newDivTags = document.createElement('div');
    const newDlIndustry = document.createElement('dl');
    const newDlSize = document.createElement('dl');
    const newDivLink = document.createElement('div');
    const newAWebsite = document.createElement('a');

    newArticleCard.classList.add('card');
    newArticleCard.id = `${id}`;
    newDivTitle.classList.add('card__title');
    newH2Name.classList.add('card__name');
    newParagraphYear.classList.add('card__year');
    newDivTags.classList.add('card__tags');
    newDlIndustry.classList.add('card__tags--industry');
    newDlSize.classList.add('card__tags--size');
    newDlIndustry.classList.add('tag');
    newDlSize.classList.add('tag');
    newDivLink.classList.add('card__container-link');
    newAWebsite.classList.add('card__link');
    newAWebsite.target = '_blank';


    const newContentName = document.createTextNode(`${name}`);
    const newContentFounded = document.createTextNode(`${founded}`);
    const newContentIndustry = document.createTextNode(`${industry}`);
    const newContentSize = document.createTextNode(`${size}`);
    const newContentWebsite = document.createTextNode('Website')
    newAWebsite.href = `http://${website}`;

    newH2Name.appendChild(newContentName);
    newParagraphYear.appendChild(newContentFounded);
    newDlIndustry.appendChild(newContentIndustry);
    newDlSize.appendChild(newContentSize);
    newAWebsite.appendChild(newContentWebsite)

    newArticleCard.appendChild(newDivTitle);
    newDivTitle.appendChild(newH2Name);
    newDivTitle.appendChild(newParagraphYear);
    newArticleCard.appendChild(newDivTags);
    newDivTags.appendChild(newDlIndustry);
    newDivTags.appendChild(newDlSize);
    newArticleCard.appendChild(newDivLink);
    newDivLink.appendChild(newAWebsite);

    cardsCompanies.appendChild(newArticleCard)
  }
}

//# sourceMappingURL=main.js.map
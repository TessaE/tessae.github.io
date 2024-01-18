// TODO: do something with prefersReducedMotion? of preferscolorscheme?
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const THEME_STORAGE_KEY = 'user-theme';
const THEMES = {
  spring: 'spring',
  summer: 'summer',
  autumn: 'autumn',
  winter: 'winter',
};

let themeOptions = [];

function getCurrentSeason(date) {
  // Check if date is valid
  if (!(date instanceof Date) || isNaN(date)) throw new Error('Invalid date!');

  // Get month and day from date
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Determine season
  let season;
  if ((month === 12 && day >= 21) || month === 1 || month === 2 || (month === 3 && day < 21)) {
    season = 'winter';
  } else if ((month === 3 && day >= 21) || month === 4 || month === 5 || (month === 6 && day < 21)) {
    season = 'spring';
  } else if ((month === 6 && day >= 21) || month === 7 || month === 8 || (month === 9 && day < 21)) {
    season = 'summer';
  } else if ((month === 9 && day >= 21) || month === 10 || month === 11 || (month === 12 && day < 21)) {
    season = 'autumn';
  }

  return season;
}

const defaultSeason = getCurrentSeason(new Date())

const search = new URLSearchParams(window.location.search);
let theme = search.get('theme') || sessionStorage.getItem(THEME_STORAGE_KEY) || defaultSeason;
changeTheme(theme);

function changeTheme(newTheme) {
  if (!Object.keys(THEMES).includes(newTheme)) newTheme = defaultSeason;

  sessionStorage.setItem(THEME_STORAGE_KEY, newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);

  if (themeOptions.length > 0) themeOptions.find((el) => el.id === newTheme).checked = true;

  theme = newTheme;
}

window.addEventListener('load', () => {
  themeOptions = Array.from(document.getElementsByClassName('theme-option'));

  themeOptions.forEach((el) =>
    el.addEventListener('change', function (e) {
      if (e.target.checked) {
        const newTheme = e.target.value;
        changeTheme(newTheme);
      }
    })
  );

  changeTheme(theme);
});
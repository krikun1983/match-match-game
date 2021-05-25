import './header-menu.scss';
import { BaseComponent } from '../../base-components';

export class HeaderMenu extends BaseComponent {
  constructor() {
    super('ul', ['menu']);
    this.element.innerHTML = `
      <li class="menu__item"><a href="#/about" class="active" id="about">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="white"/>
        <path d="M8.88379 12.3965C8.89551 11.6992 8.97461 11.1484 9.12109 10.7441C9.26758 10.3398 9.56641 9.8916 10.0176 9.39941L11.1689 8.21289C11.6611 7.65625 11.9072 7.05859 11.9072 6.41992C11.9072 5.80469 11.7461 5.32422 11.4238 4.97852C11.1016 4.62695 10.6328 4.45117 10.0176 4.45117C9.41992 4.45117 8.93945 4.60938 8.57617 4.92578C8.21289 5.24219 8.03125 5.66699 8.03125 6.2002H6.40527C6.41699 5.25098 6.75391 4.48633 7.41602 3.90625C8.08398 3.32031 8.95117 3.02734 10.0176 3.02734C11.125 3.02734 11.9863 3.32617 12.6016 3.92383C13.2227 4.51562 13.5332 5.33008 13.5332 6.36719C13.5332 7.39258 13.0586 8.40332 12.1094 9.39941L11.1514 10.3486C10.7236 10.8232 10.5098 11.5059 10.5098 12.3965H8.88379ZM8.81348 15.1826C8.81348 14.9189 8.89258 14.6992 9.05078 14.5234C9.21484 14.3418 9.45508 14.251 9.77148 14.251C10.0879 14.251 10.3281 14.3418 10.4922 14.5234C10.6562 14.6992 10.7383 14.9189 10.7383 15.1826C10.7383 15.4463 10.6562 15.666 10.4922 15.8418C10.3281 16.0117 10.0879 16.0967 9.77148 16.0967C9.45508 16.0967 9.21484 16.0117 9.05078 15.8418C8.89258 15.666 8.81348 15.4463 8.81348 15.1826Z" fill="#2196F3"/>
        </svg>About Game</a>
      </li>
      <li class="menu__item"><a href="#/score" id="score">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM14.23 16L10 13.45L5.77 16L6.89 11.19L3.16 7.96L8.08 7.54L10 3L11.92 7.53L16.84 7.95L13.11 11.18L14.23 16Z" fill="white"/>
        </svg>Best Score</a>
      </li>
      <li class="menu__item"><a href="#/settings" id="settings">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM14.23 16L10 13.45L5.77 16L6.89 11.19L3.16 7.96L8.08 7.54L10 3L11.92 7.53L16.84 7.95L13.11 11.18L14.23 16Z" fill="white" fill-opacity="0.7"/>
        <circle cx="10" cy="10" r="10" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7487 10.624C14.7727 10.424 14.7887 10.216 14.7887 10C14.7887 9.78401 14.7727 9.57601 14.7407 9.37601L16.0927 8.32001C16.2127 8.22401 16.2447 8.04801 16.1727 7.91201L14.8927 5.69601C14.8127 5.55201 14.6447 5.50401 14.5007 5.55201L12.9087 6.19201C12.5727 5.93601 12.2207 5.72801 11.8287 5.56801L11.5887 3.87201C11.5647 3.71201 11.4287 3.60001 11.2687 3.60001H8.70868C8.54868 3.60001 8.42068 3.71201 8.39668 3.87201L8.15668 5.56801C7.76468 5.72801 7.40468 5.94401 7.07668 6.19201L5.48468 5.55201C5.34068 5.49601 5.17268 5.55201 5.09268 5.69601L3.81268 7.91201C3.73268 8.05601 3.76468 8.22401 3.89268 8.32001L5.24468 9.37601C5.21268 9.57601 5.18868 9.79201 5.18868 10C5.18868 10.208 5.20468 10.424 5.23668 10.624L3.88468 11.68C3.76468 11.776 3.73268 11.952 3.80468 12.088L5.08468 14.304C5.16468 14.448 5.33268 14.496 5.47668 14.448L7.06868 13.808C7.40468 14.064 7.75668 14.272 8.14868 14.432L8.38868 16.128C8.42068 16.288 8.54868 16.4 8.70868 16.4H11.2687C11.4287 16.4 11.5647 16.288 11.5807 16.128L11.8207 14.432C12.2127 14.272 12.5727 14.056 12.9007 13.808L14.4927 14.448C14.6367 14.504 14.8047 14.448 14.8847 14.304L16.1647 12.088C16.2447 11.944 16.2127 11.776 16.0847 11.68L14.7487 10.624ZM9.98867 12.4C8.66867 12.4 7.58867 11.32 7.58867 10C7.58867 8.68001 8.66867 7.60001 9.98867 7.60001C11.3087 7.60001 12.3887 8.68001 12.3887 10C12.3887 11.32 11.3087 12.4 9.98867 12.4Z" fill="#2F80ED"/>
      </svg>Game Settings</a></li>
  `;
  }
}

var Style;

window.addEventListener('load', function () {
  setTimeout(() => {
    const SideBar = document.querySelector('.main-menu')

    SideBar.insertAdjacentHTML('beforeend', `<li ng-repeat="item in menuitems" ng-class="{
        'active': item.isActive,
        'children': item.children, 
        'expanded': item.expanded,
        'highlight-menu': item.visibleState === 1
      }" ng-hide="item.visibleState === 2" ng-attr-id="{{item.id}}" ng-mouseover="onMouseOver($event)" ng-mouseleave="onMouseLeave()" class="ng-scope">
      <a id="menu-test">
        <svg class="far fa-question-circle" ng-if="item.icon" ng-class="item.icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" fill="#FFFFFF">
            <path d="M17.78125 0.1875L16.28125 0.8125L16.6875 2.6875C16.3125 2.960938 16.003906 3.304688 15.71875 3.6875L13.8125 3.25L13.1875 4.75L14.8125 5.78125C14.738281 6.25 14.746094 6.722656 14.8125 7.1875L13.1875 8.21875L13.78125 9.71875L15.6875 9.3125C15.960938 9.683594 16.304688 9.996094 16.6875 10.28125L16.21875 12.1875L17.71875 12.8125L18.78125 11.15625C19.25 11.226563 19.730469 11.226563 20.1875 11.15625L21.21875 12.8125L22.71875 12.21875L22.28125 10.3125C22.652344 10.039063 22.96875 9.691406 23.25 9.3125L25.1875 9.75L25.8125 8.25L24.15625 7.21875C24.226563 6.75 24.222656 6.300781 24.15625 5.84375L25.8125 4.78125L25.1875 3.28125L23.28125 3.71875C23.011719 3.34375 22.691406 3.003906 22.3125 2.71875L22.75 0.84375L21.25 0.21875L20.21875 1.84375C19.75 1.769531 19.273438 1.777344 18.8125 1.84375 Z M 19.5 4.25C19.792969 4.25 20.085938 4.316406 20.375 4.4375C21.527344 4.921875 22.074219 6.222656 21.59375 7.375C21.113281 8.527344 19.777344 9.074219 18.625 8.59375C17.472656 8.113281 16.925781 6.78125 17.40625 5.625C17.769531 4.761719 18.617188 4.253906 19.5 4.25 Z M 7.375 9.0625L6.96875 11.5625C6.363281 11.710938 5.800781 11.941406 5.28125 12.25L3.21875 10.78125L1.71875 12.28125L3.15625 14.34375C2.84375 14.863281 2.621094 15.457031 2.46875 16.0625L-0.03125 16.46875L-0.03125 18.59375L2.46875 19.03125C2.617188 19.636719 2.839844 20.199219 3.15625 20.71875L1.6875 22.78125L3.1875 24.28125L5.28125 22.84375C5.800781 23.15625 6.367188 23.382813 6.96875 23.53125L7.375 26.03125L9.5 26.03125L9.9375 23.53125C10.539063 23.378906 11.109375 23.125 11.625 22.8125L13.71875 24.28125L15.21875 22.78125L13.71875 20.71875C14.027344 20.203125 14.257813 19.632813 14.40625 19.03125L16.9375 18.59375L16.9375 16.46875L14.40625 16.0625C14.257813 15.464844 14.027344 14.890625 13.71875 14.375L15.1875 12.28125L13.6875 10.78125L11.625 12.28125C11.105469 11.96875 10.539063 11.710938 9.9375 11.5625L9.5 9.0625 Z M 8.46875 14.59375C10.105469 14.59375 11.40625 15.894531 11.40625 17.53125C11.40625 19.167969 10.105469 20.5 8.46875 20.5C6.832031 20.5 5.5 19.167969 5.5 17.53125C5.5 15.894531 6.832031 14.59375 8.46875 14.59375Z" fill="#FFFFFF" />
        </svg>
        <span ng-bind="item.title" class="caption ng-binding ng-scope" ng-if="item.title !== 'OPP' &amp;&amp; item.title !== 'ELO'">Magister++</span>
      </a>
      <!-- ngIf: item.children -->
    </li>`);

    const Elem = document.getElementById('menu-test')

    Elem.addEventListener('click', event => {
        console.log("Magister++ V.1")

        if(!Style) {
          let link = document.createElement('link');
          link.href = ExtensionPath + 'Styles/Viper/Main.css';
          link.rel = 'stylesheet';
  
          link.onerror = (err) => console.warn(err);
          Style = link
  
          document.head.append(link);
        } else {
          Style.remove()
          Style = null;
        }

        // document.body.insertAdjacentHTML('beforeend', `
        // <div class="MagPPSettings">hello world!</div>
        // `)
    });
  }, 2000);
})
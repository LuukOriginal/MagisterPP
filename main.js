var Style;

setTimeout(() => {
    const SideBar = document.querySelector('.main-menu')

    SideBar.insertAdjacentHTML('beforeend', `<li ng-repeat="item in menuitems" ng-class="{
        'active': item.isActive,
        'children': item.children, 
        'expanded': item.expanded,
        'highlight-menu': item.visibleState === 1
      }" ng-hide="item.visibleState === 2" ng-attr-id="{{item.id}}" ng-mouseover="onMouseOver($event)" ng-mouseleave="onMouseLeave()" class="ng-scope">
      <a id="menu-test">
        <i class="far fa-question-circle" ng-if="item.icon" ng-class="item.icon"></i>
        <span ng-bind="item.title" class="caption ng-binding ng-scope" ng-if="item.title !== 'OPP' &amp;&amp; item.title !== 'ELO'">Magister++</span>
      </a>
      <!-- ngIf: item.children -->
    </li>`);

    const Elem = document.getElementById('menu-test')
    Elem.addEventListener('click', event => {
        console.log("Magister++ V.1")

        if(!Style) {
          let link = document.createElement('link');
          link.href = chrome.extension.getURL('Styles/Viper/Main.css');
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

const addStyle = (() => {
  const style = document.createElement('style');
  document.head.append(style);
  return (styleString) => style.textContent = styleString;
})();